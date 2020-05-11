import React from 'react';
import styled from 'styled-components';
import MenuItems from 'components/molecules/MenuItems.component';
import SocialItems from 'components/molecules/SocialItems.component';

import { ParagraphCopyright } from 'components/atoms/Typography.component';

const StyledWrapperFooter = styled.footer`
  color: var(--mainWhite);
  background-color: var(--mainBlack);
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 0;
`;

const StyledMenuItems = styled(MenuItems)`
  color: var(--mainWhite);
  width: 500px;
  text-transform: uppercase;
`;

const StyledSocialItems = styled(SocialItems)`
  // TODO merge same propeties from other
  // components to parent social component (SocialItems)

  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button > a {
    color: var(--mainWhite);
    font-size: 1.2rem;
    display: inline-block;
    transition: transform 0.16s, color 0.22s 0.1s;

    &:hover {
      color: var(--primaryColor);
    }
  }
`;

const Footer = () => {
  return (
    <StyledWrapperFooter>
      <StyledMenuItems />
      <StyledSocialItems />
      <ParagraphCopyright>
        Copyright © Backroads Travel Company 2020. All Rights Reserved
      </ParagraphCopyright>
    </StyledWrapperFooter>
  );
};

export default Footer;
