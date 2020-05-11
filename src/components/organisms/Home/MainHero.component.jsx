import React from 'react';
import styled from 'styled-components';
import backgroundImg from 'images/defaultBcg.jpeg';

import Hero from 'templates/Hero.template';
import { ButtonMain } from 'components/atoms/Buttons.component';
import { Link } from 'gatsby';

const StyledHero = styled(Hero)`
  min-height: calc(100vh - 80px);
  padding: 24vh 14vw;
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
      <ButtonMain type="button">
        <Link to="/tours">explore tours</Link>
      </ButtonMain>
    </StyledHero>
  );
};

export default MainHero;
