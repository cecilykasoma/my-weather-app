//javascript for weather
//testing github branches
// display current day and time
let currentDate = document.querySelector("#current-date");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function addZero(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}
let day = days[now.getDay()];
let hours = addZero(now.getHours());
let minutes = addZero(now.getMinutes());
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

// // to change from celcius to farenheit
// function farenheit(event) {
//   event.preventDefault();
//   let currentTempF = document.querySelector("#current-temp");
//   currentTempF.innerHTML = 66;
// }

// let handleClick = document.querySelector("#farenheight");
// handleClick.addEventListener("click", farenheit);

// function celcius(event) {
//   event.preventDefault();
//   let currentTempC = document.querySelector("#current-temp");
//   currentTempC.innerHTML = 12;
// }
// let runClick = document.querySelector("#celcius");
// runClick.addEventListener("click", celcius);

// add a search engine that returns the name of the city submitted

function getLocation(city) {
  let apiKey = "f40ed1916a487f9b9d24602c83f9b430";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showWeather);
}

function revealLocation(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  getLocation(city);
}
let handleSubmit = document.querySelector(".search-bar");
handleSubmit.addEventListener("submit", revealLocation);

function showWeather(response) {
  console.log(response.data);
  let displayWeather = document.querySelector("#current-temp");
  let temp = Math.round(response.data.main.temp);
  displayWeather.innerHTML = temp;

  let location = response.data.name;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = location;

  let description = response.data.weather[0].description;
  let currentDescription = document.querySelector("#description");
  currentDescription.innerHTML = description;

  let wind = response.data.wind.speed;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `Wind: ${wind}mph`;

  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `Humidity: ${humidity}%`;

  let pressure = response.data.main.pressure;
  let currentPressure = document.querySelector("#pressure");
  currentPressure.innerHTML = `Pressure: ${pressure}mb`;

  let minTemp = response.data.main.temp_min;
  let currentMinTemp = document.querySelector("#min-temp");
  currentMinTemp.innerHTML = `Min. Temp: ${minTemp}°C`;

  let maxTemp = response.data.main.temp_max;
  let currentMaxTemp = document.querySelector("#max-temp");
  currentMaxTemp.innerHTML = `Max. Temp: ${maxTemp}°C`;
}

// current location weather details

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.latitude;
  let apiKey = "f40ed1916a487f9b9d24602c83f9b430";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
navigator.geolocation.getCurrentPosition(showPosition);
