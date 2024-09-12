import React from "react";
import calculatorIcon from "../assets/images/icon-calculator.svg";

function Calculator() {
  return (
    <div className="calculator-box">
      <div className="header-container">
        <h3>Mortgage Calculator</h3>
        <p>Clear All</p>
      </div>
      <div className="mortgageform">
        <label>MortgageAmount</label>
        <div>
          <div className="mortgageAmountInput">
            <span>
              <i>£</i>
              <input />
            </span>
          </div>
          {/* <div className="term-rate-box"> */}
          <div className="mortgageTerm">
            <label>Mortgage Term</label>
            <span>
              <input />
              <i>years</i>
            </span>
          </div>
          <div className="interestRate">
            <label>Interest Rate</label>
            <span>
              <input />
              <i>%</i>
            </span>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="mortgageType">
        <label>MortgageType</label>
        <div className="mortgage_repayment">
          <input type="radio" />
          <label>Repayment</label>
        </div>

        <div className="mortgage_interest">
          <input type="radio" />
          <label>Interest Only</label>
        </div>
      </div>

      <div className="btn-container">
        <button>
          <img src={calculatorIcon} alt="" />
          Calculate Repayments
        </button>
      </div>
    </div>
  );
}

export default Calculator;
