import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper, Content, ProductsWrapper, Title } from '../../components/category/styled';
import { Product } from '../../components/product/Product';
import { Spinner } from '../../components/spinner/Spinner';
import { I_productType } from '../../redux/app/types';


const Category = () => {

  const [ category, setCategory ] = useState<string>('');
  const [ products, setProducts ] = useState<I_productType[]>([]);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(false);
    const routerCategory: string = router.query?.category as string;

    if (routerCategory) {
      setCategory(routerCategory);

      fetch(`https://fakestoreapi.com/products/category/${routerCategory}`)
        .then(res => res.json())
        .then(json => setProducts(json))
        .then(() => setIsLoaded(true));
    }    
  }, [router.query])
  

  return (
    <>
      <CategoryWrapper >

        <Title>Category: {category}</Title>
        
        <Content isLoaded={isLoaded}>
        {
          isLoaded
            ? (<ProductsWrapper>
                {
                  products.map(product => (
                    <Product key={product.title} product={product} />
                  ))
                }
              </ProductsWrapper>)
            : <Spinner />
        }
        </Content>
        
      </CategoryWrapper>
    </>
  )
};

export default Category;