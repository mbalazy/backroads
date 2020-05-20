import React from 'react';
import Section from 'templates/Section.templete';
import { useStaticQuery, graphql } from 'gatsby';
import ToursList from 'components/organisms/Tours/ToursList.component';

const getFeaturedImages = graphql`
  query FeaturedTours {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          country
          days
          images {
            fluid {
              base64
            }
          }
        }
      }
    }
  }
`;

const Featured = () => {
  const { featuredTours } = useStaticQuery(getFeaturedImages);

  return (
    <Section title="featured tours">
      <div>
        <ToursList listOfTours={featuredTours.edges} />
      </div>
    </Section>
  );
};

export default Featured;
