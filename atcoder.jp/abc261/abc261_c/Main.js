function Main(input) {
  const [_n, ...s] = spBr(input);
  let counts = {};
  for(const char of s) {
    counts[char] = Number.isInteger(counts[char]) ? counts[char] + 1 : 0;
    if (counts[char] === 0) {
      console.log(char);
      continue;
    }
    console.log(`${char}(${counts[char]})`);
  }
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