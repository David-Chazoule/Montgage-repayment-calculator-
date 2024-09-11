import React from "react";

function Result() {
  return (
    <div className="result_container">
      <div className="result_header">
        <h1>Your result</h1>

        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>
      <div className="result-box">
       <p className="title-repayments">Your monthly repayments</p>
       <h2>£00000</h2>
        <hr/>
        <p className="title-repayments">Total you'll repay over the term</p>
        <h3>£000</h3>
      </div>
    </div>
  );
}

export default Result;
