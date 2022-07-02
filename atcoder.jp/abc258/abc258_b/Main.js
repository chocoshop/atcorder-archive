function Main(input) {
  input = input.split('\n');
  // (di, dj)の組み合わせで方向を表現する
  const di = [-1, -1, -1, 0, 0, 1, 1 ,1];
  const dj = [-1, 0, 1, -1, 1, -1, 0 ,1];
  let [n, ...numbers] = input;
  n = parseInt(n, 10);

  let a = numbers.map(number => {
    return number.split('').map(v => parseInt(v, 10));
  });

  let sum = [];
  for(let i = 0; i < n; i++) { // nの数だけ回せば全座標分検証できる
    for(let j = 0; j < n; j++) {
      for(let v = 0; v < 8; v++) { // 移動する方向を検証する 上下斜め8通り
        let now = 0;
        let x = i;
        let y = j;
        for (let l = 0; l < n; l++) { // 試行回数
          now *= 10;
          now+=a[x][y];
          x += di[v];
          y += dj[v];
          // トーラスの関係
          x = (x + n)%n;
          y = (y + n)%n;
        }
        sum.push(now);
      }
    }
  }
  console.log(Math.max(...sum));

}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));