import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: lightblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

export const NavWrapper = styled.nav`
`;

export const CategoriesWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;

export const CategoryElement = styled.li`
  list-style: none;

  a {
    text-decoration: inherit;
    color: inherit;
    text-transform: capitalize;
    padding: 1rem;
    display: block;

    white-space: nowrap;

    &:hover, &:focus {
      text-decoration: underline;
    }

    &.active {
      font-weight: 900;
    }
  }
`;