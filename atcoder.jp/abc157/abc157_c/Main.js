function Main(input) {
  let [[n,m], ...queries] = spBrToArr(input);
  queries.pop();
  
  let ans = -1;
  for (let i = 0; i < 1000; i++) {
    if (i.toString().length != n) {
      continue;
    }
    if (solve(i, queries)) {
      ans = i;
      break;
    }
  }
  
  console.log(ans);
}

function solve(n, queries) {
  n = n.toString();
  const a = n.charAt(0);
  const b = n.charAt(1);
  const c = n.charAt(2);
  return queries.every(query => {
    if (query[0] === '1') return a === query[1];
    if (query[0] === '2') return b === query[1];
    if (query[0] === '3') return c === query[1];
  })
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function spInt(input) {
  return input.split(' ').map(v => parseInt(v, 10));
}

function spBr(input) {
  return input.split('\n');
}

function spBrToArr(input) {
  return input.split('\n').map(line => 
    {
    return line.split(' ').map(v => v);
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

function uniqueArr(arr) {
  q = new Set();
  return arr.filter(query => {
    if (q.has(query[0])) return false;
    q.add(query[0]);
    return true;
  }) 
}