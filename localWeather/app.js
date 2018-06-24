const button = document.getElementById('locate');
const locationDiv = document.querySelector('.location');
// const tempDiv = document.querySelector('.temp');
const weatherDiv = document.querySelector('.weather');

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
        locationDiv.innerText = `${data.name} ${data.sys.country}`;

        let div = document.createElement('div');
        div.className = "temp";
        div.innerHTML = '<p>' + Math.round(data.main.temp) + '°<a href="#" onclick="return false;">C</a></p>';
        locationDiv.after(div);

        //Do something here to display different icon depending on the weather
        weatherDiv.innerText = data.weather[0].main;
        
      })
      .catch(err => console.log('ughhhh fix it!', err));
    })();
  })

  // document.querySelector(".temp").addEventListener('click', () => console.log('it worked'));
})