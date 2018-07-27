const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

previewer.innerHTML = marked(toParse);

editor.addEventListener('input', () => previewer.innerHTML = marked(editor.value));