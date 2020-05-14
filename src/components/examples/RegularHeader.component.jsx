import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
  query SecQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={({
        site: {
          siteMetadata: { title, author },
        },
      }) => {
        return (
          <h1>
            title: {title} from: {author}
          </h1>
        );
      }}
    />
  );
};

export default RegularHeader;
