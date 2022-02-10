import styled from "styled-components";

export const AppButton = styled.button`
  cursor: pointer;
  white-space: nowrap;
  border: none;
  background: linear-gradient(to right, #000 50%, #5c5c5c 50%);
  background-size: 200%;
  background-position: right;
  padding: .5rem 1rem;
  color: #fff;
  transition: background .25s;
  height: fit-content;

  &:hover, &:focus {
    background-position: left;
  }
`;