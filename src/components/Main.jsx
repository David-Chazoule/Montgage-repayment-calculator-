import React, { useState } from "react";
import Calculator from "./Calculator";
import Result from "./Result";

function Main() {
  const [resultPage, setResultPage] = useState(false);
  const [monthlyRepayments, setMonthyRepayments] = useState("");
  const [repayOver, setRepayOver] = useState("");

  return (
    <div className="main_container">
      <div className="calculator-container">
        <Calculator
          setResultPage={setResultPage}
          setMonthyRepayments={setMonthyRepayments}
          setRepayOver={setRepayOver}
        />
      </div>
      <div className="result-container">
        <Result
          resultPage={resultPage}
          monthlyRepayments={monthlyRepayments}
          repayOver={repayOver}
        />
      </div>
    </div>
  );
}

export default Main;
