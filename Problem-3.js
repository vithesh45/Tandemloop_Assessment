let a = 6; // input
let limit;

if (a % 2 === 0) {
  limit = a - 1; // if even, take previous number
} else {
  limit = a;     // if odd, take the same number
}

let count = Math.ceil(limit / 2); // how many odd numbers to print
let result = "";

for (let i = 1; i <= count; i++) {
  result += (2 * i - 1); // odd number formula
  if (i !== count) {
    result += ", ";
  }
}

console.log(result);