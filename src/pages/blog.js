import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import Hero from 'templates/Hero.template';
import { graphql } from 'gatsby';

const blog = ({ data }) => {
  const backgroungImage = data.backgroundImage.childImageSharp.fluid;
  return (
    <MainLayout>
      <Hero backgroundImage={backgroungImage} />
      blog page
    </MainLayout>
  );
};

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
