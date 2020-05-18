import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
import Logo from 'images/logo.svg';
import { Link } from 'gatsby';
import MenuItems from 'components/molecules/MenuItems.component';
import MobileMenuItems from 'components/molecules/MobileMenuItems.component';
import SocialItems from 'components/molecules/SocialItems.component';
import { ButtonSimplest } from 'components/atoms/Buttons.component';
import { LinkSimplest } from 'components/atoms/Links.component';

const StyledWrapperNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0 10vw;
  height: 80px;
  /* TODO move navbar height to global styles, in hero.component also*/

  @media (max-width: 1050px) {
    padding: 0 4vw;
  }
`;

const StyledButton = styled(ButtonSimplest)`
  padding: 1rem 1rem 1rem 2.4rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledMobileMenuToogleIcon = styled(FaAlignRight)`
  color: var(--primaryColor);
  font-size: 1.5rem;
`;

const StyledMenuItems = styled(MenuItems)`
  width: 380px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSocialItems = styled(SocialItems)`
  // TODO merge same propeties from other
  // components to parent social component (SocialItems)

  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button > a {
    color: var(--primaryColor);
    font-size: 1.2rem;
    transform: translateY(0px);
    display: inline-block;
    transition: transform 0.16s, color 0.22s 0.1s;

    &:hover {
      color: var(--mainBlack);
      transform: translate(0, -3px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toogleNav = () => setMobileMenuVisible(!mobileMenuVisible);

  return (
    <>
      <StyledWrapperNavbar>
        <LinkSimplest to="/">
          <Logo alt="backroads logo" />
        </LinkSimplest>
        <StyledMenuItems />
        <StyledSocialItems />
        <StyledButton type="button" onClick={toogleNav}>
          <StyledMobileMenuToogleIcon />
        </StyledButton>
      </StyledWrapperNavbar>
      <MobileMenuItems isVisible={mobileMenuVisible} />
    </>
  );
};

export default Navbar;
