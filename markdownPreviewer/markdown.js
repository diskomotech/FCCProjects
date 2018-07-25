const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

editor.addEventListener('input', () => {
    let editorText = editor.value;
    previewer.innerHTML = editorText;
});