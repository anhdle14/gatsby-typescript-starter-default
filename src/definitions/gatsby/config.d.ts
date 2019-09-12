/*
 * File: /src/definitions/gatsby/config.d.ts
 * Project: gatsby-typescript-starter-default
 * Created Date: Wednesday September 11th 2019
 * Author: Le Anh Duc
 * -----
 * Last Modified: Wednesday September 11th 2019 3:05:24 pm
 * Modified By: Le Anh Duc <anhdle14@hotmail.com>
 * -----
 * Copyright (c) 2019
 */

export interface ISiteMetadata {
  title: string;
  siteUrl: string;
  description: string;
}

export interface IPlugin {
  resolve: String;
  options?: object;
}

export type Plugins = Array<string | IPlugin>;
