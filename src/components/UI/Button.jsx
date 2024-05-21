import PropTypes from "prop-types";
import "./Button.css";

function Button({size, type, children}) {
  const sizeClass = `btn-${size}`;
  const typeClass = `btn-${type}`;
  const classNames = `btn ${typeClass} ${sizeClass}`;

  return <button className={classNames}>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  children: PropTypes.node,
};

export default Button;
