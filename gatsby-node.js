const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allTours: allContentfulTour {
        edges {
          node {
            name
            price
            country
            days
            slug
            start
            contentful_id
            description {
              description
            }
            journey {
              day
              info
            }
            images {
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  `);
  data.allTours.edges.forEach((edge) => {
    const {
      slug,
      name,
      price,
      country,
      days,
      contentful_id,
      description: { description },
      journey,
      start,
      images,
    } = edge.node;
    actions.createPage({
      path: `/tours/${slug}`,
      component: require.resolve(`./src/templates/Tour.template.jsx`),
      context: {
        slug,
        name,
        price,
        country,
        days,
        contentful_id,
        description,
        journey,
        start,
        images,
      },
    });
  });
};
