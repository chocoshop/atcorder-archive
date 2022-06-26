function Main(input) {
  input = input.split('\n');
  const row2 = input[1].split(' ');
  const a = Number(input[0]);
  const b = Number(row2[0]);
  const c = Number(row2[1]);
  console.log(`${a + b + c} ${input[2]}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));