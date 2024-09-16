
// Function to calculate interest-only mortgage repayments
export const InterestOnly = (
  mortgageAmount,
  mortgageTerm,
  setMonthyRepayments,
  setRepayOver
) => {
  let mortgageA = Number(mortgageAmount);
  let term = Number(mortgageTerm);

  let monthlyRepay = mortgageA / (term * 12);
  setMonthyRepayments(Number(monthlyRepay));
  setRepayOver(mortgageA);
};

// Function to calculate repayment mortgage repayments (principal + interest)
export const Repayment = (
  mortgageAmount,
  mortgageTerm,
  interestRate,
  setMonthyRepayments,
  setRepayOver
) => {
  let mortgageA = Number(mortgageAmount);
  let term = Number(mortgageTerm);
  let interest = Number(interestRate);

  let monthlyPayment = term * 12;
  let monthlyinterest = interest / 100 / 12;

  let monthlyRepay =
    (mortgageA *
      (monthlyinterest * Math.pow(1 + monthlyinterest, monthlyPayment))) /
    (Math.pow(1 + monthlyinterest, monthlyPayment) - 1);
  setMonthyRepayments(monthlyRepay);

  let result = monthlyRepay * monthlyPayment;
  setRepayOver(result);
};
