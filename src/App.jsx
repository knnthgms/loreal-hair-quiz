import React from "react";
import "./App.scss";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import UTILS from "./utils";

const App = () => {
  return (
    <>
      <div className="QuizApp">
        {UTILS.isMobile() ? <MobileLayout /> : <DesktopLayout />}
      </div>
      {/* <div className="QuizApp">
        {!UTILS.isMobile() ? <MobileLayout /> : <DesktopLayout />}
      </div> */}
    </>
  );
};

export default App;
