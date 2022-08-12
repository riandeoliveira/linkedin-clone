import type { LanguageLevel } from "types";

export interface IMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
}

export interface IPost {
  comments: number;
  reactions: number;
}

export interface IJobPosition {
  duration: string;
  job: string;
  type: string;
  workplace: string;
}

export interface ILanguage {
  language: string;
  level: LanguageLevel;
}
