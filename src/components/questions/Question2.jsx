import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import Choice from "../Choice";
import Button from "../button";
import "./style.scss";

const Question2 = () => {
  return (
    <div className="question">
      <div className="question-text">{STRINGS.question2}</div>
      <div className="question-options">
        <Choice icon={IMAGES.damagedHair} label={STRINGS.choice2A} />
        <Choice icon={IMAGES.weakHair} label={STRINGS.choice2B} />
        <Choice icon={IMAGES.frizzyHair} label={STRINGS.choice3B} />
        <Choice icon={IMAGES.dryHair} label={STRINGS.choice4B} />
        <Choice icon={IMAGES.flatHair} label={STRINGS.choice5B} />
      </div>
      <Button>{STRINGS.getResults}</Button>
    </div>
  );
};

export default Question2;
