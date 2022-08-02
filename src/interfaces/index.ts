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
}
