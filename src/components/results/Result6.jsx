import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/Images";
import Button from "../Button";
import "./style.scss";

const Result6 = () => {
  return (
    <div className="result-card">
      <div className="result-card-desc">
        <span className="match-title">{STRINGS.option6Match}</span>
        <span className="match-desc">{STRINGS.option6Desc}</span>
        <span className="match-rec-text">{STRINGS.recommendedFor}</span>
        <span className="match-rec">{STRINGS.option6Rec}</span>
        <div className="result-card-cta">
          <Button>{STRINGS.shopNow}</Button>
        </div>
      </div>
      <div className="result-card-img">
        <img alt="product" src={IMAGES.intro2} />
      </div>
    </div>
  );
};

export default Result6;
