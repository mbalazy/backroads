import React from 'react';
import styled from 'styled-components';
import backgroundImg from 'images/defaultBcg.jpeg';

import Hero from 'templates/Hero.template';
import { LinkMain } from 'components/atoms/Links.component';

const StyledHero = styled(Hero)`
  height: calc(100vh - 80px);
  padding: 24vh 14vw;
  @media (max-width: 600px) {
    padding: 8vh 3vw;
  }
`;

const MainHero = () => {
  return (
    <StyledHero
      gradient
      backgroundSrc={backgroundImg}
      title="continue exploring"
      info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente id sit ut
    soluta quam."
    >
      <LinkMain to="/tours">explore tours</LinkMain>
    </StyledHero>
  );
};

export default MainHero;
