import styled from "styled-components";
import { AppButton } from "../globals/styled";

export const CartWrapper = styled.main`
  text-align: center;
  padding-top: 5rem;
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
`;

export const ImageWrapper = styled.span`
  position: relative;
  min-width: 5rem;
  min-height: 3rem;
  margin-right: 1rem;
`;

export const TextWrapper = styled.span`
  margin-right: 1rem;
`;

export const CartButton = styled(AppButton)`
  margin: 0 .5rem;

  &:first-of-type {
    margin-left: auto;
  }
`;

export const ClearButton = styled(AppButton)`
  margin-top: 2.5rem;
`;