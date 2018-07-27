const editor = document.querySelector('#editor');
const previewer = document.querySelector('#preview');

let myMarkUp = "# Welcome to my Markdown Previewer! \n## This is a sub-heading... \n### And here's some other cool stuff";

const text = editor.value;
const match = /\r|\n/.exec(text);
if (match) {
    console.log('Found one');
}

// previewer.innerHTML = marked(editor.value);

// const h1 = '# This is an h1';
// const h2 = '## This is an h2';
// const link = '[links](https://www.freecodecamp.com)';
// const inLineCode = 'Heres some code, `<div></div>`, between 2 backticks.'
// // const codeBlock = "" ```
// //     function anotherExample(firstLine, lastLine) {
// //         if (firstLine == '```' && lastLine == '```') {
// //             return multiLineCode;
// //         }   
// //     }
// // ``` ;
// const list = '- And of course there are lists. - Some are bulleted.  - With different indentation levels. - That look like this.'
// const blockQuote = '> Block Quotes!';
// const bold = 'text **bold**';
// const image = '![React Logo w/ Text](https://goo.gl/Umyytc)';

//Placeholder text displaying in previewer when page loads
// previewer.innerHTML = marked(`${editor.value}`);
// previewer.innerHTML = marked(editor.value);

//Listen for keyboard changes and update previewer window
// editor.addEventListener('input', () => previewer.innerHTML = marked(editor.value));