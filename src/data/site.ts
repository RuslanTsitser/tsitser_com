export const site = {
  name: 'Ruslan Tsitser',
  title: 'Ruslan Tsitser | Flutter Developer',
  role: 'Flutter Developer',
  heroTitle: 'Mobile Apps From Idea to App Store',
  heroSubtitle: 'Creator of Repeat Tutor · 6+ years in Flutter',
  location: 'Florianópolis, Santa Catarina, Brazil',
  linkedin: 'https://www.linkedin.com/in/ruslan-tsitser/',
  github: 'https://github.com/RuslanTsitser',
  photo: '/images/ruslan.png',
  photoAlt: 'Ruslan Tsitser — Flutter developer',
} as const;

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

export const skills = [
  { name: 'Flutter', color: '#54C5F8' },
  { name: 'Dart', color: '#0175C2' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'AR', color: '#4B634E' },
  { name: 'iOS', color: '#555555' },
  { name: 'Android', color: '#3DDC84' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#24292F' },
] as const;

export const about = {
  tag: 'Professional bio',
  text: `I'm a mobile application developer focused on Flutter — from idea and UX to release and ongoing improvements. I build products end to end: subscriptions, push and local notifications, AR, AI features, real-time data, analytics, and localization. Currently at Digital Solutions Technologies Limited; previously at Visotsky Consulting and Mobil2b.`,
  stats: [
    { value: '6+', label: 'Years' },
    { value: '9M+', label: 'Downloads' },
    { value: '75+', label: 'GitHub' },
  ],
} as const;

export const projects = [
  {
    title: 'Repeat Tutor',
    description:
      'Language practice with an AI tutor: chat, automatic corrections with explanations, and voice calls. Built from idea to App Store release.',
    tags: ['Flutter', 'Dart', 'AI', 'iOS'],
    primaryHref: 'https://lnkd.in/eSE46ajM',
    primaryLabel: 'View Details',
    secondaryLabel: 'View Project',
    imageFirst: false,
    accent: 'repeat' as const,
  },
  {
    title: 'AR Drawing Studio',
    description:
      'App developed from scratch to 9M+ downloads (NDA). AR drawing, subscriptions, AI image generation, Firebase, remote config and A/B tests.',
    tags: ['Flutter', 'AR', 'Firebase', 'IAP'],
    primaryHref: null,
    primaryLabel: 'NDA',
    secondaryLabel: null,
    imageFirst: true,
    accent: 'ar' as const,
  },
  {
    title: 'Tonnus',
    description:
      'Business app at Visotsky Consulting: JWT auth, WebSocket updates, charts, rich text editor, Firebase and multilingual support.',
    tags: ['Flutter', 'WebSockets', 'JWT', 'Firebase'],
    primaryHref: null,
    primaryLabel: 'NDA',
    secondaryLabel: null,
    imageFirst: false,
    accent: 'tonnus' as const,
  },
] as const;

export const social = [
  { icon: 'link', href: site.linkedin, label: 'LinkedIn' },
  { icon: 'code', href: site.github, label: 'GitHub' },
  { icon: 'mail', href: site.linkedin, label: 'Contact' },
] as const;
