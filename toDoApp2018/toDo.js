const ul = document.querySelector('ul');
const textInput = document.querySelector("#textInput");
let newToDoItem = "";

ul.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("completed");
    }
});

textInput.addEventListener("keypress", (event) => {
    if (event.which === 13) {
       newToDoItem = textInput.value;
    }
});