import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../../redux/app/hooks';
import { CartWrapper, Svg } from './styled';

interface props {
  closeMenu: Function;
}

export const CartIcon = ({ closeMenu }: props) => {

  const cart = useAppSelector(cart => cart.cart.content);

  return (
    <Link href='/cart' passHref={true}>
      <CartWrapper onClick={() => closeMenu()}>
        <Svg width='0' height='0' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30C11.1046 30 12 29.1046 12 28C12 26.8954 11.1046 26 10 26C8.89543 26 8 26.8954 8 28C8 29.1046 8.89543 30 10 30Z" fill="black"/>
          <path d="M24 30C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26C22.8954 26 22 26.8954 22 28C22 29.1046 22.8954 30 24 30Z" fill="black"/>
          <path d="M4.98 2.804C4.93471 2.57739 4.81232 2.37346 4.63366 2.22689C4.455 2.08031 4.23109 2.00014 4 2H0V4H3.18L7.02 23.196C7.06529 23.4226 7.18768 23.6265 7.36634 23.7731C7.545 23.9197 7.76891 23.9999 8 24H26V22H8.82L8.02 18H26C26.2275 18 26.4482 17.9224 26.6256 17.78C26.803 17.6377 26.9266 17.4391 26.976 17.217L29.244 7H27.197L25.198 16H7.62L4.98 2.804Z" fill="black"/>
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Roboto" fontSize="10" letterSpacing="0em"><tspan x="8" y="13.418">{ (cart.quantity > 99) ? '99+' : (cart.quantity < 10) ? `  ${cart.quantity}` : ` ${cart.quantity}` }</tspan></text>
        </Svg>
      </CartWrapper>
    </Link>
  )
};
