const apiKey = 'TU_API_KEY'; 
const city = 'CIUDAD'; 

const weatherURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        const weatherData = await response.json();

  
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
            <h3>${weatherData.location.name}, ${weatherData.location.country}</h3>
            <p>Estado del clima: ${weatherData.current.condition.text}</p>
            <p>Temperatura: ${weatherData.current.temp_c}°C</p>
            <p>Precipitaciones: ${weatherData.current.precip_mm} mm</p>
            <p>Humedad: ${weatherData.current.humidity}%</p>
            <p>Viento: ${weatherData.current.wind_kph} km/h</p>
        `;

        const hourlyForecast = document.getElementById("hourly-forecast");
        const hourlyData = weatherData.forecast.forecastday[0].hour.slice(0, 6); // Tomar las primeras 6 horas
        hourlyData.forEach(hour => {
            const hourInfo = document.createElement("div");
            hourInfo.classList.add("hourly-item");
            hourInfo.innerHTML = `
                <p>${hour.time.slice(11, 16)}</p>
                <img src="${hour.condition.icon}" alt="${hour.condition.text}">
                <p>${hour.temp_c}°C</p>
            `;
            hourlyForecast.appendChild(hourInfo);
        });
    } catch (error) {
        console.error('Error al obtener datos meteorológicos:', error);
    }
}


fetchWeather();