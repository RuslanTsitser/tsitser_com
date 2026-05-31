import gplay from 'google-play-scraper';

export interface PlayStoreMetadata {
  title: string;
  url: string;
  description: string;
  icon?: string;
  screenshots?: string[];
}

export async function fetchPlayStoreMetadata(packageId: string): Promise<PlayStoreMetadata | null> {
  try {
    const app = await gplay.app({ appId: packageId, lang: 'en', country: 'us' });

    return {
      title: app.title,
      url: app.url,
      description: app.description,
      icon: app.icon,
      screenshots: app.screenshots,
    };
  } catch {
    return null;
  }
}
