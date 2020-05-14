import React from 'react';
import styled from 'styled-components';
import Section from 'templates/Section.templete';
import { HeadingSubTitle } from 'components/atoms/Typography.component';
import { LinkMain } from 'components/atoms/Links.component';

import backgroundImg from 'images/defaultBcg.jpeg';

const StyledImg = styled.img`
  display: block;
  margin: auto;
  background-repeat: no-repeat;
  background-size: center center;

  width: 400px;
  box-shadow: 6px 6px 10px -6px rgba(0, 0, 0, 0.75);

  @media (max-width: 1100px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

const StyledArticle = styled.article`
  margin: 0 3rem;
  width: 600px;

  @media (max-width: 1100px) {
    margin: 0 auto 3rem;
    width: 80vw;
  }
`;

const StyledDiv = styled.div`
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
const About = () => {
  return (
    <Section title="about us">
      <StyledDiv>
        <StyledArticle>
          <StyledImg src={backgroundImg} alt="about us" />
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
            Read more
          </LinkMain>
        </StyledArticle>
      </StyledDiv>
    </Section>
  );
};

export default About;
