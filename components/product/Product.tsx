import React from 'react';
import { I_productType } from '../../redux/app/types';
import { ImageWithErrorHandle } from '../image/ImageWithErrorHandle';
import { AddToCartButton, ImageWrapper, ProductPrice, ProductRating, ProductWrapper } from './styled';

interface props {
  product: I_productType;
}

export const Product = ({ product }: props) => {

  return (
    <ProductWrapper>
      <ImageWrapper>
        <ImageWithErrorHandle alt={product.title} src={product.image} layout='fill' objectFit='contain' />
      </ImageWrapper>

      <div> {product.title} </div>
      <ProductPrice> {product.price}€ </ProductPrice>
      <ProductRating> {product.rating.rate}/5 ({product.rating.count} votes) </ProductRating>

      <AddToCartButton>Add to cart</AddToCartButton>
    </ProductWrapper>
  )
};
