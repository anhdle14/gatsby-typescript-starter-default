import { IAuthor, IMetadata, ISetting } from "definitions/config";

export const Metadata: IMetadata = {
  title: "Man of Letters",
  subtitle: "Man of Letters",
  description: "A personal blog",
  url: "https://anhdle14.me",
  copyright: "Â© All rights reserved.",
};

export const Author: IAuthor = {
  lastName: "Le",
  middleName: "Anh",
  firstName: "Duc",
  bio: "Man of Letters",
  contacts: {
    email: "anhdle14@hotmail.com",
    facebook: "anhdle41",
    twitter: "@anhdle14",
    github: "anhdle14",
    gitlab: "anhdle14",
    rss: "",
    linkedin: "anhdle14",
  },
};

export const Setting: ISetting = {
  pathPrefix: "/",
  postsPerPage: 4,
  isKatex: true,
};

const Config = { ...Metadata, ...Author, ...Setting };

export default Config;
