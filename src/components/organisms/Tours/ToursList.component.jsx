import React from 'react';
import styled from 'styled-components';
import TourThumbnail from 'components/organisms/Tours/TourThumbnail.component';

const StyledWrapperTourList = styled.div`
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    max-width: 1170px;
  }
`;

const ToursList = ({ listOfTours }) => {
  return (
    <StyledWrapperTourList>
      {listOfTours.map(({ node: { ...props } }) => (
        <TourThumbnail {...props} />
      ))}
    </StyledWrapperTourList>
  );
};

export default ToursList;
