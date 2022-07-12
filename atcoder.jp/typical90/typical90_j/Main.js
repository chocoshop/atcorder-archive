function Main(input) {
  input = input.split('\n');
  input.pop();
  const students = parseInt(input[0], 10);
  const scores = input.slice(1, students + 1);
  const queries = input.slice(students + 1);
  const firstClassSum = new Array(students + 1).fill(0);
  const secondClassSum = new Array(students + 1).fill(0);
  for(let i = 1; i <= students; i++) {
    let [classNum, score] = scores[i - 1].split(' ');
    score = parseInt(score, 10);
    if (classNum === "1") {
      firstClassSum[i] = firstClassSum[i - 1] + score;
      secondClassSum[i] = secondClassSum[i - 1];
    } else {
      secondClassSum[i] += secondClassSum[i -1] + score;
      firstClassSum[i] = firstClassSum[i - 1];
    }
  }
  for (let i = 0; i < parseInt(queries[0], 10); i++) {
    const query = queries[i + 1].split(' ');
    const start = query[0];
    const end = query[1];
    console.log(firstClassSum[end] - firstClassSum[start -1], secondClassSum[end] - secondClassSum[start -1]);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));