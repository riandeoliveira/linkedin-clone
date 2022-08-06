import type { LanguageLevel } from "types";

export interface IMenuItem {
  icon: JSX.Element;
  path: string;
  title: string;
}

export interface IUserSuggestion {
  avatar: string;
  career: string;
  fullname: string;
}

export interface IUserPost {
  comments: number;
  reactions: number;
}

export interface IFeaturedPost extends IUserPost {
  content: string;
  post: string;
  title: string;
}

export interface IActivityPost extends IUserPost {
  author: string;
  content: string;
  date: string;
  post: string;
}

export interface IJobPosition {
  duration: string;
  job: string;
  type: string;
  workplace: string;
}

export interface IJobExperience {
  company: string;
  image: string;
  period: string;
  positions: IJobPosition[];
}

export interface IAcademicEducation {
  institution: string;
  course: string;
  duration: string;
  image: string;
}

export interface IUserLanguage {
  language: string;
  level: LanguageLevel;
}
