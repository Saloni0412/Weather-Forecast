let search = document.querySelector(".weather-search") ;
let searchCity = document.querySelector(".weather-city");

let date = document.querySelector(".weather-date");
let humidity = document.querySelector(".weather-indicator-humidity>.value");
let wind = document.querySelector(".weather-indicator-wind>.value");
let temperature = document.querySelector(".weather-temp>.value");

let temp1 = document.querySelector(".weather-forecast-temp1");
let date1 = document.querySelector(".weather-forecast-date1"); 
let humidity1 = document.querySelector(".weather-forecast-humidity1>.value");
let wind1 = document.querySelector(".weather-forecast-wind1>.value");

let temp2 = document.querySelector(".weather-forecast-temp2");
let date2 = document.querySelector(".weather-forecast-date2"); 
let humidity2 = document.querySelector(".weather-forecast-humidity2>.value");
let wind2 = document.querySelector(".weather-forecast-wind2>.value");

let temp3 = document.querySelector(".weather-forecast-temp3");
let date3 = document.querySelector(".weather-forecast-date3"); 
let humidity3 = document.querySelector(".weather-forecast-humidity3>.value");
let wind3 = document.querySelector(".weather-forecast-wind3>.value");

let temp4 = document.querySelector(".weather-forecast-temp4");
let date4 = document.querySelector(".weather-forecast-date4"); 
let humidity4 = document.querySelector(".weather-forecast-humidity4>.value");
let wind4 = document.querySelector(".weather-forecast-wind4>.value");

let temp5 = document.querySelector(".weather-forecast-temp5");
let date5 = document.querySelector(".weather-forecast-date5"); 
let humidity5 = document.querySelector(".weather-forecast-humidity5>.value");
let wind5 = document.querySelector(".weather-forecast-wind5>.value");

let weatherForecastItems = document.querySelector(".weather-forecast-item");


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
   
       // post next 5 day weather update
       date1.textContent = new Date(forecastData.list[0].dt_txt).toLocaleDateString('en-EN', {"dateStyle": "long"});
       temp1.textContent = forecastData.list[0].main.temp > 0 ? 
                                                           "+" + Math.round(currentWeatherData.main.temp) :
                                                           Math.round(currentWeatherData.main.temp);
        humidity1.textContent = forecastData.list[0].main.humidity;
        wind1.textContent = forecastData.list[0].wind.speed;

        date2.textContent = new Date(forecastData.list[14].dt_txt).toLocaleDateString('en-EN', {"dateStyle": "long"});
        temp2.textContent = forecastData.list[14].main.temp > 0 ? 
                                                            "+" + Math.round(currentWeatherData.main.temp) :
                                                            Math.round(currentWeatherData.main.temp);
         humidity2.textContent = forecastData.list[14].main.humidity;
         wind2.textContent = forecastData.list[14].wind.speed;

         date3.textContent = new Date(forecastData.list[21].dt_txt).toLocaleDateString('en-EN', {"dateStyle": "long"});
        temp3.textContent = forecastData.list[21].main.temp > 0 ? 
                                                            "+" + Math.round(currentWeatherData.main.temp) :
                                                            Math.round(currentWeatherData.main.temp);
         humidity3.textContent = forecastData.list[21].main.humidity;
         wind3.textContent = forecastData.list[21].wind.speed;

         date4.textContent = new Date(forecastData.list[28].dt_txt).toLocaleDateString('en-EN', {"dateStyle": "long"});
        temp4.textContent = forecastData.list[28].main.temp > 0 ? 
                                                            "+" + Math.round(currentWeatherData.main.temp) :
                                                            Math.round(currentWeatherData.main.temp);
         humidity4.textContent = forecastData.list[28].main.humidity;
         wind4.textContent = forecastData.list[28].wind.speed;

         date5.textContent = new Date(forecastData.list[35].dt_txt).toLocaleDateString('en-EN', {"dateStyle": "long"});
        temp5.textContent = forecastData.list[35].main.temp > 0 ? 
                                                            "+" + Math.round(currentWeatherData.main.temp) :
                                                            Math.round(currentWeatherData.main.temp);
         humidity5.textContent = forecastData.list[35].main.humidity;
         wind5.textContent = forecastData.list[35].wind.speed;



      //  for (let i = 0; i < weatherForecastItems.length; i++) {
      //   const forecastItem = weatherForecastItems[i];
      //   const forecast = forecastData.list[i * 8 + 4];
      //   const forecastDate = new Date(forecast.dt_txt);
      //   const forecastTemp = forecast.main.temp;
      //   const forecastWind = forecast.wind.speed;
      //   const forecastHumidity = forecast.main.humidity;
      //   forecastItem.querySelector(".weather-forecast-day").textContent =
      //     forecastDate.toLocaleDateString();
      //   forecastItem.querySelector(
      //     ".weather-forecast-temp .value"
      //   ).textContent = `Temp: ${forecastTemp.toFixed(2)}°C`;
      //   forecastItem.querySelector(
      //     ".weather-forecast-wind .value"
      //   ).textContent = `Wind: ${forecastWind}mph`;
      //   forecastItem.querySelector(
      //     ".weather-forecast-humidity .value"
      //   ).textContent = `Humidity: ${forecastHumidity}%`;
      // }
     
     }
     }
})

let dateOfWeek = () => {
     return new Date().toLocaleDateString('en-EN', {"dateStyle": "long"})
}
