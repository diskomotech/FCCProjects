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

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if (operator === 'add') return firstNum + secondNum;
    if (operator === 'subtract') return firstNum - secondNum;
    if (operator === 'multiply') return firstNum * secondNum;
    if (operator === 'divide') return firstNum / secondNum;
  };

  const getKeyType = (key) => {
    const action = key.dataset;
    if (!action) return 'number';
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') return 'operator';
    return action;
  };

const createResultString = (key, displayedNum, state) => {
    const keyType = getKeyType(key);
    const keyContent = key.textContent;
    const action = key.dataset.action;
    const firstValue = state.firstValue;
    const modValue = state.modValue;
    const operator = state.operator;
    const previousKeyType = state.previousKeyType;

    if (keyType = 'number') {
      return displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
        ? keyContent : displayedNum + keyContent;
    }
    if (keyType === 'decimal') {
        if (!displayedNum.includes('.')) return displayedNum + '.';
        if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
        return displayedNum;
      }
      if (keyType = 'operator') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        return firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'
          ? calculate(firstValue, operator, displayedNum) : displayedNum;
      }
      if (keyType === 'clear') return 0;
      if (keyType === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const modValue = calculator.dataset.modValue;
        if (firstValue) {
          return previousKeyType === 'calculate'
            ? calculate(displayedNum, operator, modValue)
            : calculate(firstValue, operator, displayedNum)
        } else {
          return displayedNum;
        }
      }
  }

  keys.addEventListener('click', e => {
    if (e.target.matches('button')) return
    const key = e.target;
    const displayedNum = display.textContent;
    const resultString = createResultString(e.target, displayedNum, calculator.dataset);
});