import Link from 'next/link';
import React from 'react';
import { useAppDispatch } from '../../redux/app/hooks';
import { I_productType } from '../../redux/app/types';
import { addProduct } from '../../redux/features/cart/cartSlice';
import { AppButton } from '../globals/styled';
import { ImageWithErrorHandle } from '../image/ImageWithErrorHandle';
import { ImageWrapper, ProductCategory, ProductPrice, ProductRating, ProductWrapper } from './styled';

interface props {
  product: I_productType;
  categoryShown?: boolean;
}

export const Product = ({ product, categoryShown }: props) => {

  const dispatch = useAppDispatch();

  return (
    <ProductWrapper>
      {
        categoryShown 
          ? (
            <ProductCategory>
              <Link href={`/category/${product.category}`}>
                <a>{product.category}</a>
              </Link>
            </ProductCategory>
            ) 
          : <></>
      }

      <ImageWrapper>
        <ImageWithErrorHandle alt={product.title} src={product.image} layout='fill' objectFit='contain' />
      </ImageWrapper>

      <div> {product.title} </div>
      <ProductPrice> {product.price}€ </ProductPrice>
      <ProductRating> {product.rating.rate}/5 ({product.rating.count} votes) </ProductRating>

      <AppButton onClick={() => dispatch(addProduct({product: product, quantity: 1}))} >Add to cart</AppButton>
    </ProductWrapper>
  )
};
