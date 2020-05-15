import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { HeadingMain, ParagraphCopyright } from 'components/atoms/Typography.component';
import BackgroundImage from 'gatsby-background-image';
import { LinkMain } from 'components/atoms/Links.component';

const StyledWrapperHero = styled.header`
  color: var(--mainWhite);
  height: 400px;
  ${({ home }) =>
    home &&
    css`
      text-align: center;
      height: calc(100vh - 80px);
      height: calc(var(--vh, 1vh) * 100 ${`- 80px`});
    `};
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;

  ${({ home }) =>
    home &&
    css`
      background: linear-gradient(to top, rgba(12, 12, 12, 0.32), var(--primaryColor));
      opacity: 1 !important;
      background-position: center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

const Hero = ({ backgroundImage, home, children, title, info, className }) => {
  useEffect(() => {
    if (home) {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, []);

  return (
    <StyledWrapperHero home={home} className={className}>
      <StyledBackgroundImage home={home} fluid={backgroundImage}>
        {home && (
          <>
            <HeadingMain>{title}</HeadingMain>
            <ParagraphCopyright>{info}</ParagraphCopyright>
            <LinkMain to="/tours">explore tours</LinkMain>
            {children}
          </>
        )}
      </StyledBackgroundImage>
    </StyledWrapperHero>
  );
};
export default Hero;
