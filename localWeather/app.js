
//This needs to finish before we start the fetch. How??? Put everything in one giant function and use async/await?
navigator.geolocation.getCurrentPosition(function(position) {
    // do_something(position.coords.latitude, position.coords.longitude);
    let latitude = (position.coords.latitude).toFixed(3);
    let longitude = (position.coords.longitude).toFixed(3);
    let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
  });


  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.weather[0].main);
    console.log(data.main.temp);
    console.log(data.name, data.sys.country);
  })

  //Use .innerText to display this Promise info on the page

  //Catch errors