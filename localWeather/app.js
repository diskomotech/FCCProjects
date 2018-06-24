const button = document.getElementById('locate');
let celsius;

button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = (position.coords.latitude).toFixed(3);
    let longitude = (position.coords.longitude).toFixed(3);
    let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
    
    (function apiCall () {
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const locationDiv = document.querySelector('.location');
        const weatherDiv = document.querySelector('.weather');
        let div = document.createElement('div');
        
        locationDiv.innerText = `${data.name} ${data.sys.country}`;

        div.className = "temp";
        celsius = Math.round(data.main.temp);
        div.innerHTML = '<p>' + celsius + '°<a href="#" onclick="return false;">C</a></p>';
        locationDiv.after(div);

        //Do something here to display different icon depending on the weather
        weatherDiv.innerText = data.weather[0].main;
        
      })
      .then(() => {
        let temperature = document.querySelector(".temp");
        let fahrenheit = Math.round(celsius * 1.8) + 32;

        temperature.addEventListener('click', () => {
          if (temperature.innerText.includes('°C')) {
            temperature.innerHTML = '<p>' + fahrenheit + '°<a href="#" onclick="return false;">F</a></p>';
          }
          else {
            temperature.innerHTML = '<p>' + celsius + '°<a href="#" onclick="return false;">C</a></p>';
          }
        })
      })
      .catch(err => console.log('ughhhh fix it!', err));
    })();
  })
})