const randomText = document.querySelector('#random');
const randomUrl = 'https://en.wikipedia.org/wiki/Special:Random';
const searchBox = document.querySelector('#searchBox');

randomText.addEventListener('click', () => {
    window.open(randomUrl);
});

searchBox.addEventListener('keypress', (event) => {
    if (event.which === 13) {
        let searchText = searchBox.value;
        console.log(searchText);
    }
});