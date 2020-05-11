import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import links from 'constans/links';
import { v4 as uuidv4 } from 'uuid';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 400px;

  ${({ vertical }) =>
    vertical &&
    css`
      height: 100%;
      flex-direction: column;
      width: auto;
      align-items: baseline;
    `}
`;

const StyledLink = styled(Link)`
  color: inherit;
  transition: color 0.2s;
  &:hover {
    color: var(--primaryColor);
  }
`;

const MenuItems = ({ vertical, ...props }) => {
  return (
    <StyledList {...props} vertical={vertical}>
      {links.map(({ path, text }) => (
        <li key={uuidv4()}>
          <StyledLink to={path}>{text}</StyledLink>
        </li>
      ))}
    </StyledList>
  );
};

export default MenuItems;
