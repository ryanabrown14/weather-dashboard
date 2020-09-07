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
var date = new Date().toLocaleDateString();

console.log(date);



var getWeather = function(cityName){
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=f34530967c73604c84c0dd9cb56da8a8";
    
    fetch(apiURL).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                city.innerHTML = data.name + " (" + date +")";
                if (data.weather[0].main === "Clouds") { 
                    weatherPicEl.innerHTML = "<i class='fas fa-cloud-sun' style='font-size:36px;'></i>"
                    
                }
                else if (data.weather[0].main === "Clear") {
                    weatherPicEl.innerHTML = "<i class='fas fa-sun' style='font-size:36px'></i>"

                }
                else if (data.weather[0].main === "Thunderstorm") {
                    weatherPicEl.innerHTML = "<i class='fas fa-bolt' style='font-size:36px'></i>"

                }
                else if (data.weather[0].main === "Snowing") {
                    weatherPicEl.innerHTML = "<i class='fas fa-snowflake' style='font-size:36px'></i>"

                }
                TempEl.innerHTML = "Temperature: " + (data.main.temp) + " F";
                humidityEl.innerHTML = "Humidity: " + (data.main.humidity) +"%"
                windEl.innerHTML = "WindSpeed: " + (data.wind.speed) + " MPH"; 
                

            


                

                

            });
        }
        else{
            alert("Error:" +response.statusText);
        }

    });
    var apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=f34530967c73604c84c0dd9cb56da8a8";
    console.log(apiURL2);
    fetch(apiURL2).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                var forecastEL = document.querySelector(".forecast");
                
                for (let i = 5; i < data.list.length; i += 8){

                    

                    var daily = document.createElement("div");
                    daily.className = "card daily";

                    var forecastDate = (data.list[i].dt_txt);
                    console.log(forecastDate);
                    var dateText = document.createElement("h4");
                    dateText.textContent = forecastDate;
                    dateText.className = "text";

                    var temp = parseInt(data.list[i].main.temp);
                    console.log(temp);
                    var tempText = document.createElement("p")
                    tempText.textContent = "Temp: " + temp + " °F";
                    tempText.className = "text";

                    var humidity = data.list[i].main.humidity;
                    var humidityText = document.createElement("p");
                    humidityText.textContent = "Humidity:" + humidity + "%";
                    humidityText.className = "text";
                    
                    daily.append( dateText, tempText, humidityText);
                    forecastEL.append(daily);
                    
                    
                    



                    
                    
                }
            });
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
