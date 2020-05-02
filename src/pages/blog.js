import React from 'react';
import MainLayout from 'templates/MainLayout.component';

import { Link } from 'gatsby';

const blog = () => {
  return (
    <MainLayout>
      blog page <Link to="/">home</Link>
    </MainLayout>
  );
};

export default blog;
