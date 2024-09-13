import { ValidNumber } from "../regex/Regex";

export const validMortgageAmount = (state, value, error) => {
  state(value);
  if (!ValidNumber.test(value)) {
    error("wrong!!");
  } else {
    error("");
  }
};

export const validMortgageTerm = (state, value, error) => {
  state(value);
  if (!ValidNumber.test(value)) {
    error("wrong!!");
  } else {
    error("");
  }
};

export const validInterestRate = (state, value, error) => {
  state(value);
  if (!ValidNumber.test(value)) {
    error("wrong!!");
  } else {
    error("");
  }
};

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

  let monthlyPayment = term * 12; // Nombre total de paiements mensuels
  let monthlyinterest = interest / 100 / 12; // Taux d'intérêt mensuel

  // Calcul du paiement mensuel
  let monthlyRepay =
    (mortgageA *
      (monthlyinterest * Math.pow(1 + monthlyinterest, monthlyPayment))) /
    (Math.pow(1 + monthlyinterest, monthlyPayment) - 1);
  setMonthyRepayments(monthlyRepay);

  // Calcul du total à rembourser sur la durée du prêt
  let result = monthlyRepay * monthlyPayment;
  setRepayOver(result);
};
