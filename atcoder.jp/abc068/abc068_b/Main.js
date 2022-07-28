function Main(input) {
  let n = parseInt(input.trim(), 10);
  let count = 0;
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    const v = solve(i);
    if (v > count) {
      ans = i;
      count = v;
    }
  }
  console.log(ans);
}

function solve(n, count = 0) {
  if (n % 2 === 0) return solve(n / 2, ++count);
  return count;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));