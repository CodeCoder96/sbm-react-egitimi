import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    // product: {},
    // auth: {},
  },
});

export default store;
