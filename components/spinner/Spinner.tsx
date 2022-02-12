import React from 'react';
import { CircleLoad__one, CircleLoad__three, CircleLoad__two, Loader, Point__one, Point__three, Point__two, Svg } from './styled';

export const Spinner = () => {
  return (
    <Loader>
      <Svg width='0' height='0' viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <CircleLoad__one cx="60" cy="60" r="40" />
        <CircleLoad__two cx="60" cy="60" r="40" />
        <CircleLoad__three cx="60" cy="60" r="40" />
        <g>
          <Point__one cx="45" cy="70" r="5" />
          <Point__two cx="60" cy="70" r="5" />
          <Point__three cx="75" cy="70" r="5" />
        </g>
      </Svg>
    </Loader>
  )
};
