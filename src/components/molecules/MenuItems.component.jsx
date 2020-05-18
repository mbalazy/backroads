import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styled, { css } from 'styled-components';

import links from 'constans/links';
import { v4 as uuidv4 } from 'uuid';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  ${({ vertical }) =>
    vertical &&
    css`
      height: 100%;
      flex-direction: column;
      width: auto;
      align-items: baseline;
    `}

  & > li {
    width: 100%;
    text-align: center;
  }
`;

const StyledLink = styled(AniLink)`
  display: inline-block;
  color: inherit;
  transition: color 0.2s;
  padding: 0.4rem 2rem;
  margin: 0.3rem 0;
  width: 100%;
  &:hover {
    color: var(--primaryColor);
  }

  ${({ border }) =>
    border &&
    css`
      border: 1px solid var(--primaryColor);
    `}
`;

const MenuItems = ({ vertical, border, ...props }) => {
  return (
    <StyledList {...props} vertical={vertical}>
      {links.map(({ path, text }) => (
        <li key={uuidv4()}>
          <StyledLink fade duration={0.5} border={border} to={path}>
            {text}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
};

export default MenuItems;
