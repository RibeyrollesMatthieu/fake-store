import styled from "styled-components";
import { AppButton } from "../globals/styled";

export const CartWrapper = styled.main`
  text-align: center;
  padding-bottom: 5rem;

  h1 {
    margin-bottom: 5rem;
  }
`;

export const CartProducts = styled.ul`
  margin: auto auto 2.5rem auto;
  width: clamp(20rem, 80%, 70rem);
  text-align: left;
`;

export const CartProductLine = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1rem;

  @media screen and (max-width: 55rem) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.span`
  position: relative;
  min-width: 5rem;
  min-height: 3rem;
  margin-right: 1rem;


  @media screen and (max-width: 55rem) {
    min-height: 4rem;
  }
`;

export const TextWrapper = styled.span`
  margin-right: 1rem;
`;

export const CartButton = styled(AppButton)`
  margin: 0 .5rem;

  @media screen and (max-width) {
    margin: auto;
  }

  &:first-of-type {
    margin-left: auto;

    @media screen and (max-width: 55rem) {
      margin: 1rem auto 1rem auto;
    }
  }
`;

export const ClearButton = styled(AppButton)`
  margin-top: 2.5rem;
`;