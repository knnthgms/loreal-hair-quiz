import React, { useState } from "react";
import STRINGS from "../constants/Strings";
import IMAGES from "../assets/Images";
import Button from "../components/Button";
import Question1 from "../components/questions/Question1";
import Question2 from "../components/questions/Question2";
import Result1 from "../components/results/Result1";
import Result2 from "../components/results/Result2";
import Result3 from "../components/results/Result3";
import Result4 from "../components/results/Result4";
import Result5 from "../components/results/Result5";
import Result6 from "../components/results/Result6";
import Result7 from "../components/results/Result7";
import Result8 from "../components/results/Result8";
import Result9 from "../components/results/Result9";
import "./desktop.scss";

const DesktopLayout = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [q1Done, setQ1Done] = useState(false);
  const [q2Done, setQ2Done] = useState(false);
  const [ans1, setAns1] = useState(null);
  const [ans2, setAns2] = useState(null);

  const result = (a, b) => {
    if (a === 0) return <Result1 />;
    if (a === 1) return <Result2 />;
    if (a === 2) return <Result3 />;
    if (a === 3) return <Result4 />;
    if (a === 4 && b === 0) return <Result5 />;
    if (a === 4 && b === 1) return <Result6 />;
    if (a === 4 && b === 2) return <Result7 />;
    if (a === 4 && b === 3) return <Result8 />;
    if (a === 4 && b === 4) return <Result9 />;
    return <Result1 />;
  };

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
