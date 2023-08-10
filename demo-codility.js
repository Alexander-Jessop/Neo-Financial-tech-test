/*
Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
*/

const A = [1, 3, 6, 4, 1, 2];
const B = [1, 2, 3];
const C = [-1, -3];

function solution(A) {
  const processed = {};

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      processed[A[i]] = true;
    }
  }

  let lowestInt = 1;
  while (processed[lowestInt]) {
    lowestInt++;
  }

  console.log("lowestInt", lowestInt);
  return lowestInt;
}

solution(A);
solution(B);
solution(C);
