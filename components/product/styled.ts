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
    aspect-ratio: 1/1 !important;
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

export const AddToCartButton = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background: linear-gradient(to right, #000 50%, #5c5c5c 50%);
  background-size: 200%;
  background-position: right;
  padding: .5rem 1rem;
  color: #fff;
  transition: background .25s;

  &:hover, &:focus {
    background-position: left;
  }
`;