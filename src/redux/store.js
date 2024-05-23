import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // cart: {},
    // product: {},
    // auth: {},
  },
});

export default store;
