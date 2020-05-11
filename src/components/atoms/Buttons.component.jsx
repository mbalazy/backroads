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
  border: none;
  outline: none;
  border: 2px solid var(--mainWhite);
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: var(--mainWhite);
    cursor: pointer;
  }

  & > a {
    display: inline-block;
    padding: 1.2rem 3rem;
    color: var(--mainWhite);

    &:hover {
      color: var(--primaryColor);
    }
  }

  ${({ inverted }) =>
    inverted &&
    css`
      border: 2px solid var(--primaryColor);
      background-color: var(--primaryColor);

      &:hover {
        background-color: var(--mainWhite);
      }

      & > a {
        display: inline-block;
        padding: 1.2rem 3rem;
        color: var(--mainWhite);

        &:hover {
          color: var(--primaryColor);
        }
      }
    `}
`;

export const ButtonMain = ({ children, ...props }) => {
  return <ButtonMainContainer {...props}>{children}</ButtonMainContainer>;
};
