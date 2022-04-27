import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Slider } from '@mui/material';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number | number[]) => void;
  value?: number[];
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  // min, max, step, disable, ...
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChangeRange?.(newValue);
  };
  // сделать самому, можно подключать библиотеки

  return (
    <>
      <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" />
    </>
  );
};

export default SuperDoubleRange;
