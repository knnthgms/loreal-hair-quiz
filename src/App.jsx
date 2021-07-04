import React from "react";
import "./App.scss";
import Choice from "./components/Choice/Choice";
// import UTILS from "./utils";
import IMAGES from "./assets/images";

const App = () => {
  return (
    <div className="App">
      {/* {!UTILS.isMobile()  */}
      <div className="mobile-version">
        <div className="row">
          <Choice
            icon={IMAGES.colorVibrancy}
            color="#BDC0E1"
            label="choice card"
          />
          <Choice
            icon={IMAGES.illuminateBlonde}
            color="#BDC0E1"
            label="choice card"
          />
          <Choice
            icon={IMAGES.neutraliseYellow}
            color="#BDC0E1"
            label="choice card"
          />
          <Choice
            icon={IMAGES.longerHair}
            color="#BDC0E1"
            label="choice card"
          />
          <Choice
            icon={IMAGES.healthyHair}
            color="#BDC0E1"
            label="choice card"
          />
        </div>
        <div className="row">
          <Choice
            icon={IMAGES.damagedHair}
            color="#BDC0E1"
            label="choice card"
          />
          <Choice icon={IMAGES.weakHair} color="#BDC0E1" label="choice card" />
          <Choice
            icon={IMAGES.frizzyHair}
            color="#BDC0E1"
            label="choice card"
          />
          <Choice icon={IMAGES.dryHair} color="#BDC0E1" label="choice card" />
          <Choice icon={IMAGES.flatHair} color="#BDC0E1" label="choice card" />
        </div>
      </div>
      )
    </div>
  );
};

export default App;
