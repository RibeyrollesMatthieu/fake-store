import styled from "styled-components";

export const HeaderWrapper = styled.header`
`;

export const NavWrapper = styled.nav`
`;

export const CategoriesWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  background: lightblue;
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

    &:hover, &:focus {
      text-decoration: underline;
    }

    &.active {
      font-weight: 900;
      text-decoration: underline;
    }
  }
`;