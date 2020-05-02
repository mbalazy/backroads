import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
import Logo from 'images/logo.svg';
import MenuItems from 'components/molecules/MenuItems.component';
import SocialItems from 'components/molecules/SocialItems.component';

const StyledWrapper = styled.nav`
  padding: 0 10vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const useWindowSize = () => {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth, window.innerHeigh]);
    return windowSize;
  };

  const size = useWindowSize();

  return (
    <>
      <StyledWrapper>
        <Logo />
        {size.width > 900 ? (
          <>
            <MenuItems />
            <SocialItems />
          </>
        ) : (
          <FaAlignRight />
        )}
      </StyledWrapper>
    </>
  );
};

export default Navbar;
