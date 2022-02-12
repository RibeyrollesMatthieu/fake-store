import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CartIcon } from '../cart-icon/CartIcon';
import { CategoriesWrapper, CategoryElement, HeaderWrapper, NavBurgerMenu, NavWrapper } from './styled';

export const Header = () => {

  const [ categories, setCategories ] = useState<string[]>([]);
  const [ activeCategory, setActiveCategory ] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const routerCategory: string = router.query?.category as string;

    if (router.pathname === '/') setActiveCategory('home');
    else if (router.pathname === '/cart') setActiveCategory('');
    else if (routerCategory) setActiveCategory(routerCategory);
  }, [router.query?.category, router]);

  useEffect(() => {
    /* 55rem in pixels for a 16px fontsize */
    const mediaQuery = window.matchMedia('(max-width: 880px)');

    /* prevent some flashes when a user goes from medium to small screen */
    window?.addEventListener('resize', () => {
      if (mediaQuery.matches) closeMenu();
    });

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
  
  const toggleMenu = () => {
    document.querySelector('#nav-wrapper')?.classList.toggle('open');
  }

  const closeMenu = () => {
    document.querySelector('#nav-wrapper')?.classList.remove('open');
  }

  return (
    <HeaderWrapper>
      <NavBurgerMenu width='0' height='0' onClick={toggleMenu} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13H17M1 1H17H1ZM1 7H17H1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </NavBurgerMenu>

      <NavWrapper id='nav-wrapper'>
        <CategoriesWrapper>

          <CategoryElement>
            <Link href='/'>
              <a className={`${'home' === activeCategory ? 'active' : ''}`} onClick={() => {setActiveCategory('home'); closeMenu();}} >Home</a>
            </Link>
          </CategoryElement>

          {
            categories.map(category => (
              <CategoryElement key={category}>
                <Link href={`/category/${category}`}>
                  <a className={`${category === activeCategory ? 'active' : ''}`} onClick={() => {setActiveCategory(category); closeMenu();}} >{category}</a>
                </Link>
              </CategoryElement>
            ))
          }
        </CategoriesWrapper>
      </NavWrapper>

      <CartIcon closeMenu={closeMenu} />
    </HeaderWrapper>
  )
};
