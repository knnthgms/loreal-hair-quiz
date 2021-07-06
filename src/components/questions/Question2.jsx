import React, { useState } from "react";
import PropTypes from "prop-types";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/Images";
import Choice from "../Choice";
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

const Question2 = (props) => {
  const { onChoose, getResults } = props;
  const [selected, setSelected] = useState(false);
  const selectionMade = (id) => {
    onChoose(id);
    setSelected(true);
  };
  return (
    <div className="question">
      <div className="question-text">{STRINGS.question2}</div>
      <div className="question-options">
        {choices.map((choice) => (
          <Choice
            key={choice.id}
            icon={choice.icon}
            label={choice.label}
            onClick={() => selectionMade(choice.id)}
          />
        ))}
      </div>
      <div className="actions">
        {selected && (
          // eslint-disable-next-line
          <div className="next-btn" onClick={getResults}>
            {STRINGS.getResults}
          </div>
        )}
      </div>
    </div>
  );
};

Question2.propTypes = {
  onChoose: PropTypes.func.isRequired,
  getResults: PropTypes.func.isRequired,
};

export default Question2;
