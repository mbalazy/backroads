import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import Hero from 'templates/Hero.template';
import { graphql } from 'gatsby';
import BlogList from 'components/organisms/Blog/BlogList.component';

const blog = ({ data, data: { posts } }) => {
  const backgroungImage = data.backgroundImage.childImageSharp.fluid;
  return (
    <MainLayout>
      <Hero backgroundImage={backgroungImage} />
      <BlogList listOfBlogs={posts.edges} />
    </MainLayout>
  );
};

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
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

export default blog;
