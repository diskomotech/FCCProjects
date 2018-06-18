//Add button to be pressed to activate geolocation

const button = document.getElementById('locate');

  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = (position.coords.latitude).toFixed(3);
    let longitude = (position.coords.longitude).toFixed(3);
    let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
    
    let apiCall = function () {
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.weather[0].main);
        console.log(data.main.temp);
        console.log(data.name, data.sys.country);
      })
      .catch(err => console.log('ughhhh fix it!', err));
    }
  })

  //Use .innerText to display this Promise info on the page

  //Catch errors