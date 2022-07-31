function Main(input) {
  let [n, ...queries] = spBrToArr(input);
  queries.pop();
  
  let pairs = {};
  queries.forEach(query => {
    Array.isArray(pairs[query[0]]) ? pairs[query[0]].push(query[1]): pairs[query[0]] = [query[1]];
    Array.isArray(pairs[query[1]]) ? pairs[query[1]].push(query[0]): pairs[query[1]] = [query[0]];
  })
  
  let triangle = [];
  Object.keys(pairs).forEach(key => {
    if (pairs[key].length >= 2) {
      pairs[key].forEach(secondKey => {
        pairs[secondKey].forEach(lastKey => {
          if (pairs[lastKey].includes(key)) triangle.push([key, secondKey, lastKey].sort((a, b) => a-b).toString());
        })
      })
    }
  });
  const ans = uniqueSet(triangle);
  console.log(ans.size);
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