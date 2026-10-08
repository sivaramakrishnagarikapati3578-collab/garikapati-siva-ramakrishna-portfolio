/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL WEBSITE CONTENT LIVES IN THIS FILE.
 *
 *  • Text, links, contact details, photos and project materials are all here.
 *  • Images go in /public/images/… and are written starting with "/",
 *    e.g.  src: '/images/pentayya/poster.webp'
 *  • Any project material left empty ('') is shown as an elegant
 *    "in preparation" frame — nothing fake is ever displayed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Photo = {
  /** Large version (used on desktop). */
  src: string
  /** Optional ~800px version (used on phones). */
  srcSmall?: string
  alt: string
  /** CSS object-position — controls the crop, e.g. '60% 30%'. */
  position?: string
  /** Optional separate crop for phones. */
  positionMobile?: string
}

/** A project material (poster, trailer, PDF…). Leave src/href/text empty to show a placeholder. */
export type Material = {
  label: string
  /** Image path — for posters, stills, concept art. */
  src?: string
  /** Link — for PDFs, decks, YouTube/Vimeo videos. */
  href?: string
  /** Text — for synopsis, director's statement, director's note. */
  text?: string
  /** Shown in the placeholder while the material is not added yet. */
  note: string
  /** Placeholder shape. */
  shape?: 'poster' | 'wide' | 'page'
}

/* ── IDENTITY ────────────────────────────────────────────────────────────── */

export const person = {
  firstLine: 'Garikapati',
  name: 'Siva Ramakrishna',
  fullName: 'Garikapati Siva Ramakrishna',
  roles: ['Writer', 'Director'],
  roleShort: 'Writer | Director',
  basedIn: 'Hyderabad, India',
  from: 'Guntur, Andhra Pradesh',
  language: 'Telugu',
  supportingLine: 'Telling stories rooted in human emotion, real lives and distinctive perspectives.',
}

/* ── CONTACT ─────────────────────────────────────────────────────────────── */

export const contact = {
  email: 'sivaramakrishnagarikapati3578@gmail.com',
  phoneDisplay: '+91 93467 23609',
  phoneLink: '+919346723609',
  /** Digits only, with country code. Set to '' to hide the WhatsApp button. */
  whatsapp: '919346723609',
  instagramHandle: '@sivaram2559',
  instagramUrl: 'https://www.instagram.com/sivaram2559/',
  youtubeName: 'Garikapati Rama Rao',
  youtubeDisplay: 'youtube.com/@garikapatiramarao',
  youtubeUrl: 'https://www.youtube.com/@garikapatiramarao',
}

/* ── PHOTOGRAPHS ─────────────────────────────────────────────────────────── */

export const photos = {
  hero: {
    src: '/images/portrait/hero-full.webp',
    srcSmall: '/images/portrait/hero-800.webp',
    alt: 'Garikapati Siva Ramakrishna, standing beneath a heritage tower',
    position: '52% 30%',
    positionMobile: '50% 20%',
  },
  about: {
    src: '/images/portrait/seated-full.webp',
    srcSmall: '/images/portrait/seated-800.webp',
    alt: 'Garikapati Siva Ramakrishna, seated in a garden',
    position: '62% 34%',
  },
  vision: {
    src: '/images/portrait/contemplative-full.webp',
    srcSmall: '/images/portrait/contemplative-800.webp',
    alt: 'Garikapati Siva Ramakrishna, looking away in thought',
    position: '78% 40%',
  },
  contact: {
    src: '/images/portrait/standing-crop.webp',
    alt: 'Garikapati Siva Ramakrishna, facing the camera',
    position: '50% 0%',
  },
} satisfies Record<string, Photo>

/* ── ABOUT ───────────────────────────────────────────────────────────────── */

export const about = {
  heading: 'A Telugu writer–director, drawn to the lives that rarely reach the screen.',
  intro: [
    'Garikapati Siva Ramakrishna is a Telugu writer-director from Guntur, Andhra Pradesh, currently based in Hyderabad. His interest in cinema began in childhood and grew into a serious pursuit during his college years.',
    'He has written and directed two independent short films and has completed feature screenplays including Pentayya and Kanna Prema. His writing is drawn toward real people, lesser-known realities, different ways of life and the emotional conflicts that sit beneath everyday experience.',
    'As a filmmaker, he wants to tell stories with a raw, authentic quality that still connect with audiences through simple, universal human emotions.',
  ],
  facts: [
    ['Based in', 'Hyderabad'],
    ['From', 'Guntur, Andhra Pradesh'],
    ['Language', 'Telugu'],
    ['Work', '2 short films · 2 feature screenplays'],
  ] as [string, string][],
}

/* ── DIRECTOR'S VISION (filmmaker statement) ─────────────────────────────── */

