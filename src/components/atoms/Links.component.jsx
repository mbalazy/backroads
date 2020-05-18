import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const LinkMainContainer = styled(AniLink)`
  font-size: 1rem;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid var(--mainWhite);
  transition: background-color 0.4s, color 0.4s;
  padding: 1.2rem 3rem;
  display: inline-block;
  color: var(--mainWhite);

  &:hover {
    background-color: var(--mainWhite);
    color: var(--primaryColor);
    cursor: pointer;
  }

  ${({ inverted }) =>
    inverted &&
    css`
      border: 2px solid var(--primaryColor);
      background-color: var(--primaryColor);

      &:hover {
        background-color: var(--mainWhite);
      }
    `}
`;

export const LinkMain = ({ children, ...props }) => {
  return (
    <LinkMainContainer fade duration={0.5} {...props}>
      {children}
    </LinkMainContainer>
  );
};
