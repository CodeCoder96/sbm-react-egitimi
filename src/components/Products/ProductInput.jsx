import PropTypes from "prop-types";

const ProductInput = (props) => {
  return (
    <div className="product-input">
      <label>{props.input.label}</label>
      <input
        type={props.input.type}
        onChange={props.handleChange}
        placeholder={props.input.placeholder}
        name={props.input.name}
      />
    </div>
  );
};

ProductInput.propTypes = {
  input: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
  }),
  handleChange: PropTypes.func,
};

export default ProductInput;
