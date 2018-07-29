const ul = document.querySelector('ul');
const textInput = document.querySelector("#textInput");

ul.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("completed");
    }
});

