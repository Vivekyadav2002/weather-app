const apiKey = 'd195e173b6baf1d1c253749503c4d0d3';  


document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert('City not found, please try again.');
        });
}

function displayWeatherData(data) {
    const weatherbox = document.getElementById('weather-info');
    const cityname = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherdescription = document.getElementById('weather-description');
    const humidity = document.getElementById('humidity');
    const windspeed = document.getElementById('wind-speed');
    const temperatureVideo = document.getElementById('temperatureVideo');
    const weatherVideo = document.getElementById('weatherVideo');
    const humidityVideo = document.getElementById('humidityVideo');
    const windVideo = document.getElementById('windVideo');

    weatherbox.style.display = 'block';
    cityname.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `: ${data.main.temp}°C`;
    weatherdescription.innerText = `: ${data.weather[0].description}`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    windspeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;

    temperatureCondition(data.main.temp, temperatureVideo);
    WeatherCondition(data.weather[0].main, weatherVideo);
    humidityCondition(data.main.humidity, humidityVideo);
    windCondition(data.main.humidity, windVideo);
}

function temperatureCondition(data, temperatureVideo) {
    if(data > 25)
        temperatureVideo.src = './assets/hot.mp4';
    else
        temperatureVideo.src = './assets/video.mp4';
}

function WeatherCondition(data, weatherVideo) {
    if(data === "Mist")
        weatherVideo.src = './assets/hot.mp4';
    else if(data === "Clear")
        weatherVideo.src = './assets/video.mp4';
    else if(data === "Haze")
        weatherVideo.src = './assets/video.mp4';
    else 
    weatherVideo.src = './assets/video.mp4';
}

function humidityCondition(data, humidityVideo) {
    if(data > 65)
        humidityVideo.src = './assets/hot.mp4';
    else
        humidityVideo.src = './assets/video.mp4';
}

function windCondition(data, windVideo) {
    windVideo.src = './assets/hot.mp4';
}