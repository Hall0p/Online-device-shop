import Error from "../pages/Error";
import Device from "../pages/Device";
import React from "react";
import Admin from "../pages/Admin";
import Authorization from "../pages/Authorization";
import Registration from "../pages/Registration";
import Cart from "../pages/Cart";

export const privateRoutes = [
  {path: '*', element: <Error/>},
  {path: 'device/:deviceId', element: <Device />},
  {path: 'admin', element: <Admin />},
  {path: 'cart', element: <Cart />},
]

export const publicRoutes = [
  {path: '/', element: <Authorization />},
  {path: '*', element: <Error/>},
  {path: '/registration', element: <Registration />}
]