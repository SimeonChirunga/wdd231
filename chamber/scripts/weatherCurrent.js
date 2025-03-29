
const myAPI = "3d1c60bdd14276fcb38ba97304b14e40"
const lat = "-19.43378051955783"
const lon = "29.82163204853221"


const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myAPI}&units=metric`

// ========== Grab the weather data and W A I T
fetch(currentWeather)
    .then((response) => response.json())
    .then((allData) => {
        showCurrent(allData)
    }) // end waiting

function showCurrent(allData) {
    const tempNow = document.querySelector('#temp')
    tempNow.textContent = allData.main.temp+ '°C'
    const conditionsNow = document.querySelector('#desc')
    conditionsNow.textContent = allData.weather[0].description
    const townName = document.querySelector('#town')
    townName.textContent = allData.name
    console.log(allData)
}





