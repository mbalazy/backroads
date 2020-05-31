import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import styled from 'styled-components';
import { HeadingMain } from 'components/atoms/Typography.component';
import { LinkMain } from 'components/atoms/Links.component';
import SEO from 'components/atoms/SEO';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 80px);
  background-color: var(--primaryColor);
  color: var(--mainWhite);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const errorPage = () => {
  return (
    <MainLayout>
      <SEO title="Error" description="this page does not exists" />
      <StyledWrapper>
        <HeadingMain>Oops, that is a death end</HeadingMain>
        <LinkMain to="/">
          <>back to home page</>
        </LinkMain>
      </StyledWrapper>
    </MainLayout>
  );
};

export default errorPage;
