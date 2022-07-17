function Main(input) {
  input = input.split('\n');
  const [n, x, y, z] = input[0].split(' ');
  let math = input[1].split(' ').map((v,i) => {
    return {num: i+1, score: parseInt(v, 10)};
  });

  let eng = input[2].split(' ').map((v,i) => {
    return {num: i+1, score: parseInt(v, 10)};
  });

  let sum = math.map((v, i) => {
    return {num: v.num, score: v.score + eng[i].score};
  });

  math = math.sort((a,b) => b.score - a.score);
  const mathPassed = math.slice(0, x);

  eng = eng.sort((a,b) => b.score - a.score);
  let extra = eng.filter(engV => {
    return mathPassed.every(v => {
      return v.num != engV.num;
    });
  });
  const engPassed = extra.slice(0, y);
  const lastTarget = sum.filter(sumV => {
    const result1 = mathPassed.every(v => {
      return v.num != sumV.num;
    });

    const result2 = engPassed.every(v => {
      return v.num != sumV.num;
    });
    return result1 && result2;
  });
  const lastPassed = lastTarget.sort((a,b) => b.score - a.score).slice(0, z);

  const result = mathPassed.concat(engPassed, lastPassed).sort((a,b) => a.num - b.num);
  result.forEach(v => {
    console.log(v.num);
  });
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));