"use strict"

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

one.addEventListener("click", () => {
    input = input + "1 ";
    console.log(input);
});

two.addEventListener("click", () => {
    input = input + "2 ";
    console.log(input);
});

three.addEventListener("click", () => {
    input = input + "3 ";
    console.log(input);
});

four.addEventListener("click", () => {
    input = input + "4 ";
    console.log(input);
});

five.addEventListener("click", () => {
    input = input + "5 ";
    console.log(input);
});

six.addEventListener("click", () => {
    input = input + "6 ";
    console.log(input);
});

seven.addEventListener("click", () => {
    input = input + "7 ";
    console.log(input);
});

eight.addEventListener("click", () => {
    input = input + "8 ";
    console.log(input);
});

nine.addEventListener("click", () => {
    input = input + "9 ";
    console.log(input);
});

zero.addEventListener("click", () => {
    input = input + "0 ";
    console.log(input);
});

add.addEventListener("click", () => {
    input = input + "+ ";
    console.log(input);
});

equals.addEventListener("click", () => {
    output = (eval(input));
    console.log(output);
});