import React from "react";
import Result1 from "../components/results/Result1";
import Result2 from "../components/results/Result2";
import Result3 from "../components/results/Result3";
import Result4 from "../components/results/Result4";
import Result5 from "../components/results/Result5";
import Result6 from "../components/results/Result6";
import Result7 from "../components/results/Result7";
import Result8 from "../components/results/Result8";
import Result9 from "../components/results/Result9";

const result = (a, b) => {
  if (a === 0) return <Result1 />;
  if (a === 1) return <Result2 />;
  if (a === 2) return <Result3 />;
  if (a === 3) return <Result4 />;
  if (a === 4 && b === 0) return <Result5 />;
  if (a === 4 && b === 1) return <Result6 />;
  if (a === 4 && b === 2) return <Result7 />;
  if (a === 4 && b === 3) return <Result8 />;
  if (a === 4 && b === 4) return <Result9 />;
  return <Result1 />;
};

export default result;
