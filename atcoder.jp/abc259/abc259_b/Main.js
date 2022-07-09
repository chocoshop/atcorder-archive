function Main(input) {
  input = input.split(' ').map(v => parseInt(v, 10));
  const [x, y, d] = input;
  const radian = d * ( Math.PI / 180 );
  const nSin = Math.sin(radian);
  const nCos = Math.cos(radian);
  const result = [nCos * x - nSin * y, nSin * x + nCos * y];
  console.log(result.join(' '));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));