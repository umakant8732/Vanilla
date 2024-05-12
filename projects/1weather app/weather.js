
const apiKey = "384a5dfe97d155dad1cf47c8d427317f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputField = document.querySelector('.inputField');

const searchBtn = document.querySelector('.searchBtn');

const weatherIcon = document.querySelector('.weather-icon');


function showMessage(title, text, icon) {
    Swal.fire({
        title: `${title}`,
        text: `${text}`,
        icon: `${icon}`,
    });
}


async function getWeather(city) {
    const fetchedWeather = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(fetchedWeather.status === 404){
        showMessage('Message', "No City Found", "error");
        document.querySelector('.weather').style.display = "none";

        inputField.value = "";

    }

    else if(fetchedWeather.status === 200){
        let data = await fetchedWeather.json();
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.ceil(data.main.temp) + " °C";
        document.querySelector('.humidity').textContent = data.main.humidity + "%";
        document.querySelector('.wind').textContent = data.wind.speed + " km/h";
    
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "./weather-app-img/images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "./weather-app-img/images/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "./weather-app-img/images/rain.png";
    
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "./weather-app-img/images/drizzle.png"
    
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "./weather-app-img/images/mist.png";
    
        }
        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "./weather-app-img/images/snow.png";
        }
    
        document.querySelector('.weather').style.display = "block";
    
    }

   

}

searchBtn.addEventListener('click', function () {
    const cityName = inputField.value;
    if (cityName === "") {
        showMessage("message","please enter the city", "error");
    }
    else {
        getWeather(cityName);
    }


});
