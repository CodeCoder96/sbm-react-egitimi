import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totals: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (findProduct) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === findProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems = [
          { ...action.payload, quantity: 1 },
          ...state.cartItems,
        ];
      }
      state.totals = state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.totals = state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
