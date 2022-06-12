import React, {useContext} from 'react';
import {AuthContext} from "../context";
import {Route, Routes} from "react-router-dom";
import Header from "../pages/Header";
import Main from "../pages/Main";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)

  return (
      isAuth
        ?
        <Routes>
          <Route path='/' element={<Header />} >
            <Route index element={<Main />} />
            {privateRoutes.map(route =>
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            )}
          </Route>
        </Routes>
        :
        <Routes>
          {publicRoutes.map(route =>
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
            />
          )}
        </Routes>
  );
};

export default AppRouter;