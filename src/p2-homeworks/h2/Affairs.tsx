import React, { Dispatch, SetStateAction } from 'react';
import Affair from './Affair';
import { AffairType, FilterType } from './HW2';
import { inspect } from 'util';
import styles from './Affairs.module.css';

type AffairsPropsType = {
  // need to fix any
  data: Array<AffairType>;
  setFilter: Dispatch<SetStateAction<FilterType>>;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {
    return props.setFilter('all');
  }; // need to fix
  const setHigh = () => {
    debugger;
    return props.setFilter('high');
  };
  const setMiddle = () => {
    return props.setFilter('middle');
  };
  const setLow = () => {
    return props.setFilter('low');
  };

  return (
    <div className={styles.container}>
      {mappedAffairs}
      <button className={styles.button} onClick={setAll}>
        All
      </button>
      <button className={styles.button} onClick={setHigh}>
        High
      </button>
      <button className={styles.button} onClick={setMiddle}>
        Middle
      </button>
      <button className={styles.button} onClick={setLow}>
        Low
      </button>
    </div>
  );
}

export default Affairs;
