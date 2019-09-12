import { createFilePath } from "gatsby-source-filesystem";
import { resolve } from "path";

export const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case "MarkdownRemark":
      createNodeField({
        node,
        name: "slug",
        value: createFilePath({ node, getNode }),
      });
      break;
  }
};

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Custom 404 Page
  createPage({
    path: "/404",
    component: resolve("./src/templates/404.tsx"),
  });

  // Posts Page
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.fields.slug;
    createPage({
      path,
      component: resolve("./src/templates/Post.tsx"),
      context: {
        slug: path,
      },
    });
  });
};
