var inputEL = document.querySelector("#city-input");
var btn = document.querySelector("#search-btn");
var historyEl = document.querySelector("#history");
var cityNameEl = document.querySelector("#city-name");
var weatherPicEl = document.querySelector("#weather-pic");
var TempEl = document.querySelector("#temperature");
var humidityEl = document.querySelector("#humidity");
var windEl = document.querySelector("#wind-speed");
var uvEl = document.querySelector("#UV-index");
var cityEl = document.querySelector("#city");



var getWeather = function(cityName){
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=f34530967c73604c84c0dd9cb56da8a8";

    fetch(apiURL).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                city.innerHTML = data.name;
                TempEl.innerHTML = "Temperature: " + (data.main.temp) + " F";
                humidityEl.innerHTML = "Humidity: " + (data.main.humidity) +"%"
                windEl.innerHTML = "WindSpeed: " + (data.wind.speed) + " MPH"; 
                

            


                

                

            });
        }
        else{
            alert("Error:" +response.statusText);
        }

    });
};






var formSubmitHandler = function(event) {
    event.preventDefault();
    var city = cityNameEl.value;
    

    if (city) {
        getWeather(city);
        cityNameEl.value = "";

    }
    else{
        alert("Please enter a city");
    }
};

inputEL.addEventListener("submit", formSubmitHandler);
