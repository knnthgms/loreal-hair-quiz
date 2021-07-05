import React, { useState } from "react";
import STRINGS from "../constants/Strings";
import IMAGES from "../assets/Images";
import Button from "../components/Button";
import Question1 from "../components/questions/Question1";
import Question2 from "../components/questions/Question2";
import result from "../constants/Answers";
import "./desktop.scss";

const DesktopLayout = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [q1Done, setQ1Done] = useState(false);
  const [q2Done, setQ2Done] = useState(false);
  const [ans1, setAns1] = useState(null);
  const [ans2, setAns2] = useState(null);

  const Q1Answered = (answerId) => {
    setAns1(answerId);
    setQ1Done(true);
  };

  const Q2Answered = (answerId) => {
    setAns2(answerId);
  };

  const getResults = () => {
    setQ2Done(true);
  };

  if (startQuiz && !q1Done && !q2Done)
    return (
      <div className="quiz-desktop-layout">
        <Question1 onChoose={Q1Answered} />
      </div>
    );

  if (startQuiz && q1Done && !q2Done)
    return (
      <div className="quiz-desktop-layout">
        <Question2 onChoose={Q2Answered} getResults={getResults} />
      </div>
    );

  if (startQuiz && q1Done && q2Done)
    return <div className="quiz-desktop-layout">{result(ans1, ans2)}</div>;

  return (
    <div className="quiz-desktop-layout">
      <div className="banner-left">
        <img alt="quiz-banner" src={IMAGES.intro1} width="100%" />
      </div>
      <div className="banner-right">
        <span>{STRINGS.quizTagLineQ}</span>
        <span>{STRINGS.quizTagLine}</span>
        <Button onClick={() => setStartQuiz(true)}>{STRINGS.takeQuiz}</Button>
      </div>
    </div>
  );
};

export default DesktopLayout;
