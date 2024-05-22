import { useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const initialState = {
  cartItems: [],
  totals: 0,
};

function reducer(state, action) {
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
}

const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(product) {
    dispatch({ type: "ADD_TO_CART", product });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        name: "Emin Başbayan",
        addToCart: addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
