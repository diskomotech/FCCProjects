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
let output;

function displayStuff () {
    display.innerHTML = input;
}

one.addEventListener("click", () => {
    input = input + "1";
    displayStuff();
});

two.addEventListener("click", () => {
    input = input + "2";
    displayStuff();
});

three.addEventListener("click", () => {
    input = input + "3";
    displayStuff();
});

four.addEventListener("click", () => {
    input = input + "4";
    displayStuff();
});

five.addEventListener("click", () => {
    input = input + "5";
    displayStuff();
});

six.addEventListener("click", () => {
    input = input + "6";
    displayStuff();
});

seven.addEventListener("click", () => {
    input = input + "7";
    displayStuff();
});

eight.addEventListener("click", () => {
    input = input + "8";
    displayStuff();
});

nine.addEventListener("click", () => {
    input = input + "9";
    displayStuff();
});

zero.addEventListener("click", () => {
    let last = input.split("").pop();
    if (last !== "0") {
        input = input + "0";
        displayStuff();
    }
});

add.addEventListener("click", () => {
    input = input + "+";
    displayStuff();
});

subtract.addEventListener("click", () => {
    input = input + "-";
    displayStuff();
});

multiply.addEventListener("click", () => {
    input = input + "*";
    displayStuff();
});

divide.addEventListener("click", () => {
    input = input + "/";
    displayStuff();
});

decimal.addEventListener("click", () => {
    let last = input.split("").pop();
    if (last !== ".") {
        input = input + ".";
        displayStuff();
    }
});

equals.addEventListener("click", () => {
    output = (mathFromString(input));
    input = output;
    displayStuff();
});

clear.addEventListener("click", () => {
    input = "";
    output = "";
    display.innerHTML = 0;
});