export const site = {
  name: 'Ruslan Tsitser',
  title: 'Ruslan Tsitser | Flutter Developer',
  role: 'Flutter Developer',
  heroTitle: 'Mobile Apps From Idea to App Store',
  heroSubtitle: 'Creator of Repeat Tutor · 6+ years in Flutter',
  location: 'Florianópolis, Santa Catarina, Brazil',
  email: 'admin@tsitser.com',
  siteUrl: 'https://tsitser.com',
  formspreeEndpoint: 'https://formspree.io/f/xojbzrbo',
  linkedin: 'https://www.linkedin.com/in/ruslan-tsitser/',
  github: 'https://github.com/RuslanTsitser',
  photo: '/images/ruslan.png',
  photoAlt: 'Ruslan Tsitser — Flutter developer',
  logo: '/images/logo.png',
} as const;

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

export const skills = [
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Dart', slug: 'dart' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'AR', materialIcon: 'view_in_ar' },
  { name: 'iOS', slug: 'apple' },
  { name: 'Android', slug: 'android' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' },
] as const;

export const about = {
  tag: 'Problems I solve',
  intro:
    'I help founders and teams ship Flutter apps to the App Store and Google Play — and keep improving them after launch.',
  problems: [
    'You have a product idea but need someone to design, build, and release it on iOS and Android',
    'You want one codebase instead of separate native teams for each platform',
    'You need subscriptions, in-app purchases, or ads wired up correctly from day one',
    'You want AI in the app — chat, voice, smart feedback — without breaking the UX',
    'You need push notifications, offline mode, analytics, or localization done properly',
    'Your app is live but needs new features, better performance, or store compliance fixes',
  ],
  stats: [
    { value: '6+', label: 'Years' },
    { value: '9M+', label: 'Downloads' },
    { value: '75+', label: 'GitHub' },
  ],
} as const;

export const projectsSection = {
  title: 'Personal Projects',
  description: 'Apps I built, own, and publish on the App Store and Google Play.',
} as const;

export const projects = [
  {
    title: 'Repeat Tutor',
    subtitle: 'Language conversation practice',
    appStoreId: '6755615377',
    appStoreUrl: 'https://apps.apple.com/us/app/chat-with-ai-repeat-tutor/id6755615377',
    playStoreId: 'com.tsitser.repeat_tutor',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tsitser.repeat_tutor&hl=en',
    description:
      'Practice real conversations with an AI tutor via text and live voice chats. Instant feedback on pronunciation and grammar — from idea to App Store and Google Play release.',
    tags: ['Flutter', 'Dart', 'AI', 'iOS', 'Android'],
    imageFirst: false,
  },
  {
    title: 'My Pregnancy Book',
    subtitle: 'All your pregnancy in one app',
    appStoreId: '6755364563',
    appStoreUrl: 'https://apps.apple.com/us/app/my-pregnancy-book/id6755364563',
    description:
      'A digital pregnancy companion: diary, mood calendar, baby movement tracking, and medical documents in one place — instead of a paper book.',
    tags: ['Flutter', 'Dart', 'iOS', 'Health'],
    imageFirst: true,
  },
  {
    title: 'QWallet',
    subtitle: 'QR and barcode wallet',
    appStoreId: '6741042648',
    appStoreUrl: 'https://apps.apple.com/us/app/qwallet-qr-and-barcode/id6741042648',
    description:
      'Keep loyalty cards, boarding passes, tickets, and coupons in one place. Scan, save, and pull up any code instantly — no clutter, no subscriptions.',
    tags: ['Flutter', 'Dart', 'iOS', 'Productivity'],
    imageFirst: false,
  },
] as const;

export const social = [
  { icon: 'link', href: site.linkedin, label: 'LinkedIn' },
  { icon: 'code', href: site.github, label: 'GitHub' },
  { icon: 'mail', href: site.linkedin, label: 'Contact' },
] as const;
