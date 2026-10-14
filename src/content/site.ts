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
  roles: ['Writer', 'Director', 'Actor'],
  roleShort: 'Writer | Director | Actor',
  positioning: ['Filmmaker', 'Screenwriter', 'Performer'],
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
    src: '/images/siva/web/about-full.webp',
    srcSmall: '/images/siva/web/about-800.webp',
    alt: 'Garikapati Siva Ramakrishna, close portrait looking at the camera',
    position: '45% 35%',
  },
  vision: {
    src: '/images/siva/web/vision-full.webp',
    srcSmall: '/images/siva/web/vision-800.webp',
    alt: 'Garikapati Siva Ramakrishna at a hilltop fort, looking out over the city',
    position: '70% 30%',
  },
  /** Filmmaker's statement composition: one primary portrait + two supporting frames. */
  statement: [
    {
      src: '/images/siva/web/statement-cafe-full.webp',
      srcSmall: '/images/siva/web/statement-cafe-800.webp',
      alt: 'Garikapati Siva Ramakrishna seated by the sea, looking into the distance',
      position: '62% 30%',
    },
    {
      src: '/images/siva/web/statement-sea-full.webp',
      srcSmall: '/images/siva/web/statement-sea-800.webp',
      alt: 'Garikapati Siva Ramakrishna on the shore, facing the waves',
      position: '50% 55%',
    },
    {
      src: '/images/siva/web/statement-rooftop-full.webp',
      srcSmall: '/images/siva/web/statement-rooftop-800.webp',
      alt: 'Garikapati Siva Ramakrishna in silhouette on a rooftop under a stormy sky',
      position: '50% 45%',
    },
  ] as Photo[],
  contact: {
    src: '/images/siva/web/contact-full.webp',
    srcSmall: '/images/siva/web/contact-800.webp',
    alt: 'Garikapati Siva Ramakrishna behind a camera on a tripod at sunset',
    position: '50% 32%',
  },
} satisfies Record<string, Photo | Photo[]>

/* ── ABOUT ───────────────────────────────────────────────────────────────── */

export const about = {
  heading: 'A Telugu writer, director and actor, drawn to the lives that rarely reach the screen.',
  intro: [
    'Garikapati Siva Ramakrishna is a Telugu writer, director and actor from Guntur, Andhra Pradesh. He is drawn to ordinary people, lesser-seen realities and the emotional conflicts beneath everyday life — character-driven stories, told in Telugu.',
    'He comes to a story from more than one side. He develops it as a writer, shapes it as a director, and understands its characters as an actor — through what they want, what they feel and how they react. Language is central to that work: with a strong command of Telugu grammar, he pays close attention to how each character speaks, and writes dialogue that sounds spoken rather than recited.',
    'He has written and directed two independent short films, acting in the first, and has completed two feature screenplays, Pentayya and Kanna Prema.',
  ],
  facts: [
    ['From', 'Guntur, Andhra Pradesh'],
    ['Roles', 'Writer | Director | Actor'],
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
    'Because I also act, I think about a scene from inside it — what a character wants, what they hide, and how the words sit when they are spoken. In Telugu especially, how a line is said carries as much as the line itself.',
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
  genre: 'Rural Action Drama',
  roles: ['Writer', 'Director'],
  status: 'Feature screenplay completed | 137 pages | SWA Registered',
  setting: 'Pedhapuram, Palnadu region, Andhra Pradesh',
  protagonist: 'Pentayya, a 29-year-old agricultural labourer',
  pages: '137 pages · SWA Registered',
  logline:
    'Set in the Palnadu region, it follows an ordinary agricultural labourer whose peaceful life is destroyed by power, injustice and personal loss, pushing him toward a dangerous journey of revenge.',
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
  ['Format', `${pentayya.type} | ${pentayya.genre}`],
  ['Credit', `${pentayya.roles.join(' | ')} — ${person.fullName}`],
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
  status: 'Independent film in production',
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
    { label: 'Poster', src: '/images/myself-poster.webp', note: 'Official poster', shape: 'poster' },
    { label: 'Director’s note', text: '', note: 'Director’s note to be published with the film', shape: 'page' },
  ] as Material[],
  btsNote: 'More behind-the-scenes photographs to follow',
}

export const tfi = {
  slug: 'tfi',
  number: '03',
  title: 'TFI',
  subtitle: 'Telugodi Fan Ism',
  type: 'Independent Short Film',
  year: '2025',
  roles: ['Writer', 'Director', 'Actor'],
  status: 'Released',
  note: 'My first released independent short film.',
  /** Paste the YouTube link of the film here. */
  watchUrl: '',
  /** Optional thumbnail / poster image. */
  image: '/images/tfi-poster.jpeg',
}

/* ── WRITING ─────────────────────────────────────────────────────────────── */

export const writing = {
  completed: [
    { title: 'Pentayya', titleTelugu: 'పెంటయ్య', kind: 'Feature screenplay', state: 'Completed' },
    { title: 'Kanna Prema', titleTelugu: 'కన్న ప్రేమ', kind: 'Feature screenplay', state: 'Completed' },
  ],
  developing: [{ title: 'Untitled Project', kind: 'Screenplay', state: 'Currently writing' }],
  /** Confidential current engagement — no titles, companies or story details. */
  current: {
    heading: 'Current Writing Work',
    text: 'Currently contributing to writing work for upcoming feature-film and web-series projects.',
    note: 'Project titles and story details remain confidential.',
  },
}

/* ── AVAILABILITY (temporary) ───────────────────────────────────────────────
 *  Shown on Contact, the profile page and the profile PDF — only up to and
 *  including `showUntil`. After that date it disappears from the website on its
 *  own; run `npm run profile:pdf` to remove it from the PDF too.
 *  To change it, edit the lines below. To remove it early, set showUntil: ''.
 */
