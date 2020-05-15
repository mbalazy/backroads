import React from 'react';
import styled, { css } from 'styled-components';
import { HeadingMain, ParagraphCopyright } from 'components/atoms/Typography.component';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { LinkMain } from 'components/atoms/Links.component';

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const StyledWrapperHero = styled.header`
  color: var(--mainWhite);
  height: 400px;

  ${({ home }) =>
    home &&
    css`
      text-align: center;
      height: calc(100vh - 80px);
      height: calc(var(--vh, 1vh) * 100 ${`- 80px`});
    `}
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;

  ${({ home }) =>
    home &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

const getImages = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            originalName
          }
        }
      }
    }
  }
`;

const Hero = ({ imgName, home, children, title, info, className }) => (
  <StaticQuery
    query={getImages}
    render={(data) => {
      const image = data.allImageSharp.edges.find(
        (edge) => edge.node.fluid.originalName === imgName,
      );
      if (!image) {
        return null;
      }

      const backgroundFluidImageStack = () =>
        home
          ? [
              image.node.fluid,
              `linear-gradient(to top, rgba(12, 12, 12, 0.32), var(--primaryColor))`,
            ].reverse()
          : [image.node.fluid];

      return (
        <StyledWrapperHero home={home} className={className}>
          <StyledBackgroundImage home={home} fluid={backgroundFluidImageStack()}>
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
    }}
  />
);
export default Hero;
