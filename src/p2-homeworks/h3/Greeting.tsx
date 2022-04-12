import React, { ChangeEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: boolean; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers }, // деструктуризация пропсов
) => {
  const inputClass = !name ? s.error : ''; // need to fix with (?:)

  return (
    <div className={s.container}>
      <input value={name} onChange={setNameCallback} className={inputClass} />
      <span>{error}</span>
      <button className={s.buttonAdd} disabled={!name} onClick={addUser}>
        add user
      </button>
      <div>Total users:{totalUsers}</div>
    </div>
  );
};

export default Greeting;
