import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const findProduct = cartItems.find((item) => item.id === product.id);
    if (findProduct) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === findProduct.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return { ...item };
        })
      );
    } else {
      setCartItems((cartItems) => [{ ...product, quantity: 1 }, ...cartItems]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
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
