import React, { useState } from "react";
import calculatorIcon from "../assets/images/icon-calculator.svg";
import { InterestOnly, Repayment } from "../outils/outils";

function Calculator({ setResultPage, setMonthyRepayments, setRepayOver }) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [method, setMethod] = useState("");
  const [selected, setSelected] = useState(null);
  const [errors, setErrors] = useState({});

  // Method to calculate repayments based on selected mortgage type

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

  // Form submission handler
  const handlePost = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setResultPage(true);
      Method();
    }
  };

  // Handle input change for numeric fields (mortgage amount, term, and interest rate)
  const handleNumberChange = (setter, field) => (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);

      if (value === "0" && value.trim() !== "") {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: "error" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
      }
    }
  };

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = {};
    if (mortgageAmount === "0" || !mortgageAmount)
      newErrors.mortgageAmount = "error";
    if (mortgageTerm === "0" || !mortgageAmount)
      newErrors.mortgageTerm = "error";
    if (interestRate === "0" || !mortgageAmount)
      newErrors.interestRate = "error";
    if (!method) newErrors.method = "error";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Dynamically apply class names for input fields based on error and focus status
  const getClassNames = (field) => {
    if (errors[field]) {
      return "error focused";
    }
    return selected === field ? "focused" : "";
  };

  // Get error message for a specific field, display if there's an error
  const getErrorMessage = (field) => {
    if (errors[field]) {
      return <p className="error-message">This field is required</p>;
    }
    return null;
  };

  // Clear all fields and reset the form
  const Clear = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMethod("");
    setErrors({});
    setSelected(null);
    setResultPage(false);
  };

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
                className={getClassNames("mortgageAmount")}
                onClick={() => setSelected("mortgageAmount")}
              >
                <i>£</i>
                <input
                  type="text"
                  id="mortageAmount"
                  value={mortgageAmount}
                  onFocus={() => setSelected("mortgageAmount")}
                  onBlur={() => setSelected(null)}
                  onChange={handleNumberChange(
                    setMortgageAmount,
                    "mortgageAmount"
                  )}
                />
              </span>
              <span className="error-box">
                {getErrorMessage("mortgageAmount")}
              </span>
            </div>

            <div className="mortgageTerm">
              <label>Mortgage Term</label>
              <span
                className={getClassNames("mortgageTerm")}
                onClick={() => setSelected("mortgageTerm")}
              >
                <input
                  type="text"
                  id="mortgageTerm"
                  value={mortgageTerm}
                  onFocus={() => setSelected("mortgageTerm")}
                  onBlur={() => setSelected(null)}
                  onChange={handleNumberChange(setMortgageTerm, "mortgageTerm")}
                />
                <i>years</i>
              </span>
              <span className="error-box">
                {getErrorMessage("mortgageTerm")}
              </span>
            </div>
            <div className="interestRate">
              <label>Interest Rate</label>
              <span
                className={getClassNames("interestRate")}
                onClick={() => setSelected("interestRate")}
              >
                <input
                  type="text"
                  id="interestRate"
                  value={interestRate}
                  onFocus={() => setSelected("interestRate")}
                  onBlur={() => setSelected(null)}
                  onChange={handleNumberChange(setInterestRate, "interestRate")}
                />
                <i>%</i>
              </span>
              <span className="error-box">
                {getErrorMessage("interestRate")}
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
          {errors.method && (
            <span className="error-box">
              <p className="error-message">This field is required</p>
            </span>
          )}
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
