import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';
import s from './HW10.module.css';

function HW10() {
  // useSelector, useDispatch
  const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading);
  const dispatch = useDispatch();

  const setLoading = () => {
    dispatch(loadingAC(true));
    // dispatch
    setTimeout(() => dispatch(loadingAC(false)), 2000);
    // setTimeout
    console.log('loading...');
  };

  return (
    <div>
      <hr />
      <h2>homework 10</h2>
      {/*should work (должно работать)*/}
      {isLoading ? (
        <div className={s.ldsRoller}>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
