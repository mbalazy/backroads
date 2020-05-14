import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import Images from 'components/examples/Images.component';

const blog = () => {
  return (
    <MainLayout>
      <h3>hello from blog</h3>
      <Images />
    </MainLayout>
  );
};

export default blog;
