import React, { useState } from 'react';
import { homeWorkReducer } from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // need to fix any

  // need to fix any
  const finalPeople = people.map((p: UserType) => (
    <div key={p._id} className={s.creature}>
      <span>{p.name}:</span>
      <span>{p.age}</span>
    </div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }));
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' }));
  const showAdults = () => setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: 18 }));
  const showAll = () => setPeople(initialPeople);

  return (
    <>
      <hr />
      <h2>homework 8</h2>
      <div className={s.block}>
        {/*should work (должно работать)*/}
        <div className={s.creatures}>{finalPeople}</div>
        <div className={s.buttonsBlock}>
          <SuperButton className={s.button} onClick={showAll}>
            show default
          </SuperButton>
          <SuperButton className={s.button} onClick={showAdults}>
            show 18+
          </SuperButton>
        </div>
        <div>
          <div className={s.buttonsBlock}>
            <SuperButton className={s.button} onClick={sortUp}>
              sort up
            </SuperButton>
            <SuperButton className={s.button} onClick={sortDown}>
              sort down
            </SuperButton>
          </div>
        </div>
      </div>

      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </>
  );
}

export default HW8;
