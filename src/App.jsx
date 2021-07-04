import React from "react";
import "./App.css";
import UTILS from "./utils";

function App() {
  return <div className="App">{UTILS.isMobile() ? "mobile" : "desktop"}</div>;
}

export default App;
