import { configureStore } from '@reduxjs/toolkit';
import {deviceReducer} from "./deviceReducer";
import {categoryReducer} from "./categoryReducer";
import {brandReducer} from "./brandReducer";
import {featureReducer} from "./featureReducer";
import {cartReducer} from "./cartReducer";

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
    category: categoryReducer,
    brand: brandReducer,
    feature: featureReducer,
    cart: cartReducer,
  },
});
