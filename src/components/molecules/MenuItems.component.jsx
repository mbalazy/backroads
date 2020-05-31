import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import styled, { css } from 'styled-components';

import links from 'constans/links';

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

const StyledLink = styled(Link)`
  display: inline-block;
  color: inherit;
  transition: color 0.2s;
  padding: 0.4rem 1rem;
  margin: 0.3rem;
  white-space: nowrap;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0.4rem 0.5rem;
    flex-direction: column;
  }
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
        <li key={path}>
          <StyledLink border={border} to={path}>
            {text}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
};

MenuItems.propTypes = {
  border: PropTypes.bool,
  vertical: PropTypes.bool,
};

MenuItems.defaultProps = {
  border: false,
  vertical: false,
};

export default MenuItems;
