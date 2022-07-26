function Main(input) {
  input = spBr(input);
  let [n, s, weights] = input;
  let ans = 0;
  
  weights = weights.split(' ')
  s = s.split('').map((v, i) => {
    if (v === '1') ans++;
    return [weights[i], v]; // [体重, 大人、子供]
  }).sort((a, b) => parseInt(a[0]) - parseInt(b[0])); // 体重でソート

  let count = ans;
  for (let i = 0; i < n; i++) {
    if (s[i][1] === '1') {
      count--;
    } else {
      count++;
    }
    if (i < n - 1) {
      if (s[i][0] != s[i + 1][0]) {
        ans = Math.max(count, ans);
      }
      // 同じ体重の場合は同じ基準値で処理する
      //  do nothing
    } else {
      ans = Math.max(count, ans);
    }
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function spInt(input) {
  return input.split(' ').map(v => parseInt(v, 10));
}

function spBr(input) {
  return input.split('\n');
}

// function spBrToArr(input) {
//   return input.split('\n').map(line => {
//     return line.split(' ').map(v => parseInt(v, 10));
//   });
// }
function spBrToArr(input) {
  return input.split('\n').map(line => {
    return line.split(' ').map(v => v);
  });
}

function sum(arr) {
  return arr.reduce((p, c) => p + c, 0);
}