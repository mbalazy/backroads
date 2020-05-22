import React from 'react';
import { graphql } from 'gatsby';
import GridLayout from 'templates/GridLayout.template';
import { v4 as uuidv4 } from 'uuid';
import MainLayout from 'templates/MainLayout.component';
import { LinkMain } from 'components/atoms/Links.component';
import Hero from 'templates/Hero.template';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

const Tour = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    journey,
    images: [mainImage, ...smallImages],
  } = data.contentfulTour;

  return (
    <MainLayout>
      <Hero backgroundImage={mainImage.fluid} />
      <GridLayout>
        {smallImages.map(({ fluid }) => (
          <Img key={uuidv4()} fluid={fluid} />
        ))}
      </GridLayout>
      <h1>{name}</h1>
      <LinkMain inverted to="/tours">
        all tours
      </LinkMain>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "ddd MMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default Tour;
