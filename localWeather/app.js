let latitude, longitude;

navigator.geolocation.getCurrentPosition(function(position) {
    // do_something(position.coords.latitude, position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("It worked", latitude);
  });

  //Round lat and long up/down into integer

  //Use template literal to put together the url with the long and lat

  fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.weather[0].main);
    console.log(data.main.temp);
    console.log(data.name, data.sys.country);
  })

  //Use .innerText to display this Promise info on the page