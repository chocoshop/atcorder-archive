function Main(input) {
  let arr = input.split('')
  arr.pop();
  let result = -1;
  arr.forEach(v => {
    const pattern = new RegExp(v, "g") ;
    if (input.match(pattern).length === 1) {
      result = v;
      return;
    }
  });
  console.log(result);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));