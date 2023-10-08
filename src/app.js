function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}

let apikey = "eof8bfac10t9eefab70e97ba9b3a934b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={johannesburg}&key=eof8bfac10t9eefab70e97ba9b3a934b&units=metric";

axios.get(apiUrl).then(displayTemperature);
