const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

const markedUp = '# Marked in the browser\n\nRendered by **markedddddd**.'
// let myMarkUp = editor.value;
let myMarkUp = "# Welcome to my Markdown Previewer! \n## This is a sub-heading... \n### And here's some other cool stuff";

//Placeholder text displaying in previewer when page loads

// previewer.innerHTML = marked(`${editor.value}`);
previewer.innerHTML = marked(myMarkUp);

//Listen for keyboard changes and update previewer window
// editor.addEventListener('input', () => previewer.innerHTML = marked(editor.value));