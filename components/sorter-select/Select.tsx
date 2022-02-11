import React, { useState } from 'react';
import { Sorters } from '../../utils/sorter';
import { SelectWrapper } from './styled';

interface props {
  options: string[];
  callback: Function;
}

export const Select = ({ options, callback }: props) => {
  return (
    <SelectWrapper onChange={(e) => callback(e.target.value)} name="sorting-methid" id="sorting-method">
      {
        options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))
      }
    </SelectWrapper>
  )
};
