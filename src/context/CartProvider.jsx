import { useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { initialState, reducer } from "./cartReducer";


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
