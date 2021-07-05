import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/Images";
import Button from "../Button";
import "./style.scss";

const Result3 = () => {
  return (
    <div className="result-card">
      <div className="result-card-desc">
        <span className="match-title">{STRINGS.option3Match}</span>
        <span className="match-desc">{STRINGS.option3Desc}</span>
        <span className="match-rec-text">{STRINGS.recommendedFor}</span>
        <span className="match-rec">{STRINGS.option3Rec}</span>
        <span className="match-rec-add">{STRINGS.option3RecAdd}</span>
        <div className="result-card-cta">
          <Button>{STRINGS.shopNow}</Button>
        </div>
      </div>
      <div className="result-card-img">
        <img alt="product" src={IMAGES.intro2} width="100%" />
      </div>
    </div>
  );
};

export default Result3;
