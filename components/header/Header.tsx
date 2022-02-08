import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CategoriesWrapper, CategoryElement, HeaderWrapper, NavWrapper } from './styled';

export const Header = () => {

  const [ categories, setCategories ] = useState<string[]>([]);

  useEffect(() => {

    if (localStorage.getItem('categories')) {
      setCategories(JSON.parse(localStorage.getItem('categories') as string));
      
    } else {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
          setCategories(json);
          localStorage.setItem('categories', JSON.stringify(json));
        })
    }
          

    
  }, []);

  return (
    <HeaderWrapper>
      <NavWrapper>
        <CategoriesWrapper>
          {
            categories.map(category => (
              <CategoryElement key={category}>
                <Link href={`/${category}`}>
                  {category}
                </Link>
              </CategoryElement>
            ))
          }
        </CategoriesWrapper>
      </NavWrapper>
    </HeaderWrapper>
  )
};
