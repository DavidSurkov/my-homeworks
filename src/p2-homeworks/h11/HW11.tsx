import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(50);
  const onChangeHandler = (value: number | number[]) => {
    if (Array.isArray(value)) {
      value[0] <= value[1] ? (setValue1(value[0]), setValue2(value[1])) : value;
    }
  };

  return (
    <div>
      <hr />
      <h2>homework 11</h2>
      {/*should work (должно работать)*/}
      <div>
        <span>{value1}</span>
        <SuperRange
          onChangeRange={setValue1}
          value={value1}
          // сделать так чтоб value1 изменялось
        />
      </div>
      <div>
        <span>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={onChangeHandler}
          // сделать так чтоб value1 и value2 изменялось
        />
        <span>{value2}</span>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
