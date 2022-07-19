function Main(input) {
  input = input.split('\n');
  const [n] = input[0].split(' ').map(v => parseInt(v, 10));
  let pieces = {};
  input[1].split(' ').forEach((v, i) => {
    pieces[i+1] = parseInt(v, 10);
  });
  const queries = input[2].split(' ');
  let squares = Array(n).fill(false);
  input[1].split(' ').forEach(v => {
    squares[parseInt(v - 1)] = true;
  })
  queries.forEach(query => {
    query = parseInt(query, 10);
    if (pieces[query] === n) return; // コマがあるマスが一番右の場合
    if (squares[pieces[query]] === false) { // 右のマスにコマがない
      pieces[query] += 1; // コマの位置をずらす
      squares[pieces[query] - 1] = true; // 対象のマスをコマありにする
      squares[pieces[query] - 2] = false; // 元のマスをコマなしにする
    }
  });
  console.log(Object.values(pieces).join(' '));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));