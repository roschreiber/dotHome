function updateTimeAndGreeting() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let greeting;
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

    let timeString;
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

const weatherIconMap = { // Soon: add more Icons, move to config.js
    '01d': './imports/images/svg/sun-medium.svg',
    '01n': './imports/images/svg/moon.svg',
    '02d': './imports/images/svg/cloud.svg',
    '02n': './imports/images/svg/cloud.svg',
    '03d': './imports/images/svg/cloud.svg',
    '03n': './imports/images/svg/cloud.svg',
    '04d': './imports/images/svg/cloud.svg',
    '04n': './imports/images/svg/cloud.svg',
    '09d': './imports/images/svg/cloud-rain.svg',
    '09n': './imports/images/svg/cloud-rain.svg',
    '10d': './imports/images/svg/cloud-rain.svg',
    '10n': './imports/images/svg/cloud-rain.svg',
    '11d': './imports/images/svg/cloud-lightning.svg',
    '11n': './imports/images/svg/cloud-lightning.svg',
    '13d': './imports/images/svg/snowflake.svg',
    '13n': './imports/images/svg/snowflake.svg',
    '50d': './imports/images/svg/cloud-fog.svg',
    '50n': './imports/images/svg/cloud-fog.svg',
};

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

            const iconPath = weatherIconMap[weatherIcon];

            fetch(iconPath)
            .then(response => response.text())
            .then(svg => {
                const greetingElement = document.querySelector('.greetUser');
                greetingElement.innerHTML = `${timeString} | ${greeting} ${window.userName}! | ${temperature}°${window.unit} <span class="weather">${svg}</span>`; // Redo soon
            });
        }
    })
    .catch(error => { // For demonstration purposes
        const greetingElement = document.querySelector('.greetUser');
        greetingElement.innerHTML = `${timeString} | ${greeting} ${window.userName}! | ${error.message}`;
    });
}

window.onload = function() {
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