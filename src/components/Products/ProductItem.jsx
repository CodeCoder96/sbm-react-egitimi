import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Button from "../UI/Button";
import "./ProductItem.css";
import { useDispatch } from "react-redux";

export const ProductItem = (props) => {
  const { product, handleDeleteProduct, cart } = props;
  const { id, image, title, description, price } = product;
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} width={200} alt="product image" />
      </div>
      <div className="product-info">
        <Link className="product-title" to={`/products/${id}`}>
          {title}
        </Link>
        <p className="product-description">{description}</p>
        <span>{price}₺</span>
        {!cart && (
          <Button
            className={"mb-2"}
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </Button>
        )}

        <Button
          type="danger"
          onClick={() =>                   
            cart ? dispatch(deleteFromCart({id})) : handleDeleteProduct(id)
          }
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export const NewItem = () => {
  return <div>new item</div>;
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  handleDeleteProduct: PropTypes.func,
  cart: PropTypes.bool,
};
