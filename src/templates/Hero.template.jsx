import React from 'react';
import styled, { css } from 'styled-components';
import { HeadingMain, ParagraphCopyright } from 'components/atoms/Typography.component';

const StyledWrapperHero = styled.header`
  background-image: url(${({ backgroundSrc }) => backgroundSrc});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ gradient }) =>
    gradient &&
    css`
      background-image: linear-gradient(to top, rgba(12, 12, 12, 0.32), var(--primaryColor)),
        url(${({ backgroundSrc }) => backgroundSrc});
    `}
`;

const StyledHeadingMain = styled(HeadingMain)`
  color: var(--mainWhite);
  text-align: center;
`;

const StyledParagraphCopyright = styled(ParagraphCopyright)`
  color: var(--mainWhite);
  text-align: center;
`;

const Hero = ({ children, title, info, ...props }) => {
  return (
    <StyledWrapperHero {...props}>
      <StyledHeadingMain>{title}</StyledHeadingMain>
      <StyledParagraphCopyright>{info}</StyledParagraphCopyright>
      {children}
    </StyledWrapperHero>
  );
};

export default Hero;
