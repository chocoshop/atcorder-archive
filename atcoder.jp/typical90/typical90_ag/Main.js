function Main(input) {
  const [h, w] = spInt(input);
  if (h === 1 || w === 1) {
    console.log(h * w);
    return;
  }
  const count = [];
  for (let i = 1; i <= h; i++) {
    if (i % 2 === 0) continue; // 偶数列は必ず0
    count.push(Math.floor((w + 1) / 2));
  }
  console.log(sum(count));
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