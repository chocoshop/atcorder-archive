function Main(input) {
  const n = Number(input.trim());
  let ans = 'No';

  for(let i = 0; i <= 100; i++) {
    for(let j = 0; j <= 100; j++) {
      if (i * 4 + j * 7 === n) {
        console.log('Yes');
        return;
      }
    } 
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));