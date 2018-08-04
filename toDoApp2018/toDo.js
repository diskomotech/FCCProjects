const ul = document.querySelector("ul");
const textInput = document.querySelector("#textInput");
let newToDoItem = "";

ul.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("completed");
    }
});

textInput.addEventListener("keypress", (event) => {
    if (event.which === 13) {
        //Create new DOM elements to be added to UL
       const li = document.createElement("li");
       const newSpan = document.createElement("span");

        //Save text input in var
       newToDoItem = textInput.value;

       //Add (temporary) X delete button to span
       newSpan.append("X ");

       //Append the LI to UL and add text input
       ul.appendChild(li).append(newSpan, newToDoItem);

       //Clear text input box once everything is done
       textInput.value = "";
    }
});

ul.addEventListener("click", (event) => {
    if (event.target.tagName == "SPAN") {
        console.log("Working");
    }
});