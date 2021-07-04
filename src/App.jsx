import React from "react";
import "./App.scss";
import DesktopLayout from "./components/layouts/DesktopLayout";
import MobileLayout from "./components/layouts/MobileLayout";
import UTILS from "./utils";

function App() {
  return (
    <>
      <div className="QuizApp">
        {UTILS.isMobile() ? <MobileLayout /> : <DesktopLayout />}
      </div>
      <div className="QuizApp">
        {!UTILS.isMobile() ? <MobileLayout /> : <DesktopLayout />}
      </div>
    </>
  );
}

export default App;
