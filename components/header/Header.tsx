import Link from 'next/link';
import React from 'react';
import { CategoriesWrapper, CategoryElement, HeaderWrapper, NavWrapper } from './styled';

interface props {
  categories: string[]
}

export const Header = ({ categories }: props) => {
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
