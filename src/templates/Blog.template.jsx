import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { LinkMain } from 'components/atoms/Links.component';

const StyledWrapperBlogTemplate = styled.section`
  margin: 0 auto;
  padding: 2rem;
  max-width: 1100px;
`;

const StyledImage = styled.div`
  height: 400px;
  margin-bottom: 3rem;
  div {
    height: 100%;
  }
`;

const StyledLink = styled(LinkMain)`
  margin-top: 3rem;
`;

const Blog = ({ data }) => {
  const {
    title,
    published,
    image,
    text: { json },
  } = data.contentfulPost;
  return (
    <MainLayout>
      <StyledWrapperBlogTemplate>
        <StyledImage>
          <Img fluid={image.fluid} />
        </StyledImage>
        <h2>{title}</h2>
        <p>Published at: {published}</p>
        {documentToReactComponents(json)}
        <StyledLink inverted to="/blog">
          Back to all posts
        </StyledLink>
      </StyledWrapperBlogTemplate>
    </MainLayout>
  );
};

export const query = graphql`
  query getPost($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id: contentful_id
      text {
        json
      }
      published(formatString: "D.M.Yr")
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default Blog;
