import React from "react";
import PropTypes from "prop-types";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/Images";
import Choice from "../Choice";
import "./style.scss";

const choices = [
  {
    id: 0,
    icon: IMAGES.colorVibrancy,
    label: STRINGS.choiceA1,
  },
  {
    id: 1,
    icon: IMAGES.illuminateBlonde,
    label: STRINGS.choiceB1,
  },
  {
    id: 2,
    icon: IMAGES.neutraliseYellow,
    label: STRINGS.choiceC1,
  },
  {
    id: 3,
    icon: IMAGES.longerHair,
    label: STRINGS.choiceD1,
  },
  {
    id: 4,
    icon: IMAGES.healthyHair,
    label: STRINGS.choiceE1,
  },
];

const Question1 = (props) => {
  const { onChoose } = props;

  return (
    <div className="question">
      <div className="question-text">{STRINGS.question1}</div>
      <div className="question-options">
        {choices.map((choice) => {
          return (
            <Choice
              key={choice.id}
              icon={choice.icon}
              label={choice.label}
              onClick={() => onChoose(choice.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

Question1.propTypes = {
  onChoose: PropTypes.func.isRequired,
};

export default Question1;
