export const site = {
  name: 'Ruslan Tsitser',
  title: 'Ruslan Tsitser | Flutter Developer',
  role: 'Flutter Developer',
  tagline: 'Creator of Repeat Tutor',
  location: 'Florianópolis, Santa Catarina, Brazil',
  email: null as string | null,
  linkedin: 'https://www.linkedin.com/in/ruslan-tsitser/',
  github: 'https://github.com/RuslanTsitser',
  resume: 'https://www.linkedin.com/in/ruslan-tsitser/',
} as const;

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

export const techStack = [
  'Flutter',
  'Dart',
  'Firebase',
  'AR / ARKit',
  'In-App Purchases',
  'WebSockets',
  'Remote Config',
  'A/B Testing',
  'Git',
  'CI/CD',
] as const;

export const services = [
  { icon: 'phone_iphone', title: 'Mobile App Development' },
  { icon: 'view_in_ar', title: 'AR & Camera Integrations' },
  { icon: 'cloud_done', title: 'Firebase & Backend' },
] as const;

export const about = {
  text: `I'm a mobile application developer focused on Flutter — from idea and UX to release and ongoing improvements. I build products end to end: subscriptions, push and local notifications, AR, AI features, real-time data, analytics, and localization. Currently at Digital Solutions Technologies Limited; previously at Visotsky Consulting and Mobil2b. I also created Repeat Tutor — an AI language practice app with chat corrections and voice calls.`,
  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '9M+', label: 'App Downloads (NDA)' },
    { value: '75+', label: 'GitHub Contributions' },
  ],
} as const;

export const projects = [
  {
    title: 'Repeat Tutor',
    description:
      'Language practice app with an AI tutor: chat conversations, automatic error corrections with explanations, and voice calls for speaking practice. Built as a product I use myself — from idea and UX to App Store release.',
    tags: ['Flutter', 'Dart', 'AI', 'Voice', 'iOS'],
    github: null,
    link: 'https://lnkd.in/eSE46ajM',
    linkLabel: 'App Store',
    preview: 'repeat',
  },
  {
    title: 'AR Drawing Studio',
    description:
      'Mobile app developed from scratch to 9M+ downloads (NDA). AR drawing on any surface, subscriptions and in-app purchases, AI image generation, camera pipelines, Firebase Analytics & Crashlytics, remote config and A/B tests.',
    tags: ['Flutter', 'AR', 'Firebase', 'IAP', 'AI'],
    github: null,
    link: null,
    linkLabel: 'NDA',
    preview: 'ar',
  },
  {
    title: 'Tonnus',
    description:
      'Business app built from scratch at Visotsky Consulting: email auth with JWT and refresh tokens, WebSocket real-time updates, charts and sheets, rich text editor, Firebase, remote config, and multilingual support.',
    tags: ['Flutter', 'WebSockets', 'JWT', 'Firebase'],
    github: null,
    link: null,
    linkLabel: 'View project',
    preview: 'tonnus',
  },
] as const;

export const social = [
  { icon: 'mail', href: site.linkedin, label: 'LinkedIn' },
  { icon: 'code', href: site.github, label: 'GitHub' },
  { icon: 'work', href: site.linkedin, label: 'LinkedIn' },
] as const;
