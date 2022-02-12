import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: lightblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  display: flex;

  svg {
    padding: .5rem;
    height: 3rem;
  }

  a:last-child {
    margin-left: auto;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
 
  @media screen and (max-width: 55rem) {
    min-height: 100vh;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 10;
    background: lightblue;
    transition: transform .5s;

    &.open {
      transform: translate(100%, 0);
    }
  }
`;

export const NavBurgerMenu = styled.svg`
  display: none;
  padding: .9rem !important;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: 55rem) {
    display: block;
    height: auto;
    width: auto;
  }
`;

export const CategoriesWrapper = styled.ul`
  display: flex;
  flex-grow: 1;
  padding: 0 5rem 0 1rem;

  @media screen and (max-width: 55rem) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

export const CategoryElement = styled.li`
  list-style: none;

  a {
    text-decoration: inherit;
    color: inherit;
    text-transform: capitalize;
    padding-right: 2rem;
    display: block;

    @media screen and (max-width: 55rem) {
      padding: 0;
      margin: 1rem;
    }

    white-space: nowrap;

    &:hover, &:focus {
      text-decoration: underline;
    }

    &.active {
      font-weight: 900;
    }
  }
`;