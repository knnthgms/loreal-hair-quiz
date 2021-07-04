import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children } = props;
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
