import React, { useState } from "react";
import STRINGS from "../constants/Strings";
import IMAGES from "../assets/Images";
import Button from "../components/Button";
import Question1 from "../components/questions/Question1";
// import Result1 from "../results/Result9";
import "./desktop.scss";

const DesktopLayout = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  if (startQuiz)
    return (
      <div className="quiz-desktop-layout">
        <Question1 />
        {/* <Result1 /> */}
      </div>
    );

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
