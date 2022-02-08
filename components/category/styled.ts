import styled from "styled-components";

export const CategoryWrapper = styled.main`
`;

export const ProductsWrapper = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat( auto-fit, minmax(15rem, 1fr) );
  grid-auto-rows: 1fr;
`;