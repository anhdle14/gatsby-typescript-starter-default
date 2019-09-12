export interface IMetadata {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  copyright: string;
}

export interface ISocial {
  email: string;
  facebook: string;
  twitter: string;
  github: string;
  gitlab: string;
  rss: string;
  linkedin: string;
}

export interface IAuthor {
  lastName: string;
  middleName: string;
  firstName: string;
  bio: string;
  contacts: ISocial;
}

export interface ISetting {
  pathPrefix: string;
  postsPerPage: number;
  isKatex: boolean;
}
