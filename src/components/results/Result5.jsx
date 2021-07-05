import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import Button from "../button";
import "./style.scss";

const Result5 = () => {
  return (
    <div className="result-card">
      <div className="result-card-desc">
        <span>{STRINGS.option5Match}</span>
        <span>{STRINGS.option5Desc}</span>
        <span>{STRINGS.recommendedFor}</span>
        <span>{STRINGS.option5Rec}</span>
        <span>{STRINGS.option5RecAdd}</span>
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

export default Result5;