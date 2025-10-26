let a = 5; // input
let result = "";
for (let i = 0; i < a; i++) {
    result += (2 * i + 1);
    if (i !== a - 1) {
        result += ", ";
    }
}
console.log(result);