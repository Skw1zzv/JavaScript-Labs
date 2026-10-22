function calculate (a, b, operator) {
    if (operator === "+") return a +b ;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
    return "undefined operator";
}

console.log(calculate(1,2,  "+"));
console.log(calculate(1,2,  "-"));
console.log(calculate(1,2,  "*"));
console.log(calculate(1,2,  "/"));
console.log(calculate(1, 2, "="));

