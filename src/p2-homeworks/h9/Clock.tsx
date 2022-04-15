import React, { useState } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Clock.module.css';

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearTimeout(timerId); // stop
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date()); // setDate
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true); // show
  };
  const onMouseLeave = () => {
    setShow(false); // close
  };

  const stringTime = date.toLocaleTimeString(); // fix with date
  const stringDate = date.toLocaleDateString(); // fix with date

  return (
    <div className={s.block}>
      <div className={s.time}>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {stringTime}
        </div>

        {show && <div>{stringDate}</div>}
      </div>

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  );
}

export default Clock;
