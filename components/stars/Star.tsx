import React from 'react';
import { Gradients } from './Gradients';
import { StarWrapper } from './styled';

interface props {
  pourcentage: number;
}

export const Star = ({ pourcentage }: props) => {
  return (
    <StarWrapper width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* TODO: this should be globalized */}
      <Gradients />
      
      <path fill={`url('#star-gradient-${pourcentage}')`} d="M11.0741 1.633C11.3941 0.789 12.6051 0.789 12.9261 1.633L14.9961 7.367C15.1411 7.747 15.5101 8 15.9221 8H21.0091C21.9491 8 22.3591 9.17 21.6201 9.743L18.0001 13C17.8379 13.1247 17.7194 13.2975 17.6616 13.4937C17.6037 13.6898 17.6095 13.8993 17.6781 14.092L19.0001 19.695C19.3221 20.595 18.2801 21.368 17.4921 20.814L12.5751 17.694C12.4067 17.5757 12.2059 17.5122 12.0001 17.5122C11.7943 17.5122 11.5935 17.5757 11.4251 17.694L6.50808 20.814C5.72108 21.368 4.67808 20.594 5.00008 19.695L6.32208 14.092C6.39066 13.8993 6.39643 13.6898 6.33859 13.4937C6.28074 13.2975 6.16223 13.1247 6.00008 13L2.38008 9.743C1.64008 9.17 2.05208 8 2.99008 8H8.07708C8.27737 8.00067 8.47314 7.9405 8.63849 7.82747C8.80385 7.71444 8.93098 7.55387 9.00308 7.367L11.0731 1.633H11.0741Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </StarWrapper>
  );
};
