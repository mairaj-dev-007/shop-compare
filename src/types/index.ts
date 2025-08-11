import React from "react";

// Common interfaces
export interface Reviews {
  head?: string;
  head2?: string;
  green?: number | string;
  pink?: number | string | null;
  review?: string;
  nmlsId?: string;
}

export interface RangeValue {
  minValue?: string;
  maxValue?: string;
  min?: string;
  max?: string;
  maxLoan?: string | null;
}

export interface AdditionalFeature {
  id?: number;
  item: string;
}

// Loan data interfaces
export interface LoanData {
  id?: number;
  image: string;
  reviews?: Reviews;
  loanAmount?: RangeValue;
  apr?: RangeValue;
  loanTerm?: RangeValue;
  creditScore?: RangeValue;
  additional?: AdditionalFeature[] | null;
}

// Credit card data interfaces
export interface CreditCardData {
  id?: number;
  image: string;
  reviews?: Reviews;
  purchaseApr?: RangeValue;
  balanceTransferApr?: RangeValue;
  creditScore?: RangeValue;
  annualFee?: RangeValue;
  additional?: AdditionalFeature[] | null;
}

// Banking data interfaces
export interface BankingData {
  id?: number;
  image: string;
  reviews?: Reviews;
  apy?: RangeValue;
  monthlyFee?: RangeValue;
  minimumBalance?: RangeValue;
  minimumDeposit?: RangeValue;
  transferSpeed?: RangeValue;
  processingFee?: RangeValue;
  additional?: AdditionalFeature[] | null;
}

// Mortgage data interfaces
export interface MortgageData {
  id?: number;
  image: string;
  reviews?: Reviews;
  loanAmount?: RangeValue;
  apr?: RangeValue;
  loanTerm?: RangeValue;
  maxLtv?: string;
  creditScore?: RangeValue;
  noOrigginationFee?: string;
  additional?: AdditionalFeature[] | null;
  sharerdEquitCase?: AdditionalFeature[] | null;
  investmentRangeD?: RangeValue;
  investmentRangeP?: RangeValue;
}

// Navigation interfaces
export interface NavItem {
  name: string;
  href: string;
}

export interface NavCategory {
  label: string;
  href: string;
  submenu: NavItem[];
}

export interface SearchableItem {
  name: string;
  href: string;
  category: string;
}

// Data module interface - Updated to match actual exports from data.js
export interface DataModule {
  // Loan data
  autoLoan: LoanData[];
  personalLoan: LoanData[];
  businessLoan: LoanData[];
  autoTitleLoan: LoanData[];
  payDayLoan: LoanData[];
  personalLinesOfCredit: LoanData[];
  privateStudentLoan: LoanData[];
  autoLoanRefinance: LoanData[];
  StudentLoanRefinance: LoanData[]; // Note: Capital S in actual export

  // Credit card data
  personalCreditCard: CreditCardData[];
  businessesCreditCard: CreditCardData[];
  prepaidCard: CreditCardData[];

  // Banking data
  checkingAccounts: BankingData[];
  savingAcc: BankingData[]; // Note: savingAcc not savingsAccounts
  cdAccounts: BankingData[];
  moneyMarketAccounts: BankingData[];
  businessCheckingAcc: BankingData[];
  moneyTransferServices: BankingData[];

  // Mortgage data
  homeEquityLoan: MortgageData[];
  homePurchaseMortgages: MortgageData[];
  mortgageRefinance: MortgageData[];
  sharedEquityAgreements: MortgageData[];

  // Additional exports that exist but may not be used
  heloc?: any[];
  mortgageBroker?: any[];
  reverseMortgages?: any[];
}
