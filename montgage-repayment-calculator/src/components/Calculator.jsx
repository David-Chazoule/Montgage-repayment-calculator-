import React, { useState } from "react";
import calculatorIcon from "../assets/images/icon-calculator.svg";
import { InterestOnly, Repayment } from "../outils/outils";

function Calculator({ setResultPage, setMonthyRepayments, setRepayOver }) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [method, setMethod] = useState("");
  const [selected, setSelected] = useState(null);
  const [tests, setTest] = useState("");

  const Method = () => {
    if (method === "interest") {
      InterestOnly(
        mortgageAmount,
        mortgageTerm,
        setMonthyRepayments,
        setRepayOver
      );
    }

    if (method === "repayment") {
      Repayment(
        mortgageAmount,
        mortgageTerm,
        interestRate,
        setMonthyRepayments,
        setRepayOver
      );
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    setResultPage(true);

    Method();
  };

  const handleNumberChange = (setter) => (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }

   
  };

  const Clear = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMethod("");
    setTest("");
    setSelected(null);
    setResultPage(false);
  };

  

  console.log(mortgageAmount, "A", mortgageTerm, "b", interestRate, "c");

  return (
    <div className="calculator-box">
      <div className="header-container">
        <h3>Mortgage Calculator</h3>
        <p onClick={Clear}>Clear All</p>
      </div>
      <form onSubmit={handlePost}>
        <div className="mortgageform">
          <label>MortgageAmount</label>
          <div>
            <div className="mortgageAmountInput">
              <span
                className={selected === `mortgageAmount ` ? "focused" : ""}
                onClick={() => setSelected("mortgageAmount")}
              >
                <i>£</i>
                <input
                  type="text"
                  id="mortageAmount"
                  value={mortgageAmount}
                  onFocus={() => setSelected("mortgageAmount")}
                  onBlur={() => setSelected(null)}
                  onChange={handleNumberChange(setMortgageAmount)}
                />
              </span>
              {tests}
            </div>

            <div className="mortgageTerm">
              <label>Mortgage Term</label>
              <span
                className={selected === "mortgageTerm" ? "focused" : ""}
                onClick={() => setSelected("mortgageTerm")}
              >
                <input
                  type="text"
                  id="mortgageTerm"
                  value={mortgageTerm}
                  onFocus={() => setSelected("mortgageTerm")}
                  onBlur={() => setSelected(null)}
                  onChange={handleNumberChange(setMortgageTerm)}
                />
                <i>years</i>
              </span>
            </div>
            <div className="interestRate">
              <label>Interest Rate</label>
              <span
                className={selected === "interestRate" ? "focused" : ""}
                onClick={() => setSelected("interestRate")}
              >
                <input
                  type="text"
                  id="interestRate"
                  value={interestRate}
                  onFocus={() => setSelected("interestRate")}
                  onBlur={() => setSelected(null)}
                  onChange={handleNumberChange(setInterestRate)}
                />
                <i>%</i>
              </span>
            </div>
          </div>
        </div>

        <div className="mortgageType">
          <label>MortgageType</label>
          <div
            className={`mortgage_repayment ${
              method === "repayment" ? "checked" : ""
            }`}
            onClick={() => setMethod("repayment")}
          >
            <input
              type="radio"
              value="repayment"
              id="repayment"
              checked={method === "repayment"}
              onChange={() => setMethod("repayment")}
            />
            <label htmlFor="repayment">Repayment</label>
          </div>

          <div
            className={`mortgage_interest ${
              method === "interest" ? "checked" : ""
            }`}
            onClick={() => setMethod("interest")}
          >
            <input
              type="radio"
              value="interest"
              id="interest"
              checked={method === "interest"}
              onChange={() => setMethod("interest")}
            />
            <label htmlFor="interest">Interest Only</label>
          </div>
        </div>

        <div className="btn-container">
          <button>
            <img src={calculatorIcon} alt="calculator-img" />
            Calculate Repayments
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
