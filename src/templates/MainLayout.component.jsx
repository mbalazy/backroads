import React from 'react';
import Footer from 'components/organisms/Footer.component';
import Navbar from 'components/organisms/Navbar.component';
import './MainLayout.css';
import styled from 'styled-components';

const StyledMain = styled.main`
  min-height: 100vh;
`;

const MainLayout = ({ children }) => {
  return (
    <StyledMain>
      <Navbar />
      {children}
      <Footer />
    </StyledMain>
  );
};

export default MainLayout;
