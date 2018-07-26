const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

//Placeholder text displaying in previewer when page loads
previewer.innerHTML = marked(editor.value);

//Listen for keyboard changes and update previewer window
editor.addEventListener('input', () => previewer.innerHTML = marked(editor.value));