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
            const headings = data[1];
            const abstract = data[2];
            const wikiLink = data[3];

            data.forEach((value) => {
                html += `<div class = 'wikiEntries'>`;
                data[1].forEach((heading) => { html += `<h3>${heading}</h3>` });
                data[2].forEach((abstract) => { html += `<p>${abstract}</p></div>`})
                resultsBox.innerHTML = html;
              });
        })     
    }
        // window.open(`https://en.wikipedia.org/wiki/${searchText}`);
});