//Current Forecast
const myAPI1 = "3d1c60bdd14276fcb38ba97304b14e40";
const myLat = "-19.43378051955783";
const myLong = "29.82163204853221";



const myWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myAPI1}&cnt=30&units=metric`

// ========== Grab the weather data and W A I T
fetch(myWeather)
    .then((response) => response.json())
    .then((allData) => {
        forcastWeatherB(allData.list)
    }) // end waiting

//Use filter to extract an array of noon times.
function forcastWeatherA(weatherResults) {
    //console.log(weatherResults)
    //console.log(weatherResults[0].dt_txt.substring(11, 13))
    const noonTimes = weatherResults.filter(result => result.dt_txt.substring(11, 13) == '00');
    showForecast(noonTimes)
    //console.log(noonTimes)
}

//use a for each loop to find all noon times
function forcastWeatherB(weatherResults) {
    let noontimes2 = []
    weatherResults.forEach((listItem) => {
        //console.log(listItem.dt_txt)
        if (listItem.dt_txt.substring(11, 13) == '00') {
            noontimes2.push(listItem)
        }
    })
    //console.log(noontimes2)
    showForecast(noontimes2)
}

// Display three day forecast from an array
function showForecast(forcastdays) {
    const forecast = document.querySelector('#forecast');

    // Create placeholders for each day's forecast
    for (let i = 0; i < 3; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'forecast-placeholder';
        forecast.appendChild(placeholder);
    }

    // Process forecast data in chunks to improve performance
    const chunkSize = 3;
    for (let i = 0; i < forcastdays.length; i += chunkSize) {
        const chunk = forcastdays.slice(i, i + chunkSize);
        chunk.forEach((day, index) => {
            const myTemperature = document.createElement('p');
            myTemperature.className = 'temp';
            myTemperature.textContent = `${Math.floor(day.main.temp)}°`;

            const myDescription = document.createElement('p');
            myDescription.className = 'desc';
            myDescription.textContent = day.weather[0].description;

            const myIcon = document.createElement('img');
            myIcon.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            myIcon.alt = day.weather[0].description;

            const myDay = document.createElement('div');
            myDay.className = 'forecast-day';
            myDay.appendChild(myTemperature);
            myDay.appendChild(myDescription);
            myDay.appendChild(myIcon);

            // Replace the placeholder with the actual forecast element
            const placeholder = forecast.children[index];
            forecast.replaceChild(myDay, placeholder);
        });
    }
}

