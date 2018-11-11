const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked () {
    const dataAttribute = this.dataset.action;
    if (dataAttribute === 'session-increment') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'session-decrement') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'break-increment') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'break-decrement') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'start-stop') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'reset') {
        console.log(dataAttribute);
    }
}