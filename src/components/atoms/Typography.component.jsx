import styled, { css } from 'styled-components';

export const ParagraphCopyright = styled.p`
  letter-spacing: var(--mainSpacing);
  font-size: 1.2rem;
`;

export const HeadingTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
`;

export const HeadingSubTitle = styled.h3`
  font-size: 30px;
  text-transform: uppercase;

  ${({ small }) =>
    small &&
    css`
      font-size: 22px;
    `}
`;

export const PrimaryColored = styled.span`
  color: var(--primaryColor);
`;

export const HeadingMain = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 6px;
`;
