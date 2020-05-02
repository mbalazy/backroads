import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <MainLayout>
      <Link to="tours">tours</Link>
    </MainLayout>
  </>
);

export default Index;
