function Main(input) {
  input = spInt(input);
  const [h1, h2, h3, w1, w2, w3] = input;
  let ans = 0;
  for (let a = 1; a <= 30; a++) {
    for (let b = 1; b <= 30; b++) {
      for (let d = 1; d < 30; d++) {
        for (let e = 1; e <= 30; e++) {
          c = h1 - a - b;
          f = h2 - d - e;
          g = w1 - a - d;
          h = w2 - b - e;
          i = w3 - c - f;
          if (Math.min(c, f, g, h, i) > 0 && g + h + i === h3) ans++
        }
      }
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