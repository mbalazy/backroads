import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ParagraphCopyright } from 'components/atoms/Typography.component';
import { LinkMain } from 'components/atoms/Links.component';
import { FaMap } from 'react-icons/fa';

const StyledWrapperTourThumbnail = styled.article`
  height: 350px;
  display: block;
  display: flex;
  flex-direction: column;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

const StyledLink = styled(LinkMain)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  opacity: 0;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    opacity: 1;
  }
`;

const StyledImg = styled.div`
  position: relative;
  height: 70%;

  & > div {
    height: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--primaryColor);
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 2;

    @media (max-width: 1000px) {
      opacity: 0.5;
    }
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover ${StyledLink} {
    opacity: 1;
  }
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

const StyledMapIcon = styled(FaMap)`
  margin-right: 5px;
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCountry = styled.h4`
  color: var(--primaryColor);
  display: flex;
  align-items: center;
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
        <StyledLink to={`/tours/${slug}`}>details</StyledLink>
      </StyledImg>
      <StyledInfo>
        <ParagraphCopyright as="h5">{name}</ParagraphCopyright>
        <StyledDetails>
          <StyledCountry>
            <StyledMapIcon />
            {country}
          </StyledCountry>
          <StyledPriceAndDays>
            <h6>
              {days} {days === 1 ? 'DAY' : 'DAYS'}
            </h6>
            <h6>FROM {price}$</h6>
          </StyledPriceAndDays>
        </StyledDetails>
      </StyledInfo>
    </StyledWrapperTourThumbnail>
  );
};

export default TourThumbnail;
