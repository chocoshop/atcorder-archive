function Main(input) {
  input = input.split('\n');
  input.pop();
  const R = parseInt(input[0].split(' ')[0], 10);
  const C = parseInt(input[0].split(' ')[1], 10);
  input.shift();
  const columns = new Array(C).fill(null).map(() => new Array(0));
  const rows = input.map(v => {
    const row = v.split(' ');
    return row.map((v, i) => {
      const num = parseInt(v, 10);
      columns[i].push(num);
      return num;
    });
  });

  const result = new Array(R).fill(null).map(() => new Array(0));
  const columnSum = columns.map(c => sum(c))
  const rowSum = rows.map(r => sum(r));
  rows.forEach((row, ri) => {
    row.forEach((v, i) => {
      result[ri].push(rowSum[ri] + columnSum[i] - v);
    });
    console.log(result[ri].join(' '));
  });
}

function sum(arr) {
  return arr.reduce((pre, curr) => (
    pre + curr
  ), 0);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));