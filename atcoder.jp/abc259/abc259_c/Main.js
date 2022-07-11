function Main(input) {
  input = input.trim().split('\n');
  const [S, T] = input;
  const a = rle(S);
  const b = rle(T);
  if (a.length != b.length) {
    console.log("No");
    return;
  }

  const result = a.every((obj, i) => {
    const key = Object.keys(obj)[0];
    if (Object.keys(obj)[0] != Object.keys(b[i])[0]) {
      return false;
    }
    if (obj[key] === 1) {
      if (b[i][key] != 1) {
        return false;
      }
    } else {
      if (b[i][key] < obj[key]) {
        return false;
      }
    }
    return true;
  })
  console.log(result ? "Yes": "No");
}


function rle(s) {
  const result = []; // [{"a": 1}, ...]
  for (let i = 0; i < s.length; i++) {
    const current = s.charAt(i);
    if (result.length > 0 && Object.keys(result[result.length - 1])[0] === current) {
      result[result.length - 1][current] += 1;
    } else {
      const obj = {};
      obj[current] = 1;
      result.push(obj);
    }
  }
  return result;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));