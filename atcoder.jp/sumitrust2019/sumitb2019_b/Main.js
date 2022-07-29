function Main(input) {
  let x = parseInt(input.trim());
  let ans = ':(';
  for (let i = 1; i < 50000; i++) {
    if (Math.floor(i * 1.08) === x) {
      console.log(i);
      return;
    }
  }
  console.log(ans);
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

function uniqueSet(arr) {
  let set = new Set();
  arr.forEach(v => {
    set.add(v);
  });
  return set;
}