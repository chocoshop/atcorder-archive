function Main(input) {
  const [n, m, x, t, d] = input.split(' ').map(v => parseInt(v, 10));
  if (n >= m && m >= x) {
    console.log(t);
    return;
  }
  let subYear;
  if (x >= m) {
    subYear = Math.abs(m - x);
  } else {
    subYear = Math.abs(n - m);
  }
  const Grown = t - (d * subYear);
  console.log(Grown);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));