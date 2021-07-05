import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import Choice from "../Choice";
import "./style.scss";

const Question1 = () => {
  return (
    <div className="question">
      <div className="question-text">{STRINGS.question1}</div>
      <div className="question-options">
        <Choice icon={IMAGES.colorVibrancy} label={STRINGS.choice1A} />
        <Choice icon={IMAGES.illuminateBlonde} label={STRINGS.choice2A} />
        <Choice icon={IMAGES.neutraliseYellow} label={STRINGS.choice3A} />
        <Choice icon={IMAGES.longerHair} label={STRINGS.choice4A} />
        <Choice icon={IMAGES.healthyHair} label={STRINGS.choice5A} />
      </div>
    </div>
  );
};

export default Question1;
