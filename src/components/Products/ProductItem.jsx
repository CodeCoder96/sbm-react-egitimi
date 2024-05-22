import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem(props) {
  const { product, handleDeleteProduct } = props;
  const { id, image, title, description, price } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} width={200} alt="product image" />
      </div>
      <div className="product-info">
        <strong>{title.slice(0, 15)}...</strong>
        <p>{description.slice(0, 75)}...</p>
        <span>{price}₺</span>
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
