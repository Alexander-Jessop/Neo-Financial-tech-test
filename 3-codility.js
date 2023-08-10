/*
Each transaction specifies the amount and the date it was executed. If the amount is negative (less than 0) then it was a card payment, otherwise it was an incominmg transfer (amount at least 0).

Additionally, there is a fee for having a card. This fee is deducted from the account balance at the end of each month unless there were at least three payments made by card for a total cost of at least 100 within that month. 

Write a function:
    function solution(A, D)

that, given an array A of N integers representing transaction amounts and an array D of N strings representing transaction dates, returns the final balance of the account at the end of the year 2020. Transaction number K (for K within the range [0..N-1] was executed on the date representd by D[K] for amount A[K].)
*/

const A1 = [100, 100, 100, -10];
const D1 = ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"];

const A2 = [180, -50, -25, -25];
const D2 = ["2020-01-01", "2020-12-22", "2020-12-03", "2020-12-29"];

const A3 = [1, -1, 0, -105, 1];
const D3 = [
  "2020-01-31",
  "2020-04-04",
  "2020-04-04",
  "2020-04-14",
  "2020-07-12",
];

const A4 = [100, 100, -10, -20, -30];
const D4 = [
  "2020-01-01",
  "2020-02-01",
  "2020-02-11",
  "2020-02-05",
  "2020-02-08",
];

const A5 = [-60, 60, -40, -20];
const D5 = ["2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"];

function solution(A, D) {
  const months = Array.from({ length: 12 }, () => ({
    spent: 0,
    transactions: 0,
    balance: 0,
  }));

  let finalBalance = 0;

  for (let i = 0; i < A.length; i++) {
    const amount = A[i];
    const monthIndex = +D[i].split("-")[1] - 1;

    if (amount < 0) {
      months[monthIndex].spent += amount;
      months[monthIndex].transactions++;
    } else {
      months[monthIndex].balance += amount;
    }
  }

  for (let month of months) {
    let { spent, transactions, balance } = month;

    balance += spent;

    if (transactions >= 3 && spent <= -100) {
      balance += 5;
    }

    finalBalance += balance - 5;
  }

  return finalBalance;
}

solution(A1, D1); //Expected output: 230
solution(A2, D2); //Expected output: 25
solution(A3, D3); //Expected output: -164
solution(A4, D4); //Expected output: 80
solution(A5, D5); //Expected output: -115
