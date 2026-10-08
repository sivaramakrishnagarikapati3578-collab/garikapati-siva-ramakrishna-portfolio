# Garikapati Siva Ramakrishna — Writer | Director

Portfolio website. React + TypeScript + Vite + Tailwind CSS. No other dependencies.

## Run it

```bash
npm install
npm run dev        # local preview → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## Edit content — one file

**All text, links, photos and project materials live in `src/content/site.ts`.**

| To change… | Edit in `site.ts` |
|---|---|
| Email, phone, WhatsApp, Instagram, YouTube | `contact` |
| Hero / About / Vision / Contact photos | `photos` (`position` controls the crop) |
| Bio, filmmaker statement, job & education | `about`, `vision`, `filmmaker` |
| Filmography list | `filmography` |
| TFI watch link | `tfi.watchUrl` (and optional `tfi.image` thumbnail) |
| MYSELF trailer / full film | `myself.trailerUrl`, `myself.filmUrl` (YouTube or Vimeo links embed automatically) |
| MYSELF poster, director's note | `myself.materials` |
| Pentayya poster, pitch deck, synopsis, statement, concept art, screenplay | `pentayya.materials` |
| Pentayya character notes | `pentayya.characters[n].note` |

Project materials left empty show as a quiet "in preparation" frame. Fill them like this:

```ts
{ label: 'Poster', src: '/images/pentayya/poster.webp', note: '', shape: 'poster' }   // image
{ label: 'Pitch deck', href: '/pentayya-pitch-deck.pdf', note: '' }                    // PDF / link
{ label: 'Synopsis', text: 'First paragraph…\n\nSecond paragraph…', note: '' }         // text
```

Put image and PDF files in `public/` (folders `images/pentayya/`, `images/tfi/` exist) and write the path starting with `/`.
Images: `.webp` or `.jpg`, about 1600px on the long side.

## Pages

- `/#/` — home (sections: About, Work, Pentayya, Myself, Filmography, Writing, Vision, Filmmaking, Filmmaker, Contact)
- `/#/work/pentayya` — Pentayya project page
- `/#/work/myself` — MYSELF – Brain vs Heart project page

These links can be shared directly (e.g. send a producer straight to the Pentayya page).

## Before going live

- In `index.html`, replace `https://YOUR-DOMAIN.com` (4 places) so WhatsApp / Instagram link previews show the title and photo (`public/og/og-image.jpg`).
- Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Structure

```
src/
  content/site.ts   all content
  lib/              router (hash routes), links (mailto / WhatsApp / video embeds)
  hooks/            useReveal (scroll reveals), useParallax
  components/       Nav, Footer, Picture, Material, VideoFrame, ProjectNav, ui
  sections/         home page sections
  pages/            Home, PentayyaPage, MyselfPage
```
