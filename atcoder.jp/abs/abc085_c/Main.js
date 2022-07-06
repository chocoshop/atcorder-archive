function Main(input) {
  input = input.split(' ');
  const n = parseInt(input[0], 10);
  const sum = parseInt(input[1], 10);
  let result;
  loop: for(let x = 0; x <= n; x++) {
    for(let y = 0; y <= n; y++) {
      const z = n - x - y;
      if (z < 0) continue;
      const num = x*10000 + y*5000 + z*1000;
      if (sum === num) {
        result = `${x} ${y} ${z}`;
        break loop;
      }
    }
  }

  result ? console.log(result) : console.log('-1 -1 -1');
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));