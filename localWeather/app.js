const button = document.getElementById('locate');
const locationDiv = document.querySelector('.location');
const tempDiv = document.querySelector('.temp');
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
        
        //Round number & then add Centigrade clickable element
        tempDiv.innerText = data.main.temp;

        //Do something here to display different icon depending on the weather
        weatherDiv.innerText = data.weather[0].main;
        
      })
      .catch(err => console.log('ughhhh fix it!', err));
    })();
  })
})

  //Use .innerText to display this Promise info on the page

  //Catch errors