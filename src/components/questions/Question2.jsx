import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/Images";
import Choice from "../Choice";
import Button from "../Button";
import "./style.scss";

const choices = [
  {
    id: 0,
    icon: IMAGES.damagedHair,
    label: STRINGS.choiceA2,
  },
  {
    id: 1,
    icon: IMAGES.weakHair,
    label: STRINGS.choiceB2,
  },
  {
    id: 2,
    icon: IMAGES.frizzyHair,
    label: STRINGS.choiceC2,
  },
  {
    id: 3,
    icon: IMAGES.dryHair,
    label: STRINGS.choiceD2,
  },
  {
    id: 4,
    icon: IMAGES.flatHair,
    label: STRINGS.choiceE2,
  },
];

const Question2 = () => {
  return (
    <div className="question">
      <div className="question-text">{STRINGS.question2}</div>
      <div className="question-options">
        {choices.map((choice) => (
          <Choice id={choice.id} icon={choice.icon} label={choice.label} />
        ))}
      </div>
      <Button>{STRINGS.getResults}</Button>
    </div>
  );
};

export default Question2;
