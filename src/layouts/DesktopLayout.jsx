import React, { useState } from "react";
import STRINGS from "../constants/Strings";
import IMAGES from "../assets/Images";
// import Button from "../components/Button";
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

  if (startQuiz && !q1Done && !q2Done)
    return (
      <div className="quiz-desktop-layout">
        <Question1
          onChoose={(answerId) => setAns1(answerId)}
          onNext={() => setQ1Done(true)}
        />
      </div>
    );

  if (startQuiz && q1Done && !q2Done)
    return (
      <div className="quiz-desktop-layout">
        <Question2
          onChoose={(answerId) => setAns2(answerId)}
          getResults={() => setQ2Done(true)}
        />
      </div>
    );

  if (startQuiz && q1Done && q2Done)
    return <div className="quiz-desktop-layout">{result(ans1, ans2)}</div>;

  return (
    <div className="quiz-desktop-layout">
      <div className="banner-left">
        <img alt="quiz-banner" src={IMAGES.intro1} />
      </div>
      <div className="banner-right">
        <span className="quiz-question">{STRINGS.quizTagLineQ}</span>
        <span className="quiz-tagline">{STRINGS.quizTagLine}</span>
        {/*  eslint-disable-next-line */}
        <div className="quiz-cta btn" onClick={() => setStartQuiz(true)}>
          {STRINGS.takeQuiz}
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
