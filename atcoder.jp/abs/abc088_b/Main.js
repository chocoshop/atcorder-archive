function Main(input) {
  input = input.split('\n');
  const cards = input[1].split(' ').filter(v => !!v).map(v => parseInt(v, 10)).sort((a, b) => a -b).reverse();
  const aliceScore = cards.filter((cardNum, i) => {
    if ((i+1) % 2 != 0) return true;
    return false;
  }).reduce((previous, current) => {
    return previous + current;
  }, 0);

  const bobScore = cards.filter((cardNum, i) => {
    if ((i+1) % 2 === 0) return true;
    return false;
  }).reduce((previous, current) => {
    return previous + current;
  }, 0);

  console.log(aliceScore - bobScore);
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));