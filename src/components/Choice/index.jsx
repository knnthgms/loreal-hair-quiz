import React, { memo } from "react";
import PropTypes from "prop-types";
import COLORS from "../../constants/Colors";
import "./style.scss";

const Choice = memo(function Choice({ icon, label }) {
  return (
    <div style={{ borderColor: COLORS.lavender }} className="choice-card">
      <img alt="icon" className="choice-card-image" src={icon} />
      <span className="choice-card-label">{label} </span>
    </div>
  );
});

Choice.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

Choice.defaultProps = {
  icon: "",
  label: "default card",
};

export default Choice;
