import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 8rem !important;

  img {
    /* height: 100%; */
    /* width: auto; */
    /* aspect-ratio: 1/1 !important; */
  }
`;

export const ProductPrice = styled.div`
  color: rgba(200, 24, 0);
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const ProductRating = styled.div`
  margin: auto 0 1rem 0;
`;

export const ProductCategory = styled.div`
  padding-bottom: .5rem;
  margin-bottom: 1rem;
  text-align: right;
  text-transform: capitalize;
  font-weight: 700;
  border-bottom: 1px solid #242424;
  overflow: hidden;

  a {
    display: inline-block;
    position: relative;
    text-decoration: inherit;
    color: inherit;
    transition: transform .25s;

    &::before{
      content: '>';
      position: absolute;
      right: 0;
      transform: translate(2rem, 0);
      transition: transform .25s;
    }

    &:hover, &:focus {
      transform: translate(-1rem, 0);

      &::before {
        transform: translate(1rem, 0);
      }
    }
  }
`;