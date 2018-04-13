// Insert your actual API request URL below
fetch('http://api.openweathermap.org/data/2.5/weather?zip=10475&APPID=b6758b1e12278280b026653eff3e9761&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

// RENDER FUNCTION SET UP
//-----------------------

var tempSpan = document.querySelector('.temperature')
var windSpeedSpan = document.querySelector('.wind-speed')
var windDirectionSpan = document.querySelector('.wind-direction')
var windVaneWrapper = document.querySelector('.wind-vane-wrapper')
var windVane = document.querySelector('.wind-vane')

function render (data) {
  console.log('render');

  // log the data in its entirety
  console.log(data);

  // log & insert the current temperature
  console.log(data.main.temp);
  tempSpan.innerText = data.main.temp

  // log & insert the current wind speed
  console.log(data.wind.speed)
  windSpeedSpan.innerText = data.wind.speed

  // log & insert the current wind direction speed
  console.log(data.wind.deg)
  windDirectionSpan.innerText = data.wind.deg

  // set background color based on temperature
  document.body.style.backgroundColor = 'hsl(' + data.wind.deg + ',50%,50%)'

  // rotate the wind vane based on wind direction
  windVaneWrapper.style.transform = 'rotate(' + data.wind.deg + 'deg)'

  // set animation duration of wind vane based on wind speed
  windVane.style.animationDuration = 5 / data.wind.speed + 's'
}
