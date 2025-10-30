import { ReactElement } from 'react';

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Learning';

export interface Project {
  id: string;
  img: string;
  name: string;
  stack: (string | ReactElement)[];
  live: string;
  source: string;
  description: string;
  category: ProjectCategory;
}

export interface ProjectData {
  SmallProjects: Project[];
  LargeProjects: Project[];
}

export interface AllProjects {
  projects: Project[];
}
