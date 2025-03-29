const myAPI = "3d1c60bdd14276fcb38ba97304b14e40";
const myLat = "-19.43378051955783"; 
const myLong = "29.82163204853221";
const myWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myAPI}&cnt=40&units=metric`;

fetch(myWeather)
    .then((response) => response.json())
    .then((allData) => {
        const forecastDays = [];
        const today = new Date();
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        const dayAfterTomorrow = new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000);

        allData.list.forEach((forecast) => {
            const forecastDate = new Date(forecast.dt_txt);
            if (
                (forecastDate.getDate() === today.getDate() &&
                    forecastDate.getMonth() === today.getMonth() &&
                    forecastDate.getFullYear() === today.getFullYear()) ||
                (forecastDate.getDate() === tomorrow.getDate() &&
                    forecastDate.getMonth() === tomorrow.getMonth() &&
                    forecastDate.getFullYear() === tomorrow.getFullYear()) ||
                (forecastDate.getDate() === dayAfterTomorrow.getDate() &&
                    forecastDate.getMonth() === dayAfterTomorrow.getMonth() &&
                    forecastDate.getFullYear() === dayAfterTomorrow.getFullYear())
            ) {
                if (forecast.dt_txt.includes('12:00:00')) {
                    forecastDays.push(forecast);
                }
            }
        });

        showForecast(forecastDays);
    })
    .catch((error) => console.error(error));

function showForecast(forecastDays) {
    const forecast = document.querySelector('#forecast');
    forecast.innerHTML = ''; // Clear previous forecast

    forecastDays.forEach((day, index) => {
        const date = new Date(day.dt_txt);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
        const temperature = Math.floor(day.main.temp);

        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';

        const dayLabel = document.createElement('h2');
        dayLabel.textContent = dayOfWeek;
        forecastDay.appendChild(dayLabel);

        const temperatureLabel = document.createElement('p');
        temperatureLabel.textContent = `${temperature}°C`;
        forecastDay.appendChild(temperatureLabel);

        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        icon.alt = day.weather[0].description;
        forecastDay.appendChild(icon);

        forecast.appendChild(forecastDay);
    });
}

