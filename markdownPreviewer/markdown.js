const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

previewer.innerHTML = marked(editor.value);

editor.addEventListener('input', () => previewer.innerHTML = marked(editor.value));