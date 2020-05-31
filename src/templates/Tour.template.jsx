import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import GridLayout from 'templates/GridLayout.template';
import MainLayout from 'templates/MainLayout.component';
import { LinkMain } from 'components/atoms/Links.component';
import Hero from 'templates/Hero.template';
import { HeadingSubTitle, PrimaryColored } from 'components/atoms/Typography.component';
import Day from 'components/organisms/Tours/Day.component';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

const StyledDetails = styled.div`
  margin: 2rem 3rem;

  @media screen and (max-width: 446px) {
    margin: 2rem 2rem;
  }
`;

const StyledPriceAndCountry = styled.p`
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
  }

  ${PrimaryColored} {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    margin-right: 0.4rem;
  }
`;

const StyledLink = styled(LinkMain)`
  margin: 3rem 0 2rem;
`;

const StyledSchedule = styled.div`
  margin: 4rem 0 0;

  ${HeadingSubTitle} {
    margin: 0 0 2rem;
  }
`;

const StyledTitle = styled(HeadingSubTitle)`
  margin: 2rem 0;
`;

const Tour = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    journey,
    images: [mainImage, ...restImages],
  } = data.contentfulTour;

  return (
    <MainLayout>
      <Hero backgroundImage={mainImage.fluid} />
      <GridLayout>
        {restImages.map(({ fluid }) => {
          return <Img key={fluid.src} fluid={fluid} alt="single tour" />;
        })}
      </GridLayout>
      <StyledDetails>
        <StyledTitle>{name}</StyledTitle>
        <StyledPriceAndCountry>
          <PrimaryColored>
            <FaMoneyBillWave />
          </PrimaryColored>
          <span>Starting from {price}$</span>
          <PrimaryColored>
            <FaMap />
          </PrimaryColored>
          <span>{country}</span>
        </StyledPriceAndCountry>
        <h4>Starts On: {start}</h4>
        <h4>
          Duration: {days} {days === 1 ? 'day' : 'days'}
        </h4>
        <p>{description}</p>
        <StyledSchedule>
          <HeadingSubTitle small>Daily Schedule</HeadingSubTitle>
          {journey.map(({ day, info }) => (
            <Day key={day} day={day} info={info} />
          ))}
        </StyledSchedule>
        <StyledLink inverted to="/tours">
          back to tours
        </StyledLink>
      </StyledDetails>
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
