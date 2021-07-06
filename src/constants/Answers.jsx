import React from "react";
import Result from "../components/results/Result";
import STRINGS from "./Strings";

const resultContent = {
  1: {
    matchTitle: STRINGS.option1Match,
    matchDesc: STRINGS.option1Desc,
    matchRec: STRINGS.option1Rec,
    matchRecAdd: null,
  },
  2: {
    matchTitle: STRINGS.option2Match,
    matchDesc: STRINGS.option2Desc,
    matchRec: STRINGS.option2Rec,
    matchRecAdd: null,
  },
  3: {
    matchTitle: STRINGS.option3Match,
    matchDesc: STRINGS.option3Desc,
    matchRec: STRINGS.option3Rec,
    matchRecAdd: STRINGS.option3RecAdd,
  },
  4: {
    matchTitle: STRINGS.option4Match,
    matchDesc: STRINGS.option4Desc,
    matchRec: STRINGS.option4Rec,
    matchRecAdd: STRINGS.option4RecAdd,
  },
  5: {
    matchTitle: STRINGS.option5Match,
    matchDesc: STRINGS.option5Desc,
    matchRec: STRINGS.option5Rec,
    matchRecAdd: STRINGS.option5RecAdd,
  },
  6: {
    matchTitle: STRINGS.option6Match,
    matchDesc: STRINGS.option6Desc,
    matchRec: STRINGS.option6Rec,
    matchRecAdd: null,
  },
  7: {
    matchTitle: STRINGS.option7Match,
    matchDesc: STRINGS.option7Desc,
    matchRec: STRINGS.option7Rec,
    matchRecAdd: STRINGS.option7RecAdd,
  },
  8: {
    matchTitle: STRINGS.option8Match,
    matchDesc: STRINGS.option8Desc,
    matchRec: STRINGS.option8Rec,
    matchRecAdd: STRINGS.option8RecAdd,
  },
  9: {
    matchTitle: STRINGS.option9Match,
    matchDesc: STRINGS.option9Desc,
    matchRec: STRINGS.option9Rec,
    matchRecAdd: STRINGS.option9RecAdd,
  },
};

const result = (a, b) => {
  let matchedResult;
  if (a === 0) matchedResult = Object.assign(resultContent[1]);
  if (a === 1) matchedResult = Object.assign(resultContent[2]);
  if (a === 2) matchedResult = Object.assign(resultContent[3]);
  if (a === 3) matchedResult = Object.assign(resultContent[4]);
  if (a === 4 && b === 0) matchedResult = Object.assign(resultContent[5]);
  if (a === 4 && b === 1) matchedResult = Object.assign(resultContent[6]);
  if (a === 4 && b === 2) matchedResult = Object.assign(resultContent[7]);
  if (a === 4 && b === 3) matchedResult = Object.assign(resultContent[8]);
  if (a === 4 && b === 4) matchedResult = Object.assign(resultContent[9]);

  const { matchTitle, matchDesc, matchRec, matchRecAdd } = matchedResult;
  return (
    <Result
      matchTitle={matchTitle}
      matchDesc={matchDesc}
      matchRec={matchRec}
      matchRecAdd={matchRecAdd}
    />
  );
};

export default result;
