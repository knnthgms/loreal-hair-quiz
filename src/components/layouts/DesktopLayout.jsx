import React from "react";
import STRINGS from "../../constants/Strings";
import IMAGES from "../../assets/images";
import Button from "../button";
import "./desktop.scss";

const DesktopLayout = () => {
  return (
    <div className="quiz-desktop-layout">
      <div className="banner-left">
        <img alt="quiz-banner" src={IMAGES.intro1} width="100%" />
      </div>
      <div className="banner-right">
        <span>{STRINGS.quizTagLineQ}</span>
        <span>{STRINGS.quizTagLine}</span>
        <Button>{STRINGS.takeQuiz}</Button>
      </div>
    </div>
  );
};

export default DesktopLayout;
