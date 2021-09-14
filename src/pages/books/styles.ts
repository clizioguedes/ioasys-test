import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const BookContent = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  // Mobile
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  // Tablets
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Desktops
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
