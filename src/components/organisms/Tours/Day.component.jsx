import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import { ButtonSimplest } from 'components/atoms/Buttons.component';

const StyledWrapperDay = styled.article`
  max-width: 500px;
`;

const StyledHeading = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  display: block;
  margin: 1rem 0;
`;

const StyledIcon = styled.div`
  font-size: 1.3rem;
  color: var(--primaryColor);
`;

const StyledButton = styled(ButtonSimplest)`
  padding: 1rem;
`;

const Day = ({ day, info }) => {
  const [isInfoVisible, setisInfoVisible] = useState(false);

  return (
    <StyledWrapperDay>
      <StyledHeading>
        <h4>{day}</h4>
        <StyledButton onClick={() => setisInfoVisible(!isInfoVisible)}>
          <StyledIcon>{isInfoVisible ? <FaArrowCircleUp /> : <FaArrowCircleDown />}</StyledIcon>
        </StyledButton>
      </StyledHeading>
      {isInfoVisible && <StyledParagraph>{info}</StyledParagraph>}
    </StyledWrapperDay>
  );
};

export default Day;
