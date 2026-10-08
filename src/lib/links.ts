import { contact, person } from '../content/site'

/** Pre-written email so a producer or collaborator can reach out in one tap. */
export function mailto(subject: string, body = '') {
  const q = new URLSearchParams({ subject, body }).toString().replace(/\+/g, '%20')
  return `mailto:${contact.email}?${q}`
}

export function whatsapp(text = '') {
  if (!contact.whatsapp) return ''
  return `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}

const sign = '\n\nName:\nCompany / role:\nPhone:\n'

export const asks = {
  project: mailto(`Project discussion — ${person.fullName}`, `Hello Siva,\n\nI came across your portfolio and would like to discuss a project.${sign}`),
  general: mailto('Hello from your portfolio', 'Hello Siva,\n\n'),
  pentayyaNarration: mailto('Narration request — PENTAYYA', `Hello Siva,\n\nI would like to hear a narration of PENTAYYA.${sign}Preferred date / place (or call):\n`),
  pentayyaScreenplay: mailto('Screenplay request — PENTAYYA', `Hello Siva,\n\nI would like to read the screenplay of PENTAYYA.${sign}`),
  myself: mailto('MYSELF – Brain vs Heart', `Hello Siva,\n\nI am writing about MYSELF – Brain vs Heart.${sign}`),
}

/** Turns a YouTube / Vimeo link into an embeddable URL. Returns '' if not recognised. */
export function embedUrl(url: string) {
  if (!url) return ''
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/)
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0`
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return ''
}
