function Main(input) {
  input = input.split(' ');
  const max = parseInt(input[0], 10);
  const lowest = parseInt(input[1], 10);
  const highest = parseInt(input[2], 10);
  let passed = [];
  for(let i = 1; i <= max; i++) {
    const splitted = i.toString().split('');
    const num = splitted.reduce((previous, current) => {
      return parseInt(previous, 10) + parseInt(current, 10);
    }, 0)
    if (lowest <= num && num <= highest) {
      passed.push(i);
    }
  }
  const sum = passed.reduce((previous, current) => {
    return previous + current;
  },  0)
  console.log(sum);
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));