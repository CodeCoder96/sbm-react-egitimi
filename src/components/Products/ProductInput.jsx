import PropTypes from "prop-types";

const ProductInput = ({ input, value, handleChange }) => {
  return (
    <div className="product-input">
      <label>{input.label}</label>
      <input
        type={input.type}
        onChange={handleChange}
        placeholder={input.placeholder}
        name={input.name}
        value={value}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProductInput;
