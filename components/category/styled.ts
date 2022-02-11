import styled from "styled-components";

interface I_categoryWrapperProps {
  isLoaded: boolean;
}

export const CategoryWrapper = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div<I_categoryWrapperProps>`
  flex-grow: 1;
  
  ${({ isLoaded }) => (!isLoaded) && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.h1`
  margin: 1rem;
  text-align: center;
`;

export const ProductsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(20rem, 1fr) );
  grid-auto-rows: 1fr;
  margin: auto;
`;