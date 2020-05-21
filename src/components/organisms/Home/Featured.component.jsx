import React from 'react';
import Section from 'templates/Section.templete';
import { useStaticQuery, graphql } from 'gatsby';
import ToursList from 'components/organisms/Tours/ToursList.component';
import { LinkMain } from 'components/atoms/Links.component';

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
              ...GatsbyContentfulFluid_withWebp
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
      <LinkMain inverted to="/tours">
        all tours
      </LinkMain>
    </Section>
  );
};

export default Featured;
