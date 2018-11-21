const randomText = document.querySelector('#random');
const searchBox = document.querySelector('#searchBox');
const searchText = document.querySelector('#searchText');
const resultsBox = document.querySelector('.resultsBox');
const magnifyIcon = document.querySelector('#magnifyIcon');
const cancelButton = document.querySelector('#cancel');
let html = '';

// Random Wiki article feature
randomText.addEventListener('click', () => {
  window.open('https://en.wikipedia.org/wiki/Special:Random');
});

// Press magnifying glass icon to reveal search box
magnifyIcon.addEventListener('click', () => {
  searchBox.style.display = 'inline';
  cancelButton.style.display = 'inline';
  magnifyIcon.style.display = 'none';
  searchText.style.display = 'none';
});

// Listen for Enter keypress in search box
searchBox.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    // Save inputted text in variable
    const textSearch = searchBox.value;

    // Compile Wiki page url
    const searchUrl = `https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=${textSearch}&limit=8`;

    // Fetch Wiki API data and convert to JSON
    fetch(searchUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
        });
      })
      .then((data) => {      
        data[1].forEach((item, index) => {
          html += '<div class = \'wikiEntries transitionFX\'>';
          html += `<a href="${data[3][index]}" target="_blank">${data[1][index]}</a>`;
          html += `<p>${data[2][index]}</p></div>`;
          resultsBox.innerHTML = html;
        });
      })
      .catch(err => new Error(`Error is ${err}`));
    // Reset html variable
    html = '';
  }
});

// Reset everything back to the way it was
cancelButton.addEventListener('click', () => {
  resultsBox.innerHTML = '';
  searchBox.style.display = 'none';
  searchBox.value = '';
  cancelButton.style.display = 'none';
  magnifyIcon.style.display = 'inline';
  searchText.style.display = 'inline';
});
