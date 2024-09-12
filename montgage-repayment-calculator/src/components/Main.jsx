import React from "react";
import Calculator from "./Calculator";
import Result from "./Result";

function Main() {
  return (
    <div className="main_container">
      <div className="calculator-container">
        <Calculator />
      </div>

      <div className="result-container">
        <Result />
      </div>
    </div>
  );
}

export default Main;
