const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

//Placeholder text displaying in previewer when page loads

// previewer.innerHTML = marked(`${editor.value}`);
previewer.innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');

//Listen for keyboard changes and update previewer window
// editor.addEventListener('input', () => previewer.innerHTML = marked(editor.value));