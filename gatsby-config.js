module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: true,
      },
    },
  ],
};
