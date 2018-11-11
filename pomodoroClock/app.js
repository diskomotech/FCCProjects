const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked () {
    console.log(this.dataset.action);
}