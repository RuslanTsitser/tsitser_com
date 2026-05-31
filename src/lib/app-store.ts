export interface AppStoreMetadata {
  trackName: string;
  trackViewUrl: string;
  description: string;
  artworkUrl512?: string;
  screenshotUrls?: string[];
  genres?: string[];
}

interface LookupResponse {
  resultCount: number;
  results?: Array<{
    trackName: string;
    trackViewUrl: string;
    description?: string;
    artworkUrl512?: string;
    screenshotUrls?: string[];
    genres?: string[];
  }>;
}

export async function fetchAppStoreMetadata(appStoreId: string): Promise<AppStoreMetadata | null> {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${appStoreId}`);
    if (!response.ok) return null;

    const data = (await response.json()) as LookupResponse;
    const result = data.results?.[0];
    if (!result) return null;

    return {
      trackName: result.trackName,
      trackViewUrl: result.trackViewUrl,
      description: result.description ?? '',
      artworkUrl512: result.artworkUrl512,
      screenshotUrls: result.screenshotUrls,
      genres: result.genres,
    };
  } catch {
    return null;
  }
}

export function firstParagraph(text: string, maxLength = 240): string {
  const paragraph =
    text
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.length > 0) ?? text;

  if (paragraph.length <= maxLength) return paragraph;
  return `${paragraph.slice(0, maxLength).trimEnd()}…`;
}
