function Main(input) {
  let [[a, b, c], [k]] = spBrToArr(input);

  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= k; j++) {
      for (let l = 0; l <= k; l++) {
        let xa = a * 2**i;
        let xb = b * 2**j;
        let xc = c * 2**l;
        if (i + j + l != k) continue;
        if (xa < xb && xb < xc) {
          console.log("Yes");
          return;
        }
      }
    }
  }
  console.log("No");
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