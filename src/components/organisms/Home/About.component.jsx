import React from 'react';
import styled from 'styled-components';
import Section from 'templates/Section.templete';
import { HeadingSubTitle } from 'components/atoms/Typography.component';
import { LinkMain } from 'components/atoms/Links.component';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const getImage = graphql`
  query {
    aboutUsImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledArticle = styled.article`
  margin: 0 3rem;
  width: 600px;

  @media (max-width: 1100px) {
    margin: 0 auto 3rem;
    width: 90vw;
  }
`;

const StyledDiv = styled.div`
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const About = () => {
  const { aboutUsImage } = useStaticQuery(getImage);

  return (
    <Section title="about us">
      <StyledDiv>
        <StyledArticle>
          <Img fluid={aboutUsImage.childImageSharp.fluid} alt="awesome landscape" />
        </StyledArticle>
        <StyledArticle>
          <HeadingSubTitle>explore the difference</HeadingSubTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequuntur aliquid ullam
            adipisci atque quas nemo asperiores error libero expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit placeat.
            Officiis quasi eveniet illo consequatur dolore nostrum ullam esse.
          </p>
          <LinkMain to="/" inverted="true">
            <>Read more</>
          </LinkMain>
        </StyledArticle>
      </StyledDiv>
    </Section>
  );
};

export default About;
