import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import styled from 'styled-components';

import Hero from 'templates/Hero.template';
import { ButtonMain } from 'components/atoms/Buttons.component';
import { Link } from 'gatsby';

const StyledHero = styled(Hero)`
  min-height: calc(100vh - 80px);
  padding: 28vh 8vw;
  background-color: var(--primaryColor);
`;

const errorPage = () => {
  return (
    <MainLayout>
      <StyledHero title="oops it's a dead end">
        <ButtonMain type="button">
          <Link to="/">back to home page</Link>
        </ButtonMain>
      </StyledHero>
    </MainLayout>
  );
};

export default errorPage;
