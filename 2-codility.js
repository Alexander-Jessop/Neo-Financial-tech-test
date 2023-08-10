/*
You are given strings S and C. String S represents a table in CSV.

Write a function:
    function solution(S,C)

which given two strings S and C consisting of N and M characters, respectively, returns the maximum value in column C of the table described by S.
*/

const S1 = "id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7";
const C1 = "age";

const S2 = "sicty,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2";
const C2 = "temp";

const S3 = "area,land\n3722,CN\n6612,RU\n3855,CA\n3797,USA";
const C3 = "area";

function solution(S, C) {
  const rows = S.split("\n");
  const title = rows[0].split(",");
  const colIndex = title.indexOf(C);

  let maxInt = -9999;

  for (let i = 1; i < rows.length; i++) {
    const rowValue = rows[i].split(",");
    const currValue = +rowValue[colIndex];

    if (currValue > maxInt) {
      maxInt = currValue;
    }
  }

  return maxInt;
}

solution(S1, C1); // Expected output: 68
solution(S2, C2); // Expected output: -2
solution(S3, C3); // Expected output: 6612
