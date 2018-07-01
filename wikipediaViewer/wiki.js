const randomText = document.querySelector('#random');
const randomUrl = 'https://en.wikipedia.org/wiki/Special:Random';
const searchBox = document.querySelector('#searchBox');

randomText.addEventListener('click', () => {
    window.open(randomUrl);
});

searchBox.addEventListener('keypress', (event) => {
    if (event.which === 13) {
        let searchText = searchBox.value;
        let searchUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${searchText}&format=jsonfm&formatversion=2`;
        
        fetch(searchUrl, {mode: 'no-cors'})
        .then(((response) => {
            return response.json();
        })
    )}
        // window.open(`https://en.wikipedia.org/wiki/${searchText}`);
});