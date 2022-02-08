import Image from 'next/image';
import React from 'react';
import { I_productType } from '../../redux/app/types';
import { ImageWrapper, ProductWrapper } from './styled';

interface props {
  product: I_productType;
}

export const Product = ({ product }: props) => {
  return (
    <ProductWrapper>
      {product.title}

      <ImageWrapper>
        <Image src={product.image} alt="" layout='fill' />
      </ImageWrapper>
    </ProductWrapper>
  )
};
