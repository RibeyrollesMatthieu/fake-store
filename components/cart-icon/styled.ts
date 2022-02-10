import styled from "styled-components";

export const CartWrapper = styled.a`
  svg:hover {
    path:first-of-type {
      fill: #000;
    }
  }
`;

export const Svg = styled.svg`
  cursor: pointer;
   
  path:first-of-type {
    fill: transparent;
    transition: fill .25s;
  }
`;
