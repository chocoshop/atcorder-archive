function Main(input) {
  const [l1, r1, l2, r2] = spInt(input);
  const a = [];
  for (let i = l1; i <= r1; i++) {
    a.push(i);
  }
  let result = 0;
  for (let i = l2; i <= r2; i++) {
    if (a.includes(i)) {
      result++;
    }
  }
  if (result === 0) {
    console.log(result);
    return;
  }
  console.log(result-1);
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