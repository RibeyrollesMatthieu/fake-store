import Link from 'next/link';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/app/hooks';
import { I_productType } from '../../redux/app/types';
import { addProduct } from '../../redux/features/cart/cartSlice';
import { AppButton } from '../globals/styled';
import { ImageWithErrorHandle } from '../image/ImageWithErrorHandle';
import { Star } from '../stars/Star';
import { ImageWrapper, ProductCategory, ProductPrice, ProductRating, ProductWrapper, StarsWrapper } from './styled';
interface props {
  product: I_productType;
  categoryShown?: boolean;
}

export const Product = ({ product, categoryShown }: props) => {

  const getStarPatterns = () => {
    let left: number = product.rating.rate;
    let patterns: number[] = [];
    let currentRating: number = 0;

    for (let i = 0; i < 5; i++) {
      currentRating = (left > 1) ? 100 : Math.round(left * 100);
      patterns = [ ...patterns, currentRating ];
      left = left > 1 ? left - 1 : 0;
    }

    return patterns;
  }

  const dispatch = useAppDispatch();
  const [ patterns, setPatterns ] = useState<number[]>(getStarPatterns());

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
      <ProductRating> 
        <StarsWrapper className="stars">
          <Star pourcentage={patterns[0]}/>
          <Star pourcentage={patterns[1]}/>
          <Star pourcentage={patterns[2]}/>
          <Star pourcentage={patterns[3]}/>
          <Star pourcentage={patterns[4]} />
        </StarsWrapper>
      
        ({product.rating.count} votes) 
      </ProductRating>

      <AppButton onClick={() => dispatch(addProduct({product: product, quantity: 1}))} >Add to cart</AppButton>
    </ProductWrapper>
  )
};
