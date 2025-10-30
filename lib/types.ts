import { ReactElement } from 'react';

export interface Project {
  id: string;
  img: string;
  name: string;
  stack: (string | ReactElement)[];
  live: string;
  source: string;
  description: string;
}

export interface ProjectData {
  SmallProjects: Project[];
  LargeProjects: Project[];
}
