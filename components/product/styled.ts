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