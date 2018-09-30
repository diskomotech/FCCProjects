const clear = document.querySelector("#clear");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const display = document.querySelector("#display");
let input = "";

two.addEventListener("click", () => {
    input = input + "2 ";
    console.log(input);
});

add.addEventListener("click", () => {
    input = input + "+ ";
    console.log(input);
});

equals.addEventListener("click", () => {
    console.log(eval(input));
});