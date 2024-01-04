const apiKey = "36e71ec963c2509d77f4a0ce1d43e00c";
let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${apiKey}&q=`;

let input = document.querySelector("input");
let searchBtn = document.querySelector(".search-btn");
let temp = document.querySelector(".temp");
let searchCity = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");
searchBtn.addEventListener("click", async () => {
  let city = input.value;
  let weatherData = await getData(city);
  temp.innerText = `${Math.floor(weatherData.main.temp)} °C`;
  searchCity.innerText = weatherData.name;
  humidity.innerText = `${weatherData.main.humidity} %`;
  wind.innerText = `${Math.floor(weatherData.wind.speed * 10)} Km/h`;
  if (weatherData.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weatherData.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherData.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherData.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (weatherData.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weatherData.weather[0].main === "Snow") {
    weatherIcon.src = "images/rain.png";
  }
  document.querySelector(".weather").style.display = "block";
});
async function getData(city) {
  try {
    let res = await axios.get(url + city);
    return res.data;
  } catch (err) {
    return `No Data found ${err}`;
  }
}
