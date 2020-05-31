import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import Hero from 'templates/Hero.template';
import { graphql } from 'gatsby';
import ToursList from 'components/organisms/Tours/ToursList.component';

const tours = ({ data: { allTours, backgroundImage } }) => {
  return (
    <MainLayout>
      <Hero backgroundImage={backgroundImage.childImageSharp.fluid} />
      <ToursList listOfTours={allTours.edges} />
    </MainLayout>
  );
};
export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    allTours: allContentfulTour {
      edges {
        node {
          name
          price
          country
          days
          slug
          id
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default tours;
