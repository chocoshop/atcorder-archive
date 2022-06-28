function Main(input) {
  input = input.split('\n');
  let result = 0;
  const count = parseInt(input[0], 10);
  const scores = input[1].split(' ');

  console.log(checkCount(count, scores));
}

function checkCount(count, scores) {
  let result = 0;
  function checkEven(count, scores) {
    let evenNums = scores.flatMap(v => {
      if (parseInt(v, 10) % 2 === 0) {
        return parseInt(v, 10) / 2;
      }
      return [];
    });
    if (count === evenNums.length) {
      result++;
      checkEven(count, evenNums);
    }
  }
  checkEven(count, scores);
  return result;
}
 
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));