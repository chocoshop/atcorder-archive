function Main(input) {
  let n = parseInt(input, 10);
  let ans = n;
  for (let i = n; i <= 3002; i++) {
    if (i % 4 === 2) {
      ans = i;
      break;
    }
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));