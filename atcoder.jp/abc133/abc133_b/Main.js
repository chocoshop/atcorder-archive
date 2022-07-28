function Main(input) {
  let [nd, ...vector] = spBrToArr(input);
  let ans = 0;
  for (let i = 0; i < vector.length; i++) {
    for(let k = i + 1; k < vector.length; k++) {
      let base = 0;
      for (let l = 0; l < vector[i].length; l++) {
        base += (vector[i][l] - vector[k][l]) ** 2
      }
      const v = Math.sqrt(base)
      if (Number.isInteger(v)) {
        ans++
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