export const vision = {
  pullQuote: 'The emotion of a character should always feel real before it feels dramatic.',
  statement: [
    'I believe every person carries a story, and every story can be told in many different ways.',
    'I am interested in people — their choices, relationships, struggles, contradictions and the emotions they often keep hidden. I want to explore realities and ways of life that are not always seen on screen, and bring them into stories that feel honest and emotionally grounded.',
    'For me, the emotion of a character should always feel real before it feels dramatic. I want my films to keep a raw quality while still being engaging and visually expressive.',
    'My goal is to keep discovering new ways of telling stories, and to build a body of Telugu cinema that connects with people through genuine human emotion.',
  ],
}

/* ── PROJECTS ────────────────────────────────────────────────────────────── */

export const pentayya = {
  slug: 'pentayya',
  number: '01',
  title: 'Pentayya',
  titleTelugu: 'పెంటయ్య',
  type: 'Feature Film',
  role: 'Writer',
  status: 'Feature screenplay completed',
  genre: 'Telugu drama — rural, emotional',
  setting: 'Pedhapuram, Palnadu region, Andhra Pradesh',
  protagonist: 'Pentayya, a 29-year-old agricultural labourer',
  pages: 'Approx. 136-page bound screenplay',
  characters: [
    { name: 'Pentayya', note: '29 · Agricultural labourer' },
    { name: 'Parijatham', note: '' },
    { name: 'Venkayya', note: '' },
    { name: 'Oorvasi', note: '' },
    { name: 'Narayana', note: '' },
    { name: 'Srinu', note: '' },
  ],
  /** Fill these in as materials become ready. */
  materials: [
    { label: 'Poster', src: '', note: 'Official poster in preparation', shape: 'poster' },
    { label: 'Pitch deck', href: '', note: 'Pitch deck in preparation', shape: 'page' },
    { label: 'Synopsis', text: '', note: 'Synopsis coming soon', shape: 'page' },
    { label: 'Director’s statement', text: '', note: 'Director’s statement in preparation', shape: 'page' },
    { label: 'Concept art', src: '', note: 'Concept art in preparation', shape: 'wide' },
    { label: 'Screenplay', href: '', note: 'Full screenplay available on request', shape: 'page' },
  ] as Material[],
}

export const pentayyaFacts: [string, string][] = [
  ['Format', pentayya.type],
  ['Writer', person.fullName],
  ['World', pentayya.genre],
  ['Setting', pentayya.setting],
  ['Protagonist', pentayya.protagonist],
  ['Screenplay', pentayya.pages],
]

export const myself = {
  slug: 'myself',
  number: '02',
  title: 'Myself',
  subtitle: 'Brain vs Heart',
  type: 'Independent Short Film',
  year: '2026',
  roles: ['Writer', 'Director', 'Cinematographer', 'Editor'],
  status: 'Production — shoot in progress',
  genre: 'Comedy / Drama',
  logline:
    'A young man’s inner conflict, played out by three characters — Siva, Brain and Heart — all played by the same actor.',
  concept: [
    'MYSELF follows Siva, whose inner conflict plays out through his Brain and his Heart as separate characters — all three played by the same actor.',
    'Through everyday life — decisions, career pressure, relationships, friendships and emotions — the film explores the constant pull between logic and feeling.',
  ],
  characters: [
    {
      name: 'Siva',
      line: 'The young man in the middle of it all.',
      photo: { src: '/images/myself/siva-1600.webp', srcSmall: '/images/myself/siva-800.webp', alt: 'Production still — Siva', position: '73% 40%' },
    },
    {
      name: 'Brain',
      line: 'Logic.',
      photo: { src: '/images/myself/brain-1600.webp', srcSmall: '/images/myself/brain-800.webp', alt: 'Production still — Brain', position: '22% 40%' },
    },
    {
      name: 'Heart',
      line: 'Emotion.',
      photo: { src: '/images/myself/heart-1600.webp', srcSmall: '/images/myself/heart-800.webp', alt: 'Production still — Heart', position: '30% 30%' },
    },
  ] as { name: string; line: string; photo: Photo }[],
  stills: [
    { src: '/images/myself/still-01-1600.webp', srcSmall: '/images/myself/still-01-800.webp', alt: 'Production still — Brain' },
    { src: '/images/myself/still-02-1600.webp', srcSmall: '/images/myself/still-02-800.webp', alt: 'Production still — Heart' },
    { src: '/images/myself/still-03-1600.webp', srcSmall: '/images/myself/still-03-800.webp', alt: 'Production still — Siva' },
  ] as Photo[],
  bts: [
    { src: '/images/myself/bts-01-1600.webp', srcSmall: '/images/myself/bts-01-800.webp', alt: 'On set — slate for Scene 1, Shot 25A' },
    { src: '/images/myself/bts-02-1600.webp', srcSmall: '/images/myself/bts-02-800.webp', alt: 'On set — slating a take in the room set' },
  ] as Photo[],
  /** Paste YouTube / Vimeo links here when they are online. */
  trailerUrl: '',
  filmUrl: '',
  materials: [
    { label: 'Poster', src: '', note: 'Poster in preparation', shape: 'poster' },
    { label: 'Director’s note', text: '', note: 'Director’s note to be published with the film', shape: 'page' },
  ] as Material[],
  btsNote: 'More behind-the-scenes photographs to follow',
}

