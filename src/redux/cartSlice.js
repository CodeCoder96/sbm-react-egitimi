import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
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
    },
    deleteFromCart: (state) => {},
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
