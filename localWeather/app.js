const button = document.getElementById('locate');
let celsius;

button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = (position.coords.latitude).toFixed(3);
    const longitude = (position.coords.longitude).toFixed(3);
    const url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
    
    (function apiCall () {
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const locationDiv = document.querySelector('.location');
        const weatherDiv = document.querySelector('.weather');
        const div = document.createElement('div');
        
        locationDiv.innerText = `${data.name} ${data.sys.country}`;

        div.className = 'temp';
        celsius = Math.round(data.main.temp);
        div.innerHTML = `<p>${celsius}°<a href='#' onclick='return false;'>C</a></p>`;
        locationDiv.after(div);

        //Do something here to display different icon depending on the weather
        weatherDiv.innerText = data.weather[0].main;

        if (weatherDiv.innerText === 'Clouds') {
          document.querySelector('#cloudy').classList.toggle('iconVisible');
        }

        if (weatherDiv.innerText === 'Sunny' || weatherDiv.innerText === 'Clear') {
          document.querySelector('#sunny').classList.toggle('iconVisible');
        }

        if (weatherDiv.innerText === 'Thunderstorm') {
          document.querySelector('#stormy').classList.toggle('iconVisible');
        }

        if (weatherDiv.innerText === 'Snow') {
          document.querySelector('#snow').classList.toggle('iconVisible');
        }

        if (weatherDiv.innerText === 'Rain') {
          document.querySelector('#rainy').classList.toggle('iconVisible');
        }    
      })
      .then(() => {
        const temperature = document.querySelector('.temp');
        const fahrenheit = Math.round(celsius * 1.8) + 32;

        temperature.addEventListener('click', () => {
          if (temperature.innerText.includes('°C')) {
            temperature.innerHTML = `<p>${fahrenheit}°<a href='#' onclick='return false;'>F</a></p>`;
          }
          else {
            temperature.innerHTML = `<p>${celsius} °<a href='#' onclick='return false;'>C</a></p>`;
          }
        })
      })
      .catch(err => console.log('Error is ', err));
    })();
  })
})