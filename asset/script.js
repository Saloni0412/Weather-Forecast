let search = document.querySelector(".weather-search") 
let city = document.querySelector(".weather-city")

let date = document.querySelector(".weather-date")
let humidity = document.querySelector(".weather-indicator-humidity>.value")
let wind = document.querySelector(".weather-indicator-wind>.value")
let pressure = document.querySelector(".weather-indicator-pressure>.value")
let temperature = document.querySelector(".weather-temp>.value")
let weatherForcastItems = document.querySelector(".weather-forecast-item")

let apiKey = "b7888d02409b33f95120630fb1218d0b";
let weatherBaseCall = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
let forecastBaseCall = "https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=" + apiKey;

// function to get current weather details
let weatherByCityName = async (city) => {
let FinalAPI = weatherBaseCall + "&q=" + city;
let response = await fetch(FinalAPI);
let weather = await response.json()
return weather;
}

// // function to gett next 5 days detail
// let forecastByCityName = async (city) => {
//      let finalAPI = forecastBaseCall + "&q=" + city;
//      let response = await fetch(finalAPI);
//      let forecast = await response.json();
//      return forecast;
//  }

// event listener to search for key
search.addEventListener('keydown', async (e) => {
     if(e.keyCode === 13) {
          let weather = await weatherByCityName(search.value);
          updateCurrentWeather(weather);
          console.log(weather)
     }
})

// search.addEventListener('keydown', async (e) => {
//      if(e.keyCode === 13) {
//      // Call the OpenWeatherMap API and update the UI
//      forecastByCityName(city)
//          .then((forecast) => {
//              updateForecast(forecast);
//          })
//          .catch((error) => {
//              console.log(error);
//          });
//      }
//      console.log(forecast)
// })

// function to post data on the screen after getting it
let updateCurrentWeather = (data) => {
    city.textContent = data.name + "," + data.sys.country;
    date.textContent = dateOfWeek();
    humidity.textContent = data.main.humidity
    wind.textContent = data.wind.speed
    temperature.textContent = data.main.temp > 0 ? 
                              "+" + Math.round(data.main.temp) :
                              Math.round(data.main.temp);

}

// let updateForecast = (data) => {
//      // Clear the previous forecast items from the list
//      forecastList.innerHTML = "";
 
//      // Set the city title
//      // cityTitle.textContent = `${data.city.name}, ${data.city.country}`;
 
//      // Loop through the forecast data for the next 5 days and add a list item for each day
//      for (let i = 0; i < 5; i++) {
//          let forecastItem = data.list[i];
 
//          let date = new Date(forecastItem.dt_txt);
//          let dayOfWeek = date.toLocaleDateString('en-EN', {"weekday": "long"});
 
         
//          let temperature = `${Math.round(forecastItem.main.temp)}°C`;
//          let description = forecastItem.weather[0].description;
 
//          let forecastHTML = `
//              <li class="forecast-item">
//                  <div class="forecast-day">${dayOfWeek}</div>
//                  <i class="forecast-icon ${iconClass}"></i>
//                  <div class="forecast-temperature">${temperature}</div>
//                  <div class="forecast-description">${description}</div>
//              </li>
//          `;
 
//          forecastList.insertAdjacentHTML("beforeend", forecastHTML);
//      }
//  }
// function for getting date
let dateOfWeek = () => {
     return new Date().toLocaleDateString('en-EN', {"dateStyle": "long"})
}
