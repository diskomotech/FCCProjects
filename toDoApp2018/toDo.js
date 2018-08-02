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
       //Need to find a way to target last node and then add new node after it
       let li = document.createElement("li");

       ul.appendChild(li).append(newToDoItem);

    //    let arr = [].slice.call(ul);
    //    let lastNode = ul.length;
    }
});