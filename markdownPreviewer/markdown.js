const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

editor.addEventListener('keypress', () => {
    let editorText = editor.value;
    previewer.innerHTML = editorText;
});