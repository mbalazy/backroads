import React from 'react';
import TourThumbnail from 'components/organisms/Tours/TourThumbnail.component';
import { v4 as uuidv4 } from 'uuid';
import GridLayout from 'templates/GridLayout.template';

const ToursList = ({ listOfTours }) => {
  return (
    <GridLayout>
      {listOfTours.map(({ node: { ...props } }) => (
        <TourThumbnail key={uuidv4()} {...props} />
      ))}
    </GridLayout>
  );
};

export default ToursList;
