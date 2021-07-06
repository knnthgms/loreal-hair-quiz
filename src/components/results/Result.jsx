import React from "react";
import PropTypes from "prop-types";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/Images";
import Button from "../Button";
import "./style.scss";

const Result = (props) => {
  const { matchTitle, matchDesc, matchRec, matchRecAdd } = props;
  return (
    <div className="result-card">
      <div className="result-card-desc">
        <span className="match-title">{matchTitle}</span>
        <span className="match-desc">{matchDesc}</span>
        <span className="match-rec-text">{STRINGS.recommendedFor}</span>
        <span className="match-rec">{matchRec}</span>
        {matchRecAdd && <span className="match-rec-add">{matchRecAdd}</span>}
        <div className="result-card-cta">
          <Button>{STRINGS.shopNow}</Button>
        </div>
      </div>
      <div className="result-card-img">
        <img alt="product" src={IMAGES.intro2} />
      </div>
      <span className="match-title">{matchTitle}</span>
    </div>
  );
};

Result.propTypes = {
  matchTitle: PropTypes.string.isRequired,
  matchDesc: PropTypes.string.isRequired,
  matchRec: PropTypes.string.isRequired,
  matchRecAdd: PropTypes.string,
};
Result.defaultProps = {
  matchRecAdd: false,
};

export default Result;