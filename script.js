const apiKey = "bdf1e5c98bcc43f59d0367523fbecf8c";
const citySearched = document.querySelector("#search");
const boxCity = document.querySelector("#cityBox");


citySearched.addEventListener('click', async function(e) {
        const cityName = boxCity.value;
        let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
        let response = await fetch(currentWeather);
        let data = await response.json();
        if(cityName == "") {
            alert("Please enter the name of the city");
            return;
        }
        else if(!response.ok) {
            alert("Enter a valid city name");
        }
        else {
            temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
            weather.textContent = `Weather: ${data.weather[0].description}`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`
        }
}, false);

