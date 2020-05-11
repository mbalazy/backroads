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

  p {
    text-align: center;
  }
`;

const StyledIconContainer = styled.div`
  background-color: var(--primaryColor);
  padding: 0.8rem;
  font-size: 24px;
  margin: 0 0 2rem;
`;

const Services = () => {
  return (
    <Section backgroundGrey title="our services">
      <div>
        {servicesData.map(({ icon, title, text }) => (
          <StyledServiceCard>
            <StyledIconContainer>{icon}</StyledIconContainer>
            <HeadingSubTitle small>{title}</HeadingSubTitle>
            <p>{text}</p>
          </StyledServiceCard>
        ))}
      </div>
    </Section>
  );
};

export default Services;
