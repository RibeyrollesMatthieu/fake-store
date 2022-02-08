import styled from "styled-components";

export const CategoryWrapper = styled.main`
`;

export const Title = styled.h1`
  margin: 1rem;
  text-align: center;
`;

export const ProductsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(15rem, 1fr) );
  grid-auto-rows: 1fr;
  margin: auto;
`;