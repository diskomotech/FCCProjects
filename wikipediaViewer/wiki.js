const randomText = document.querySelector('#random');
const randomUrl = 'https://en.wikipedia.org/wiki/Special:Random';

randomText.addEventListener('click', () => {
    window.open(randomUrl);
});