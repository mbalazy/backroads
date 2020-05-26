const path = require('path');

// eslint-disable-next-line no-unused-vars
exports.onCreateWebpackConfig = ({ stage, actions }) => {
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
};
