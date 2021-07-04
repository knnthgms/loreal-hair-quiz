import React, { memo } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Choice = memo(function Choice({ color, icon, label }) {
  console.log(icon);
  return (
    <div style={{ borderColor: color }} className="choice-card">
      <img alt="icon" className="choice-card-image" src={icon} />
      <span className="choice-card-label">{label} </span>
    </div>
  );
});

Choice.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

Choice.defaultProps = {
  color: "#BDC0E1",
  icon: "",
  label: "default card",
};

export default Choice;
