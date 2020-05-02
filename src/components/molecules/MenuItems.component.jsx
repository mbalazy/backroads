import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 500px;

  ${({ vertical }) =>
    vertical &&
    css`
      height: 100%;
      flex-direction: column;
      width: auto;
    `}
`;

const StyledLink = styled(Link)`
  color: black;
  transition: color 0.2s;

  &:hover {
    color: palevioletred;
  }
`;

const MenuItems = ({ vertical }) => {
  return (
    <StyledWrapper vertical={vertical}>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink>Blog</StyledLink>
      </li>
      <li>
        <StyledLink>Tours</StyledLink>
      </li>
      <li>
        <StyledLink>Blogs</StyledLink>
      </li>
      <li>
        <StyledLink>Contact</StyledLink>
      </li>
    </StyledWrapper>
  );
};

export default MenuItems;
