import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import styled from 'styled-components';

import Hero from 'templates/Hero.template';
import { LinkMain } from 'components/atoms/Links.component';

const StyledHero = styled(Hero)`
  min-height: calc(100vh - 80px);
  padding: 28vh 8vw;
  background-color: var(--primaryColor);
`;

const errorPage = () => {
  return (
    <MainLayout>
      <StyledHero title="oops it's a dead end">
        <LinkMain>back to home page</LinkMain>
      </StyledHero>
    </MainLayout>
  );
};

export default errorPage;
