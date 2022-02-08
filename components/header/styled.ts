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
  display: flex;
  align-items: center;

  svg {
    margin-left: auto;
    padding: .5rem;
    height: 3rem;
    margin: .5rem;
  }
`;

export const CategoriesWrapper = styled.ul`
  display: flex;
  flex-grow: 1;
  padding: 0 5rem 0 1rem;
`;

export const CategoryElement = styled.li`
  list-style: none;

  a {
    text-decoration: inherit;
    color: inherit;
    text-transform: capitalize;
    padding-right: 2rem;
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