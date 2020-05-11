import React from 'react';
import styled from 'styled-components';
import Section from 'templates/Section.templete';
import { HeadingSubTitle } from 'components/atoms/Typography.component';
import { ButtonMain } from 'components/atoms/Buttons.component';
import { Link } from 'gatsby';
import backgroundImg from 'images/defaultBcg.jpeg';

const StyledImg = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  box-shadow: 6px 6px 10px -6px rgba(0, 0, 0, 0.75);
`;

const StyledArticle = styled.article`
  margin: 0 3rem;
  width: 600px;
`;

const About = () => {
  return (
    <Section title="about us">
      <div>
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
          <ButtonMain inverted>
            <Link to="/blog">Read more</Link>
          </ButtonMain>
        </StyledArticle>
      </div>
    </Section>
  );
};

export default About;
