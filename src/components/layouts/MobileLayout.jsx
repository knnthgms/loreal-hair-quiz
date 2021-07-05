import React, { useState } from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import Question2 from "../questions/Question2";
import Button from "../button";
import "./mobile.scss";

const MobileLayout = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  if (startQuiz)
    return (
      <div className="quiz-mobile-layout">
        <Question2 />
      </div>
    );

  return (
    <div className="quiz-mobile-layout">
      <div className="banner-top">
        <span>{STRINGS.quiz}</span>
        <span>{STRINGS.quizTitle}</span>
      </div>
      <div className="banner-image">
        <img alt="quiz-banner" src={IMAGES.cover} width="100%" />
      </div>
      <div className="banner-bottom">
        <span>{STRINGS.quizTagLine} </span>
        <Button onClick={() => setStartQuiz(true)}>{STRINGS.takeQuiz}</Button>
      </div>
    </div>
  );
};

export default MobileLayout;
