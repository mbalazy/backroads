import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const LinkMainContainer = styled(Link)`
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
  return <LinkMainContainer {...props}>{children}</LinkMainContainer>;
};

LinkMain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export const LinkSimplest = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

LinkSimplest.propTypes = {
  children: PropTypes.element.isRequired,
};
