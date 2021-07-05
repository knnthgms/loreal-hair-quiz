import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import Button from "../button";
import "./style.scss";

const Result1 = () => {
  return (
    <div className="result-card">
      <div className="result-card-desc">
        <span>{STRINGS.option1Match}</span>
        <span>{STRINGS.option1Desc}</span>
        <span>{STRINGS.recommendedFor}</span>
        <span>{STRINGS.option1Rec}</span>
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

export default Result1;
