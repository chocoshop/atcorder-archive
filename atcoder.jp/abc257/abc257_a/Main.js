function Main(input) {
  const [n, x] = input.split(' ').map(v => parseInt(v, 10));
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const result = alphabet.map(char => char.repeat(n));
  console.log(result.join('')[x-1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));