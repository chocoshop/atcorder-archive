function Main(input) {
  let [q, ...queries] = spBrToArr(input);
  queries.pop();
  let deck = [];
  let result = [];
  queries.forEach(query => {
    if (query[0] === 1) {
      deck.unshift(query[1]);
      return;
    }
    if (query[0] === 2) {
      deck.push(query[1]);
      return;
    }
    if (query[0] === 3) {
      return result.push(deck[query[1] -1]);
    }
  });
  console.log(result.join(' '));
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