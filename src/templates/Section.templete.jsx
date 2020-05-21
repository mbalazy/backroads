import React from 'react';
import { HeadingTitle, PrimaryColored } from 'components/atoms/Typography.component';
import styled, { css } from 'styled-components';

const StyledSectionWrapper = styled.section`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem;
  }

  ${HeadingTitle} {
    text-align: center;
  }

  & > div {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ backgroundGrey }) =>
    backgroundGrey &&
    css`
      background-color: var(--mainGrey);
    `}
`;

const Section = ({ title, children, ...props }) => {
  return (
    <StyledSectionWrapper {...props}>
      <HeadingTitle>
        {/* primary colored second letter */}
        {title.split(' ')[0]}{' '}
        <PrimaryColored>{title.split(' ').splice(1, 1).join(' ')}</PrimaryColored>{' '}
        {title.split(' ').splice(2).join(' ')}
      </HeadingTitle>
      {children}
    </StyledSectionWrapper>
  );
};

export default Section;
