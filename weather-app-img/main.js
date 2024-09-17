// 57c0843ee219e052d439e4ada1ba6834
// https://api.openweathermap.org/data/2.5/weather?q=germany&APPID=57c0843ee219e052d439e4ada1ba6834&units=metric

const apiKey = "57c0843ee219e052d439e4ada1ba6834";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (res.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else {
        var data = await res.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Cloud") {
            weatherIcon.src = "./images/clouds.png";
        } 
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        } 
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
        } 
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
        } 
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
        }
    
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

    }
    // const weatherSectioin = document.querySelector(".weather");
    // weatherSectioin.classList.remove(".weather-hide");
}

// window.onload = () => {
//     const weatherSectioin = document.querySelector(".weather");
//     weatherSectioin.classList.add(".weather-hide");
// }

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
