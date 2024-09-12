import React, { useState } from "react";
import illustrationResult from "../assets/images/illustration-empty.svg";

function Result() {
  const [resultScreen, setResultScreen] = useState(false);
  return (
    <div className="result_container">
      <div className={resultScreen ? "container" : "container center"}>
        {resultScreen ? (
          <>
            <div className="result_header">
              <h3>Your result</h3>

              <p>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </p>
            </div>
            <div className="result-box">
              <p className="title-repayments">Your monthly repayments</p>
              <h1>£00000</h1>
              <hr />
              <p className="title-repayments">
                Total you'll repay over the term
              </p>
              <h3>£000</h3>
            </div>
          </>
        ) : (
          <>
            <div className="result-main">
              <img src={illustrationResult} alt="" />
              <h2>Results shown here</h2>
              <p>
                Complete the form and click "calculate repayment" to se what
                your monthly repayments would be.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
