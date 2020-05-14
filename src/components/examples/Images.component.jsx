import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import img from 'images/connectBcg.jpeg';
import Img from 'gatsby-image';

const getImages = graphql`
  query {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const StyledWrapperImages = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }

  img,
  .img {
    margin: 0 auto;
    padding: 0.3rem;
    width: 98%;

    @media (min-width: 600px) {
      width: 30vw;
    }
  }

  .fluid {
    width: 200px;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Images = () => {
  const { fluid, fixed } = useStaticQuery(getImages);
  return (
    <StyledWrapperImages>
      <article className="img">
        <h3>fluid img/svg</h3>
        <Img fluid={fluid.childImageSharp.fluid} />
        <div className="fluid">
          <Img fluid={fluid.childImageSharp.fluid} />
        </div>
      </article>
      <StyledArticle>
        <h3>fixed img/blur</h3>
        <Img fixed={fixed.childImageSharp.fixed} />
      </StyledArticle>
      <StyledArticle>
        <h3>basic image</h3>
        <img src={img} className="basic" alt="basic" />
      </StyledArticle>
    </StyledWrapperImages>
  );
};

export default Images;
