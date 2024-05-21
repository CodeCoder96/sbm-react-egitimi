import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

function ProductItem(props) {
  const { image, title, desc, price, setTitle } = props;

  function handleTitleChange() {
    setTitle("Title")
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} width={200} alt="product image" />
      </div>
      <div className="product-info">
        <strong>{title.slice(0, 15)}...</strong>
        <p>{desc.slice(0, 75)}...</p>
        <span>{price}₺</span>
        <Button onClick={handleTitleChange}>Change Title</Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  setTitle: PropTypes.func,
};

export default ProductItem;
