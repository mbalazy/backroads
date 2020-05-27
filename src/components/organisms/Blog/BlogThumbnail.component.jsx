import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { LinkMain } from 'components/atoms/Links.component';

const StyledWrapperBlogThumbnail = styled.article`
  height: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

const StyledLink = styled(LinkMain)`
  padding: 1.2rem 2.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  opacity: 0;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    opacity: 1;
  }
`;

const StyledImg = styled.div`
  position: relative;
  height: 70%;

  & > div {
    height: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--primaryColor);
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 2;

    @media (max-width: 1000px) {
      opacity: 0.5;
    }
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover ${StyledLink} {
    opacity: 1;
  }
`;

const StyledInfo = styled.div`
  padding: 0.6rem;
`;

const StyledPublished = styled.p`
  font-size: 0.8rem;
  display: block;
  position: absolute;
  bottom: 20px;
  left: 0px;
  background: var(--primaryColor);
  padding: 0.3rem 1rem 0.3rem 1.8rem;
  margin: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const BlogThumbnail = ({ id, image, published, slug, title }) => {
  return (
    <StyledWrapperBlogThumbnail>
      <StyledImg>
        <Img fadeIn objectFit="cover" objectPosition="50% 50%" fluid={image.fluid} />
        <StyledLink to={`/blog/${slug}`}>read more</StyledLink>
        <StyledPublished>{published}</StyledPublished>
      </StyledImg>
      <StyledInfo>
        <h1>{title}</h1>
      </StyledInfo>
    </StyledWrapperBlogThumbnail>
  );
};

export default BlogThumbnail;
