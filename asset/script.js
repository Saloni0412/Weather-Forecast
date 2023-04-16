let search = document.querySelector(".weather-search") 
let city = document.querySelector(".weather-city")
let day = document.querySelector(".weather-day")
let humidity = document.querySelector(".weather-indicator-humidity>.value")
let wind = document.querySelector(".weather-indicator-wind>.value")
let pressure = document.querySelector(".weather-indicator-pressure>.value")
let temperature = document.querySelector(".weather-temp>.value")

let apiKey = "b7888d02409b33f95120630fb1218d0b";
let weatherBaseCall = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey

let weatherByCityName = async (city) => {
let FinalAPI = weatherBaseCall + "&q=" + city;
let response = await fetch(FinalAPI);
let weather = response.json()

return(weather);
}

search.addEventListener("keydown", async (e) => {
       if(e.keyCode === 13) {
       let weather = await weatherByCityName(search.value);
        updateCurrentWeather(weather)
    }
})
  
let updateCurrentWeather = (data) => {
    city.textContent = data.name + "," + data.sys.country;
    day.textContent = dayOfWeek();
    humidity.textContent = data.main.humidity
    wind.textContent = data.wind.speed
    pressure.textContent = data.main.pressure
    temperature.textContent = data.main.temp > 0 ? 
                                "+" + Math.round(data.main.temp) :
                                Math.round(data.main.temp);

}

let dayOfWeek = () => {
     return new Date().toLocaleDateString("en-EN", {"weekday": "long"})
}