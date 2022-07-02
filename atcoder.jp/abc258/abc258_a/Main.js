function Main(input) {
  input = input.trim();
  const initial = new Date(2022, 6, 12, 21, 00);
  const result = new Date(initial.getTime() + parseInt(input, 10)*60000);
  console.log(`${result.getHours()}:${result.getMinutes().toString().padStart(2, "0")}`);
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));