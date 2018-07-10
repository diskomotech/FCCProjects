const randomText = document.querySelector('#random');
const randomUrl = 'https://en.wikipedia.org/wiki/Special:Random';
const searchBox = document.querySelector('#searchBox');
const resultsBox = document.querySelector('.resultsBox');
let html = '';

//Random Wiki article feature
randomText.addEventListener('click', () => {
    window.open(randomUrl);
});

//Listen for Enter keypress in search box
searchBox.addEventListener('keypress', (event) => {
    if (event.which === 13) {
        //Save inputted text in variable
        let searchText = searchBox.value;

        //Compile Wiki page url
        let searchUrl = `https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=${searchText}&limit=6`
        
        //Fetch Wiki API data and convert to JSON
        fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (let i = 0; i < data[1].length; i++) {
                html += `<div class = 'wikiEntries'>`;
                html += `<a href="${data[3][i]}" target="_blank">${data[1][i]}</a>`
                html += `<p>${data[2][i]}</p></div>`;
                resultsBox.innerHTML = html;
            }
        })     
    }
});