import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductItem(props) {
  const { product, handleDeleteProduct } = props;
  const { id, image, title, description, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} width={200} alt="product image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <p className="product-description">{description}</p>
        <span>{price}₺</span>
        <Button className={"mb-2"} onClick={() => addToCart(product)}>
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
};

export default ProductItem;
