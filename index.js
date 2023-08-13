const apiKey = "165d3d5bfd2d3670d03298a3a302971d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404){

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "Km/h";



    console.log(data);
    if(data.weather[0].main == "Clouds") {

        weatherIcon.src = "images/clouds.svg";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.svg";
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.svg";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.svg";
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", () => { 

    checkWeather(searchBox.value);

});




