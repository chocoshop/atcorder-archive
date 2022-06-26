function Main(input) {
  input = input.split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  if ((a * b) % 2 === 0) {
    console.log("Even")
  } else {
    console.log("Odd")
  }
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));