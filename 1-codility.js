/*
Write a function:
    function solution(A)

that, given an array A consisting of N intergers, returns the sum of all integers
which are multipes of 4:
*/

const A = [-6, -91, 1011, -100, 84, -22, 0, 1, 473];
const B = [12, -8, 7, 16, 20, -4, 5, 0, -24, 32];

function solution(A) {
  let total = 0;

  A.forEach((int) => {
    if (int % 4 === 0) {
      total += int;
    }
  });

  return total;
}

solution(A); // Expected output: -16
solution(B); // Expected output: 44
