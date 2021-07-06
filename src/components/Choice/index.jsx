import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Choice = ({ icon, label, onClick, isSelected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isSelected ? "choice-card selected" : "choice-card"}
    >
      <img alt="icon" className="choice-card-image" src={icon} />
      <span className="choice-card-label">{label} </span>
    </button>
  );
};

Choice.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Choice;
