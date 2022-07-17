function Main(input) {
  [n, x, y] = input.split(' ').map(v => parseInt(v, 10));
  const r = Array(n+1).fill(0);
  const b = Array(n+1).fill(0);
  r[n] = 1;
  for (let i = n; i >= 2; i--) {
    r[i-1] += r[i]; // [...1,1]
    b[i] += r[i]*x; // [...5]

    r[i-1] += b[i]; // [...6,1]
    b[i-1] += b[i]*y; // [...25,5]
  }
  console.log(b[1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));