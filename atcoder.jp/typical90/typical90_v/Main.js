function Main(input) {
  let [a, b, c] = input.split(' ').map(v => BigInt(v));
  let x = a;
  let y = b;
  if (b > a) {
    x = b;
    y = a;
  }
  const gcd = calc(c, calc(x, y));
  console.log(((a / gcd - BigInt(1)) + (b / gcd - BigInt(1)) + (c / gcd - BigInt(1))).toString());
}

function calc(x, y) {
  if (y === 0 || y === 0n) return x;
  return calc(y, x % y);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));