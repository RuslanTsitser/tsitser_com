import {
  siAndroid,
  siApple,
  siDart,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  type SimpleIcon,
} from 'simple-icons';

export const skillIcons = {
  flutter: siFlutter,
  dart: siDart,
  firebase: siFirebase,
  apple: siApple,
  android: siAndroid,
  git: siGit,
  github: siGithub,
} as const satisfies Record<string, SimpleIcon>;

export type SkillIconSlug = keyof typeof skillIcons;

export function getSkillIcon(slug: string): SimpleIcon | undefined {
  return skillIcons[slug as SkillIconSlug];
}
