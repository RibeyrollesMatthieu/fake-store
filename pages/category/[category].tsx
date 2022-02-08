import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper, ProductsWrapper } from '../../components/category/styled';
import { Header } from '../../components/header/Header';
import { Product } from '../../components/product/Product';
import { Title } from '../../components/product/styled';
import { I_productType } from '../../redux/app/types';


const Category = () => {

  const [ category, setCategory ] = useState<string>('');
  const [ products, setProducts ] = useState<I_productType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const routerCategory: string = router.query?.category as string;
    setCategory(routerCategory);

    fetch(`https://fakestoreapi.com/products/category/${routerCategory}`)
      .then(res=>res.json())
      .then(json => setProducts(json))
  }, [router.query])
  

  return (
    <>
      <CategoryWrapper>

        <Title>Category: {category}</Title>
        <ProductsWrapper>
          {
            products.map(product => (
              <Product key={product.title} product={product} />
            ))
          }
        </ProductsWrapper>
      </CategoryWrapper>
    </>
  )
};

export default Category;