import { ISiteMetadata, Plugins } from "#definitions/gatsby/config";
import Config from "./config";

export const siteMetadata: ISiteMetadata = {
  title: Config.title,
  siteUrl: Config.url,
  description: Config.description,
};

export const plugins: Plugins = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "data",
      path: `${__dirname}/src/data/`,
      ignore: [`**/\.*`], // ignore files starting with a dot
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      commonmark: true,
      footnotes: true,
      pedantic: true,
      plugins: [
        // `gatsby-remark-prismjs` â€™s listed after `gatsby-remark-autolink-headers`.
        "gatsby-remark-autolink-headers",
        {
          resolve: "gatsby-remark-prismjs",
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {
              sh: "bash",
            },
            showLineNumbers: true,
            noInlineHighlight: false,
            languageExtensions: [],
            prompt: {
              user: "anhdle14",
              host: "anhdle14.me",
              global: true,
            },
          },
        },
        "gatsby-remark-smartypants",
        "gatsby-remark-copy-linked-files",
        "gatsby-remark-responsive-iframe",
        "gatsby-remark-external-links",
        "gatsby-remark-relative-images",
        {
          resolve: "gatsby-remark-images",
          options: {
            sizeByPixelDensity: true,
          },
        },
        {
          resolve: "gatsby-remark-katex",
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: "ignore",
          },
        },
      ],
    },
  },
  "gatsby-plugin-react-helmet",

  // Images
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",

  // Typescript
  "gatsby-plugin-typescript",

  // CSS
  {
    resolve: "gatsby-plugin-postcss",
    options: {
      postCssPlugins: [
        require("postcss-import"),
        require("autoprefixer"),
        require("lost"),
        require("cssnano"),
      ],
    },
  },
  {
    resolve: "gatsby-plugin-typography",
    options: {
      pathToConfigModule: `${__dirname}/src/utils/typography`,
    },
  },

  "gatsby-plugin-catch-links",
  {
    resolve: "gatsby-plugin-feed",
    options: {
      query: `
       {
         site {
           siteMetadata {
             title
             description
             siteUrl
             site_url: siteUrl
           }
         }
       }
     `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return {
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              };
            });
          },
          query: `
           {
             allMarkdownRemark(
               sort: { order: DESC, fields: [frontmatter___date] },
             ) {
               edges {
                 node {
                   excerpt
                   html
                   fields { slug }
                   frontmatter {
                     title
                     date
                   }
                 }
               }
             }
           }
         `,
          output: "/rss.xml",
          title: "Your Site's RSS Feed",
          // optional configuration to insert feed reference in pages:
          // if `string` is used, it will be used to create RegExp and then test if pathname of
          // current page satisfied this regular expression;
          // if not provided or `undefined`, all pages will have feed reference inserted
          match: "^/blog/",
        },
      ],
    },
  },

  // If youâ€™re using this plugin together with `gatsby-plugin-offline` (recommended), gatsby-plugin-manifest` should be listed before the offline plugin so that it can cache the created `manifest.webmanifest`.
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Le Anh Duc",
      short_name: "anhdle14",
      start_url: "/",
      background_color: "#f7f0eb",
      theme_color: "#a2466c",
      display: "standalone",
      icon: "static/images/icons/icon-512x512.png",
      icons: [
        {
          src: "/images/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/images/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
  "gatsby-plugin-offline",

  "gatsby-plugin-optimize-svgs",
];
