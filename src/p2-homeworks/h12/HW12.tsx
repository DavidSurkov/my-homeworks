import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeAC, InitType } from './bll/themeReducer';
import { AppStoreType } from '../h10/bll/store';

const themes = ['dark', 'red', 'some', 'white'];

function HW12() {
  const theme = useSelector<AppStoreType, InitType>((state) => state.theme); // useSelector
  const dispatch = useDispatch();
  const onChangeCallback = (colour: string) => {
    dispatch(changeThemeAC(colour));
  };
  // useDispatch, onChangeCallback

  return (
    <div className={s[theme.colour]}>
      <hr />
      <span className={s[theme.colour + '-text']}>homeworks 12</span>
      <SuperRadio options={themes} value={theme.colour} name={'radio2'} onChangeOption={onChangeCallback} />
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr />
    </div>
  );
}

export default HW12;
