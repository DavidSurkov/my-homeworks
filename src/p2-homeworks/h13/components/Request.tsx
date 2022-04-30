import React, { useState } from 'react';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import { requestAPI } from '../api/requestsAPI';
import s from '../HW13.module.css';

export const Request = () => {
  const [state, setState] = useState('');
  const [success, setSuccess] = useState<boolean>(false);

  const onClickCallback = () => {
    requestAPI
      .authoriseTest(success)
      .then((res) => {
        setState(res.data.errorText);
      })
      .catch((error) => {
        setState(error.response ? error.response.data.errorText : error.message);
      });
  };
  return (
    <div className={s.container}>
      <SuperCheckbox onChangeChecked={setSuccess}>Success</SuperCheckbox>
      <SuperButton onClick={onClickCallback}>Send Request</SuperButton>
      <div>{state}</div>
    </div>
  );
};
