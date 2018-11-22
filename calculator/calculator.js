const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');
let inputted;

keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // No dataset attribute so must be number key
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      calculator.dataset.previousKeyType = 'operator';
    }

    if (action === 'decimal') {
      display.textContent = `${displayedNum}.`;
    }

    if (action === 'clear') {
      console.log('clear key!');
    }

    if (action === 'calculate') {
      console.log('equal key!');
    }
  }
});
