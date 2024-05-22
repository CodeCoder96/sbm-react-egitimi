import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem(props) {
  const { product, handleDeleteProduct, setCartItems } = props;
  const { id, image, title, description, price } = product;

  function addToCart() {
    setCartItems((cartItems) => [product, ...cartItems]);
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} width={200} alt="product image" />
      </div>
      <div className="product-info">
        <strong>{title.slice(0, 15)}...</strong>
        <p>{description.slice(0, 60)}...</p>
        <span>{price}₺</span>
        <Button className={"mb-2"} onClick={addToCart}>
          Add To Cart
        </Button>
        <Button type="danger" onClick={() => handleDeleteProduct(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  handleDeleteProduct: PropTypes.func,
  setCartItems: PropTypes.func,
};

export default ProductItem;
