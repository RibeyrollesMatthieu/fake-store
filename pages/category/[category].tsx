import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper, ProductsWrapper, Title } from '../../components/category/styled';
import { Product } from '../../components/product/Product';
import { I_productType } from '../../redux/app/types';


const Category = () => {

  const [ category, setCategory ] = useState<string>('');
  const [ products, setProducts ] = useState<I_productType[]>([]);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(false);
    const routerCategory: string = router.query?.category as string;
    setCategory(routerCategory);

    fetch(`https://fakestoreapi.com/products/category/${routerCategory}`)
      .then(res=>res.json())
      .then(json => setProducts(json))
      .then(() => setIsLoaded(true));
  }, [router.query])
  

  return (
    <>
      <CategoryWrapper>

        <Title>Category: {category}</Title>
        <ProductsWrapper>
          {
            isLoaded
              ? products.map(product => (
                  <Product key={product.title} product={product} />
                ))
              : <>Loading..</>
          }
        </ProductsWrapper>
      </CategoryWrapper>
    </>
  )
};

export default Category;