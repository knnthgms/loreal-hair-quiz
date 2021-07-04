import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import "./mobile.scss";
import Button from "../button";

const MobileLayout = () => {
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
        <Button>{STRINGS.takeQuiz}</Button>
      </div>
    </div>
  );
};

export default MobileLayout;
