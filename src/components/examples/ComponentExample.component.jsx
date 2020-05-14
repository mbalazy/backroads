import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
        __typename
      }
    }
  }
`;

const ComponentExample = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(getSiteData);

  return (
    <>
      <h2>title: {title}</h2>
      <h2>author: {description}</h2>
    </>
  );
};

export default ComponentExample;
