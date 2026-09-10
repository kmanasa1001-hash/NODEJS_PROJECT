// Replace with your OpenWeatherMap API key
const apiKey = "d2db27d78dbc261f005fe6fae43008ab";
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");
    if (!city) {
        weatherResult.textContent = "Please enter a city name.";
        return;
    }
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const data = await response.json();
        if (data.cod === 200) {
            const weather = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            weatherResult.textContent = `Weather: ${weather}\nTemperature: ${temperature}°C`;
        } else {
            weatherResult.textContent = `Error: ${data.message}`;
        }
    } catch (error) {
        weatherResult.textContent = `Error fetching weather data: ${error.message}`;
    }
}
