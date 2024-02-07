export interface Project {
  name: string;
  description: string;
  url?: string;
  image: string;
  stack: string[];
  repo?: string;
  type: string;
  main?: boolean;
}
