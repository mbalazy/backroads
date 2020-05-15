import React from 'react';
import MenuItems from 'components/molecules/MenuItems.component';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  height: 0;
  padding: 0rem 4rem;
  overflow: hidden;
  transition: height 0.14s, padding 0.14s;
  text-align: right;

  ${({ isVisible }) =>
    isVisible &&
    css`
      height: 230px;
      padding: 2rem 4rem;
    `};
`;

const MobileMenuItems = ({ isVisible }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <MenuItems vertical />
    </StyledWrapper>
  );
};

export default MobileMenuItems;
