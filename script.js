const apiKey = "6694272511e4c3947d69a9b7d8e008f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=" + apiKey + "&units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
	const response = await fetch(apiUrl + city);

	if(response.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather-box").style.display = "none";
	} else {
		var data = await response.json();
	}


	console.log(data);
	document.getElementById("location").innerHTML = data.name;
	document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
	document.getElementById("humidity").innerHTML = data.main.humidity + "%";
	document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

	if(data.weather[0].main == "Clear") {
		weatherIcon.src = "images/light/clear.png";
	} else if(data.weather[0].main == "Clouds") {
		weatherIcon.src = "images/light/clouds.png";
	} else if(data.weather[0].main == "Rain") {	
		weatherIcon.src = "images/light/rain.png";
	} else if(data.weather[0].main == "Snow") {	
		weatherIcon.src = "images/light/snow.png";
	} else if(data.weather[0].main == "Drizzle"){
		weatherIcon.src = "images/light/drizzle.png";
	} else if(data.weather[0].main == "Mist"){
		weatherIcon.src = "images/light/mist.png";
	}

	document.querySelector(".error").style.display = "none";
	document.querySelector(".weather-box").style.display = "block";
}

searchBtn.addEventListener("click", () => {
	const city = searchBox.value;
	checkWeather(city);
})

window.onload = function() {
	console.log("Page loaded");
	checkWeather("san%20jose");
}


