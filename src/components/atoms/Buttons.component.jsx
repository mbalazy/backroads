import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

export const ButtonSimplest = styled.button`
  background: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonMainContainer = styled.button`
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

export const ButtonMain = ({ children, ...props }) => {
  return (
    <ButtonMainContainer fade duration={0.4} {...props}>
      {children}
    </ButtonMainContainer>
  );
};

ButtonMain.propTypes = {
  children: PropTypes.element.isRequired,
};
