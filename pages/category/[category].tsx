import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper, Content, ProductsWrapper, Title } from '../../components/category/styled';
import { Product } from '../../components/product/Product';
import { Select } from '../../components/sorter-select/Select';
import { Spinner } from '../../components/spinner/Spinner';
import { I_productType } from '../../redux/app/types';
import { sortByPrice, Sorters } from '../../utils/sorter';


const Category = () => {

  const [ category, setCategory ] = useState<string>('');
  const [ products, setProducts ] = useState<I_productType[]>([]);
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
  const [ sorter, setSorter ] = useState<Sorters>(Sorters.PRICE_ASC);
  const router = useRouter();

  useEffect(() => {
    const routerCategory: string = router.query?.category as string;

    const fetchData = async () => {
      setIsLoaded(false);

      fetch(`https://fakestoreapi.com/products/category/${routerCategory}`)
        .then(res => res.json())
        .then(json => setProducts(json))
        .then(() => {
          setCategory(routerCategory);
          setIsLoaded(true);
          setSorter(Sorters.PRICE_ASC)
        });
    }

    if (routerCategory) {
      fetchData();
    }    
  }, [router.query])

  return (
    <>
      <CategoryWrapper >
        <Title>{isLoaded ? `Category: ${category}` : ''}</Title>
        
        {
          isLoaded
            ? <Select options={[Sorters.PRICE_ASC, Sorters.PRICE_DESC]} callback={(value: Sorters) => setSorter(value)} />
            : <></>
        }

        <Content isLoaded={isLoaded}>
        {
          isLoaded
            ? (<ProductsWrapper>
                {
                  sortByPrice(products, sorter).map(product => (
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