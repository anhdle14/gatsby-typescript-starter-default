/*
 * File: /gatsby-config.ts
 * Project: gatsby-typescript-starter-default
 * Created Date: Tuesday September 10th 2019
 * Author: Le Anh Duc
 * -----
 * Last Modified: Tuesday September 10th 2019 5:14:00 pm
 * Modified By: Le Anh Duc <anhdle14@hotmail.com>
 * -----
 * Copyright (c) 2019
 */

export const siteMetadata = {
  title: "Gatsby Default Starter",
  description:
    "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
  author: "Le Anh Duc <anhdle14@hotmail.com>",
};

export const plugins = [
  "gatsby-plugin-react-helmet",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: `${__dirname}/src/pages/`,
    },
  },
  "gatsby-plugin-typescript",
];
