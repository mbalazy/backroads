import React from 'react';
import styled from 'styled-components';
import Section from 'templates/Section.templete';
import { HeadingSubTitle } from 'components/atoms/Typography.component';
import servicesData from 'constans/services';

const StyledServiceCard = styled.div`
  margin: 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 600px) {
    margin: 1rem 2rem 0;
  }
`;

const StyledIconContainer = styled.div`
  background-color: var(--primaryColor);
  padding: 0.8rem;
  font-size: 24px;
  margin: 0 0 2rem;
`;

const StyledDiv = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Services = () => {
  return (
    <Section backgroundGrey title="our services">
      <StyledDiv>
        {servicesData.map(({ icon, title, text }) => (
          <StyledServiceCard key={title}>
            <StyledIconContainer>{icon}</StyledIconContainer>
            <HeadingSubTitle small>{title}</HeadingSubTitle>
            <p>{text}</p>
          </StyledServiceCard>
        ))}
      </StyledDiv>
    </Section>
  );
};

export default Services;
