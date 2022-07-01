function Main(input) {
  input = input.trim();
  const matched = input.match(/^(dream|dreamer|erase|eraser)*$/);
  if (matched) {
    console.log('YES');
    return;
  }
  console.log('NO');
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));