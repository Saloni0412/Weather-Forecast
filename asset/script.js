let search = document.querySelector(".weather-search");
let searchBtn = document.querySelector(".search");
let clearBtn = document.querySelector(".clear");
let searchCity = document.querySelector(".weather-city");

let date = document.querySelector(".weather-date");
let humidity = document.querySelector(".weather-indicator-humidity>.value");
let wind = document.querySelector(".weather-indicator-wind>.value");
let temperature = document.querySelector(".weather-temp>.value");

let temp1 = document.querySelector(".weather-forecast-temp1>.value");
let date1 = document.querySelector(".weather-forecast-date1");
let humidity1 = document.querySelector(".weather-forecast-humidity1>.value");
let wind1 = document.querySelector(".weather-forecast-wind1>.value");
let Icon1 = document.querySelector(".image-1");

let temp2 = document.querySelector(".weather-forecast-temp2>.value");
let date2 = document.querySelector(".weather-forecast-date2");
let humidity2 = document.querySelector(".weather-forecast-humidity2>.value");
let wind2 = document.querySelector(".weather-forecast-wind2>.value");
let Icon2 = document.querySelector(".image-2");

let temp3 = document.querySelector(".weather-forecast-temp3>.value");
let date3 = document.querySelector(".weather-forecast-date3");
let humidity3 = document.querySelector(".weather-forecast-humidity3>.value");
let wind3 = document.querySelector(".weather-forecast-wind3>.value");
let Icon3 = document.querySelector(".image-3");

let temp4 = document.querySelector(".weather-forecast-temp4>.value");
let date4 = document.querySelector(".weather-forecast-date4");
let humidity4 = document.querySelector(".weather-forecast-humidity4>.value");
let wind4 = document.querySelector(".weather-forecast-wind4>.value");
let Icon4 = document.querySelector(".image-4");

let temp5 = document.querySelector(".weather-forecast-temp5>.value");
let date5 = document.querySelector(".weather-forecast-date5");
let humidity5 = document.querySelector(".weather-forecast-humidity5>.value");
let wind5 = document.querySelector(".weather-forecast-wind5>.value");
let Icon5 = document.querySelector(".image-5");

let mainIcon = document.querySelector(".main-icon");
let list = document.querySelector(".list");

let weatherForecastItems = document.querySelector(".weather-forecast-item");


let apiKey = "b7888d02409b33f95120630fb1218d0b";
let weatherBaseCall = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
let searchHistory = JSON.parse(localStorage.getItem('cities'))
if (!searchHistory) {
  searchHistory = []
}

// function to fetch current weather API and then post data on page
// function to fetch current weather API and then post data on page
function firstFetch(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  ).then((response) => {
    return response.json();
  }).then((currentWeatherData) => {
    // post current weather data
    saveToLocal(currentWeatherData.name);
    searchCity.textContent = currentWeatherData.name;
    date.textContent = dateOfWeek();
    humidity.textContent = currentWeatherData.main.humidity;
    wind.textContent = currentWeatherData.wind.speed;
    temperature.textContent = currentWeatherData.main.temp > 0 ?
      "+" + Math.round(currentWeatherData.main.temp) :
      Math.round(currentWeatherData.main.temp);
    let mainWeatherIcon = currentWeatherData.weather[0].icon;
    let mainWeatherImageUrl = `https://openweathermap.org/img/w/${mainWeatherIcon}.png`;
    mainIcon.src = mainWeatherImageUrl;

    const button = document.createElement("button");
    button.textContent = currentWeatherData.name;
    list.append(button);

    searchHistory = JSON.parse(localStorage.getItem('cities'));
    if (!searchHistory) {
      searchHistory = [];
    }

    if (searchHistory.length > 5) {
      searchHistory.shift(); // Remove the oldest search city if there are more than 5 in the history
    }

    button.addEventListener('click', () => {
      firstFetch(currentWeatherData.name);
      secondFetch(currentWeatherData.name);
    });
  });
}


