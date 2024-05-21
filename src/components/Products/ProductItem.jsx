import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={props.image}
          width={200}
          alt="product image"
        />
      </div>
      <div className="product-info">
        <strong>{props.title}</strong>
        <span>{props.price}₺</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default ProductItem;
