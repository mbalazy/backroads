import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ParagraphCopyright } from 'components/atoms/Typography.component';

const StyledWrapperTourThumbnail = styled.article`
  height: 350px;
  display: block;
  display: flex;
  flex-direction: column;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
`;

const StyledImg = styled.div`
  height: 70%;
  border: 1px solid red;
`;

const StyledInfo = styled.div`
  background-color: var(--mainWhite);
  height: 30%;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    display: block;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCountry = styled.h4`
  color: var(--primaryColor);
`;

const StyledPriceAndDays = styled.div`
  color: var(--darkGrey);
  h6 {
    margin: 0;
    padding: 0;
  }
`;

const TourThumbnail = ({ name, price, country, days, slug, contentful_id, images }) => {
  console.log(images);
  return (
    <StyledWrapperTourThumbnail>
      <StyledImg>
        <Img fluid={images[0].fluid} />
      </StyledImg>
      <StyledInfo>
        <ParagraphCopyright>{name}</ParagraphCopyright>
        <StyledDetails>
          <StyledCountry>{country}</StyledCountry>
          <StyledPriceAndDays>
            <h6>{days} days</h6>
            <h6>FROM {price}$</h6>
          </StyledPriceAndDays>
        </StyledDetails>
      </StyledInfo>
    </StyledWrapperTourThumbnail>
  );
};

export default TourThumbnail;
