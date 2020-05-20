import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ParagraphCopyright } from 'components/atoms/Typography.component';

const StyledWrapperTourThumbnail = styled.article`
  height: 330px;
  display: block;
  display: flex;
  flex-direction: column;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
`;

const StyledImg = styled.div`
  height: 70%;
`;

const StyledInfo = styled.div`
  background-color: var(--mainWhite);
  height: 30%;
  padding: 0.6rem 1.2rem;
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
  return (
    <StyledWrapperTourThumbnail>
      <StyledImg>
        <Img fadeIn objectFit="cover" objectPosition="50% 50%" fluid={images[0].fluid} />
      </StyledImg>
      <StyledInfo>
        <ParagraphCopyright as="h5">{name}</ParagraphCopyright>
        <StyledDetails>
          <StyledCountry>{country}</StyledCountry>
          <StyledPriceAndDays>
            <h6>
              {days} {days === 1 ? 'day' : 'days'}
            </h6>
            <h6>FROM {price}$</h6>
          </StyledPriceAndDays>
        </StyledDetails>
      </StyledInfo>
    </StyledWrapperTourThumbnail>
  );
};

export default TourThumbnail;
