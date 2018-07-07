const randomText = document.querySelector('#random');
const randomUrl = 'https://en.wikipedia.org/wiki/Special:Random';
const searchBox = document.querySelector('#searchBox');

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
        let searchUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${searchText}&format=jsonfm&formatversion=2`;
        
        //Fetch Wiki API data and convert to JSON
        fetch(searchUrl, {mode: 'no-cors'})
        .then(((response) => {
            return response.json();
        })
    )}
        // window.open(`https://en.wikipedia.org/wiki/${searchText}`);
});