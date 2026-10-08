/**
 * Generates the one-page A4 filmmaker profile PDF from #/profile.
 *
 *   npm run profile:pdf
 *
 * Builds the site, serves dist/ with `vite preview`, prints the page with a locally
 * installed Chrome/Chromium (no extra npm dependencies), and writes the PDF to
 *   public/profile/Garikapati-Siva-Ramakrishna-Filmmaker-Profile.pdf  (committed, deployed)
 *   dist/profile/…                                                    (current build)
 *
 * Set CHROME=/path/to/chrome if Chrome is not found automatically.
 */
import { spawn, execSync } from 'node:child_process'
import { mkdirSync, writeFileSync, mkdtempSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { preview } from 'vite'

const FILE = 'Garikapati-Siva-Ramakrishna-Filmmaker-Profile.pdf'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function findChrome() {
  if (process.env.CHROME) return process.env.CHROME
  const candidates = [
    'google-chrome',
    'google-chrome-stable',
    'chromium',
    'chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ]
  for (const c of candidates) {
    if (c.includes('/') || c.includes('\\')) {
      if (existsSync(c)) return c
      continue
    }
    try {
      return execSync(`command -v ${c}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
    } catch {}
  }
  throw new Error('Chrome/Chromium not found. Set CHROME=/path/to/chrome')
}

const server = await preview({ preview: { port: 4317, strictPort: false, open: false }, logLevel: 'silent' })
const base = server.resolvedUrls.local[0]
const profileDir = mkdtempSync(join(tmpdir(), 'profile-pdf-'))
const port = 9400 + Math.floor(Math.random() * 400)
const chrome = spawn(findChrome(), ['--headless=new', '--disable-gpu', `--remote-debugging-port=${port}`, `--user-data-dir=${profileDir}`, 'about:blank'], {
  stdio: 'ignore',
})

try {
  let target
  for (let i = 0; i < 75 && !target; i++) {
    await sleep(200)
    try {
      target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page')
    } catch {}
  }
  if (!target) throw new Error('Could not connect to Chrome')

  const ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((r) => ws.addEventListener('open', r))
  let id = 0
  const pending = new Map()
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id)
      pending.delete(m.id)
      if (m.error) reject(new Error(m.error.message))
      else resolve(m.result)
    }
  })
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const i = ++id
      pending.set(i, { resolve, reject })
      ws.send(JSON.stringify({ id: i, method, params }))
    })
  const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result.value

  await send('Page.enable')
  await send('Page.navigate', { url: `${base}#/profile` })
  await sleep(1000)
  // Wait for web fonts and every image on the sheet to be fully decoded.
  const ready = await evaluate(`(async () => {
    await document.fonts.ready
    const imgs = [...document.querySelectorAll('.sheet img')]
    await Promise.all(imgs.map((i) => (i.complete ? i.decode().catch(() => {}) : new Promise((r) => { i.onload = r; i.onerror = r }))))
    return { fonts: document.fonts.status, images: imgs.length, broken: imgs.filter((i) => !i.naturalWidth).map((i) => i.src) }
  })()`)
  if (ready.broken.length) throw new Error(`Broken images on the sheet: ${ready.broken.join(', ')}`)
  await sleep(500)

  const { data } = await send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    pageRanges: '1',
  })
  const pdf = Buffer.from(data, 'base64')

  for (const dir of ['public/profile', 'dist/profile']) {
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, FILE), pdf)
  }
  console.log(`✓ ${FILE} — ${(pdf.length / 1024).toFixed(0)} KB · fonts ${ready.fonts} · ${ready.images} images`)
  ws.close()
} finally {
  chrome.kill()
  await new Promise((r) => (chrome.exitCode !== null ? r() : chrome.once('exit', r)))
  await server.close()
  try {
    rmSync(profileDir, { recursive: true, force: true })
  } catch {}
}
