function Main(input) {
  input = input.split('\n');
  const a = parseInt(input[0], 10);
  const b = parseInt(input[1], 10);
  const c = parseInt(input[2], 10);
  const x = parseInt(input[3], 10);
  let result = 0;
  for(let ai = 0; ai <= a; ai++) {
    for(let bi = 0; bi <= b; bi++) {
      for(let ci = 0; ci <= c; ci++) {
        const num = ai*500 + bi*100 + ci*50;
        if (num === x) result++;
      }
    }
  }
  console.log(result);
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));