import React, { useState } from "react";
import STRINGS from "../constants/Strings";
import IMAGES from "../assets/Images";
import Question1 from "../components/questions/Question1";
import Question2 from "../components/questions/Question2";
// import Button from "../components/Button";
import result from "../constants/Answers";
import "./mobile.scss";

const MobileLayout = () => {
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
      <div className="quiz-mobile-layout">
        <Question1 onChoose={Q1Answered} />
      </div>
    );

  if (startQuiz && q1Done && !q2Done)
    return (
      <div className="quiz-mobile-layout">
        <Question2 onChoose={Q2Answered} getResults={getResults} />
      </div>
    );

  if (startQuiz && q1Done && q2Done)
    return <div className="quiz-mobile-layout">{result(ans1, ans2)}</div>;

  return (
    <div className="quiz-mobile-layout">
      <div className="banner-top">
        <span className="banner-header">{STRINGS.quiz}</span>
        <span className="banner-title">{STRINGS.quizTitle}</span>
      </div>
      <div className="banner-image">
        <img alt="quiz-banner" src={IMAGES.cover} />
      </div>
      <div className="banner-bottom">
        <span className="banner-tag">{STRINGS.quizTagLine} </span>
        {/* eslint-disable-next-line */}
        <div
          role="button"
          className="banner-cta"
          onClick={() => setStartQuiz(true)}
        >
          {STRINGS.takeQuiz}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