export const tfi = {
  slug: 'tfi',
  number: '03',
  title: 'TFI',
  subtitle: 'Telogodi Fan Ism',
  type: 'Independent Short Film',
  year: '2025',
  roles: ['Writer', 'Director', 'Actor'],
  status: 'Released',
  note: 'My first released independent short film.',
  /** Paste the YouTube link of the film here. */
  watchUrl: '',
  /** Optional thumbnail / poster image. */
  image: '',
}

/* ── WRITING ─────────────────────────────────────────────────────────────── */

export const writing = {
  completed: [
    { title: 'Pentayya', titleTelugu: 'పెంటయ్య', kind: 'Feature screenplay', state: 'Completed' },
    { title: 'Kanna Prema', titleTelugu: 'కన్న ప్రేమ', kind: 'Feature screenplay', state: 'Completed' },
  ],
  developing: [{ title: 'Untitled Project', kind: 'Screenplay', state: 'Currently writing' }],
  other: { role: 'Writer', what: 'Upcoming Film & Web Series' },
}

/* ── FILMMAKING ──────────────────────────────────────────────────────────── */

export const disciplines = [
  { title: 'Story & Screenwriting', items: ['Story development', 'Screenplay writing', 'Dialogue writing', 'Character development'] },
  { title: 'Direction', items: ['Scene blocking', 'Performance direction', 'Shot planning', 'Visual storytelling'] },
  { title: 'Cinematography', items: ['Composition', 'Framing', 'Camera operation', 'Camera movement', 'Visual mood'] },
  { title: 'Editing', items: ['Narrative editing', 'Pacing', 'Performance editing', 'Visual continuity'] },
  { title: 'Production', items: ['Basic production planning', 'Locations', 'Lighting', 'Sound coordination'] },
]

/* ── FILMOGRAPHY ─────────────────────────────────────────────────────────── */

export const filmography = [
  { year: '2026', title: 'MYSELF – Brain vs Heart', credits: 'Writer / Director / Cinematographer / Editor', format: 'Short Film', status: 'In Production', href: '#/work/myself' },
  { year: '2025', title: 'TFI – Telogodi Fan Ism', credits: 'Writer / Director / Actor', format: 'Short Film', status: 'Released', href: '' },
]

/* ── ABOUT THE FILMMAKER (detailed) ──────────────────────────────────────── */

export const filmmaker = {
  bio: [
    'Cinema has been part of Siva’s life since childhood in Guntur. In his third year of college it became a serious pursuit — from then on he worked toward becoming a director, learning by writing and by making.',
    'His first independent short film, TFI – Telogodi Fan Ism, was released in 2025; he wrote, directed and acted in it. His second, MYSELF – Brain vs Heart, is currently being shot — he wrote and directed it and is also handling its cinematography and editing.',
    'Alongside the short films he has written two complete feature screenplays, Pentayya and Kanna Prema. He is now writing his next screenplay and is involved as a writer on an upcoming film and a web series.',
    'He studied Computer Science & Engineering and has worked as an R&D Engineer since 2025. He is now completing his notice period there as he moves from his software career toward filmmaking.',
  ],
  journey: [
    ['Childhood', 'Guntur — cinema becomes an interest.'],
    ['College, 3rd year', 'Begins working seriously toward becoming a director.'],
    ['2025', 'TFI – Telogodi Fan Ism — first released short film.'],
    ['2026', 'MYSELF – Brain vs Heart — in production.'],
    ['Now', 'Hyderabad — writing the next screenplay; writer on an upcoming film and web series.'],
  ] as [string, string][],
  education: [
    { degree: 'B.Tech — Computer Science & Engineering', place: 'Amrita Vishwa Vidyapeetham, Kerala', years: '2021–2025', score: '7.25 CGPA' },
    { degree: 'Intermediate — Vikas Junior College', place: 'Narasaraopet, Andhra Pradesh', years: '2019–2021', score: '9.5 CGPA' },
    { degree: 'Hindu High School', place: '', years: '2018–2019', score: '9.7 CGPA' },
  ],
  career: {
    role: 'R&D Engineer',
    company: 'Ninestars Information Technologies Pvt. Ltd.',
    years: 'June 2025 – December 2026',
    note: 'Currently serving notice period; final working day 7 December 2026.',
  },
}

/* ── SEO (also edit index.html for link previews) ───────────────────────── */

export const seo = {
  title: 'Garikapati Siva Ramakrishna | Writer & Director',
}
