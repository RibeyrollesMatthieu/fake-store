import Link from 'next/link';
import React from 'react';
import { CartWrapper, Svg } from './styled';

export const Cart = () => {
  return (
    
      <Link href='/cart'>
        <CartWrapper>
          <Svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5H17.79C18.0694 5.00001 18.3457 5.05857 18.6011 5.17191C18.8565 5.28524 19.0854 5.45083 19.2729 5.65801C19.4603 5.86519 19.6023 6.10936 19.6897 6.37478C19.777 6.64019 19.8078 6.92097 19.78 7.199L19.18 13.199C19.1307 13.6925 18.8997 14.1501 18.532 14.4829C18.1642 14.8157 17.686 15 17.19 15H7.64C7.17747 15.0002 6.72918 14.84 6.37144 14.5469C6.01371 14.2537 5.76866 13.8456 5.678 13.392L4 5Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M4 5L3.19 1.757C3.13583 1.54075 3.01095 1.34881 2.83521 1.21166C2.65946 1.0745 2.44293 1.00001 2.22 1H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 19H9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 19H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </CartWrapper>
      </Link>
  )
};
