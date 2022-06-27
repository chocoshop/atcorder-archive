function Main(input) {
  input = input.split('');
  const result = input.filter(v => {
    const num = parseInt(v, 10);
    if (num === 1) {
      return true
    }
      return false
  });
  console.log(result.length)
  
  
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));