// function to fetch 5 days weather API and then post data on page
function secondFetch(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  ).then((response) => {
    return response.json()
  }).then((forecastData) => {
    // post next 5 day weather update
    date1.textContent = new Date(forecastData.list[0].dt_txt).toLocaleDateString('en-EN', { "dateStyle": "long" });
    temp1.textContent = forecastData.list[0].main.temp > 0 ?
      "+" + Math.round(forecastData.list[0].main.temp) :
      Math.round(forecastData.list[0].main.temp);
    humidity1.textContent = forecastData.list[0].main.humidity;
    wind1.textContent = forecastData.list[0].wind.speed;
    let ImageUrl1 = `https://openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`;
    Icon1.src = ImageUrl1;

    date2.textContent = new Date(forecastData.list[14].dt_txt).toLocaleDateString('en-EN', { "dateStyle": "long" });
    temp2.textContent = forecastData.list[14].main.temp > 0 ?
      "+" + Math.round(forecastData.list[14].main.temp) :
      Math.round(forecastData.list[14].main.temp);
    humidity2.textContent = forecastData.list[14].main.humidity;
    wind2.textContent = forecastData.list[14].wind.speed;
    let ImageUrl2 = `https://openweathermap.org/img/w/${forecastData.list[14].weather[0].icon}.png`;
    Icon2.src = ImageUrl2;

    date3.textContent = new Date(forecastData.list[21].dt_txt).toLocaleDateString('en-EN', { "dateStyle": "long" });
    temp3.textContent = forecastData.list[21].main.temp > 0 ?
      "+" + Math.round(forecastData.list[21].main.temp) :
      Math.round(forecastData.list[21].main.temp);
    humidity3.textContent = forecastData.list[21].main.humidity;
    wind3.textContent = forecastData.list[21].wind.speed;
    let ImageUrl3 = `https://openweathermap.org/img/w/${forecastData.list[21].weather[0].icon}.png`;
    Icon3.src = ImageUrl3;

    date4.textContent = new Date(forecastData.list[28].dt_txt).toLocaleDateString('en-EN', { "dateStyle": "long" });
    temp4.textContent = forecastData.list[28].main.temp > 0 ?
      "+" + Math.round(forecastData.list[28].main.temp) :
      Math.round(forecastData.list[28].main.temp);
    humidity4.textContent = forecastData.list[28].main.humidity;
    wind4.textContent = forecastData.list[28].wind.speed;
    let ImageUrl4 = `https://openweathermap.org/img/w/${forecastData.list[28].weather[0].icon}.png`;
    Icon4.src = ImageUrl4;

    date5.textContent = new Date(forecastData.list[35].dt_txt).toLocaleDateString('en-EN', { "dateStyle": "long" });
    temp5.textContent = forecastData.list[35].main.temp > 0 ?
      "+" + Math.round(forecastData.list[35].main.temp) :
      Math.round(forecastData.list[35].main.temp);
    humidity5.textContent = forecastData.list[35].main.humidity;
    wind5.textContent = forecastData.list[35].wind.speed;
    let ImageUrl5 = `https://openweathermap.org/img/w/${forecastData.list[35].weather[0].icon}.png`;
    Icon5.src = ImageUrl5;
  })
}

// event listener to search for click
searchBtn.addEventListener('click', (e) => {
  const city = search.value;
  if (city !== '') {
    firstFetch(city)
    secondFetch(city)
  }
})

clearBtn.addEventListener("click", clear);

function clear() {
  console.log("clear");
  localStorage.removeItem('cities');
  list.innerHTML = ''; 
  searchHistory = []; 
}

// function for current date
let dateOfWeek = () => {
  return new Date().toLocaleDateString('en-EN', { "dateStyle": "long" })
}

// function to store searched cities in local storage

function saveToLocal(city) {
  searchHistory.push(city)
  localStorage.setItem('cities', JSON.stringify(searchHistory))
}

searchHistory.forEach((city) => {
  const button = document.createElement("button");
  button.textContent = city;
  button.addEventListener('click', () => {
    firstFetch(city);
    secondFetch(city);
  });
  list.append(button);
});
