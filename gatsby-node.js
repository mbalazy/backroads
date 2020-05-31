const path = require('path');

// Absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// eslint-disable-next-line func-names
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allTours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }

      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allTours.edges.forEach((edge) => {
    const { slug } = edge.node;
    actions.createPage({
      path: `/tours/${slug}`,
      component: require.resolve(`./src/templates/Tour.template.jsx`),
      context: {
        slug,
      },
    });
  });

  data.posts.edges.forEach((edge) => {
    const { slug } = edge.node;
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/Blog.template.jsx`),
      context: {
        slug,
      },
    });
  });

  // Create blog-list pages
  const posts = data.posts.edges;
  const postsPerPage = 3;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve('src/templates/LatestPostsList.template.jsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  //   if (node.internal.type === `SitePage`) {
  //     const value = createFilePath({ node, getNode });
  //     createNodeField({
  //       name: `slug`,
  //       node,
  //       value,
  //     });
  //   }
  // };
};
