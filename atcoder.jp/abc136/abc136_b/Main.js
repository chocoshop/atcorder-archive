function Main(input) {
  let n = parseInt(input.trim(), 10);
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i.toString().length % 2 != 0) ans++
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));