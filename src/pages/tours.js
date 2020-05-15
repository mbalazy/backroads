import React from 'react';

import MainLayout from 'templates/MainLayout.component';
import Hero from 'templates/Hero.template';
import { graphql } from 'gatsby';

const tours = ({ data }) => {
  const backgroungImage = data.backgroundImage.childImageSharp.fluid;
  return (
    <MainLayout>
      <Hero backgroundImage={backgroungImage} />
      tours page
    </MainLayout>
  );
};
export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default tours;
