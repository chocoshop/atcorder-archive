function Main(input) {
  const n = parseInt(input.trim());
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    if (solve(i)) ans++;
  }
  console.log(ans);
}

function solve(n) {
  if (n % 2 === 0) return false;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 8) return true;
  return false;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));