function Main(input) {
  const [_nm, ...edge] = spBrToArr(input);
  edge.pop();
  let data = {};
  edge.forEach(v => {
    if (Array.isArray(data[v[0]])) {
      data[v[0]].push(v[1])
    } else {
      data[v[0]] = [v[1]];
    }
    if (Array.isArray(data[v[1]])) {
      data[v[1]].push(v[0])
    } else {
      data[v[1]] = [v[0]];
    }
  });
  let count = 0;
  for (let key in data) {
    key = parseInt(key, 10);
    data[key].push(key)
    const arr = data[key].sort((a, b) => a - b);
    if (arr[1] === key) {
      count++
    }
  }
  console.log(count);
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