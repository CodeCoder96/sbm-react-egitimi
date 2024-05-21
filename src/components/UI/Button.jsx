import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const sizeClass = `btn-${props.size}`;
  const typeClass = `btn-${props.type}`;
  const classNames = `btn ${typeClass} ${sizeClass}`;

  return <button className={classNames}>click</button>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
};

export default Button;
