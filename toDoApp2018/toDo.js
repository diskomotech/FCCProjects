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
        //Save text input in var
       newToDoItem = textInput.value;
       
       //Create new DOM element to be added to UL
       let li = document.createElement("li");
       
       //Append the LI to UL and add text input
       ul.appendChild(li).append(newToDoItem);

    }
});