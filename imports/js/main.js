let timeString;
let greeting;

function updateTimeAndGreeting(temperature, svg) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 6) {
        greeting = window.greetingNight;
    } else if (hours < 12) {
        greeting = window.greetingMorning;
    } else if (hours < 17) {
        greeting = window.greetingNoon;
    } else if (hours < 21) {
        greeting = window.greetingEvening;
    } else {
        greeting = window.greetingNight;
    }

    if (window.timeFormat === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        timeString = `${hours}:${minutes} ${period}`;
    } else {
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        timeString = `${hours}:${minutes}`;
    }

    const greetingElement = document.querySelector('.greetUser');
    greetingElement.innerHTML = `${timeString} | ${greeting} ${window.userName}! | ${temperature ? `${temperature}°${window.unit} <span class="weather">${svg}</span>` : ''}`;
}

function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${window.latitude}&lon=${window.longitude}&appid=${window.apiKey}&units=${window.unit === 'C' ? 'metric' : 'imperial'}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.main) {
                const temperature = Math.round(data.main.temp);
                const weatherIcon = data.weather[0].icon;

                const iconPath = window.weatherIconMap[weatherIcon];

                fetch(iconPath)
                    .then(response => response.text())
                    .then(svg => {
                        updateTimeAndGreeting(temperature, svg);
                        setInterval(() => updateTimeAndGreeting(temperature, svg), 60000);
                    });
            }
        })
        .catch(error => {
            const greetingElement = document.querySelector('.greetUser');
            greetingElement.innerHTML = `${timeString} | ${greeting} ${window.userName}! | ${error.message}`;
        });
}

window.onload = function() {
    fetchWeather();
    updateTimeAndGreeting();
    setInterval(updateTimeAndGreeting, 60000); // Bad way of doing it since it only updates every 60s after the website has loaded and not in real time, could be optimized


    const inputElement = document.querySelector('input');

    let searchURL;
    switch(window.searchEngine.toUpperCase()) {
        case 'GOOGLE':
            searchURL = 'https://www.google.com/search?q=';
            break;
        case 'DUCKDUCKGO':
            searchURL = 'https://duckduckgo.com/?q=';
            break;
        case 'DISROOT':
            searchURL = 'https://search.disroot.org/search?q=';
            break;
        case 'CUSTOM':
            searchURL = window.customSearchURL;
            break;
        default:
            console.error('Invalid search engine specified, did you mean CUSTOM?');
    }

    inputElement.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const query = encodeURIComponent(inputElement.value);
            if (query.trim() !== '') {
                window.open(searchURL + query, '_self');
            }
        }
    })
};