import React from 'react';
import TourThumbnail from 'components/organisms/Tours/TourThumbnail.component';
import GridLayout from 'templates/GridLayout.template';

const ToursList = ({ listOfTours }) => {
  return (
    <GridLayout>
      {listOfTours.map(({ node: { ...props } }) => {
        return <TourThumbnail key={props.id} {...props} />;
      })}
    </GridLayout>
  );
};

export default ToursList;
