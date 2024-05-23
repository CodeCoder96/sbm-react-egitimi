export const initialState = {
  cartItems: [],
  totals: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const findProduct = state.cartItems.find(
        (item) => item.id === action.product.id
      );
      if (findProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === findProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [{ ...action.product, quantity: 1 }, ...state.cartItems],
        };
      }
    }
    default:
      return state;
  }
};
