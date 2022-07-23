function Main(input) {
  let [n, k] = input.split(' ');
  n = BigInt("0o" + n); // 桁が大きい場合にparseIntだと正値にならない可能性があるので文字列
  k = parseInt(k, 10);

  if (n === 0) {
    console.log(0);
    return;
  }

  let result = n;
  for (let i = 0; i < k; i++) {
    let tmp = result.toString(9).replace(/8/g, "5");
    result = BigInt("0o" + tmp);
  }
  console.log(result.toString(8));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));