import React from 'react';
import Footer from 'components/organisms/Footer.component';
import Navbar from 'components/organisms/Navbar.component';
import './MainLayout.css';
import styled from 'styled-components';

const InnerWrapper = styled.div`
  min-height: 90vh;
`;

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <InnerWrapper>{children}</InnerWrapper>
      <Footer />
    </main>
  );
};

export default MainLayout;
