import React from 'react';
// @ts-ignore
import { Route, Routes } from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import JuniorPlus from './pages/JuniorPlus';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
};

function AllRoutes() {
  return (
    <div>
      {/*Switch выбирает первый подходящий роут*/}
      <Routes>
        {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
      exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
        {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />*/}
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
        <Route caseSensitive path={PATH.JUNIOR} element={<Junior />} />
        <Route caseSensitive path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route path={'/*'} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
