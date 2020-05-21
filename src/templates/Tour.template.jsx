import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import { LinkMain } from 'components/atoms/Links.component';

const Tour = ({
  pageContext: {
    slug,
    name,
    price,
    country,
    days,
    contentful_id,
    description,
    journey,
    start,
    images,
  },
}) => {
  return (
    <MainLayout>
      <LinkMain inverted to="/tours">
        all tours
      </LinkMain>
      <h2>{name}</h2>
      <h3>{country}</h3>
      <h3>{price}$</h3>
      <p>{description}</p>
    </MainLayout>
  );
};

export default Tour;
