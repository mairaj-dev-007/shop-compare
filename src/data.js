// data for loan........................

// ....................................
export const autoLoan = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/auto-approve-auto-loan-db7e7f6caeab61c3192cb358fcf64ae9_thumb.jpg",
    reviews: {
      head: "Auto Approve Auto Loan",
      head2: "Mostly recommended",
      review: "6",
      green: 4,
      pink: 2,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "580",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "100000",
      minValue: "7500",
      maxValue: "150000",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "2.25",
      maxValue: "19.99",
    },
    loanTerm: {
      min: "6",
      max: "240",
      minValue: "12",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Consumers Credit Union Auto Loan",
      head2: "Strongly recommended",
      review: "8",
      green: 8,
      pink: null,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "640",
      maxValue: "840",
    },
    loanAmount: {
      min: "500",
      max: "100000",
      minValue: "5000",
      maxValue: "150000",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "2.49",
      maxValue: "15.49",
    },
    loanTerm: {
      min: "6",
      max: "240",
      minValue: "6",
      maxValue: "84",
    },
    additional: null,
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/auto-credit-express_thumb.png",
    reviews: {
      head: "Auto Credit Express Auto Loan",
      head2: "Strongly recommended",
      review: "8",
      green: 7,
      pink: 1,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "400",
      maxValue: "680",
    },
    loanAmount: {
      min: "500",
      max: "100000",
      minValue: "3500",
      maxValue: "45000",
    },
    apr: null,
    loanTerm: {
      maxTerm: 72,
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/myautoloan_thumb.png",
    reviews: {
      head: "MyAutoloan Car Loan",
      head2: "Mostly not recommended",
      review: "6",
      green: 2,
      pink: 4,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "500",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "100000",
      minValue: "8000",
      maxValue: "100000",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "2.19",
      maxValue: "24.9",
    },
    loanTerm: {
      maxTerm: 84,
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/onemain-financial-dc86d1c591f38998198a0f0f8b734de4_thumb.png",
    reviews: {
      head: "OneMain Financial Car Purchase Loans",
      head2: "Strongly recommended",
      review: "7",
      green: 5,
      pink: 2,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "560",
      maxValue: "750",
    },
    loanAmount: {
      min: "500",
      max: "100000",
      minValue: "1500",
      maxValue: "20000",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "18",
      maxValue: "35.99",
    },
    loanTerm: {
      min: "6",
      max: "240",
      minValue: "24",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image: "https://cdn-reviews.supermoney.com/businesses/5/autopay_thumb.png",
    reviews: {
      head: "Autopay Auto Loan",
      head2: "Mostly not recommended",
      review: "56",
      green: 34,
      pink: 22,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "100000",
      minValue: "2500",
      maxValue: "100000",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "1.99",
      maxValue: "15.99",
    },
    loanTerm: {
      maxTerm: 84,
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const autoTitleLoan = [
  {
    id: 1,
    image: "https://cdn-reviews.supermoney.com/businesses/4/loanmart_thumb.png",
    reviews: {
      head: "LoanMart Title Loans",
      head2: "Mostly recommended",
      review: "65",
      green: 46,
      pink: 15,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "700",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "1500",
      maxValue: "7500",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "30",
      maxValue: "165",
    },

    additional: [
      {
        id: 1,
        item: "Clean Title Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/check-into-cash-title-loans_thumb.jpg",
    reviews: {
      head: "Check Into Cash Title Loans",
      head2: "Rating not yet determined",
      review: "1",
      rating: null,
      green: 1,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "500",
      maxValue: "640",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "1000",
      maxValue: "25000",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "6.99",
      maxValue: "36",
    },

    additional: [
      {
        id: 1,
        item: "Clean Title Required",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/autocashusa_thumb.png",
    reviews: {
      head: "AutoCashUSA Title Loans",
      head2: "Be the first to rate",
      rating: null,
      review: null,
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "600",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "300",
      maxValue: "15000",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "36",
      maxValue: "360",
    },

    additional: [
      {
        id: 1,
        item: "Clean Title Required",
      },
      {
        id: 2,
        item: "No Late Fees",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/fast-auto-loans-title-loans_thumb.png",
    reviews: {
      head: "Fast Auto Loans Title Loans",
      head2: "Be the first to rate",
      review: null,
      rating: null,
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "850",
    },
    loanAmount: {
      maxLoan: 15000,
    },
    apr: {
      fixedApr: "246.36",
    },
    additional: null,
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/loancenter-title-loan-4974fff475700500975fa6e977f06737_thumb.jpeg",
    reviews: {
      head: "LoanCenter Title Loan",
      head2: "Be the first to rate",
      rating: null,
      review: null,
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "630",
      maxValue: "850",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "2000",
      maxValue: "50000",
    },
    apr: {
      fixedApr: "129",
    },
    additional: [
      {
        id: 1,
        item: "Clean Title Required",
      },
      {
        id: 2,
        item: "GPS Tracking Required",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/speedy-cash_thumb.png",
    reviews: {
      head: "Speedy Cash Auto Title Loans",
      head2: "Rating not yet determined",
      rating: null,
      review: 3,
      green: 3,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "100",
      maxValue: "25000",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "131",
      maxValue: "521.42",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/finova-financial_thumb.png",
    reviews: {
      head: "Finova Financial Auto Equity Loan",
      head2: "Mostly not recommended",
      rating: null,
      review: 9,
      green: 4,
      pink: 5,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "700",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "500",
      maxValue: "5000",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "17",
      maxValue: "30",
    },
    additional: [
      {
        id: 1,
        item: "Clean Title Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/tfc-title-loans_thumb.png",
    reviews: {
      head: "TFC Title Loans",
      head2: "Rating not yet determined",
      rating: null,
      review: 3,
      green: 3,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "700",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "2500",
      maxValue: "50000",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "20",
      maxValue: "90",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "Clean Title Required",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/ace-cash-express_thumb.jpg",
    reviews: {
      head: "ACE Cash Express Title Loans",
      head2: "Rating not yet determined",
      rating: null,
      review: 1,
      green: 1,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "100",
      maxValue: "5000",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "152.08",
      maxValue: "890.4",
    },
    additional: [
      {
        id: 1,
        item: "Clean Title Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/cash-store_thumb.png",
    reviews: {
      head: "Cash Store Title Loans",
      head2: "Rating not yet determined",
      rating: null,
      review: 1,
      green: 1,
      pink: 0,
    },
    creditScore: 300,
    loanAmount: {
      min: "100",
      max: "50000",
      minValue: "200",
      maxValue: "3995",
    },
    apr: {
      min: "7",
      max: "100",
      minValue: "304.17",
      maxValue: "390",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const payDayLoan = [
  {
    id: 1,
    image: "image",
    reviews: {
      head: "Credit Ninja Payday Loans",
      head2: "Strongly recommended",
      review: "7",
      green: 6,
      pink: 1,
    },

    loanAmount: {
      min: "50",
      max: "5000",
      minValue: "250",
      maxValue: "500",
    },
    loanFee: {
      min: "5",
      max: "540",
      minValue: "62.5",
      maxValue: "125",
    },
    minMonthlyIncome: null,

    additional: [],
  },
  {
    id: 2,
    image: "image",
    reviews: {
      head: "Check City Payday Loans",
      head2: "Strongly recommended",
      review: "29",
      green: 21,
      pink: 5,
    },

    loanAmount: {
      min: "50",
      max: "5000",
      minValue: "100",
      maxValue: "2500",
    },
    loanFee: {
      min: "5",
      max: "540",
      minValue: "20",
      maxValue: "100",
    },
    minMonthlyIncome: 330,

    additional: [
      {
        id: 1,
        item: "Direct Deposit",
      },
      {
        id: 2,
        item: "No Credit Check",
      },
      {
        id: 3,
        item: "Online Application",
      },
    ],
  },
  {
    id: 3,
    image: "image",
    reviews: {
      head: "Check 'n Go Payday Loans",
      head2: "Mostly not recommended",
      review: "22",
      green: 9,
      pink: 12,
    },

    loanAmount: {
      min: "50",
      max: "5000",
      minValue: "100",
      maxValue: "865",
    },
    loanFee: {
      min: "5",
      max: "540",
      minValue: "25",
      maxValue: "134.07",
    },
    minMonthlyIncome: null,

    additional: [
      {
        id: 1,
        item: "Direct Deposit",
      },
      {
        id: 2,
        item: "Instant Decision",
      },
      {
        id: 3,
        item: "No Credit Check",
      },
      {
        id: 3,
        item: "Online Application",
      },
    ],
  },
  {
    id: 4,
    image: "image",
    reviews: {
      head: "Allied Cash Advance Payday Loans",
      head2: "Mostly not recommended",
      review: "12",
      green: 5,
      pink: 7,
    },

    loanAmount: {
      min: "50",
      max: "5000",
      minValue: "100",
      maxValue: "865",
    },
    loanFee: {
      min: "5",
      max: "540",
      minValue: "25",
      maxValue: "134.07",
    },
    minMonthlyIncome: null,

    additional: [
      {
        id: 1,
        item: "Direct Deposit",
      },
      {
        id: 2,
        item: "Instant Decision",
      },
      {
        id: 3,
        item: "No Credit Check",
      },
      {
        id: 4,
        item: "Online Application",
      },
    ],
  },
  {
    id: 5,
    image: "image",
    reviews: {
      head: "ACE Cash Express Payday Loans",
      head2: "Mostly not recommende",
      review: "5",
      green: 2,
      pink: 3,
    },

    loanAmount: {
      min: "50",
      max: "5000",
      minValue: "100",
      maxValue: "1500",
    },
    loanFee: null,
    minMonthlyIncome: null,

    additional: [
      {
        id: 1,
        item: "Direct Deposit",
      },
      {
        id: 2,
        item: "Instant Decision",
      },
      {
        id: 3,
        item: "Online Application",
      },
    ],
  },
];

export const personalLinesOfCredit = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/advance-financial_thumb.jpg",
    reviews: {
      head: "Advance Financial FLEX Loan",
      head2: "Mostly recommended",
      review: "14",
      green: 4,
      pink: 10,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "25",
      maxValue: "4000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "240",
      maxValue: "360",
    },

    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image: "/static/upgrade.png",
    reviews: {
      head: "Upgrade Card Personal Credit Line",
      head2: "Strongly recommended",
      review: "17",
      green: 2,
      pink: 15,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "8.99",
      maxValue: "29.99",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Late Fees",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/creditfresh-line-of-credit_thumb.png",
    reviews: {
      head: "CreditFresh - Line Of Credit",
      head2: "Mostly recommended",
      review: "6",
      green: 3,
      pink: 3,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "5000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image: "/static/tally.png",
    reviews: {
      head: "Tally",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "7.9",
      maxValue: "19.9",
    },

    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/regions-bank-b8d4fb661236881f1be2532c04a540d7_thumb.png",
    reviews: {
      head: "Regions Bank Preferred Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "3000",
      max: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "8.74",
      maxValue: "18.74",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/citadel-personal-line-of-credit_thumb.jpg",
    reviews: {
      head: "Citadel Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "10.99",
      maxValue: "18",
    },

    additional: [],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/connexus-credit-union-personal-line-of-credit_thumb.png",
    reviews: {
      head: "Connexus Credit Union Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "3000",
      max: "25000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "9.99",
      maxValue: "18",
    },

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/forum-credit-union-personal-line-of-credit_thumb.jpg",
    reviews: {
      head: "Forum Credit Union Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      max: "25000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "9",
      maxValue: "21",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/becu-personal-line-of-credit_thumb.jpg",
    reviews: {
      head: "BECU Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "10.4",
      maxValue: "17.9",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/fifth-third-bank-personal-line-of-credit_thumb.jpg",
    reviews: {
      head: "Fifth Third Bank Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "10.74",
      maxValue: "17.34",
    },

    additional: [],
  },
  {
    id: 11,
    image: "/static/first-tech.webp",
    reviews: {
      head: "First Tech Federal Credit Union Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      max: "10000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "13.24",
      maxValue: "18",
    },

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/santander-bank-0d131ea69224ee1646408cb3e722c7b6_thumb.png",
    reviews: {
      head: "Santander Bank Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "5000",
      max: "35000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/integra-credit_thumb.png",
    reviews: {
      head: "Integra Credit Personal Lines Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      max: "3000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "99",
      maxValue: "399",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Late Fees",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/regions-bank-b8d4fb661236881f1be2532c04a540d7_thumb.png",
    reviews: {
      head: "Regions Credit Line",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      max: "3500",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/first-republic-bank-personal-line-of-credit_thumb.png",
    reviews: {
      head: "First Republic Bank Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "60000",
      max: "350000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "2.25",
      maxValue: "3.5",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/citizens-bank-of-cheboygan-personal-lines-of-credit_thumb.jpg",
    reviews: {
      head: "Citizens Bank Of Cheboygan Personal Lines Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [],
  },
  {
    id: 17,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/citizens-national-bank-of-cheboygan-checkmate-lines-of-credit_thumb.jpg",
    reviews: {
      head: "Citizens NB Cheboygan Checkmate Lines Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/citizens-national-bank-line-of-credit_thumb.jpg",
    reviews: {
      head: "Citizens National Bank Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/members-first-credit-union-prime-line-of-credit_thumb.png",
    reviews: {
      head: "Members First Credit Union Prime Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/gate-city-bank_thumb.jpg",
    reviews: {
      head: "Gate City Bank Classic Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "5000",
      max: "100000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/capital-bank-line-of-credit_thumb.png",
    reviews: {
      head: "Capital Bank Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
    ],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/members-first-credit-union-of-florida-lifestyle-credit-line_thumb.png",
    reviews: {
      head: "Members 1st CU Florida Lifestyle Credit Line",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "9.95",
      maxValue: "18",
    },

    additional: [],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/first-bank-and-trust-of-new-orleans-personal-line-of-credit_thumb.jpg",
    reviews: {
      head: "1st Bank Trust New Orleans Personal Line Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "1000",
      max: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/exchange-bank-of-california_thumb.jpg",
    reviews: {
      head: "Exchange Bank Of California Personal Lines Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "5000",
      max: "100000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "4.99",
      maxValue: "10.75",
    },

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/members1st-community-credit-union-me1st-line-of-credit_thumb.png",
    reviews: {
      head: "MEMBERS1st Community Credit Union ME1st Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      max: "10000",
    },
    apr: {
      fixedApr: 10.9,
    },

    additional: [],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/first-bank-and-trust-of-texas-personal-line-of-credit_thumb.png",
    reviews: {
      head: "First Bank And Trust Of Texas Personal Line Of Credit",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
    ],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/elastic-line-of-credit_thumb.png",
    reviews: {
      head: "Elastic",
      head2: "Mostly not recommended",
      review: 147,
      green: 60,
      pink: 87,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "500",
      max: "4500",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Late Fees",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/suntrust-bank_thumb.png",
    reviews: {
      head: "SunTrust Select Credit Line",
      head2: "Rating not yet determined",
      review: 2,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "25000",
      max: "5000000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "5.75",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/paypal-credit_thumb.png",
    reviews: {
      head: "PayPal Credit",
      head2: "Mostly not recommendeds",
      review: 14,
      green: 6,
      pink: 8,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "250",
      max: "10000",
    },
    apr: {
      fixedApr: 25.99,
    },

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/suntrust-bank_thumb.png",
    reviews: {
      head: "SunTrust Personal Credit Line Plus",
      head2: "Mostly recommended",
      review: 5,
      green: 4,
      pink: 1,
    },
    loanAmount: {
      min: "0",
      max: "100000",
      minValue: "25000",
      max: "50000",
    },
    apr: {
      min: "2",
      max: "250",
      minValue: "8.65",
      maxValue: "24",
    },

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const personalLoan = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/pentagon-federal-credit-union_thumb.jpg",
    reviews: {
      head: "PenFed Credit Union Personal Loans",
      head2: "Strongly recommended",
      review: "28",
      green: 26,
      pink: 2,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "17.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "600",
      maxValue: "50000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image: "/static/best-edge.png",
    reviews: {
      head: "Best Egg Personal Loans",
      head2: "Mostly recommended",
      review: "25",
      green: 15,
      pink: 10,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.99",
      maxValue: "35.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2000",
      maxValue: "50000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/lending-club_thumb.png",
    reviews: {
      head: "LendingClub Personal Loans",
      head2: "Mostly recommended",
      review: "29",
      green: 20,
      pink: 9,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "6.34",
      maxValue: "35.89",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "1000",
      maxValue: "4000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image: "/static/upgrade.png",
    reviews: {
      head: "Upgrade Personal Loans",
      head2: "Strongly recommended",
      review: "262",
      green: 221,
      pink: 41,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "6.55",
      maxValue: "35.97",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "1000",
      maxValue: "50000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/sofi-personal-loans_thumb.jpg",
    reviews: {
      head: "SoFi Personal Loans",
      head2: "Mostly recommended",
      review: "103",
      green: 75,
      pink: 28,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "6.99",
      maxValue: "22.28",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "5000",
      maxValue: "100000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Late Fees",
      },
      {
        id: 4,
        item: "No Origination Fee",
      },
      {
        id: 5,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/regional-finance_thumb.jpg",
    reviews: {
      head: "Regional Finance Personal Loans",
      head2: "Strongly recommended",
      review: "55",
      green: 48,
      pink: 7,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "21.99",
      maxValue: "35.9",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2501",
      maxValue: "12000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/avant-credit_thumb.png",
    reviews: {
      head: "Avant Loans",
      head2: "Strongly recommended",
      review: "702",
      green: 622,
      pink: 80,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "9.95",
      maxValue: "35.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2000",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "Accepts Savings Accounts",
      },
      {
        id: 2,
        item: "Checking Account Required",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/lending-point_thumb.jpg",
    reviews: {
      head: "LendingPoint Personal Loans",
      head2: "Mostly recommended",
      review: "28",
      green: 18,
      pink: 10,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "9.99",
      maxValue: "34.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2000",
      maxValue: "36500",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 9,
    image: "https://cdn-reviews.supermoney.com/businesses/5/prosper_thumb.png",
    reviews: {
      head: "Prosper Personal Loans",
      head2: "Mostly recommended",
      review: "20",
      green: 11,
      pink: 9,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "7.95",
      maxValue: "35.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2000",
      maxValue: "40000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/payoff-personal-loans-f10f1dc5e4ef1b3381d521e1f2abaea4_thumb.png",
    reviews: {
      head: "Happy Money Personal Loans",
      head2: "Strongly not recommended",
      review: "16",
      green: 4,
      pink: 12,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.99",
      maxValue: "24.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "5000",
      maxValue: "40000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Late Fees",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/universal-credit-personal-loans-2814cb3ad813080799be420c9dfce389_thumb.jpeg",
    reviews: {
      head: "Universal Credit Personal Loans",
      head2: "Strongly recommended",
      review: "11",
      green: 10,
      pink: 1,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "8.93",
      maxValue: "35.93",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "1000",
      maxValue: "50000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/oportun-personal-loans_thumb.jpg.webp",
    reviews: {
      head: "Oportun Personal Loans",
      head2: "Mostly recommended",
      review: "386",
      green: 261,
      pink: 119,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "19.99",
      maxValue: "36",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "300",
      maxValue: "9000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "9",
      maxValue: "49",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/discover-personal-loans_thumb.png",
    reviews: {
      head: "Discover Personal Loans",
      head2: "Strongly recommended",
      review: "12",
      green: 12,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "6.99",
      maxValue: "24.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/moneylion_thumb.png",
    reviews: {
      head: "MoneyLion Plus Personal Loans",
      head2: "Mostly recommended",
      review: "333",
      green: 233,
      pink: 100,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.99",
      maxValue: "29.99",
    },
    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/chase-bank_thumb.png",
    reviews: {
      head: "Chase Bank Personal Loans",
      head2: "Strongly recommended",
      review: "8",
      green: 8,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "3.88",
      maxValue: "6.26",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "50000",
      maxValue: "500000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/wells-fargo-bank-fa3a71adf39da45faa8c2862610b13ce_thumb.png",
    reviews: {
      head: "Wells Fargo Personal Loan",
      head2: "Mostly recommended",
      review: "6",
      green: 6,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "3000",
      maxValue: "100000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "Checking Account Required",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 17,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/reliable-credit_thumb.jpg",
    reviews: {
      head: "Reliable Credit Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      startingLoanAmount: "1000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "24",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/credit-direct_thumb.png",
    reviews: {
      head: "Credit Direct",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "5000",
      maxValue: "40000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "24",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 19,
    image: "/static/ent.png",
    reviews: {
      head: "Ent Credit Union Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "7.49",
      maxValue: "17.3",
    },
    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "48",
      maxValue: "72",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/members-1st-federal-credit-union-personal-loans_thumb.jpg",
    reviews: {
      head: "Members 1st Federal Credit Union Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "180",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 21,
    image: "/static/schools-first-fedral.jpeg",
    reviews: {
      head: "Schools First Federal Credit Union Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "7.95",
      maxValue: "18",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "500",
      maxValue: "50000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "24",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/the-citizens-national-bank-personal-loan_thumb.jpg",
    reviews: {
      head: "The Citizens National Bank Personal Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "24",
    },
    additional: [],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/first-security-bank-personal-loans_thumb.jpg",
    reviews: {
      head: "SFirst Security Bank Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "24",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
    ],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/members-first-credit-union-life-happens-loan_thumb.png",
    reviews: {
      head: "Members First Credit Union Unsecured Personal Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "12",
      maxValue: "24",
    },
    additional: [],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/exchange-bank-and-trust-personal-loans_thumb.png",
    reviews: {
      head: "Exchange Bank And Trust Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/gate-city-bank_thumb.jpg",
    reviews: {
      head: "Gate City Bank Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/city-national-bank-of-texas_thumb.png",
    reviews: {
      head: "City National Bank Personal Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/cnb-personal-loan_thumb.jpg",
    reviews: {
      head: "CNB Personal Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "Accepts Savings Accounts",
      },
      {
        id: 2,
        item: "Checking Account Required",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/members-first-credit-union-of-florida--miscellaneous-collateral_thumb.png",
    reviews: {
      head: "Members First Credit Union Of Florida Personal Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "7.95",
      maxValue: "18",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/first-security-bank-of-bozeman-personal-loan_thumb.png",
    reviews: {
      head: "First Security Bank Of Bozeman Personal Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    apr: {
      min: "0",
      max: "200",
      minValue: "5.49",
      maxValue: "22.99",
    },

    loanAmount: {
      min: "100",
      max: "100000",
      minValue: "2500",
      maxValue: "35000",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
    ],
  },
];

export const businessLoan = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/finance-factory_thumb.jpg",
    reviews: {
      head: "Finance Factory Unsecured Start-Up Loans",
      head2: "Rating not yet determined",
      review: "3",
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "25000",
      maxValue: "350000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "0",
      maxValue: "17",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "120",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image: "https://cdn-reviews.supermoney.com/businesses/8/fundbox_thumb.png",
    reviews: {
      head: "Fundbox Small Business Loans",
      head2: "Mostly recommended",
      review: "6",
      green: 3,
      pink: 3,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "150000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "7",
      maxValue: "59",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "12",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/national-funding_thumb.jpg",
    reviews: {
      head: "National Funding Business Loans",
      head2: "Strongly recommended",
      review: "8",
      green: 5,
      pink: 3,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "150000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "5.9",
      maxValue: "36",
    },
    loanTerm: {
      maxTerm: 60,
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/funding-circle-business-loans_thumb.png",
    reviews: {
      head: "Funding Circle Business Loans",
      head2: "Strongly recommended",
      review: "14",
      green: 12,
      pink: 2,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "25000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "4.99",
      maxValue: "38",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image: "/static/fora-finance.png",
    reviews: {
      head: "Fora Financial Business Loans",
      head2: "Strongly recommended",
      review: "8",
      green: 8,
      pink: 0,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "50",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/smartbiz-sba-loans_thumb.png",
    reviews: {
      head: "SmartBiz SBA Loans",
      head2: "Mostly not recommended",
      review: "7",
      green: 3,
      pink: 4,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "30000",
      maxValue: "5000000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "6.36",
      maxValue: "9.75",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/kapitus-business-loans-eb52ac5666262a8cfa0ee5e9abc4b8e7_thumb.png",
    reviews: {
      head: "Kapitus Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "10000",
      maxValue: "1000000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "3",
      maxValue: "36",
    },
    additional: [],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/one-park-financial_thumb.png",
    reviews: {
      head: "One Park Financial",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "3",
      maxValue: "12",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/square-capital_thumb.png",
    reviews: {
      head: "Square Capital Small Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "300",
      maxValue: "100000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "30",
      maxValue: "35",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "3",
      maxValue: "18",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/fast-business-financial-business-loans_thumb.png",
    reviews: {
      head: "Fast Business Financial",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "5000000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "3",
      maxValue: "12",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "24",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/us-business-funding-llc_thumb.png",
    reviews: {
      head: "US Business Funding",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "10000",
      maxValue: "750000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "9.99",
      maxValue: "99",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "3",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/suntrust-bank_thumb.png",
    reviews: {
      head: "SunTrust Bank Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/groundfloor_thumb.png",
    reviews: {
      head: "GROUNDFLOOR Business Loan",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "2000000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "5",
      maxValue: "26",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "12",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 14,
    image: "https://cdn-reviews.supermoney.com/businesses/7/bolstr_thumb.png",
    reviews: {
      head: "Bolstr Business Loan",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "25000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "8",
      maxValue: "25",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "24",
      maxValue: "60",
    },
    additional: [],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-business-loans_thumb.png",
    reviews: {
      head: "Consumers Credit Union Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "150000",
    },

    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/bankers-healthcare-group-inc_thumb.png",
    reviews: {
      head: "Bankers Healthcare Group Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "20000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "8.75",
      maxValue: "18.99",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "36",
      maxValue: "96",
    },
    additional: [],
  },
  {
    id: 17,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/breakout-capital_thumb.png",
    reviews: {
      head: "Breakout Capital Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5250",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "36",
      maxValue: "60",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "24",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 18,
    image: "https://cdn-reviews.supermoney.com/businesses/8/leaseq_thumb.png",
    reviews: {
      head: "LeaseQ Equipment Financing",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "150000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "0",
      maxValue: "99",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/internex-capital_thumb.png",
    reviews: {
      head: "InterNex Capital Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "250000",
      maxValue: "10000000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "7.99",
      maxValue: "18.99",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "12",
    },
    additional: [],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/mulligan-funding_thumb.png",
    reviews: {
      head: "Mulligan Funding Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "0",
      maxValue: "99",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 21,
    image: "https://cdn-reviews.supermoney.com/businesses/8/bluevine_thumb.jpg",
    reviews: {
      head: "BlueVine Business Loan",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "200000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "4.8",
      maxValue: "60",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 22,
    image: "https://cdn-reviews.supermoney.com/businesses/8/kiva_thumb.png",
    reviews: {
      head: "Kiva Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "25",
      maxValue: "20000",
    },

    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "1",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/bfs-capital_thumb.png",
    reviews: {
      head: "BFS Capital Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "6.37",
      maxValue: "195",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "4",
      maxValue: "21",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
    ],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/forwardline_thumb.png",
    reviews: {
      head: "ForwardLine Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "200000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "26",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "60",
    },
    additional: [],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/powerup-lending-group_thumb.png",
    reviews: {
      head: "PowerUp Lending Group Small Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      startingLoanAmount: 20000,
    },
    apr: null,
    loanTerm: null,
    additional: [],
  },
  {
    id: 26,
    image: "/static/us-bank.webp",
    reviews: {
      head: "US Bank Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "2000000",
    },

    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/quarterspot_thumb.png",
    reviews: {
      head: "Quarterspot Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "200000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "60",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "9",
      maxValue: "18",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/cornerstone-medical--technology-finance_thumb.png",
    reviews: {
      head: "Cornerstone Medical & Technology Finance SBA Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "150000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "1",
      maxValue: "25",
    },

    loanTerm: {
      min: "1",
      max: "360",
      minValue: "6",
      maxValue: "16",
    },
    additional: [],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/grp-funding_thumb.png",
    reviews: {
      head: "GRP Funding Small Business Financing",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "5000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "20",
      maxValue: "100",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "4",
      maxValue: "18",
    },
    additional: [],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/wall-street-funding_thumb.png",
    reviews: {
      head: "Wall Street Funding Small Business Loans",
      head2: "Be the first to rate",
      review: null,
      green: null,
      pink: null,
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "3000",
      maxValue: "1000000",
    },
    apr: {
      min: "0",
      max: "100",
      minValue: "7.9",
      maxValue: "45",
    },
    loanTerm: {
      min: "1",
      max: "360",
      minValue: "4",
      maxValue: "36",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const privateStudentLoan = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/ascent-student-loans_thumb.png",
    reviews: {
      head: "Ascent - Cosigned Student Loans",
      head2: "Strongly recommended",
      review: "12",
      green: 11,
      pink: 1,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "2100",
      maxValue: "400000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "3.22",
      maxValue: "13.61",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "0.98",
      maxValue: "10.04",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/ascent-non-cosigned-d3d65ee530e20e9799e63d1d262cc510_thumb.png",
    reviews: {
      head: "Ascent - Non-Cosigned Student Loans",
      head2: "Rating not yet determined",
      review: "3",
      green: 3,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "2100",
      maxValue: "20000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "8.64",
      maxValue: "14.75",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "5.78",
      maxValue: "11.96",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image: "https://cdn-reviews.supermoney.com/businesses/5/everence_thumb.gif",
    reviews: {
      head: "Everence Private Student Loans",
      head2: "Strongly recommended",
      review: "7",
      green: 7,
      pink: "",
    },
    loanAmount: {
      startingLoanAmount: "2000",
      min: "1000",
      max: "500000",
      minValue: "2100",
      maxValue: "200000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "5.35",
      maxValue: "9.54",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "3.96",
      maxValue: "7.28",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "Good Student Rewards",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/navy-federal-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Navy Federal Credit Union Student Loans",
      head2: "Be the first to rate",
      review: null,
      green: "",
      pink: "",
    },
    loanAmount: {
      startingLoanAmount: "N/A",
      min: "1000",
      max: "500000",
      minValue: "2000",
      maxValue: "160000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "5.75",
      maxValue: "12.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "4.38",
      maxValue: "10.71",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "Good Student Rewards",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
      {
        id: 5,
        item: "Unemployment Protection",
      },
      {
        id: 6,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/stride-income-share-agreements_thumb.png",
    reviews: {
      head: "Stride ISA",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "25000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "5.75",
      maxValue: "12.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/educators-credit-union-lendkey_thumb.jpg",
    reviews: {
      head: "Educators Credit Union Student Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "25000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.99",
      maxValue: "7.75",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "2.99",
      maxValue: "7.75",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/first-bank-and-trust-student-loan_thumb.png",
    reviews: {
      head: "First Bank And Trust Student Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "25000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "5.75",
      maxValue: "12.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/members-first-community-credit-union-the-smart-option-student-loan_thumb.png",
    reviews: {
      head: "Members First CCU Smart Option Student Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "25000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.25",
      maxValue: "12.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.25",
      maxValue: "11.35",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
      {
        id: 4,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/members1st-community-credit-union-undergraduate-student-loans_thumb.png",
    reviews: {
      head: "MEMBERS1st CU Undergraduate Student Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "25000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.25",
      maxValue: "12.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.25",
      maxValue: "11.35",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/members1st-community-credit-union-graduate-student-loans_thumb.png",
    reviews: {
      head: "MEMBERS1st Community Credit Union Graduate Student Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "25000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.75",
      maxValue: "12.68",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "2.25",
      maxValue: "11.76",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/members1st-community-credit-union-parent-loan_thumb.png",
    reviews: {
      head: "MEMBERS1st Community Credit Union Parent Loan",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "1000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "5.49",
      maxValue: "13.87",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "3.5",
      maxValue: "13.12",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/navient-student-loans_thumb.jpg",
    reviews: {
      head: "Navient Student Loans",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "15000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.53",
      maxValue: "7.08",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
    ],
  },
  {
    id: 13,
    image: "https://cdn-reviews.supermoney.com/businesses/5/ufi_thumb.png",
    reviews: {
      head: "U-Fi Student Loans",
      head2: "Rating not yet determined",
      review: "2",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "1000",
      maxValue: "500000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "1.55",
      maxValue: "12.58",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "4.7",
      maxValue: "12.7",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "Good Student Rewards",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
      {
        id: 5,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 14,
    image: "https://cdn-reviews.supermoney.com/businesses/5/lendkey_thumb.png",
    reviews: {
      head: "LendKey Private Student Loans",
      head2: "Mostly recommended",
      review: "17",
      green: 10,
      pink: 7,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "7500",
      maxValue: "250000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.25",
      maxValue: "12.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "Good Student Rewards",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
      {
        id: 5,
        item: "Unemployment Protection",
      },
    ],
  },
  {
    id: 15,
    image: "/static/discover-bank.png",
    reviews: {
      head: "Discover Bank Private Student Loans",
      head2: "Rating not yet determined",
      review: "3",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "1000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.99",
      maxValue: "12.39",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.87",
      maxValue: "11.62",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "Good Student Rewards",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
      {
        id: 5,
        item: "Up to Cost of Attendance",
      },
      {
        id: 6,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 16,
    image: "/static/greate-lakes.png",
    reviews: {
      head: "Great Lakes Credit Union Student Loans",
      head2: "Rating not yet determined",
      review: "1",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "2500",
      maxValue: "150000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "5.75",
      maxValue: "10.59",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "5.81",
      maxValue: "11.2",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "Good Student Rewards",
      },
      {
        id: 3,
        item: "No Origination Fee",
      },
      {
        id: 4,
        item: "No Prepayment Fee",
      },
      {
        id: 5,
        item: "Unemployment Protection",
      },
      {
        id: 6,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 17,
    image: "https://cdn-reviews.supermoney.com/businesses/5/ihelp_thumb.png",
    reviews: {
      head: "IHELP Private Student Loan",
      head2: "Rating not yet determined",
      review: "4",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "100",
      maxValue: "150000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "6.21",
      maxValue: "9.75",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "3.3",
      maxValue: "7.89",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/citizens-bank-1_thumb.png",
    reviews: {
      head: "Citizens Bank Student Loan",
      head2: "Rating not yet determined",
      review: "3",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "1000",
      maxValue: "295000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.68",
      maxValue: "10.34",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.29",
      maxValue: "9.82",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/college-ave-student-loans_thumb.png",
    reviews: {
      head: "College Ave Student Loans",
      head2: "Rating not yet determined",
      review: "1",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "2000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.39",
      maxValue: "12.99",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.24",
      maxValue: "11.98",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
      {
        id: 4,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 20,
    image: "https://cdn-reviews.supermoney.com/businesses/5/mpower_thumb.jpg",
    reviews: {
      head: "MPOWER Student Loans",
      head2: "Rating not yet determined",
      review: "1",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "2001",
      maxValue: "50000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "7.52",
      maxValue: "13.63",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
      {
        id: 2,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 21,
    image: "/static/sallie.jpeg",
    reviews: {
      head: "Sallie Mae Student Loans",
      head2: "Strongly not recommended",
      review: "9",
      green: 4,
      pink: 5,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "5000",
      maxValue: "5000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "3.5",
      maxValue: "12.6",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
      {
        id: 4,
        item: "Up to Cost of Attendance",
      },
    ],
  },
  {
    id: 22,
    image: "https://cdn-reviews.supermoney.com/businesses/5/pnc-bank_thumb.png",
    reviews: {
      head: "PNC Bank Student Loans",
      head2: "Rating not yet determined",
      review: "4",
      green: 0,
      pink: 0,
    },
    loanAmount: {
      min: "1000",
      max: "500000",
      minValue: "1000",
      maxValue: "100000",
    },
    apr: {
      min: "2",
      max: "15",
      minValue: "4.49",
      maxValue: "11.41",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "4.41",
      maxValue: "11.41",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const autoLoanRefinance = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/auto-approve-auto-refinance-fc30c5091f41e7293b12e654f5e8d9f8_thumb.jpg",
    reviews: {
      head: "Auto Approve Auto Refinance",
      head2: "Strongly recommended",
      review: "42",
      green: 5,
      pink: 37,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "580",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "7500",
      maxValue: "150000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "2.25",
      maxValue: "19.99",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "12",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Consumers Credit Union Auto Refinance",
      head2: "Rating not yet determined",
      review: "2",
      green: 0,
      pink: null,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "640",
      maxValue: "840",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "5000",
      maxValue: "150000",
    },

    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "6",
      maxValue: "84",
    },
    additional: null,
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/caribou-9dbbdf3e94c56aafea2e5163a7cf706f_thumb.png",
    reviews: {
      head: "Caribou Auto Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "580",
      maxValue: "850",
    },
    loanAmount: {
      min: "25",
      max: "500000",
      minValue: "1000",
      maxValue: "150000",
    },

    apr: {
      min: "0",
      max: "100",
      minValue: "10",
      maxValue: "100",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "36",
      maxValue: "84",
    },
    additional: null,
  },
  {
    id: 4,
    image: "https://cdn-reviews.supermoney.com/businesses/5/autopay_thumb.png",
    reviews: {
      head: "Autopay Auto Refinance",
      head2: "Strongly recommended",
      review: "125",
      green: 4,
      pink: 121,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "550",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "2500",
      maxValue: "100000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "1.99",
      maxValue: "17.99",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "24",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/openroad-lending_thumb.png",
    reviews: {
      head: "OpenRoad Lending Auto Refinance",
      head2: "Strongly recommended",
      review: "5",
      green: 1,
      pink: 4,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "500",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "7500",
      max: "100000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "1.9",
      maxValue: "24.9",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "36",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/gravity-lending_thumb.png",
    reviews: {
      head: "Gravity Lending - Prime Auto Refinance",
      head2: "Strongly recommended",
      review: "34",
      green: 1,
      pink: 33,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "10000",
      max: "100000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "1.99",
      maxValue: "4.9",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "25",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/ilending-inc-8fbfed1292f6c60726c607f679a203fb_thumb.png",
    reviews: {
      head: "ILending Auto Refinancing",
      head2: "Strongly recommended",
      review: "283",
      green: 17,
      pink: 266,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "540",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "5000",
      max: "200000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "1.99",
      maxValue: "17.99",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "12",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/rategenius_thumb.png",
    reviews: {
      head: "RateGenius Auto Refinance",
      head2: "Mostly recommended",
      review: "35",
      green: 12,
      pink: 23,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "10000",
      max: "90000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "2.99",
      maxValue: "25.87",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "24",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/onemain-financial-auto-refinance-ebe404d39611ea7c75438a9297c13922_thumb.png",
    reviews: {
      head: "OneMain Financial Auto Refinance",
      head2: "Rating not yet determined",
      review: "4",
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "560",
      maxValue: "750",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "1500",
      max: "20000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "16",
      maxValue: "36",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "24",
      maxValue: "60",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/myautoloan_thumb.png",
    reviews: {
      head: "MyAutoloan Auto Refinance",
      head2: "Strongly recommended",
      review: "7",
      green: 0,
      pink: 7,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "550",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "8000",
      max: "100000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "2.49",
      maxValue: "27.99",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "24",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
    ],
  },
  {
    id: 11,
    image: "https://cdn-reviews.supermoney.com/businesses/5/fiwize_thumb.png",
    reviews: {
      head: "FiWize Auto Refinance",
      head2: "Rating not yet determined",
      review: "2",
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "640",
      maxValue: "850",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "7500",
      max: "100000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "2.94",
      maxValue: "15.99",
    },
    loanTerm: {
      min: "6",
      max: "96",
      minValue: "36",
      maxValue: "84",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/gravity-lending_thumb.png",
    reviews: {
      head: "Gravity Lending Auto Refinancing",
      head2: "Be the first to rate",
      review: "0",
      green: 0,
      pink: 0,
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "580",
      maxValue: "699",
    },
    loanAmount: {
      min: "500",
      max: "200000",
      minValue: "10000",
      max: "200000",
    },
    apr: {
      min: "2",
      max: "36",
      minValue: "1.99",
      maxValue: "15.99",
    },
    loanTerm: {
      maxTerm: "96",
    },
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const mortgageRefinance = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/amerisave-mortgage-refinance_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 1168",
      head: "AmeriSave Mortgage Corporation Refinance",
      head2: "Strongly recommended",
      review: "41",
      green: 39,
      pink: 2,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "0",
      max: "6000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "3",
      maxValue: "30",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/guaranteed-rate-mortgage-refinance-6e137c041aad24fe2c631166a46442dd_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 2611",
      head: "Guaranteed Rate Mortgage Refinance",
      head2: "Strongly recommended",
      review: "17",
      green: 15,
      pink: 2,
    },

    loanAmount: {
      maximumLoanAmount: "5000000",
      min: "500",
      max: "150000",
      minValue: "7500",
      maxValue: "150000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "5",
      maxValue: "30",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image: "/static/american-funding.jpeg",
    reviews: {
      nmlsId: "NMLS ID# 6606",
      head: "New American Funding Mortgage Refinance",
      head2: "Strongly recommended",
      review: "34",
      green: 33,
      pink: 1,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "500",
      max: "2000000",
      minValue: "100000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "8",
      maxValue: "30",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/loandepot_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 17445",
      head: "loanDepot Mortgage Refinance",
      head2: "Strongly recommended",
      review: "30",
      green: 27,
      pink: 3,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "40",
    },
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/academy-mortgage_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 3113",
      head: "Academy Mortgage Refinance",
      head2: "Strongly recommended",
      review: "8",
      green: 8,
      pink: "",
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "2500000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 6,
    image: "https://cdn-reviews.supermoney.com/businesses/7/reali_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 991397",
      head: "Reali Loans Mortgage Refinance",
      head2: "Strongly recommended",
      review: "8",
      green: 8,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "2500000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/ever-bank_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 399805",
      head: "TIAA Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/broadview-mortgage-corporation_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 309234",
      head: "Broadview Home Loans Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: 1500000,
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/brightpath-mortgage-llc_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 177208",
      head: "BrightPath Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "2000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/brazos-national-bank_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 473879",
      head: "Brazos Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "417000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bond-street-mortgage_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 191351",
      head: "Bond Street Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "2000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bnc-national-bank_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 418467",
      head: "BNC National Bank Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/best-capital-funding_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 303222",
      head: "Best Capital Funding Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "5000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/benchmark-bank_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 403379",
      head: "Benchmark Bank Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "1000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bc-finance-llc_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 116874",
      head: "BC Finance Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "0",
      max: "2000000",
      minValue: "30000",
      maxValue: "999000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bayshore-mortgage-funding-llc_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 196858",
      head: "Bayshore Mortgage Funding Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "1500000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 17,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bayburg-financial_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 148436",
      head: "Bayburg Financial Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "1500000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/barton-creek-lending-group_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 264320",
      head: "Barton Creek Lending Group Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "2500000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/banner-bank_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 439266",
      head: "Banner Bank Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bank-of-nebraska_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 456056",
      head: "ACCESSbank Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bank-of-england-dba-eng-lending_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 418481",
      head: "Bank Of England Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "1500000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/bnc-national-bank_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 53336",
      head: "Amerifund Home Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 23,
    image: "/static/american-united.jpeg",
    reviews: {
      nmlsId: "NMLS ID# 75965",
      head: "American United Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-quest-home-loans_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 356777",
      head: "American Quest Home Loans Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "5000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-nationwide-mortgage-company_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 13392",
      head: "American Nationwide Mortgage Company Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "1000000",
      min: "0",
      max: "2000000",
      minValue: "30000",
      maxValue: "999000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-mortgage-service-co_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 8246",
      head: "American Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "3000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-mortgage-and-equity-consultants-inc_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 150953",
      head: "AMEC Home Loans Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "0",
      max: "2000000",
      minValue: "35000",
      maxValue: "1500000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-heritage-lending-corporation_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 93735",
      head: "American Heritage Lending Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "1000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-federal_thumb.png",
    reviews: {
      nmlsId: "NMLS ID# 2756",
      head: "American Federal Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: null,
      min: "0",
      max: "2000000",
      minValue: "40000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-capital-corporation_thumb.jpg",
    reviews: {
      nmlsId: "NMLS ID# 264422",
      head: "American Capital Corporation Mortgage Refinance",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },

    loanAmount: {
      maximumLoanAmount: "2000000",
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "3",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },
    additional: [],
  },
];

export const StudentLoanRefinance = [
  {
    id: 1,
    image: "/static/splash-bank.png",
    reviews: {
      head: "Splash Financial Student Loan Refinance",
      head2: "Strongly recommended",
      review: "22",
      green: 20,
      pink: 2,
    },
    loanAmount: {
      min: "1000",
      max: "1000000",
      minValue: "5000",
      maxValue: "1000000",
    },
    loanTerm: {
      min: "1",
      max: "25",
      minValue: "5",
      maxValue: "25",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "2.59",
      maxValue: "8.44",
    },
    varApr: {
      min: "2",
      max: "10",
      minValue: "1.99",
      maxValue: "11.05",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image: "https://cdn-reviews.supermoney.com/businesses/1/sofi_thumb.jpg",
    reviews: {
      head: "SoFi Student Loan Refinancing",
      head2: "Strongly recommended",
      review: "45",
      green: 35,
      pink: 10,
    },
    loanAmount: {
      min: "1000",
      max: "1000000",
      minValue: "5000",
      maxValue: "1000000",
    },
    loanTerm: {
      min: "1",
      max: "25",
      minValue: "5",
      maxValue: "20",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "4.49",
      maxValue: "7.99",
    },
    varApr: {
      min: "2",
      max: "11",
      minValue: "1.74",
      maxValue: "7.99",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
      {
        id: 4,
        item: "Unemployment Protection",
      },
    ],
  },
  {
    id: 3,
    image: "https://cdn-reviews.supermoney.com/businesses/5/lendkey_thumb.png",
    reviews: {
      head: "LendKey Student Loan Refinance",
      head2: "Strongly recommended",
      review: "25",
      green: 19,
      pink: 6,
    },
    loanAmount: {
      min: "1000",
      max: "1000000",
      minValue: "5000",
      maxValue: "300000",
    },
    loanTerm: {
      min: "1",
      max: "25",
      minValue: "5",
      maxValue: "20",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "2.49",
      maxValue: "7.93",
    },
    varApr: {
      min: "2",
      max: "11",
      minValue: "2.05",
      maxValue: "5.25",
    },
    additional: [
      {
        id: 1,
        item: "Cosigner Optional",
      },
      {
        id: 2,
        item: "No Origination Fee",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
      {
        id: 4,
        item: "Unemployment Protection",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/education-loan-finance_thumb.png",
    reviews: {
      head: "Education Loan Finance Student Loan Refinance",
      head2: "Strongly recommended",
      review: "22",
      green: 19,
      pink: 3,
    },
    loanAmount: {
      min: "1000",
      max: "1000000",
      minValue: "10000",
      maxValue: "1000000",
    },
    loanTerm: {
      min: "1",
      max: "25",
      minValue: "5",
      maxValue: "20",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "3.39",
      maxValue: "6.99",
    },
    varApr: {
      min: "2",
      max: "11",
      minValue: "1.86",
      maxValue: "7.98",
    },
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/yrefy-llc-98236177e926cdca4d986ff1ed6bc124_thumb.jpeg",
    reviews: {
      head: "Yrefy Default Student Loan Refinancing",
      head2: "Strongly recommended",
      review: "21",
      green: 20,
      pink: 1,
    },
    loanAmount: {
      min: "1000",
      max: "1000000",
      minValue: "5000",
      maxValue: "250000",
    },
    loanTerm: {
      min: "1",
      max: "25",
      minValue: "3",
      maxValue: "15",
    },
    apr: {
      min: "0",
      max: "36",
      minValue: "0.5",
      maxValue: "7",
    },
    varApr: {
      min: "1",
      max: "13",
      minValue: "1.13",
      maxValue: "11.23",
    },
    additional: [
      {
        id: 1,
        item: "Co-signing Allowed",
      },
      {
        id: 2,
        item: "Cosigner Optional",
      },
      {
        id: 3,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const businessesCreditCard = [
  {
    id: 1,
    image: "/static/capital-one.png",
    reviews: {
      head: "Capital One® Spark® Miles",
      head2: "Strongly recommended",
      review: "7",
      green: 6,
      pink: 1,
    },
    purchaseApr: {
      variableApr: "20.99",
      min: "1000",
      max: "5000000",
      minValue: "5000",
      maxValue: "1000000",
    },
    balanceTransferApr: {
      variableApr: "20.99",
      min: "1",
      max: "25",
      minValue: "5",
      maxValue: "20",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },

    annualFee: "95",

    additional: [
      {
        id: 1,
        item: "Identity Theft Protection",
      },
      {
        id: 2,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 3,
        item: "Extended Warranty Protection",
      },
      {
        id: 4,
        item: "Price Protection",
      },
      {
        id: 5,
        item: "Purchase Protection",
      },
      {
        id: 6,
        item: "Trip Cancellation Insurance",
      },
      {
        id: 7,
        item: "Emergency Support",
      },
      {
        id: 8,
        item: "Fraud Liability",
      },
      {
        id: 9,
        item: "Free Credit Score",
      },
      {
        id: 10,
        item: "Travel Accident Insurance",
      },
      {
        id: 11,
        item: "Global Entry / TSA Pre✓®",
      },
      {
        id: 12,
        item: "Travel Assistance",
      },
      {
        id: 13,
        item: "Concierge",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/capital-one-spark-cash-business-card_thumb.png",
    reviews: {
      head: "Capital One® Spark® Cash For Business",
      head2: "Strongly recommended",
      review: "6",
      green: 4,
      pink: 2,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: "20.99",
      min: "3",
      max: "27",
      minValue: "5",
      maxValue: "20",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "95",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Trip Cancellation Insurance",
      },
      {
        id: 5,
        item: "Emergency Support",
      },
      {
        id: 6,
        item: "Fraud Liability",
      },
      {
        id: 7,
        item: "Free Credit Score",
      },
      {
        id: 8,
        item: "Travel Accident Insurance",
      },
      {
        id: 9,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 3,
    image: "/static/chase.png",
    reviews: {
      head: "Chase Ink Business Preferred Credit Card",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: "",
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "20.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "20.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "95",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Trip Cancellation Insurance",
      },
      {
        id: 5,
        item: "Emergency Support",
      },
      {
        id: 6,
        item: "Fraud Liability",
      },
      {
        id: 7,
        item: "Free Credit Score",
      },
      {
        id: 8,
        item: "Cellular Telephone Protection",
      },
      {
        id: 9,
        item: "Travel Accident Insurance",
      },
      {
        id: 10,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 4,
    image: "/static/chase.png",
    reviews: {
      head: "Chase Ink Business Cash",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: "",
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Identity Theft Protection",
      },
      {
        id: 2,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 3,
        item: "Extended Warranty Protection",
      },
      {
        id: 4,
        item: "Purchase Protection",
      },
      {
        id: 5,
        item: "Emergency Support",
      },
      {
        id: 6,
        item: "Fraud Liability",
      },
      {
        id: 7,
        item: "Free Credit Score",
      },
      {
        id: 8,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 5,
    image: "/static/chase.png",
    reviews: {
      head: "Chase Ink Business Unlimited Credit Card",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: "",
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Identity Theft Protection",
      },
      {
        id: 2,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 3,
        item: "Extended Warranty Protection",
      },
      {
        id: 4,
        item: "Purchase Protection",
      },
      {
        id: 5,
        item: "Emergency Support",
      },
      {
        id: 6,
        item: "Fraud Liability",
      },
      {
        id: 7,
        item: "Free Credit Score",
      },
      {
        id: 8,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/capital-one-spark-cash-select-business-card_thumb.png",
    reviews: {
      head: "Capital One® Spark® Cash Select For Business",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "13.99",
      maxValue: "23.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "13.99",
      maxValue: "23.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
      {
        id: 6,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 7,
    image: "/static/capital-one.png",
    reviews: {
      head: "Capital One® Spark® Miles Select For Business",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: "",
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "13.99",
      maxValue: "23.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "13.99",
      maxValue: "23.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Price Protection",
      },
      {
        id: 4,
        item: "Purchase Protection",
      },
      {
        id: 5,
        item: "Trip Cancellation Insurance",
      },
      {
        id: 6,
        item: "Emergency Support",
      },
      {
        id: 7,
        item: "Fraud Liability",
      },
      {
        id: 8,
        item: "Free Credit Score",
      },
      {
        id: 9,
        item: "Travel Accident Insurance",
      },
      {
        id: 10,
        item: "Global Entry / TSA Pre✓®",
      },
      {
        id: 11,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 8,
    image: "/static/spark-card.png",
    reviews: {
      head: "Spark Classic For Business From Capital One",
      head2: "Mostly recommended",
      review: "11",
      green: 6,
      pink: 5,
    },
    purchaseApr: {
      variableApr: 26.99,
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: 26.99,
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "600",
      maxValue: "750",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
      {
        id: 6,
        item: "Free Credit Score",
      },
      {
        id: 7,
        item: "Travel Accident Insurance",
      },
      {
        id: 8,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 9,
    image: "/static/amex-delta-card.webp",
    reviews: {
      head: "AMEX National Bank Delta SkyMiles Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.74",
      maxValue: "24.74",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.74",
      maxValue: "24.74",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "550",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Trip Cancellation Insurance",
      },
      {
        id: 5,
        item: "Emergency Support",
      },
      {
        id: 6,
        item: "Fraud Liability",
      },
      {
        id: 7,
        item: "Travel Accident Insurance",
      },
      {
        id: 8,
        item: "Travel Assistance",
      },
      {
        id: 9,
        item: "Concierge",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/bbt-bright-visa_thumb.png",
    reviews: {
      head: "BB&T Bright Business Visa",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "10.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "10.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "750",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Identity Theft Protection",
      },
      {
        id: 2,
        item: "Fraud Liability",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/bbt-spectrum-cash-rewards-visa_thumb.png",
    reviews: {
      head: "BB&T Spectrum Cash Rewards Business Visa",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "12.24",
      maxValue: "21.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "12.24",
      maxValue: "21.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "750",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "No Annual Fee",
      },
    ],
  },
  {
    id: 12,
    image: "/static/bb-spectrum-card.png",
    reviews: {
      head: "BB&T Spectrum Travel Rewards Business Visa",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "12.24",
      maxValue: "21.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "12.24",
      maxValue: "21.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "49",
    additional: [
      {
        id: 1,
        item: "Fraud Liability",
      },
    ],
  },
  {
    id: 13,
    image: "/static/costco-visa-card.jpeg",
    reviews: {
      head: "Costco Anywhere Visa Business Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: "15.24",
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: "15.24",
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Extended Warranty Protection",
      },
      {
        id: 2,
        item: "Fraud Liability",
      },
    ],
  },
  {
    id: 14,
    image: "/static/bos-card.jpeg",
    reviews: {
      head: "Bank Of America Business Advantage Cash Rewards",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "12.24",
      maxValue: "22.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "14.24",
      maxValue: "24.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Emergency Support",
      },
      {
        id: 4,
        item: "Fraud Liability",
      },
      {
        id: 5,
        item: "Free Credit Score",
      },
      {
        id: 6,
        item: "Travel Accident Insurance",
      },
      {
        id: 7,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 15,
    image: "/static/boa-master-card.jpeg",
    reviews: {
      head: "Bank Of America Business Advantage Mastercard",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "12.24",
      maxValue: "22.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "12.24",
      maxValue: "22.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Emergency Support",
      },
      {
        id: 4,
        item: "Fraud Liability",
      },
      {
        id: 5,
        item: "Free Credit Score",
      },
      {
        id: 6,
        item: "Travel Accident Insurance",
      },
      {
        id: 7,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/hilton-honors-american-express-business_thumb.png",
    reviews: {
      head: "AS National Bank Hilton Honors Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.74",
      maxValue: "24.74",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.74",
      maxValue: "24.74",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "95",
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
      {
        id: 6,
        item: "Travel Accident Insurance",
      },
      {
        id: 7,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 17,
    image: "/static/brex-card.png",
    reviews: {
      head: "Brex Corporate Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: null,
    balanceTransferApr: null,
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Fraud Liability",
      },
      {
        id: 2,
        item: "No Personal Guarantee Required",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/southwest-rapid-rewards-premier-business_thumb.png",
    reviews: {
      head: "Southwest Rapid Rewards Premier Business",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "22.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "22.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 99,
    additional: [
      {
        id: 1,
        item: "Identity Theft Protection",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Fraud Liability",
      },
      {
        id: 5,
        item: "Free Credit Score",
      },
      {
        id: 6,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/zions-bank-amazing-cash-back-for-business_thumb.jpg",
    reviews: {
      head: "Zions Bank® AmaZing Cash® Back For Business",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "14.24",
      maxValue: "16.24",
    },
    balanceTransferApr: {
      variableApr: 14.24,
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "No Annual Fee",
      },
    ],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/zions-bank-amazing-rate-business-credit-card_thumb.jpg",
    reviews: {
      head: "Zions Bank® AmaZing Rate® Business Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: 10.24,
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: 10.24,
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "No Annual Fee",
      },
    ],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/zions-bank-amazing-rewards-business-credit-card_thumb.jpg",
    reviews: {
      head: "Zions Bank AmaZing Rewards® Business Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: 14.24,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "22.99",
    },
    balanceTransferApr: {
      variableApr: 14.24,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "22.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 0,
    additional: [
      {
        id: 1,
        item: "No Annual Fee",
      },
      {
        id: 2,
        item: "No Blackout Dates",
      },
    ],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/southwest-rapid-rewards-performance-business-credit-card_thumb.png",
    reviews: {
      head: "Southwest Rapid Rewards Performance Business Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "22.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "22.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 199,
    additional: [
      {
        id: 1,
        item: "Extended Warranty Protection",
      },
      {
        id: 2,
        item: "Purchase Protection",
      },
      {
        id: 3,
        item: "Fraud Liability",
      },
      {
        id: 4,
        item: "Free Credit Score",
      },
      {
        id: 5,
        item: "Global Entry / TSA Pre✓®",
      },
      {
        id: 6,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 23,
    image: "/static/alaska-card.jpeg",
    reviews: {
      head: "Alaska Airlines Business Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "23.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "23.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 50,
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Trip Cancellation Insurance",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
      {
        id: 6,
        item: "Free Credit Score",
      },
      {
        id: 7,
        item: "Travel Accident Insurance",
      },
      {
        id: 8,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/asiana-airlines-business-credit-card_thumb.png",
    reviews: {
      head: "Asiana Airlines Business Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: 15.24,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "22.99",
    },
    balanceTransferApr: {
      variableApr: 15.24,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "22.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "800",
      maxValue: "850",
    },
    annualFee: 80,
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Emergency Support",
      },
      {
        id: 3,
        item: "Extended Warranty Protection",
      },
      {
        id: 4,
        item: "Fraud Liability",
      },
      {
        id: 5,
        item: "Free Credit Score",
      },
      {
        id: 6,
        item: "Identity Theft Protection",
      },
      {
        id: 7,
        item: "Travel Accident Insurance",
      },
      {
        id: 8,
        item: "Travel Assistance",
      },
      {
        id: 9,
        item: "Trip Cancellation Insurance",
      },
    ],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/1st-summit-bank-business-visa-credit-card_thumb.png",
    reviews: {
      head: "1st Summit Bank Business VISA® Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: 9.5,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "22.99",
    },
    balanceTransferApr: {
      variableApr: 9.5,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "22.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: 15,
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Emergency Support",
      },
      {
        id: 3,
        item: "Fraud Liability",
      },
      {
        id: 4,
        item: "Price Protection",
      },
      {
        id: 5,
        item: "Purchase Protection",
      },
      {
        id: 6,
        item: "Travel Accident Insurance",
      },
      {
        id: 7,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/1st-century-bank-visa-business-rewards-credit-card_thumb.jpg",
    reviews: {
      head: "1st Century Bank Visa® Business Rewards Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "19.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "19.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: 0,
    additional: [
      {
        id: 1,
        item: "Fraud Liability",
      },
    ],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/jetblue-business-card_thumb.jpg",
    reviews: {
      head: "JetBlue Business Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.99",
      maxValue: "24.99",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "15.99",
      maxValue: "24.99",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 99,
    additional: [
      {
        id: 1,
        item: "Fraud Liability",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/blue-business-cash-card-from-american-express_thumb.png",
    reviews: {
      head: "American Express National Bank Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "13.24",
      maxValue: "19.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "3",
      max: "27",
      minValue: "13.24",
      maxValue: "19.24",
    },
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 0,
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
    ],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/southwest-rapid-rewards-premier-business_thumb.png",
    reviews: {
      head: "Marriott Bonvoy Business Credit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "15.74",
      maxValue: "24.74",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 125,
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
      {
        id: 6,
        item: "Travel Assistance",
      },
    ],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/southwest-rapid-rewards-premier-business_thumb.png",
    reviews: {
      head: "Amazon Business American Express Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "4",
      max: "28",
      minValue: "14.24",
      maxValue: "22.24",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "500",
      max: "850",
      minValue: "650",
      maxValue: "850",
    },
    annualFee: 0,
    additional: [
      {
        id: 1,
        item: "Auto Rental Collision Damage Waiver",
      },
      {
        id: 2,
        item: "Extended Warranty Protection",
      },
      {
        id: 3,
        item: "Purchase Protection",
      },
      {
        id: 4,
        item: "Emergency Support",
      },
      {
        id: 5,
        item: "Fraud Liability",
      },
      {
        id: 6,
        item: "Travel Accident Insurance",
      },
      {
        id: 7,
        item: "Travel Assistance",
      },
    ],
  },
];

export const personalCreditCard = [
  {
    id: 1,
    image: "/static/gm-reward-card.avif",
    reviews: {
      head: "My GM Rewards Card™",
      head2: "Mostly recommended",
      review: "6",
      green: 4,
      pink: 2,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "15.24",
      maxValue: "25.24",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "0",
      max: "36",
      minValue: "15.24",
      maxValue: "25.24",
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "630",
      maxValue: "850",
    },

    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
      {
        id: 2,
        item: "Store Card",
      },
      {
        id: 3,
        item: "Gas",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/synchrony-premier-world-mastercard-32a552370e9d96a37bdad36932ff6bd6_thumb.png",
    reviews: {
      head: "Synchrony Premier World Mastercard",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "14.74",
      maxValue: "27.74",
    },
    balanceTransferApr: {
      variableApr: null,
      min: "0",
      max: "36",
      minValue: "14.74",
      maxValue: "27.74",
    },
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
    ],
  },
  {
    id: 3,
    image: "/static/upgrade-card-3x.png",
    reviews: {
      head: "Upgrade Triple Cash Rewards Card",
      head2: "Strongly recommended",
      review: "20",
      green: 19,
      pink: 1,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "8.99",
      maxValue: "29.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Cashback",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/blockfi-bitcoin-rewards-credit-card-646364687b736567b16f3bb05ea46678_thumb.png",
    reviews: {
      head: "BlockFi Bitcoin Rewards Credit Card",
      head2: "Strongly recommended",
      review: "15",
      green: 12,
      pink: 3,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "14.99",
      maxValue: "24.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
    ],
  },
  {
    id: 5,
    image: "/static/upgrade-bitcoin-card.avif",
    reviews: {
      head: "Upgrade Bitcoin Rewards Visa",
      head2: "Strongly recommended",
      review: "14",
      green: 13,
      pink: 1,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "8.99",
      maxValue: "29.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
    ],
  },
  {
    id: 6,
    image: "/static/milestone-gold-card.jpeg",
    reviews: {
      head: "Milestone Gold Mastercard",
      head2: "Mostly not recommended",
      review: "26",
      green: 3,
      pink: 23,
    },
    purchaseApr: "24.9",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "550",
      maxValue: "650",
    },
    annualFee: {
      min: "0",
      max: "995",
      minValue: "35",
      maxValue: "99",
    },
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/indigo-platinum-mastercard-9bee9eb0b905efa4f7e01e49ee48a3c5_thumb.png",
    reviews: {
      head: "Indigo Platinum Mastercard",
      head2: "Mostly not recommended",
      review: "41",
      green: 17,
      pink: 22,
    },
    purchaseApr: "24.9",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "550",
      maxValue: "650",
    },
    annualFee: {
      min: "0",
      max: "995",
      minValue: "75",
      maxValue: "99",
    },
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 8,
    image: "/static/upgrade-cash-reward-card.jpeg",
    reviews: {
      head: "Upgrade Visa® Card With Cash Rewards",
      head2: "Strongly recommended",
      review: "12",
      green: 11,
      pink: 1,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "8.99",
      maxValue: "29.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Cashback",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/total-visa-credit-card-5509bfc71f18293901f282992b1540cf_thumb.png",
    reviews: {
      head: "Total Visa® Card",
      head2: "Mostly recommended",
      review: "30",
      green: 18,
      pink: 12,
    },
    purchaseApr: "34.99",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "75",
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 10,
    image: "/static/first-progress.png",
    reviews: {
      head: "First Progress Platinum Prestige Mastercard® Secured Credit Card",
      head2: "Strongly recommended",
      review: "16",
      green: 13,
      pink: 3,
    },
    purchaseApr: "11.49",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "640",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "49",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 11,
    image: "/static/first-progress-platinum.png",
    reviews: {
      head: "First Progress Platinum Select Mastercard® Secured Credit Card",
      head2: "Strongly recommended",
      review: "15",
      green: 12,
      pink: 3,
    },
    purchaseApr: "15.49",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "39",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 12,
    image: "/static/first-progress-platinum.png",
    reviews: {
      head: "The First Progress Platinum Elite Mastercard® Secured Credit Card",
      head2: "Mostly not recommended",
      review: "16",
      green: 8,
      pink: 7,
    },
    purchaseApr: "21.49",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "29",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 13,
    image: "/static/freedom-card.jpeg",
    reviews: {
      head: "Freedom Gold Card",
      head2: "Mostly recommended",
      review: "11",
      green: 7,
      pink: 4,
    },
    purchaseApr: null,
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "350",
      maxValue: "700",
    },
    annualFee: "177.24",
    additional: [
      {
        id: 1,
        item: "Store Card",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
      {
        id: 3,
        item: "Charge Card",
      },
    ],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/fit-mastercard-039bb0aa3295c07b4c3f60f5accb0f3e_thumb.png",
    reviews: {
      head: "FIT Mastercard®",
      head2: "Strongly recommended",
      review: "11",
      green: 7,
      pink: 4,
    },
    purchaseApr: "29.99",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "99",
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/sable-one-credit-card-7fc9aeec20de574baef57bf4782df700_thumb.png",
    reviews: {
      head: "Sable ONE Secured Credit Card",
      head2: "Mostly recommended",
      review: "11",
      green: 8,
      pink: 3,
    },
    purchaseApr: "11.74",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Low Interest",
      },
      {
        id: 3,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/reflex-mastercard-6a2b2fa853fa2fa8eab58b0a0418223f_thumb.png",
    reviews: {
      head: "Reflex Mastercard®",
      head2: "Mostly not recommended",
      review: "9",
      green: 3,
      pink: 6,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "24.99",
      maxValue: "29.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "99",
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 17,
    image: "/static/open-sky.jpeg",
    reviews: {
      head: "OpenSky® Secured Visa® Credit Card",
      head2: "Mostly recommended",
      review: "15",
      green: 9,
      pink: 6,
    },
    purchaseApr: "18.14",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "700",
    },
    annualFee: "35",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/verizon-visa-card-610d9f926dd22fcafd8299783da0e167_thumb.png",
    reviews: {
      head: "Verizon Visa® Card",
      head2: "Mostly not recommended",
      review: "13",
      green: 6,
      pink: 7,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "18.99",
      maxValue: "25.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "630",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
    ],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/deserve-edu-mastercard-for-students_thumb.png",
    reviews: {
      head: "Deserve EDU Mastercard For Students",
      head2: "Strongly recommended",
      review: "20",
      green: 18,
      pink: 2,
    },
    purchaseApr: "20.24",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "630",
      maxValue: "850",
    },
    annualFee: "0",
    additional: [
      {
        id: 1,
        item: "Student",
      },
      {
        id: 2,
        item: "Rewards",
      },
      {
        id: 3,
        item: "Cashback",
      },
    ],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/luxury-card-mastercard-black-card-bc4151c5193defb5ea100ba61e8c9c97_thumb.png",
    reviews: {
      head: "Luxury Card™ Mastercard® Black Card™",
      head2: "Mostly recommended",
      review: "8",
      green: 5,
      pink: 3,
    },
    purchaseApr: "16.49",
    balanceTransferApr: "16.49",
    creditScore: {
      min: "300",
      max: "850",
      minValue: "740",
      maxValue: "850",
    },
    annualFee: "495",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
      {
        id: 2,
        item: "Balance Transfer",
      },
      {
        id: 3,
        item: "Low Interest",
      },
      {
        id: 4,
        item: "Travel",
      },
    ],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/next-millennium_thumb.png",
    reviews: {
      head: "Next Millennium",
      head2: "Mostly not recommended",
      review: "10",
      green: 4,
      pink: 5,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: null,
      minValue: "0",
      maxValue: null,
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "640",
      maxValue: "850",
    },
    annualFee: "239.4",
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
      {
        id: 1,
        item: "Store Card",
      },
    ],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/secured-visa-gold-preferred-credit-card_thumb.png",
    reviews: {
      head: "Applied Bank® Secured Visa® Gold Preferred® Credit Card",
      head2: "Strongly recommended",
      review: "12",
      green: 9,
      pink: 3,
    },
    purchaseApr: "9.99",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "48",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/surge-master-card-1782cde9bc64ef5e0661c50990147a88_thumb.png",
    reviews: {
      head: "Surge Mastercard®",
      head2: "Strongly not recommended",
      review: "8",
      green: 1,
      pink: 7,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "24.99",
      maxValue: "29.99",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: {
      min: "0",
      max: "995",
      minValue: "75",
      maxValue: "99",
    },
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 24,
    image: "/static/first-access.jpeg",
    reviews: {
      head: "First Access Visa® Card",
      head2: "Mostly not recommended",
      review: "11",
      green: 5,
      pink: 6,
    },
    purchaseApr: "34.99",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "300",
      maxValue: "640",
    },
    annualFee: "75",
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/net-first-platinum-c17dc4068c5198230fb872a902092ef1_thumb.png",
    reviews: {
      head: "Net First Platinum",
      head2: "Mostly recommended",
      review: "9",
      green: 6,
      pink: 3,
    },
    purchaseApr: null,
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "350",
      maxValue: "700",
    },
    annualFee: "177.24",
    additional: [
      {
        id: 1,
        item: "Store Card",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
      {
        id: 3,
        item: "Charge Card",
      },
    ],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/merrick-bank-secured-credit-card-a245941d37b168953f30bb04a5dc19d7_thumb.png",
    reviews: {
      head: "Merrick Bank Secured Credit Card",
      head2: "Strongly recommended",
      review: "12",
      green: 9,
      pink: 3,
    },
    purchaseApr: "18.95",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "500",
      maxValue: "850",
    },
    annualFee: "36",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/merrick-bank-secured-double-your-line-credit-card-aa579df14c38576a36f978173bb14569_thumb.png",
    reviews: {
      head: "Merrick Bank Double Your Line® Secured Credit Card",
      head2: "Strongly recommended",
      review: "11",
      green: 7,
      pink: 4,
    },
    purchaseApr: "18.95",
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "500",
      maxValue: "850",
    },
    annualFee: "36",
    additional: [
      {
        id: 1,
        item: "Secured",
      },
      {
        id: 2,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/merrick-bank-double-your-line-visa-7a40d737ff43ca1f11530c2f0fce3a06_thumb.png",
    reviews: {
      head: "Merrick Bank Double Your Line® Mastercard®",
      head2: "Strongly recommended",
      review: "11",
      green: 9,
      pink: 2,
    },
    purchaseApr: {
      variableApr: null,
      min: "0",
      max: "40",
      minValue: "20.95",
      maxValue: "31.2",
    },
    balanceTransferApr: null,
    creditScore: {
      min: "300",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    annualFee: {
      min: "0",
      max: "995",
      minValue: "0",
      maxValue: "72",
    },
    additional: [
      {
        id: 1,
        item: "Bad Credit",
      },
    ],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/luxury-card-mastercard-titanium-card-1277e51afde81bf9a1bb62efa072703d_thumb.png",
    reviews: {
      head: "Luxury Card™ Mastercard® Titanium Card™",
      head2: "Strongly recommended",
      review: "11",
      green: 7,
      pink: 4,
    },
    purchaseApr: "16.49",
    balanceTransferApr: "16.49",
    creditScore: {
      min: "300",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    annualFee: "195",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
      {
        id: 2,
        item: "Balance Transfer",
      },
      {
        id: 3,
        item: "Travel",
      },
    ],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/luxury-card-mastercard-gold-47709191984bd10dda1e085f795f780b_thumb.png",
    reviews: {
      head: "Luxury Card™ Mastercard® Gold Card™",
      head2: "Strongly recommended",
      review: "8",
      green: 6,
      pink: 2,
    },
    purchaseApr: "16.49",
    balanceTransferApr: "16.49",
    creditScore: {
      min: "300",
      max: "850",
      minValue: "740",
      maxValue: "850",
    },
    annualFee: "995",
    additional: [
      {
        id: 1,
        item: "Rewards",
      },
      {
        id: 2,
        item: "Balance Transfer",
      },
      {
        id: 3,
        item: "Travel",
      },
      {
        id: 4,
        item: "Airline",
      },
    ],
  },
];

export const prepaidCard = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/chase-first-banking-debit-card-for-kids-08523ab379a22c7c00c2ceead249ed7d_thumb.png",
    reviews: {
      head: "Chase First Banking Debit Card For Kids",
      head2: "Rating not yet determine",
      review: "2",
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,

    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/paypal-cash-mastercard_thumb.png",
    reviews: {
      head: "PayPal Cash Card",
      head2: "Strongly recommended",
      review: "35",
      green: "30",
      pink: "5",
    },
    signPurchaseTransFee: "3",
    pinPurchaseTransFee: "0",
    monthlyFee: "0",
    creditReloadFee: {
      creditReloadFee: "0",
      min: "0",
      max: "6",
      minValue: "0",
      maxValue: "4.95",
    },

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 4,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/paypal-prepaid-mastertcard_thumb.png",
    reviews: {
      head: "PayPal Prepaid Mastercard",
      head2: "Strongly recommended",
      review: "93",
      green: 78,
      pink: 15,
    },
    signPurchaseTransFee: "0",
    pinPurchaseTransFee: "0",
    monthlyFee: {
      monthlyFee: 4.95,
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: {
      creditReloadFee: null,
      min: "0",
      max: "6",
      minValue: "0",
      maxValue: "3.95",
    },

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 4,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 5,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/24k-prepaid-visa-rushcard_thumb.png",
    reviews: {
      head: "24k Prepaid Visa RushCard",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: "2",
    pinPurchaseTransFee: "1",
    monthlyFee: {
      monthlyFee: "7.95",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: {
      creditReloadFee: "5.95",
      min: "0",
      max: "6",
      minValue: "0",
      maxValue: "4.95",
    },

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/midnight-prepaid-visarushcard_thumb.png",
    reviews: {
      head: "Midnight Prepaid Visa RushCard",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: "2",
    pinPurchaseTransFee: "1",
    monthlyFee: {
      monthlyFee: "7.95",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: {
      creditReloadFee: "5.95",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/american-express-serve-cash-back_thumb.png",
    reviews: {
      head: "American Express Serve Cash Back",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: {
      monthlyFee: "7.95",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: {
      creditReloadFee: "0",
      min: "0",
      max: "6",
      minValue: "0",
      maxValue: "3.95",
    },

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 4,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/level-debit-card_thumb.jpg",
    reviews: {
      head: "Level Debit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: {
      monthlyFee: "15",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/mco-ruby-steel-visa-card_thumb.png",
    reviews: {
      head: "MCO Ruby Steel Visa Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/mco-frosted-rose-gold-visa-card_thumb.png",
    reviews: {
      head: "MCO Frosted Rose Gold Visa Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/clark-county-credit-union-debitatm-card_thumb.jpg",
    reviews: {
      head: "Clark County Credit Union Debit/ATM Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: {
      monthlyFee: "12",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 4,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 5,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/first-horizon-bank-companion-card_thumb.png",
    reviews: {
      head: "First Horizon Bank Companion Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: {
      monthlyFee: "3",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: {
      creditReloadFee: "2",
      min: "0",
      max: "6",
      minValue: "0",
      maxValue: "4.95",
    },

    additional: [
      {
        id: 1,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/first-horizon-bank-fast-funds-card_thumb.png",
    reviews: {
      head: "First Horizon Bank Fast Funds Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: {
      monthlyFee: "3",
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: {
      creditReloadFee: "2",
      min: "0",
      max: "6",
      minValue: "0",
      maxValue: "4.95",
    },

    additional: [
      {
        id: 1,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 2,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 3,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/first-horizon-bank-first-horizon-bank-travel-card_thumb.png",
    reviews: {
      head: "First Horizon Bank Visa Travel Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: null,

    creditReloadFee: null,

    additional: [
      {
        id: 1,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 2,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/1st-capital-bank-debit-card_thumb.png",
    reviews: {
      head: "1st Capital Bank Debit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 2,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 3,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/capital-bank-mastercard-debit-card_thumb.png",
    reviews: {
      head: "Capital Bank MasterCard® Debit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: null,

    creditReloadFee: null,

    additional: [],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/step-visa-card-6e86b628dd419bf9559891cd19c3dbe1_thumb.jpeg",
    reviews: {
      head: "Step Visa Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 4,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 5,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 17,
    image: "/static/current-card.jpeg",
    reviews: {
      head: "Current Debit Card",
      head2: "Be the first to rate",
      review: null,
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: "0",
    pinPurchaseTransFee: "0",
    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "15",
      minValue: "0",
      maxValue: "4.99",
    },

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 4,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 5,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/chase-liquid-prepaid-visa_thumb.png",
    reviews: {
      head: "Chase Liquid Prepaid Visa",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: 0,
    },
    signPurchaseTransFee: "0",
    pinPurchaseTransFee: "0",
    monthlyFee: "4.95",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 3,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/netspend-allaccess-account-by-metabank_thumb.png",
    reviews: {
      head: "Netspend All-Access Account By MetaBank®",
      head2: "Mostly recommended",
      review: "50",
      green: 35,
      pink: 15,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "5",

    creditReloadFee: "3.95",

    additional: [
      {
        id: 1,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/mco-midnight-blue-visa-card_thumb.png",
    reviews: {
      head: "MCO Midnight Blue Visa Card",
      head2: "Be the first to rate",
      review: "3",
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/ace-elite-purple-visa-prepaid-card_thumb.png",
    reviews: {
      head: "ACE Elite Purple Visa Prepaid Card",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },
    signPurchaseTransFee: "1",
    pinPurchaseTransFee: "2",
    monthlyFee: "9.95",

    creditReloadFee: "3.95",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/pink-ace-elite-visa-prepaid-card_thumb.png",
    reviews: {
      head: "Pink ACE Elite Visa Prepaid Card",
      head2: "Rating not yet determined",
      review: "3",
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: "1.5",
    pinPurchaseTransFee: "1.5",
    monthlyFee: "9.95",

    creditReloadFee: "3.95",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/green-dot-prepaid-everyday-debit-card_thumb.jpg",
    reviews: {
      head: "Green Dot Prepaid Everyday Mastercard",
      head2: "Mostly recommended",
      review: "6",
      green: 4,
      pink: 2,
    },
    signPurchaseTransFee: "1.95",
    pinPurchaseTransFee: null,
    monthlyFee: "7.95",

    creditReloadFee: {
      creditReloadFee: null,
      min: "0",
      max: "6",
      minValue: "4.95",
      maxValue: "5.95",
    },

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/mango-money-prepaid-debit-card_thumb.png",
    reviews: {
      head: "Mango Money Prepaid Debit Card",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },
    signPurchaseTransFee: "0",
    pinPurchaseTransFee: "0",
    monthlyFee: "5",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 4,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 5,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/achievecard-visa-prepaid-card_thumb.jpg",
    reviews: {
      head: "AchieveCard Visa Prepaid Card",
      head2: "Mostly not recommended",
      review: "17",
      green: 7,
      pink: 10,
    },
    signPurchaseTransFee: "0",
    pinPurchaseTransFee: "0",
    monthlyFee: "9.95",

    creditReloadFee: "5.95",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/1st-capital-bank-debit-card_thumb.png",
    reviews: {
      head: "Bank Of America CashPay Prepaid Visa",
      head2: "Mostly not recommended",
      review: "22",
      green: 12,
      pink: 10,
    },
    signPurchaseTransFee: "0",
    pinPurchaseTransFee: "0",
    monthlyFee: "4.95",

    creditReloadFee: null,

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
      {
        id: 3,
        item: "No Monthly Service Fee with Direct Deposit",
      },
      {
        id: 4,
        item: "No PIN Purchase Transaction Fee",
      },
      {
        id: 5,
        item: "No Signature Purchase Transaction Fee",
      },
    ],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/brinks-money-prepaid-mastercard_thumb.png",
    reviews: {
      head: "Brink's Prepaid Mastercard",
      head2: "Mostly not recommended",
      review: "126",
      green: 36,
      pink: 90,
    },
    signPurchaseTransFee: "1.5",
    pinPurchaseTransFee: "0",
    monthlyFee: "9.95",

    creditReloadFee: "3.95",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/ace-flare-account-by-metabank-48b18504c45590432b9a0a2dfd0853d8_thumb.jpg",
    reviews: {
      head: "ACE Flare® Account By MetaBank®",
      head2: "Mostly not recommended",
      review: "11",
      green: 5,
      pink: 6,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "15",
      minValue: "5",
      maxValue: "9.95",
    },

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
  {
    id: 29,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/mco-royal-indigo-visa-card_thumb.png",
    reviews: {
      head: "MCO Royal Indigo Visa Card",
      head2: "Rating not yet determined",
      review: "1",
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
      {
        id: 2,
        item: "Free In-Network ATM Withdrawal",
      },
    ],
  },
  {
    id: 30,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/mco-obsidian-black-visa-card_thumb.png",
    reviews: {
      head: "MCO Obsidian Black Visa Card",
      head2: "Rating not yet determined",
      review: "1",
      green: 0,
      pink: 0,
    },
    signPurchaseTransFee: null,
    pinPurchaseTransFee: null,
    monthlyFee: "0",

    creditReloadFee: "0",

    additional: [
      {
        id: 1,
        item: "Free Customer Service",
      },
    ],
  },
];

// data for mortgage...........................
export const heloc = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Point HELOC & HEI",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },

    loanAmount: {
      min: "1000",
      max: "1500000",
      minValue: "25000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "21",
      minValue: "3.25",
      maxValue: "5.99",
    },
    maxLtv: "80",
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Fraction HELOC",
      nmlsId: "NMLS ID# 2084341",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },

    loanAmount: {
      maxLoan: "1.5M",
      min: "1000",
      max: "1500000",
      minValue: "25000",
      maxValue: "500000",
    },
    apr: {
      min: "0",
      max: "21",
      minValue: "7.08",
      maxValue: "12.93",
    },
    maxLtv: "45",
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "US Bank HELOC",
      nmlsId: "NMLS ID# 402761",
      head2: "Strongly recommended",
      review: "10",
      green: 9,
      pink: 1,
    },

    loanAmount: {
      min: "1000",
      max: "1500000",
      minValue: "15000",
      maxValue: "750000",
    },
    apr: {
      min: "0",
      max: "21",
      minValue: "3.25",
      maxValue: "18",
    },
    maxLtv: "85",
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Prosper HELOC",
      head2: "Rating not yet determined",
      review: "4",
      green: "",
      pink: "",
    },

    loanAmount: {
      min: "1000",
      max: "1500000",
      minValue: "1000",
      maxValue: "300000",
    },
    apr: {
      min: "0",
      max: "21",
      minValue: "2.8",
      maxValue: "18",
    },
    maxLtv: "80",
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Academy Bank HELOC",
      nmlsId: "NMLS ID# 716627",
      head2: "Rating not yet determined",
      review: "4",
      green: "",
      pink: "",
    },

    loanAmount: {
      min: "1000",
      max: "1500000",
      minValue: "10000",
      maxValue: "250000",
    },
    apr: {
      min: "0",
      max: "21",
      minValue: "5.49",
      maxValue: "18",
    },
    maxLtv: "85",
    additional: [
      {
        id: 1,
        item: "No Late Fees",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const homeEquityLoan = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/spring-eq-home-equity-loans_thumb.jpg",
    reviews: {
      head: "Spring EQ Home Equity Loans",
      nmlasId: "NMLS ID# 1464945",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "5.205",
      maxValue: "13.135",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "5",
      maxValue: "30",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "25000",
      maxValue: "500000",
    },
    maxLtv: "90",
    additional: [],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/navy-federal-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Navy Federal Home Equity Loans",
      nmlasId: "NMLS ID# 399807",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: 0,
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "4.87",
      maxValue: "18",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "5",
      maxValue: "20",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "10000",
      maxValue: "500000",
    },
    maxLtv: "100",
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 3,
    image: "/static/us-bank.webp",
    reviews: {
      head: "US Bank Home Equity Loans",
      nmlasId: "NMLS ID# 402761",
      head2: "Mostly recommended",
      review: "5",
      green: 3,
      pink: 2,
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "3.8",
      maxValue: "18",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "10",
      maxValue: "15",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "50000",
      maxValue: "100000",
    },
    maxLtv: "90",
    additional: [],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/penfed-federal-credit-union_thumb.jpg",
    reviews: {
      head: "PenFed Credit Union Home Equity Loans",
      nmlasId: "NMLS ID# 401822",
      head2: "Rating not yet determined",
      review: "3",
      green: "",
      pink: "",
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "3.75",
      maxValue: "18",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "5",
      maxValue: "20",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "25000",
      maxValue: "500000",
    },
    maxLtv: "90",
    additional: [],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/loandepot_thumb.jpg",
    reviews: {
      head: "LoanDepot Home Equity Loans",
      nmlasId: "NMLS ID# 174457",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "4.684",
      maxValue: "18",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "10",
      maxValue: "30",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "35000",
      maxValue: "250000",
    },
    maxLtv: "90",
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/suntrust-bank_thumb.png",
    reviews: {
      head: "SunTrust Bank Home Equity Loans",
      nmlasId: "NMLS ID# 93471",
      head2: "Rating not yet determined",
      review: "4",
      green: "",
      pink: "",
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "3.25",
      maxValue: "18",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "5",
      maxValue: "30",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "10000",
      maxValue: "500000",
    },
    maxLtv: "70",
    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 7,
    image: "/static/discover.jpeg",
    reviews: {
      head: "Discover Home Equity Loans",
      nmlasId: "NMLS ID# 684042",
      head2: "Rating not yet determined",
      review: "2",
      green: "",
      pink: "",
    },

    apr: {
      min: "0",
      max: "18",
      minValue: "3.99",
      maxValue: "11.99",
    },
    loanTerm: {
      min: "1",
      max: "60",
      minValue: "10",
      maxValue: "30",
    },
    loanAmount: {
      maxLoan: null,
      min: "3000",
      max: "2000000",
      minValue: "35000",
      maxValue: "200000",
    },
    maxLtv: "90",
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
];

export const homePurchaseMortgages = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/capcenter-839c1bf7f37334d2d06eb2fca21f8da8_thumb.jpeg",
    reviews: {
      head: "CapCenter Mortgage",
      nmlasId: "NMLS ID# 67717",
      head2: "Rating not yet determined",
      review: "3",
      green: "",
      pink: "",
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: "620",
      min: "500",
      max: "850",
      minValue: "700",
      maxValue: "850",
    },
    noOrigginationFee: "Provided",

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/amerisave-home-mortgage_thumb.png",
    reviews: {
      head: "AmeriSave Home Purchase",
      nmlasId: "NMLS ID# 1168",
      head2: "Strongly recommended",
      review: "22",
      green: 15,
      pink: 7,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "3",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "550",
      maxValue: "850",
    },
    noOrigginationFee: "Provided",
    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/guaranteed-rate-99d1fdb837ef417456c6dd787b4cfcc1_thumb.png",
    reviews: {
      head: "Guaranteed Rate Home Mortgage",
      nmlasId: "NMLS ID# 2611",
      head2: "Strongly recommended",
      review: "14",
      green: 10,
      pink: 4,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "5",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: "620",
      min: "500",
      max: "850",
      minValue: "629",
      maxValue: "850",
    },
    noOrigginationFee: "provided",

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 4,
    image: "/static/american-funding.jpeg",
    reviews: {
      head: "New American Funding Home Mortgage ",
      nmlasId: "NMLS ID# 6606",
      head2: "Strongly recommended",
      review: "39",
      green: 38,
      pink: 1,
    },

    loanAmount: {
      maxLoan: "2000000",
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "8",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
      {
        id: 2,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/veterans-united-home-loans_thumb.jpg",
    reviews: {
      head: "Veterans United Home Loans Mortgage",
      nmlasId: "NMLS ID# 1907",
      head2: "Strongly recommended",
      review: "27",
      green: 24,
      pink: 3,
    },

    loanAmount: {
      maxLoan: "15000000",
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/wells-fargo-bank-fa3a71adf39da45faa8c2862610b13ce_thumb.png",
    reviews: {
      head: "Wells Fargo Home Mortgage",
      nmlasId: "NMLS ID# 399801",
      head2: "Strongly recommended",
      review: "16",
      green: 13,
      pink: 3,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "10000",
      maxValue: "20000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/chase-bank_thumb.png",
    reviews: {
      head: "Chase Bank Home Mortgage",
      nmlasId: "NMLS ID# 399798",
      head2: "Strongly recommended",
      review: "16",
      green: 13,
      pink: 3,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "50000",
      maxValue: "2000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
      {
        id: 2,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/bank-of-america-home-loans_thumb.png",
    reviews: {
      head: "Bank Of America Home Loans",
      nmlasId: "NMLS ID# 399802",
      head2: "Strongly recommended",
      review: "14",
      green: 10,
      pink: 4,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "60000",
      maxValue: "2500000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "15",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 9,
    image: "/static/us-bank.webp",
    reviews: {
      head: "US Bank Home Mortgage",
      nmlasId: "NMLS ID# 402761",
      head2: "Strongly recommended",
      review: "14",
      green: 11,
      pink: 3,
    },

    loanAmount: {
      maxLoan: "2000000",
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
      {
        id: 2,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/pnc-home-mortgage_thumb.png",
    reviews: {
      head: "PNC Home Mortgage",
      nmlasId: null,
      head2: "Mostly recommended",
      review: "13",
      green: 8,
      pink: 5,
    },

    loanAmount: {
      maxLoan: "5000000",
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "10",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: "Provided",

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/loandepot_thumb.jpg",
    reviews: {
      head: "LoanDepot Home Mortgage",
      nmlasId: "NMLS ID# 174457",
      head2: "Mostly recommended",
      review: "24",
      green: 16,
      pink: 8,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "85000",
      maxValue: "3000000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "10",
      maxValue: "40",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    noOrigginationFee: null,

    additional: [
      {
        id: 1,
        item: "No Prepayment Fee",
      },
      {
        id: 2,
        item: "Primary Residence",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/bmo-harris-bank_thumb.png",
    reviews: {
      head: "BMO Harris - Mortgage Purchase",
      nmlasId: null,
      head2: "Mostly recommended",
      review: "9",
      green: 5,
      pink: 4,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "100000",
      maxValue: "2000000",
    },
    loanTerm: {
      maxTerm: "30",
      // min: "1",
      // max: "40",
      // minValue: "15",
      // maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "600",
      maxValue: "850",
    },
    noOrigginationFee: "Provided",

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
    ],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/freedom-mortgage-corporation_thumb.jpg",
    reviews: {
      head: "Freedom Mortgage Home Loans",
      nmlasId: "NMLS ID# 2767",
      head2: "Mostly not recommended",
      review: "6",
      green: 2,
      pink: 4,
    },

    loanAmount: {
      maxLoan: null,
      min: "0",
      max: "2000000",
      minValue: "175000",
      maxValue: "2500000",
    },
    loanTerm: {
      min: "1",
      max: "40",
      minValue: "9",
      maxValue: "30",
    },

    creditScore: {
      startingCreditScore: null,
      min: "500",
      max: "850",
      minValue: "620",
      maxValue: "850",
    },
    noOrigginationFee: "Provided",

    additional: [
      {
        id: 1,
        item: "No Origination Fee",
      },
      {
        id: 2,
        item: "No Prepayment Fee",
      },
      {
        id: 3,
        item: "Primary Residence",
      },
    ],
  },
];

export const mortgageBroker = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "CloseYourOwnLoan.com",
      nmlasId: "NMLS ID# 423028",
      head2: "Rating not yet determined",
      review: "2",
      green: "",
      pink: "",
    },
    interestRateTypeOffer: [
      {
        id: 1,
        item: "Fixed-Rate Mortgage",
      },
      {
        id: 2,
        item: "Adjustable-Rate Mortgage ",
      },
    ],

    borkerLoanOrignationFee: {
      borkerLoanOrignationFee: true,
      min: "1",
      max: "6",
      minValue: "1",
      maxValue: "5",
    },

    brokerFeePayer: [
      {
        id: 1,
        item: "Lender",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Broker House Lending",
      nmlasId: "NMLS ID# 856693",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },
    interestRateTypeOffer: [
      {
        id: 1,
        item: "Fixed-Rate Mortgage",
      },
      {
        id: 2,
        item: "Adjustable-Rate Mortgage ",
      },
    ],

    borkerLoanOrignationFee: {
      borkerLoanOrignationFee: null,
      min: "1",
      max: "6",
      minValue: "1",
      maxValue: "5",
    },

    brokerFeePayer: [
      {
        id: 1,
        item: "Lender",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Acadia Lending Group Mortgage Broker",
      nmlasId: "NMLS ID# 370636",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },
    interestRateTypeOffer: [
      {
        id: 1,
        item: "Fixed-Rate Mortgage",
      },
      {
        id: 2,
        item: "Adjustable-Rate Mortgage ",
      },
    ],

    borkerLoanOrignationFee: {
      maxLoan: null,
      min: "1",
      max: "6",
      minValue: "1",
      maxValue: "5",
    },

    brokerFeePayer: [
      {
        id: 1,
        item: "Borrower",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Mortgage Network Mortgage Broker",
      nmlasId: "NMLS ID# 423028",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },
    interestRateTypeOffer: [
      {
        id: 1,
        item: "Fixed-Rate Mortgage",
      },
      {
        id: 2,
        item: "Adjustable-Rate Mortgage ",
      },
    ],

    borkerLoanOrignationFee: {
      maxLoan: null,
      min: "1",
      max: "6",
      minValue: "1",
      maxValue: "5",
    },

    brokerFeePayer: [],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "7th Level Mortgage Brokers",
      nmlasId: "NMLS ID# 1003861",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },
    interestRateTypeOffer: [
      {
        id: 1,
        item: "Fixed-Rate Mortgage",
      },
      {
        id: 2,
        item: "Adjustable-Rate Mortgage ",
      },
    ],

    borkerLoanOrignationFee: {
      maxLoan: null,
      min: "1",
      max: "6",
      minValue: "1",
      maxValue: "5",
    },

    brokerFeePayer: [
      {
        id: 1,
        item: "Lender",
      },
    ],
  },
];

export const reverseMortgages = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Reverse Mortgages.com Reverse Mortgage",
      nmlasId: "NMLS ID# 423028",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },

    loanAmount: {
      loanAmount: false,
      min: "10000",
      max: "4000000",
      minValue: "10000",
      maxValue: "4000000",
    },
    marginRate: null,
    originationFee: {
      originationFee: true,
      min: "0",
      max: "6000",
      minValue: "2500",
      maxValue: "6000",
    },
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "One Reverse Mortgage",
      nmlasId: "NMLS ID# 3030",
      head2: "Rating not yet determined",
      review: "3",
      green: "",
      pink: "",
    },

    loanAmount: {
      loanAmount: true,
      min: "10000",
      max: "4000000",
      minValue: "10000",
      maxValue: "4000000",
    },
    marginRate: "2%",
    originationFee: {
      originationFee: true,
      min: "0",
      max: "6000",
      minValue: "2500",
      maxValue: "6000",
    },
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "American Advisors Group Reverse Mortgage",
      nmlasId: "",
      head2: "Rating not yet determined",
      review: "4",
      green: "",
      pink: "",
    },

    loanAmount: {
      loanAmount: true,
      min: "10000",
      max: "4000000",
      minValue: "75000",
      maxValue: "4000000",
    },
    marginRate: "4%",
    originationFee: {
      originationFee: true,
      min: "0",
      max: "6000",
      minValue: "2500",
      maxValue: "6000",
    },
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Veritas Funding Reverse Mortgage",
      nmlasId: "NMLS ID# 252108",
      head2: "Rating not yet determined",
      review: "2",
      green: "",
      pink: "",
    },

    loanAmount: {
      loanAmount: false,
      min: "10000",
      max: "4000000",
      minValue: "10000",
      maxValue: "4000000",
    },
    marginRate: null,
    originationFee: {
      originationFee: true,
      min: "0",
      max: "6000",
      minValue: "2500",
      maxValue: "6000",
    },
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "HomeBridge Financial Services Reverse Mortgage",
      nmlasId: "NMLS ID# 6521",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },

    loanAmount: {
      maxLoan: "$636.15K ",
      loanAmount: false,
      min: "10000",
      max: "4000000",
      minValue: "10000",
      maxValue: "4000000",
    },
    marginRate: null,
    originationFee: {
      originationFee: true,
      min: "0",
      max: "6000",
      minValue: "2500",
      maxValue: "6000",
    },
  },
];

export const sharedEquityAgreements = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/unlock-29b0b59e850989c7c85da6bc88ceee64_thumb.png",
    reviews: {
      head: "Unlock",
      nmlasId: null,
      head2: "Rating not yet determined",
      review: "4",
      green: 0,
      pink: 0,
    },

    sharerdEquitCase: [
      {
        id: 1,
        item: "Equity Cash-Out",
      },
    ],
    investmentRangeD: {
      investmentRange: true,
      min: "15000",
      max: "600000",
      minValue: "30000",
      maxValue: "500000",
    },

    investmentRangeP: {
      investmentRange: true,
      min: "0",
      max: "80",
      minValue: "1",
      maxValue: "43.5",
    },
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/point-home-equity-partner-aebd19f5443b2abe15851a085693cfec_thumb.png",
    reviews: {
      head: "Point",
      nmlasId: null,
      head2: "Mostly recommended",
      review: "34",
      green: "18",
      pink: "16",
    },

    sharerdEquitCase: [
      {
        id: 1,
        item: "Equity Cash-Out",
      },
    ],
    investmentRangeD: {
      investmentRange: true,
      min: "15000",
      max: "600000",
      minValue: "25000",
      maxValue: "500000",
    },

    investmentRangeP: {
      investmentRange: true,
      min: "0",
      max: "80",
      minValue: "0",
      maxValue: "22.5",
    },
  },
  {
    id: 3,
    image: "https://cdn-reviews.supermoney.com/businesses/6/home-tap_thumb.png",
    reviews: {
      head: "Hometap",
      nmlasId: null,
      head2: "Mostly recommended",
      review: "10",
      green: 7,
      pink: 3,
    },

    sharerdEquitCase: [
      {
        id: 1,
        item: "Equity Cash-Out",
      },
    ],
    investmentRangeD: {
      investmentRange: true,
      min: "15000",
      max: "600000",
      minValue: "15000",
      maxValue: "600000",
    },

    investmentRangeP: {
      investmentRange: true,
      min: "0",
      max: "80",
      minValue: "5",
      maxValue: "15",
    },
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/unison-homeowner-51d79dd3134aaa08d55a423de8acc818_thumb.png",
    reviews: {
      head: "Unison HomeOwner",
      nmlasId: null,
      head2: "Mostly not recommended",
      review: "16",
      green: 6,
      pink: 10,
    },

    sharerdEquitCase: [
      {
        id: 1,
        item: "Equity Cash-Out",
      },
    ],
    investmentRangeD: {
      investmentRange: true,
      min: "15000",
      max: "600000",
      minValue: "30000",
      maxValue: "500000",
    },

    investmentRangeP: {
      maxInvestment: "17.5%",
      investmentRange: false,
      min: "0",
      max: "80",
      minValue: "5",
      maxValue: "15",
    },
  },
];

// data for Banking...........................
// ............................................

export const businessCheckingAcc = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Axos Bank Basic Business Checking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: "",
    },

    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    ATMFee: {
      ATMFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },
    minBalAvoidFee: {
      minBalAvoidFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    apy: {
      apy: "0",
      min: "0",
      max: "1",
      minValue: "5",
      maxValue: "15",
    },
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Chase Business Complete Banking",
      fdic: "Member FDIC",
      head2: "Mostly recommended",
      review: "6",
      green: 3,
      pink: 2,
    },

    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "75",
      minValue: "0",
      maxValue: "15",
    },

    ATMFee: {
      ATMFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },
    minBalAvoidFee: {
      minBalAvoidFee: "5k",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    apy: {
      apy: "0",
      min: "0",
      max: "1",
      minValue: "0.1",
      maxValue: "0.81",
    },
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "Axos Bank Business Interest Checking",
      fdic: "Member FDIC",
      head2: "Rating not yet determined",
      review: "1",
      green: "",
      pink: "",
    },

    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "75",
      minValue: "0",
      maxValue: "10",
    },

    ATMFee: {
      ATMFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },
    minBalAvoidFee: {
      minBalAvoidFee: "5k",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    apy: {
      apy: null,
      min: "0",
      max: "1",
      minValue: "0.1",
      maxValue: "0.81",
    },
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "NorthOne Business Checking Account",
      fdic: "Member FDIC",
      head2: "Rating not yet determined",
      review: "2",
      green: "",
      pink: "",
    },

    monthlyFee: {
      monthlyFee: "10",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    ATMFee: {
      ATMFee: "N/A",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },
    minBalAvoidFee: {
      minBalAvoidFee: "N/A",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    apy: {
      apy: "0",
      min: "0",
      max: "1",
      minValue: "5",
      maxValue: "15",
    },
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "US Bank Silver Business Checking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "5",
      green: "",
      pink: "",
    },

    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    ATMFee: {
      ATMFee: "N/A",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },
    minBalAvoidFee: {
      minBalAvoidFee: "0",
      min: "0",
      max: "75",
      minValue: "15000",
      maxValue: "600000",
    },

    apy: {
      apy: "0",
      min: "0",
      max: "1",
      minValue: "5",
      maxValue: "15",
    },
  },
];

export const cdAccounts = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/cit-bank-nopenalty-cd_thumb.png",
    reviews: {
      head: "CIT Bank No-Penalty CD",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "20",
      green: 18,
      pink: 2,
    },

    minimumOpeningDeposit: "1000",
    certificateTerm: [
      {
        id: 1,
        item: "11 months",
      },
    ],

    apy: {
      apy: 1.85,
      min: "1",
      max: "3",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additionalDetal: [
      {
        id: 1,
        item: "No Early Withdrawal Fee",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/cit-bank-cd_thumb.png",
    reviews: {
      head: "CIT Bank Term CD",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "30",
      green: 28,
      pink: 2,
    },

    minimumOpeningDeposit: "100k",
    certificateTerm: [
      {
        id: 1,
        item: "6 months",
      },
      {
        id: 2,
        item: "12 months",
      },
      {
        id: 3,
        item: "13 months",
      },
      {
        id: 4,
        item: "18 months",
      },
      {
        id: 5,
        item: "2 years",
      },
      {
        id: 6,
        item: "3 years",
      },
      {
        id: 7,
        item: "4 years",
      },
      {
        id: 8,
        item: "8 years",
      },
    ],

    apy: {
      apy: null,
      min: "0",
      max: "3",
      minValue: "0.3",
      maxValue: "0.5",
    },
    additionalDetal: [],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/cit-bank-rampup-cd_thumb.png",
    reviews: {
      head: "CIT Bank RampUp CD",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "25",
      green: 23,
      pink: 2,
    },

    minimumOpeningDeposit: "25000",
    certificateTerm: [
      {
        id: 1,
        item: "12 months",
      },
      {
        id: 2,
        item: "2 years",
      },
      {
        id: 3,
        item: "3 years",
      },
      {
        id: 4,
        item: "4 years",
      },
    ],

    apy: {
      apy: "0.25",
      min: "0",
      max: "3",
      minValue: "0.4",
      maxValue: "0.5",
    },
    additionalDetal: [],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/cit-bank-jumbo-cd_thumb.png",
    reviews: {
      head: "CIT Bank Jumbo CD",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "21",
      green: 15,
      pink: 6,
    },

    minimumOpeningDeposit: "100000",
    certificateTerm: [
      {
        id: 1,
        item: "2 years",
      },
      {
        id: 2,
        item: "3 years",
      },
      {
        id: 3,
        item: "4 years",
      },
      {
        id: 4,
        item: "5 years",
      },
    ],

    apy: {
      apy: null,
      min: "0",
      max: "3",
      minValue: "0.4",
      maxValue: "0.5",
    },
    additionalDetal: [],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/quontic-bank-cd-8538852894b270cbe1d9e0d842418efa_thumb.png",
    reviews: {
      head: "Quontic Bank CD",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "22",
      green: 17,
      pink: 5,
    },

    minimumOpeningDeposit: "500",
    certificateTerm: [
      {
        id: 1,
        item: "6 months",
      },
      {
        id: 2,
        item: "12 months",
      },
      {
        id: 3,
        item: "2 years",
      },
      {
        id: 4,
        item: "3 years",
      },
    ],

    apy: {
      apy: null,
      min: "0",
      max: "3",
      minValue: "2",
      maxValue: "3.3",
    },
    additionalDetal: [],
  },
];

export const checkingAccounts = [
  {
    id: 1,
    image: "/static/upgrade.png",
    reviews: {
      head: "Upgrade RewardsChecking",
      fdic: "",
      head2: "Strongly recommended",
      review: "8",
      green: 6,
      pink: 2,
    },
    // initialDeposit: {
    //   value: 300,
    // },
    // inNetATMFee: {
    //   value: 0
    // },
    // checkCashingFee: {
    //   value: 0
    // },
    // overdraftFee: {
    //   value: 0
    // },
    // outNetATMFee: {
    //   value: 0
    // },
    // rewards: {
    //   value: 100,
    // },
    cashBack: {
      cashBack: null,
      min: "0",
      max: "15",
      minValue: "1",
      maxValue: "2",
    },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Free Bill Pay",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "ATM Reimbursement",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Fraud Monitoring",
      },
      {
        id: 7,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 8,
        item: "Fraud Protection",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
      {
        id: 11,
        item: "Online-Only Account",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/chase-bank-checking-account_thumb.png",
    reviews: {
      head: "Chase Bank Total",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "82",
      green: 68,
      pink: 14,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 400,
    // },
    // inNetATMFee: {
    //   value: 1
    // },
    // checkCashingFee: {
    //   value: 5
    // },
    // overdraftFee: {
    //   value: 2
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "95",
      minValue: "0",
      maxValue: "12",
    },
    minBal: {
      minBal: "1500",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "Free Bill Pay",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Nationwide ATM Network",
      },
      {
        id: 5,
        item: "Check Images with Statement",
      },
      {
        id: 6,
        item: "Mobile Banking",
      },
      {
        id: 7,
        item: "Fraud Monitoring",
      },
      {
        id: 8,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Automatic Transfers",
      },
      {
        id: 11,
        item: "Bauer Financial A+/A Rating",
      },
      {
        id: 12,
        item: "Branch Access",
      },
      {
        id: 13,
        item: "Member FDIC",
      },
      {
        id: 14,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/chime-bank-9b38be6a569769bc01c10b828370ae6d_thumb.png",
    reviews: {
      head: "Chime Checking Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "98",
      green: 81,
      pink: 17,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 500,
    // },
    // inNetATMFee: {
    //   value: 0
    // },
    // checkCashingFee: {
    //   value: 10
    // },
    // overdraftFee: {
    //   value: 23
    // },
    // outNetATMFee: {
    //   value: 3
    // },
    // rewards: {
    //   value: 700,
    // },
    apy: {
      apy: "0.5",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "Free Bill Pay",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Nationwide ATM Network",
      },
      {
        id: 5,
        item: "Check Images with Statement",
      },
      {
        id: 6,
        item: "Mobile Banking",
      },
      {
        id: 7,
        item: "Fraud Protection",
      },
      {
        id: 8,
        item: "Interest Bearing Account",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Automatic Transfers",
      },
      {
        id: 11,
        item: "Bauer Financial A+/A Rating",
      },
      {
        id: 12,
        item: "Get Paid Early",
      },
      {
        id: 13,
        item: "Online-Only Account",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/aspiration-checking-account-4f5edc5ae684cb76c9c553f19bb39202_thumb.png",
    reviews: {
      head: "Aspiration Spend & Save Account",
      fdic: "Member FDIC",
      head2: "Mostly Not recommended",
      review: "111",
      green: 50,
      pink: 61,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 600,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 6
    // },
    // overdraftFee: {
    //   value: 30
    // },
    // outNetATMFee: {
    //   value: 2
    // },
    // rewards: {
    //   value: 1100,
    // },
    apy: {
      apy: "5",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "95",
      minValue: "0",
      maxValue: "7.99",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "ATM Reimbursement",
      },
      {
        id: 4,
        item: "Nationwide ATM Network",
      },
      {
        id: 5,
        item: "Fraud Monitoring",
      },
      {
        id: 6,
        item: "Mobile Banking",
      },
      {
        id: 7,
        item: "Fraud Protection",
      },
      {
        id: 8,
        item: "IRAs",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Branch Access",
      },
      {
        id: 11,
        item: "Member FDIC",
      },
      {
        id: 12,
        item: "Online-Only Account",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/porte-banking-006e0947c42b10513a58197f9fe8417e_thumb.jpeg",
    reviews: {
      head: " Porte Mobile Banking",
      fdic: "Member FDIC",
      head2: "Mostly recommended",
      review: "14",
      green: 8,
      pink: 6,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 700,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Mobile Banking",
      },
      {
        id: 4,
        item: "Nationwide ATM Network",
      },
      {
        id: 5,
        item: "Fraud Monitoring",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Fraud Protection",
      },
      {
        id: 8,
        item: "Soft Credit Pull",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Get Paid Early",
      },
      {
        id: 11,
        item: "Member FDIC",
      },
      {
        id: 12,
        item: "Online-Only Account",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/chase-bank-checking-account_thumb.png",
    reviews: {
      head: "Chase Secure Banking",
      fdic: "Member FDIC",
      head2: "Most recommended",
      review: "24",
      green: 18,
      pink: 6,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 700,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "4.95",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "Free Bill Pay",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Check Images with Statement",
      },
      {
        id: 4,
        item: "Nationwide ATM Network",
      },
      {
        id: 5,
        item: "Fraud Monitoring",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Fraud Protection",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Automatic Transfers",
      },
      {
        id: 11,
        item: "Bauer Financial A+/A Rating",
      },
      {
        id: 12,
        item: "Branch Access",
      },
      {
        id: 13,
        item: "Member FDIC",
      },
      {
        id: 14,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/copper-banking-e03f5f3fcf071425c4dbb041b152e198_thumb.png",
    reviews: {
      head: "Copper - Banking Built for Teens",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "13",
      green: 13,
      pink: "",
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0.001",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Interest Bearing Account",
      },
      {
        id: 5,
        item: "Fraud Monitoring",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Fraud Protection",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
      {
        id: 11,
        item: "Online-Only Account",
      },
      {
        id: 12,
        item: "Teen Checking Account",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/go2bank-checking-ae9812bb7e9951088acc3f7dafa8fd36_thumb.png",
    reviews: {
      head: "GO2bank Checking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "18",
      green: 12,
      pink: 6,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Online-Only Account",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
  {
    id: 9,
    image: "https://cdn-reviews.supermoney.com/businesses/1/acorns_thumb.png",
    reviews: {
      head: "Acorns Checking",
      fdic: "",
      head2: "Strongly recommended",
      review: "23",
      green: 21,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Expense Management",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Online-Only Account",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/quontic-bank-high-interest-checking-account-d0fba9bf1ee26e67a81fdc20e854e4f3_thumb.png",
    reviews: {
      head: "Quontic Bank High Interest Checking Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "13",
      green: 11,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "1.1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "Free Bill Pay",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Interest Bearing Account",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Check Images with Statement",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
      {
        id: 11,
        item: "Fraud Monitoring",
      },
      {
        id: 12,
        item: "Fraud Protection",
      },
      {
        id: 13,
        item: "Soft Credit Pull",
      },
      {
        id: 14,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/sable-money-inc-fa4f476ad8b5bd07cd1b2c7f469222dc_thumb.png",
    reviews: {
      head: "Sable Bank Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },

    cashBack: {
      cashBack: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Online-Only Account",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
      {
        id: 11,
        item: "Fraud Monitoring",
      },
      {
        id: 12,
        item: "Fraud Protection",
      },
      {
        id: 13,
        item: "Soft Credit Pull",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/consumers-credit-union-checking-account_thumb.png",
    reviews: {
      head: "Consumers Credit Union Rewards Checking",
      fdic: "Insured by NCUA",
      head2: "Strongly recommended",
      review: "23",
      green: 21,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: null,
      min: "0",
      max: "10",
      minValue: "0.1",
      maxValue: "4.09",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Free Bill Pay",
      },
      {
        id: 4,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Interest Bearing Account",
      },
      {
        id: 7,
        item: "ATM Reimbursement",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "IRAs",
      },
      {
        id: 11,
        item: "Bauer Financial A+/A Rating",
      },
      {
        id: 12,
        item: "Insured by NCUA",
      },
      {
        id: 13,
        item: "Branch Access",
      },
      {
        id: 14,
        item: "Check Writing",
      },
      {
        id: 15,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/axos-bank-essential-checking_thumb.png",
    reviews: {
      head: "Axos Bank Essential Checking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "ATM Reimbursement",
      },
      {
        id: 7,
        item: "Fraud Monitoring",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Get Paid Early",
      },
      {
        id: 11,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/axos-bank-rewards-checking_thumb.png",
    reviews: {
      head: "Axos Bank Rewards Checking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "7",
      green: 5,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "1.25",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Interest Bearing Account",
      },
      {
        id: 7,
        item: "ATM Reimbursement",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Fraud Monitoring",
      },
      {
        id: 11,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 15,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/axos-bank-cashback-checking_thumb.png",
    reviews: {
      head: "Axos Bank Cashback Checking",
      fdic: "Member FDIC",
      head2: "Rating not yet determined",
      review: "4",
      green: 0,
      pink: 0,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 4,
        item: "ATM Reimbursement",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Interest Bearing Account",
      },
      {
        id: 7,
        item: "Joint Accounts",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Fraud Monitoring",
      },
    ],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/axos-bank-first-checking-account_thumb.png",
    reviews: {
      head: "Axos Bank First Checking Account",
      fdic: "Member FDIC",
      head2: "Rating not yet determined",
      review: "4",
      green: 0,
      pink: 0,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0.1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Expense Management",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "ATM Reimbursement",
      },
      {
        id: 7,
        item: "Fraud Monitoring",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Joint Accounts",
      },
    ],
  },
  {
    id: 17,
    image:
      "https://cdn-reviews.supermoney.com/businesses/4/axos-bank-golden-checking-account_thumb.png",
    reviews: {
      head: "Axos Bank Golden Checking",
      fdic: "Member FDIC",
      head2: "Rating not yet determined",
      review: "3",
      green: 0,
      pink: 0,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0.1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "Check Writing",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Nationwide ATM Network",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "ATM Reimbursement",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/nationwide-my-checking_thumb.png",
    reviews: {
      head: "Nationwide My Checking",
      fdic: "",
      head2: "Strongly recommended",
      review: "6",
      green: 4,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "ATM Reimbursement",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 7,
        item: "Joint Accounts",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/nationwide-interest-checking_thumb.png",
    reviews: {
      head: "Nationwide Interest Checking",
      fdic: "",
      head2: "Strongly recommended",
      review: "23",
      green: 21,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0.1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "ATM Reimbursement",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Get Paid Early",
      },
      {
        id: 7,
        item: "Joint Accounts",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Branch Acces",
      },
    ],
  },
  {
    id: 20,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/nationwide-direct-checking_thumb.png",
    reviews: {
      head: "Nationwide Direct Checking",
      fdic: "",
      head2: "Rating not yet determined",
      review: "2",
      green: 0,
      pink: 0,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "5",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Get Paid Early",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "ATM Reimbursement",
      },
      {
        id: 7,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Debit Card",
      },
      {
        id: 10,
        item: "Mobile Check Deposit",
      },
    ],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/chase-first-banking-1acc2734dc51b8024a4cbab222e0537f_thumb.jpg",
    reviews: {
      head: "Chase First Banking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "39",
      green: 35,
      pink: 4,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Get Paid Early",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Debit Card Lock/Unlock",
      },
      {
        id: 7,
        item: "Joint Accounts",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Teen Checking Account",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/logix-federal-credit-union-checking-account_thumb.png",
    reviews: {
      head: "Logix Federal Credit Union Advantage Checking",
      fdic: "Insured by NCUA",
      head2: "Strongly recommended",
      review: "40",
      green: 38,
      pink: 2,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: null,
      min: "0",
      max: "95",
      minValue: "3.95",
      maxValue: "5.95",
    },
    minBal: {
      minBal: "750",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "No ATM Fees",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Check Images with Statement",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "Bauer Financial A+/A Rating",
      },
      {
        id: 7,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Insured by NCUA",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/bbva-compass-clearconnect-checking-account_thumb.jpg",
    reviews: {
      head: "BBVA Online Checking",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "34",
      green: 30,
      pink: 4,
    },

    cashBack: {
      cashBack: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    // initialDeposit: {
    //   value: 900,
    // },
    // inNetATMFee: {
    //   value: 2
    // },
    // checkCashingFee: {
    //   value: 8
    // },
    // overdraftFee: {
    //   value: 37
    // },
    // outNetATMFee: {
    //   value: 5
    // },
    // rewards: {
    //   value: 1400,
    // },
    apy: {
      apy: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "95",
      minValue: "3",
      maxValue: "5",
    },
    minBal: {
      minBal: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additionalDetal: [
      {
        id: 1,
        item: "Bauer Financial A+/A Rating",
      },
      {
        id: 2,
        item: "Mobile Check Deposit",
      },
      {
        id: 3,
        item: "Get Paid Early",
      },
      {
        id: 4,
        item: "Free Bill Pay",
      },
      {
        id: 5,
        item: "Nationwide ATM Network",
      },
      {
        id: 6,
        item: "ATM Reimbursement",
      },
      {
        id: 7,
        item: "No Monthly Maintenance Fee",
      },
      {
        id: 8,
        item: "Mobile Banking",
      },
      {
        id: 9,
        item: "Branch Access",
      },
      {
        id: 10,
        item: "Member FDIC",
      },
    ],
  },
];

export const moneyMarketAccounts = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/quontic-bank-money-market-account-6e669c4a48d4506c5afb987319ff82a7_thumb.png",
    reviews: {
      head: "Quontic Bank Money Market Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "5",
      green: 5,
      pink: "",
    },
    apy: {
      apy: "1.85",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apyMin: {
      apyMin: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    minOpen: {
      minOpen: "100",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/cit-bank-money-market_thumb.jpg",
    reviews: {
      head: "CIT Bank Money Market Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: "",
    },
    apy: {
      apy: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apyMin: {
      apyMin: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    minOpen: {
      minOpen: "100",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/consumers-credit-union-auto-loan_thumb.png",
    reviews: {
      head: "UFB Direct Money Market",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },
    apy: {
      apy: "1.66",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apyMin: {
      apyMin: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    minOpen: {
      minOpen: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/nationwide-money-market-account_thumb.png",
    reviews: {
      head: "Nationwide Money Market Plus",
      fdic: "Member FDIC",
      head2: "Mostly recommended",
      review: "9",
      green: 5,
      pink: 4,
    },
    apy: {
      apy: "0.25",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apyMin: {
      apyMin: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    minOpen: {
      minOpen: "1000",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/axos-bank-high-yield-money-market_thumb.png",
    reviews: {
      head: "Axos Bank High Yield Money Market",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: 0,
    },
    apy: {
      apy: "0.25",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apyMin: {
      apyMin: "0.01",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    minOpen: {
      minOpen: "1000",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
  },
];

export const moneyTransferServices = [
  {
    id: 1,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/xe-money-transfer-ca38b4b9cf8f1b22553b957f138ca41c_thumb.png",
    reviews: {
      head: "XE Money Transfer",
      fdic: "",
      head2: "Strongly recommended",
      review: "40",
      green: 32,
      pink: 8,
    },
    minTransfer: {
      minTransfer: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "2",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/transferwise-money-transfer_thumb.jpg",
    reviews: {
      head: "Wise",
      fdic: "",
      head2: "Strongly recommended",
      review: "36",
      green: 29,
      pink: 7,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0.45",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/moneygram-money-transfer_thumb.png",
    reviews: {
      head: "MoneyGram",
      fdic: "",
      head2: "Strongly recommended",
      review: "34",
      green: 27,
      pink: 7,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/currencyfair-money-transfer_thumb.png",
    reviews: {
      head: "CurrencyFair",
      fdic: "",
      head2: "Strongly recommended",
      review: "29",
      green: 28,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "2",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "3",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0.35",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/worldremit-money-transfer_thumb.png",
    reviews: {
      head: "WorldRemit",
      fdic: "",
      head2: "Mostly not recommended",
      review: "38",
      green: 16,
      pink: 22,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "1.99",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/remitly-money-transfer_thumb.png",
    reviews: {
      head: "Remitly",
      fdic: "",
      head2: "Mostly not recommended",
      review: "40",
      green: 32,
      pink: 8,
    },
    minTransfer: {
      minTransfer: "10",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: null,
      min: "0",
      max: "50",
      minValue: "0",
      maxValue: "3.99",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/ria-money-transfer-money-transfer_thumb.jpg",
    reviews: {
      head: "RIA Money Transfer",
      fdic: "",
      head2: "Mostly not recommended",
      review: "43",
      green: 14,
      pink: 29,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "5",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/apple-pay-130686ac83db8fad412c60d859378fd8_thumb.png",
    reviews: {
      head: "Apple Pay",
      fdic: "",
      head2: "Strongly recommended",
      review: "20",
      green: 19,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: null,
      min: "0",
      max: "55",
      minValue: "0",
      maxValue: "10",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 9,
    image: "https://cdn-reviews.supermoney.com/businesses/3/venmo_thumb.png",
    reviews: {
      head: "Venmo Money Transfer",
      fdic: "",
      head2: "Strongly recommended",
      review: "33",
      green: 29,
      pink: 4,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "3",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/google-pay_thumb.png",
    reviews: {
      head: "Google Pay",
      fdic: "",
      head2: "Strongly recommended",
      review: "14",
      green: 13,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "N/A",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/skrill-money-transfer_thumb.png",
    reviews: {
      head: "Skrill",
      fdic: "",
      head2: "Strongly recommended",
      review: "8",
      green: 8,
      pink: 0,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "1.45",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 12,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/paypal-money-transfer_thumb.png",
    reviews: {
      head: "PayPal",
      fdic: "",
      head2: "Strongly recommended",
      review: "54",
      green: 44,
      pink: 10,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "2.9",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 13,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/stripe-apple-pay-money-transfer-cd345a9a056f3b48a3f6ca7212412211_thumb.png",
    reviews: {
      head: "Stripe Payments",
      fdic: "",
      head2: "Strongly recommended",
      review: "11",
      green: 10,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "2",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0.3",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "2.9",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 14,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/monzo-money-transfer_thumb.png",
    reviews: {
      head: "Monzo Money Transfer",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "6",
      green: 6,
      pink: 0,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 15,
    image: "/static/square.png",
    reviews: {
      head: "Square Cash",
      fdic: "",
      head2: "Strongly recommended",
      review: "11",
      green: 9,
      pink: 2,
    },
    minTransfer: {
      minTransfer: "25",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 16,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/ofx-money-transfer_thumb.png",
    reviews: {
      head: "OFX Money Transfers",
      fdic: "",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "2",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "2",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "50",
      minValue: "0",
      maxValue: "3.99",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 17,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/walmart2world_thumb.png",
    reviews: {
      head: "Walmart2World",
      fdic: "",
      head2: "Strongly recommended",
      review: "9",
      green: 7,
      pink: 2,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: null,
      min: "0",
      max: "50",
      minValue: "4",
      maxValue: "16",
    },
    processingCommission: {
      processingCommission: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 18,
    image:
      "https://cdn-reviews.supermoney.com/businesses/6/transfergo_thumb.png",
    reviews: {
      head: "TransferGo Money Transfers",
      fdic: "",
      head2: "Strongly recommended",
      review: "20",
      green: 19,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "10",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: null,
      min: "0",
      max: "50",
      minValue: "0",
      maxValue: "1.38",
    },
    processingCommission: {
      processingCommission: "2.2",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },
  {
    id: 19,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/chase-quickpay-money-transfer_thumb.png",
    reviews: {
      head: "Chase Zelle",
      fdic: "Member FDIC",
      head2: "Mostly recommended",
      review: "16",
      green: 10,
      pink: 6,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 20,
    image: "https://cdn-reviews.supermoney.com/businesses/1/kalixa_thumb.png",
    reviews: {
      head: "Kalixa",
      fdic: "",
      head2: "Rating not yet determined",
      review: "2",
      green: 0,
      pink: 0,
    },
    minTransfer: {
      minTransfer: "15.12",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },
  {
    id: 21,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/paysafe-group-money-transfer_thumb.png",
    reviews: {
      head: "Paysafe Group",
      fdic: "",
      head2: "Strongly recommended",
      review: "6",
      green: 5,
      pink: 1,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "1.9",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },
  {
    id: 22,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/walmart2walmart_thumb.jpg",
    reviews: {
      head: "Walmart2Walmart",
      fdic: "",
      head2: "Mostly not recommended",
      review: "1",
      green: 5,
      pink: 6,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: null,
      min: "0",
      max: "50",
      minValue: "4",
      maxValue: "16",
    },
    processingCommission: {
      processingCommission: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },
  {
    id: 23,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/western-union-money-transfer_thumb.png",
    reviews: {
      head: "Western Union",
      fdic: "",
      head2: "Mostly not recommended",
      review: "14",
      green: 6,
      pink: 8,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: null,
      min: "0",
      max: "50",
      minValue: "1",
      maxValue: "50",
    },
    processingCommission: {
      processingCommission: "5",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 24,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/facebook-pay-money-transfer-6edaac241a8ad81102d5e0486f322395_thumb.png",
    reviews: {
      head: "Facebook Payments",
      fdic: "",
      head2: "Strongly not recommended",
      review: "21",
      green: 5,
      pink: 16,
    },
    minTransfer: {
      minTransfer: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 25,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/sharemoney-money-transfer_thumb.jpg",
    reviews: {
      head: "Sharemoney",
      fdic: "",
      head2: "Strongly not recommended",
      review: "17",
      green: 3,
      pink: 14,
    },
    minTransfer: {
      minTransfer: "20",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    processingCommission: {
      processingCommission: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },
  {
    id: 26,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/travelex-money-transfer-money-transfer_thumb.png",
    reviews: {
      head: "Travelex Money Transfer",
      fdic: "",
      head2: "Mostly not recommended",
      review: "6",
      green: 2,
      pink: 4,
    },
    minTransfer: {
      minTransfer: "500",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "2",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "50",
      minValue: "0",
      maxValue: "3.99",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },
  {
    id: 27,
    image:
      "https://cdn-reviews.supermoney.com/businesses/3/xoom-money-transfer_thumb.png",
    reviews: {
      head: "Xoom",
      fdic: "",
      head2: "Strongly not recommended",
      review: "8",
      green: 1,
      pink: 7,
    },
    minTransfer: {
      minTransfer: "10",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "50",
      minValue: "4",
      maxValue: "16",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
  {
    id: 28,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/azimo-8bf5f9a35702f7af9fd810667e6b3b12_thumb.png",
    reviews: {
      head: "Azimo",
      fdic: "",
      head2: "Strongly not recommended",
      review: "27",
      green: 0,
      pink: 27,
    },
    minTransfer: {
      minTransfer: "12.41",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    transferSpeed: {
      transferSpeed: "1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    processingFeeRange: {
      processingFeeRange: "N/A",
      min: "0",
      max: "50",
      minValue: "0",
      maxValue: "1.38",
    },
    processingCommission: {
      processingCommission: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [
      {
        id: 1,
        item: "Mobile Transfer",
      },
    ],
  },
];

export const savingAcc = [
  {
    id: 1,
    image: "https://cdn-reviews.supermoney.com/businesses/1/barclays_thumb.png",
    reviews: {
      head: "Barclays US Online Savings",
      fdic: "Member FDIC",
      head2: "Be the first to rate",
      review: "4",
      green: "",
      pink: "",
    },
    // initialDeposit: {
    //   value: 200,
    // },
    // minimumRequired: {
    //   value: 10000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apy: {
      apy: "1.1",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    apyMin: {
      apyMin: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [],
  },
  {
    id: 2,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/cit-bank-savings-connect-6b1613b684a769c5950ed993a2de3e37_thumb.png",
    reviews: {
      head: "CIT Bank Savings Connect",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "17",
      green: 16,
      pink: 1,
    },
    // initialDeposit: {
    //   value: 50,
    // },
    // minimumRequired: {
    //   value: 20000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apy: {
      apy: "1.65",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    apyMin: {
      apyMin: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [],
  },
  {
    id: 3,
    image:
      "https://cdn-reviews.supermoney.com/businesses/5/axos-bank-high-yield-savings_thumb.jpg",
    reviews: {
      head: "UFB High Yield Savings",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "17",
      green: 13,
      pink: 4,
    },
    // initialDeposit: {
    //   value: 100,
    // },
    // minimumRequired: {
    //   value: 5000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apy: {
      apy: "1.66",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    apyMin: {
      apyMin: "10000",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [
      {
        id: 1,
        item: "Bauer Financial A+/A Rating",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/quontic-bank-high-yield-savings-47eebcec13a6b0980216dde509d1186f_thumb.png.webp",
    reviews: {
      head: "Quontic Bank High Yield Savings",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "17",
      green: 15,
      pink: 2,
    },
    // initialDeposit: {
    //   value: 70,
    // },
    // minimumRequired: {
    //   value: 15000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apy: {
      apy: "1.85",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    apyMin: {
      apyMin: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [],
  },
  {
    id: 5,
    image:
      "https://cdn-reviews.supermoney.com/businesses/2/chime-bank-9b38be6a569769bc01c10b828370ae6d_thumb.png",
    reviews: {
      head: "Chime Savings Account",
      fdic: "Member FDIC",
      head2: "Mostly recommended",
      review: "20",
      green: 13,
      pink: 7,
    },
    // initialDeposit: {
    //   value: 20,
    // },
    // minimumRequired: {
    //   value: 18000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apy: {
      apy: "0.5",
      min: "0",
      max: "7",
      minValue: "0.2",
      maxValue: "0.3",
    },

    apyMin: {
      apyMin: "0",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },
    additional: [],
  },

  {
    id: 6,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/cit-bank-savings-connect-6b1613b684a769c5950ed993a2de3e37_thumb.png",
    reviews: {
      head: "CIT Bank Savings Connect",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "20",
      green: 19,
      pink: 1,
    },
    // initialDeposit: {
    //   value: 50,
    // },
    // minimumRequired: {
    //   value: 20000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },
    apy: {
      apy: "0.7",
      min: "0",
      max: "15",
      minValue: "1.1",
      maxValue: "2.85",
    },

    apyMin: {
      apyMin: "0.01",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [
      {
        id: 1,
        item: "Bauer Financial A+/A Rating",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://cdn-reviews.supermoney.com/businesses/7/nationwide-my-savings_thumb.png",
    reviews: {
      head: "Nationwide My Savings",
      fdic: "",
      head2: "Strongly recommended",
      review: "25",
      green: 24,
      pink: 1,
    },
    // initialDeposit: {
    //   value: 40,
    // },
    // minimumRequired: {
    //   value: 10000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "7",
      minValue: "0.2",
      maxValue: "0.3",
    },
    apy: {
      apy: null,
      min: "0",
      max: "7",
      minValue: "0.2",
      maxValue: "0.3",
    },

    apyMin: {
      apyMin: "1000",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [
      {
        id: 1,
        item: "Bauer Financial A+/A Rating",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://cdn-reviews.supermoney.com/businesses/8/axos-high-yield-savings_thumb.png",
    reviews: {
      head: "Axos High Yield Savings Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "19",
      green: 17,
      pink: 2,
    },
    // initialDeposit: {
    //   value: 60,
    // },
    // minimumRequired: {
    //   value: 13000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "7",
      minValue: "0.15",
      maxValue: "0.61",
    },
    apy: {
      apy: null,
      min: "0",
      max: "7",
      minValue: "0.15",
      maxValue: "0.61",
    },

    apyMin: {
      apyMin: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [
      {
        id: 1,
        item: "Bauer Financial A+/A Rating",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://cdn-reviews.supermoney.com/businesses/9/porte-savings-account-c2a47b95e9ba0539bae0161117e54c57_thumb.jpeg",
    reviews: {
      head: "Porte Savings Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "18",
      green: 16,
      pink: 2,
    },
    // initialDeposit: {
    //   value: 90,
    // },
    // minimumRequired: {
    //   value: 2000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "7",
      minValue: "0.2",
      maxValue: "0.3",
    },
    apy: {
      apy: null,
      min: "0",
      max: "7",
      minValue: "0.2",
      maxValue: "3",
    },

    apyMin: {
      apyMin: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [],
  },
  {
    id: 10,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/new-world-saving-inc-18f5085d412088ce7ad25ad935a31d97_thumb.jpg",
    reviews: {
      head: "Guac Savings App",
      fdic: "",
      head2: "Strongly recommended",
      review: "18",
      green: 14,
      pink: 4,
    },
    // initialDeposit: {
    //   value: 60,
    // },
    // minimumRequired: {
    //   value: 13000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "7",
      minValue: "0.15",
      maxValue: "0.61",
    },
    apy: {
      apy: "0",
      min: "0",
      max: "7",
      minValue: "0.15",
      maxValue: "0.61",
    },

    apyMin: {
      apyMin: "N/A",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [],
  },
  {
    id: 11,
    image:
      "https://cdn-reviews.supermoney.com/businesses/1/starship-heal-savings-account-5cb96c792ed368d4aed1c3340cf0dd22_thumb.png",
    reviews: {
      head: "Starship Health Savings Account",
      fdic: "Member FDIC",
      head2: "Strongly recommended",
      review: "16",
      green: 14,
      pink: 2,
    },
    // initialDeposit: {
    //   value: 90,
    // },
    // minimumRequired: {
    //   value: 2000
    // },
    monthlyFee: {
      monthlyFee: "0",
      min: "0",
      max: "7",
      minValue: "0.2",
      maxValue: "0.3",
    },
    apy: {
      apy: null,
      min: "0",
      max: "7",
      minValue: "0.01",
      maxValue: "0.05",
    },

    apyMin: {
      apyMin: "0.01",
      min: "0",
      max: "95",
      minValue: "1.1",
      maxValue: "2.85",
    },

    additional: [],
  },
];
