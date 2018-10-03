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
const decimalRegex = /[.]/g;
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
    if (last !== "0" || input.match(decimalRegex) !== null) {
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
    let operatorRegex = /[+-/*]/g;
    
    //If last digit entered was a decimal, stop user entering another decimal straight away
    if (last === ".") {
        return;
    }

    //Stop user from entering more than decimal on any side of an operator
    //To do this, search input array for an operator
    //If (operator is not there) {
        //Do we already have a decimal? Yes? Then, prevent another being entered. No? Allow decimal to be entered.
    // }
    // Else if (operator is there) {
        //Do we already have a decimal to the right of the operator? Yes? Then, prevent another being entered. No? Allow decimal to be entered.
   // }

    //This doesn't work. Struggling to make it work right now. Parking the issue for the time being.
     //   if (input.match(operatorRegex) !== null) {
    //I want to break input and just look at the right hand side of the operator
    // let splitInput = input.split("+");   
    // let x = input.indexOf(operatorRegex);
    //     let rightHandSearch = decimalSearch.slice(x);
    //     console.log(x);
    // }

    //This largely works but only solves half of the problem. 
    if (input.match(operatorRegex) === null) {
        if (input.match(decimalRegex) !== null) {
            return;
        }
        else {
            input = input + ".";
            displayStuff();
        }
    }
    else {
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