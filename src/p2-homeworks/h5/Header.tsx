import React from 'react';
import s from './pages/Header.module.css';
import { Link } from 'react-router-dom';
import { PATH } from './AllRoutes';
import image from './pages/img/img.png';
function Header() {
  return (
    <div className={s.headerStyle}>
      <Link className={s.linkStyle} to={PATH.PRE_JUNIOR}>
        PreJunior
      </Link>
      <Link className={s.linkStyle} to={PATH.JUNIOR}>
        Junior
      </Link>
      <Link className={s.linkStyle} to={PATH.JUNIOR_PLUS}>
        JuniorPlus
      </Link>
      <img className={s.img} src={image} alt={'image'} />
    </div>
  );
}

export default Header;
