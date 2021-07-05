import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} type="button" className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
