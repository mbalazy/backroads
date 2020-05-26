import styled from 'styled-components';

const GridLayout = styled.div`
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    max-width: 1170px;
  }
`;

export default GridLayout;
