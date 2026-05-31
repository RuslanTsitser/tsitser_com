import { projects as projectConfig } from '../data/site';
import { fetchAppStoreMetadata } from './app-store';
import { fetchPlayStoreMetadata } from './play-store';

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tags: readonly string[];
  appStoreUrl: string;
  playStoreUrl?: string;
  imageFirst: boolean;
  iconUrl?: string;
}

export async function getProjects(): Promise<Project[]> {
  return Promise.all(
    projectConfig.map(async (project) => {
      const appStore = await fetchAppStoreMetadata(project.appStoreId);
      const playStore =
        'playStoreId' in project && project.playStoreId
          ? await fetchPlayStoreMetadata(project.playStoreId)
          : null;

      return {
        title: project.title,
        subtitle: project.subtitle,
        description: project.description,
        tags: project.tags,
        appStoreUrl: appStore?.trackViewUrl ?? project.appStoreUrl,
        playStoreUrl:
          playStore?.url ?? ('playStoreUrl' in project ? project.playStoreUrl : undefined),
        imageFirst: project.imageFirst,
        iconUrl:
          ('icon' in project && project.icon) ||
          appStore?.artworkUrl512 ||
          playStore?.icon,
      };
    }),
  );
}
