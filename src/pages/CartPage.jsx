import { useSelector } from "react-redux";
import { ProductItem } from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems, totals } = useSelector((state) => state.cart);
  return (
    <div className="cart-page">
      <h1>CartPage</h1>
      <div className="totals">
       Sepet tutarı: <strong>{totals}₺</strong>
      </div>
      <div className="row">
        {cartItems.map((cart) => (
          <div className="col-4" key={cart.id}>
            <ProductItem product={cart} cart>{cart.title}</ProductItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
