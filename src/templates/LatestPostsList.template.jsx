import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlogList from 'components/organisms/Blog/BlogList.component';
import { HeadingTitle } from 'components/atoms/Typography.component';
import Pagination from 'components/organisms/Pagination.component';

const StyledHeading = styled(HeadingTitle)`
  text-align: center;
  margin-top: 1.4rem;
`;

const LatestPostList = ({ data, pageContext }) => {
  return (
    <MainLayout>
      <StyledHeading>latest posts</StyledHeading>
      <BlogList listOfBlogs={data.posts.edges} />
      <Pagination pageContext={pageContext} slug="posts" />
    </MainLayout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(skip: $skip, limit: $limit, sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          id: contentful_id
          published(formatString: "D.M.Yr")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default LatestPostList;
