// const clear = document.querySelector("#clear");
// const divide = document.querySelector("#divide");
// const multiply = document.querySelector("#multiply");
// const subtract = document.querySelector("#subtract");
// const add = document.querySelector("#add");
// const equals = document.querySelector("#equals");
// const decimal = document.querySelector("#decimal");
// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
// const display = document.querySelector("#display");
// const decimalRegex = /\.[^.]*$/;
// const operatorRegex = /[+-/*]/g;
// let input = "";
// let output;

// function displayStuff () {
//     display.innerHTML = input;
// }

// function roundAnswer(x) {
//     if (x % 1 != 0) {
//         return Number.parseFloat(x).toFixed(5);
//     }
//     else {
//         return x;
//     }
//   }

// function consecutiveOperators(inputted, operator) {
//     if (inputted.slice(-2).match(operatorRegex) !== null) {  
//         input = inputted.slice(0, inputted.length-1) + inputted.slice(-1);
//     }
//     else {
//       input = input + operator;
//     }
// }

// //NOT COMPLETED!! Main issue is still how to search for any of +-/* and not just one at a time but this is a good start
// function decimalSearch(operator) {
//     let tempInput = input;
//     let i = tempInput.lastIndexOf(operator);

//     if (i !== -1) {
//       temptInput = tempInput.slice(i+1);
//       if (tempInput.match(decimalRegex)) {
//         return;
//     }
//     else {
//       input = input + operator;
//     }
//   }
// } 

// one.addEventListener("click", () => {
//     input = input + "1";
//     displayStuff();
// });

// two.addEventListener("click", () => {
//     input = input + "2";
//     displayStuff();
// });

// three.addEventListener("click", () => {
//     input = input + "3";
//     displayStuff();
// });

// four.addEventListener("click", () => {
//     input = input + "4";
//     displayStuff();
// });

// five.addEventListener("click", () => {
//     input = input + "5";
//     displayStuff();
// });

// six.addEventListener("click", () => {
//     input = input + "6";
//     displayStuff();
// });

// seven.addEventListener("click", () => {
//     input = input + "7";
//     displayStuff();
// });

// eight.addEventListener("click", () => {
//     input = input + "8";
//     displayStuff();
// });

// nine.addEventListener("click", () => {
//     input = input + "9";
//     displayStuff();
// });

// zero.addEventListener("click", () => {
//     //This needs fixing. Currently can't enter '100'
//     let last = input.split("").pop();
//     if (last !== "0" || input.match(decimalRegex) !== null) {
//         input = input + "0";
//         displayStuff();
//     }
// });

// add.addEventListener("click", () => {
//     consecutiveOperators(input, "+");
//     displayStuff();
// });

// subtract.addEventListener("click", () => {
//     consecutiveOperators(input, "-");
//     displayStuff();
// });

// multiply.addEventListener("click", () => {
//     consecutiveOperators(input, "*");
//     displayStuff();
// });

// divide.addEventListener("click", () => {
//     consecutiveOperators(input, "/");
//     displayStuff();
// });

// decimal.addEventListener("click", () => {
//     let last = input.slice(-1);
    
//     //If last digit entered was a decimal, stop user entering another decimal straight away
//     if (last === ".") {
//         return;
//     }

//     //This largely works but only solves half of the problem. 
//     if (input.match(operatorRegex) === null) {
//         if (input.match(decimalRegex) !== null) {
//             return;
//         }
//         else {
//             input = input + ".";
//             displayStuff();
//         }
//     }
//     else {
//         input = input + ".";
//         displayStuff();
//     }
// });

// equals.addEventListener("click", () => {
//     input = roundAnswer(mathFromString(input));
//     displayStuff();
// });

// clear.addEventListener("click", () => {
//     input = "";
//     display.innerHTML = 0;
// });





const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display');

//We can use an event delegation pattern to listen, since keys are all children of .calculator__keys.
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        
        const calculate = (n1, operator, n2) => {
            let result = '';
            if (operator === 'add') {
                result = parseFloat(parseFloat(n1)) + parseFloat(n2);
            } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }

            return result;
        };

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            }
            //If the calculator shows a non-zero number, we want to append the clicked key to the displayed number.
            else {
                display.textContent = displayedNum + keyContent;
            }
          }          
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            key.classList.add('is-depressed');
            //Add custom attribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }
          if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
          }
          if (action === 'clear') {
            console.log('clear key!');
          }
          if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
          }

        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    }
});