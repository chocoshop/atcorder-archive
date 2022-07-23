function Main(input) {
  let [_n, ...scores] = spBr(input);
  for (let i = 0; i < _n; i++) {
    for (let k = 0; k < _n; k++) {
      const cell = scores[i][k];
      const reverseCell = scores[k][i];
      if (cell === "-" || cell === "D") {
        if (cell != reverseCell) {
          console.log("incorrect");
          return;
        }
        continue;
      }
      if (cell === "W") {
        if (reverseCell != "L") {
          console.log("incorrect");
          return;
        }
        continue;
      }

      if (cell === "L") {
        if (reverseCell != "W") {
          console.log("incorrect");
          return;
        }
      }
    }
  }
  console.log("correct");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));


function spInt(input) {
  return input.split(' ').map(v => parseInt(v, 10));
}

function spBr(input) {
  return input.split('\n');
}

function spBrToArr(input) {
  return input.split('\n').map(line => {
    return line.split(' ').map(v => parseInt(v, 10));
  });
}

function sum(arr) {
  return arr.reduce((p, c) => p + c, 0);
}