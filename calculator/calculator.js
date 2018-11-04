const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;

        //No dataset attribute so must be number key
        if (!action) {
            console.log('number key!');
        }

          if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log('operator key!');
        }

          if (action === 'decimal') {
            console.log('decimal key!');
        }

          if (action === 'clear') {
            console.log('clear key!');
        }

          if (action === 'calculate') {
            console.log('equal key!');
        }
    }
})