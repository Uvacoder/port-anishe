import { ID } from "@directus/sdk";

type DirectusImage = {
  url: string;
  previewURL: string;
  height: number;
  width: number;
  id: ID;
};

type CloudinaryImage = {
  id: ID;
  url: string;
  previewURL: string;
  height: number;
  width: number;
};

type HomePageCollection = {
  heroHeading: string;
  heroText: string;
  heroImage: DirectusImage;
};

type SkillsCollection = {
  id: ID;
  name: string;
  description: string;
  iconName: string;
  experience: string;
  slug: string;
  link: string;
};

type ProjectsColletion = {
  id: ID;
  name: string;
  description: string;
  slug: string;
  link: string;
  githubLink: string;
  image: CloudinaryImage;
};

type ProjectsSkillsRelationCollection = {
  id: ID;
  projects_id: ProjectsColletion;
  skills_id: SkillsCollection;
}

type Collections = {
  homePage: HomePageCollection;
  skills: SkillsCollection;
  projects: ProjectsColletion;
  projects_skills: ProjectsSkillsRelationCollection;
};

export type {
  Collections,
  DirectusImage,
  CloudinaryImage,
  HomePageCollection,
  SkillsCollection,
  ProjectsColletion,
};