export const availability = {
  showUntil: '2026-12-08',
  basedIn: 'Currently based in Bengaluru, Karnataka.',
  lines: [
    ['Remote writing collaboration', 'available now.'],
    ['Hyderabad-based, on-location work', 'available from 8 December 2026.'],
  ] as [string, string][],
}

export function isAvailabilityShown(now = new Date()) {
  if (!availability.showUntil) return false
  return now <= new Date(`${availability.showUntil}T23:59:59+05:30`)
}

/* ── FILMMAKING ──────────────────────────────────────────────────────────── */

export const disciplines = [
  { title: 'Story & Screenwriting', items: ['Story development', 'Screenplay writing', 'Telugu dialogue writing', 'Character development'] },
  { title: 'Direction', items: ['Scene blocking', 'Performance direction', 'Shot planning', 'Visual storytelling'] },
  { title: 'Cinematography', items: ['Composition', 'Framing', 'Camera operation', 'Camera movement', 'Visual mood'] },
  { title: 'Editing', items: ['Narrative editing', 'Pacing', 'Performance editing', 'Visual continuity'] },
  { title: 'Production', items: ['Basic production planning', 'Locations', 'Lighting', 'Sound coordination'] },
  { title: 'Acting & Performance', items: ['Character interpretation', 'Expression', 'Dialogue delivery', 'Emotional truth'] },
]

/* ── CRAFT — writer · director · actor, and Telugu dialogue ──────────────── */

export const craft = {
  heading: 'Writer. Director. Actor.',
  intro:
    'Three ways into the same character. He develops a story and its people on the page, translates them into performance and image as a director, and — as an actor — works from inside the character.',
  disciplines: [
    ['As a writer', 'Develops stories, characters and dialogue — in Telugu, written for the way people actually speak.'],
    ['As a director', 'Translates the script into performances and cinematic storytelling, from blocking to the cut.'],
    ['As an actor', 'Engages with a character’s intentions, emotions, reactions and spoken words.'],
  ] as [string, string][],
}

export const acting = {
  heading: 'Acting & Character',
  idea: 'I understand a character not only through the words written for them, but through the emotions, intentions and reactions that bring those words to life.',
  text: 'Acting is part of how he writes and directs. Performing gives him a working sense of what an actor needs from a scene — and of how a line, a pause or a look changes what the audience feels.',
  focus: ['Character interpretation', 'Expression', 'Dialogue delivery', 'Emotional truth'],
  /** Verified acting credits only. */
  credits: [{ title: 'TFI – Telugodi Fan Ism', year: '2025', credit: 'Writer | Director | Actor' }],
  /**
   * Add later — nothing is shown until these are filled:
   *   reelUrl: a YouTube / Vimeo link to the acting showreel
   *   photos:  acting stills, e.g. { src: '/images/acting/still-01.webp', alt: '…' }
   */
  reelUrl: '',
  photos: [] as Photo[],
}

export const dialogue = {
  heading: 'Telugu Dialogue & Language Craft',
  headingTelugu: 'సంభాషణ',
  text: 'A strong command of Telugu grammar (vyakaranam) sits at the centre of his writing. He writes Telugu that is grammatically sound yet sounds spoken — shaped by who a character is, where they come from, what they feel and the situation they are in.',
  focus: [
    'Grammatically sound Telugu',
    'Natural, conversational dialogue',
    'Character-specific vocabulary and speech',
    'Emotion carried through dialogue',
    'Rhythm, pauses and subtext',
    'The difference between written and spoken Telugu',
  ],
}

/* ── FILMOGRAPHY ─────────────────────────────────────────────────────────── */

export const filmography = [
  { year: '2026', title: 'MYSELF – Brain vs Heart', credits: 'Writer | Director | Cinematographer | Editor', format: 'Independent Short Film', status: 'In production', href: '#/work/myself' },
  { year: '2025', title: 'TFI – Telugodi Fan Ism', credits: 'Writer | Director | Actor', format: 'Independent Short Film', status: 'Released', href: '' },
]

/* ── ABOUT THE FILMMAKER (detailed) ──────────────────────────────────────── */

export const filmmaker = {
  bio: [
    'Cinema has been part of Siva’s life since childhood in Guntur. In his third year of college it became a serious pursuit — from then on he worked toward becoming a director, learning by writing and by making.',
    'His first independent short film, TFI – Telugodi Fan Ism, was released in 2025; he wrote, directed and acted in it, working on both sides of the camera. His second, MYSELF – Brain vs Heart, is currently being shot — he wrote and directed it and is also handling its cinematography and editing.',
    'Alongside the short films he has written two complete feature screenplays, Pentayya and Kanna Prema. He is now writing his next screenplay and is contributing to writing work for upcoming feature-film and web-series projects. Telugu is the language of all his work, and he is particular about it — its grammar, and the way a line sounds when it is spoken.',
    'He studied Computer Science & Engineering and has worked as an R&D Engineer since 2025. He is now completing his notice period there as he moves from his software career toward filmmaking.',
  ],
  journey: [
    ['Childhood', 'Guntur — cinema becomes an interest.'],
    ['College, 3rd year', 'Begins working seriously toward becoming a director.'],
    ['2025', 'TFI – Telugodi Fan Ism — first released short film.'],
    ['2026', 'MYSELF – Brain vs Heart — in production.'],
    ['Now', 'Writing the next screenplay; contributing to writing work for upcoming feature-film and web-series projects (confidential).'],
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
  title: 'Garikapati Siva Ramakrishna | Writer | Director | Actor',
}
