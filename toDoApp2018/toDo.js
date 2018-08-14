const ul = document.querySelector("ul");

//Mark item as completed
ul.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("completed");
    }
});

//Create new to-do list items
textInput.addEventListener("keypress", (event) => {
    if (event.which === 13) {
        //Create new DOM elements to be added to UL
       const li = document.createElement("li");
       const newSpan = document.createElement("span");
       const textInput = document.querySelector("#textInput");

        //Save text input in var
       let newToDoItem = textInput.value;

       //Add (temporary) X delete button to span
       newSpan.innerHTML = '<i class="fa fa-trash"></i>';

       //Append the LI to UL and add text input
       ul.appendChild(li).append(newSpan, newToDoItem);

       //Clear text input box once everything is done
       textInput.value = "";
    }
});

//Delete list item when trashcan icon clicked
ul.addEventListener("click", (event) => {
    if (event.target.tagName == "I") {
        event.target.parentNode.parentNode.remove();
    }
});