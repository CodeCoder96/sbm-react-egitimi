import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState([]);

  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
