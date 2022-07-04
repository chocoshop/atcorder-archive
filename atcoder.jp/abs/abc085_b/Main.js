const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [ , ...d] = input.split("\n").map(v => parseInt(v, 10));
 
d.pop();
 
const uniqueRiceCakes = new Set(d);
 
console.log(uniqueRiceCakes.size);