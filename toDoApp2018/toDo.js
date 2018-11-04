const ul = document.querySelector('ul');

//Mark item as completed
ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('completed');
    }
});

//Create new to-do list items
textInput.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        //Create new DOM elements to be added to UL
       const li = document.createElement('li');
       const newSpan = document.createElement('span');
       const textInput = document.querySelector('#textInput');

        //Save text input in var
       const newToDoItem = textInput.value;

       //Add (temporary) X delete button to span
       newSpan.innerHTML = `<i class='fa fa-trash'></i>`;

       //Append the LI to UL and add text input
       ul.appendChild(li).append(newSpan, newToDoItem);

       //Clear text input box once everything is done
       textInput.value = '';
    }
});

//Delete list item when trashcan icon clicked
ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'I') {
        e.target.parentNode.parentNode.remove();
    }
});