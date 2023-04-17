let search = document.querySelector(".weather-search") 
let searchCity = document.querySelector(".weather-city")

let date = document.querySelector(".weather-date")
let humidity = document.querySelector(".weather-indicator-humidity>.value")
let wind = document.querySelector(".weather-indicator-wind>.value")
let temperature = document.querySelector(".weather-temp>.value")

let weatherForecastItems = document.querySelector(".weather-forecast-item")
let foreDate = document.querySelector(".weather-forecast-date")
let foreHumidity = document.querySelector(".weather-forecast-humidity>.value")
let foreWind = document.querySelector(".weather-forecast-wind>.value")
let forecastTemperature = document.querySelector(".weather-forecast-temp>.value")

let apiKey = "b7888d02409b33f95120630fb1218d0b";
let weatherBaseCall = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;

// event listener to search for key
search.addEventListener('keydown', async (e) => {
     if(e.keyCode === 13) {
     const city = search.value;
     if (city) {
       // Fetch current weather data
       const currentWeatherResponse = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
       );
       const currentWeatherData = await currentWeatherResponse.json();
 
       // Fetch 5-day forecast data
       const forecastResponse = await fetch(
         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
       );
       const forecastData = await forecastResponse.json();
     console.log(forecastData)
       // post current weather data
       searchCity.textContent = currentWeatherData.name;
       date.textContent = dateOfWeek();
       humidity.textContent = currentWeatherData.main.humidity
       wind.textContent = currentWeatherData.wind.speed
       temperature.textContent = currentWeatherData.main.temp > 0 ? 
                                 "+" + Math.round(currentWeatherData.main.temp) :
                                 Math.round(currentWeatherData.main.temp);
   
       // post 5 day weather update
       for (let i = 0; i < weatherForecastItems.length; i++) {
          const weatherForecastItems = weatherForecastItems[i];
          const forecast = forecastData.list[i * 8 + 4];
          const forecastDate = new Date(forecast.dt_txt);
          const forecastTemp = forecast.main.temp;
          const forecastWind = forecast.wind.speed;
          const forecastHumidity = forecast.main.humidity;
  
         weatherForecastItems.querySelector(".weather-forecast-date").textContent =
            forecastDate.toLocaleDateString();
         weatherForecastItems.querySelector(
            ".weather-forecast-temp .value"
          ).textContent = `Temp: ${forecastTemp.toFixed(2)}°C`;
         weatherForecastItems.querySelector(
            ".weather-forecast-wind .value"
          ).textContent = `Wind: ${forecastWind}mph`;
         weatherForecastItems.querySelector(
            ".weather-forecast-humidity .value"
          ).textContent = `Humidity: ${forecastHumidity}%`;
        }
     
     }
     }
})

let dateOfWeek = () => {
     return new Date().toLocaleDateString('en-EN', {"dateStyle": "long"})
}
