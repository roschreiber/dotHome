// CONFIG.JS

  // 🎨 COLORS
    // This is the main theming part of dotHome. Feel free to customize all colors, but please keep the syntax as is.
    // Use pre-made themes if you don't know what you're doing.
    window.inputBorderColor = '#2b2b28';
    window.inputTextColor = '#fff';
    window.inputBackgroundColor = '#2D2D2D';
    window.inputShadowColor = '#00000026';
    window.inputShadowInsetColor = '#0000007d';
    window.inputTextShadowColor = '#ffffffa8';
    window.inputFocusBorderColor = '#fff';
    window.inputFocusShadowColor = '#ffffff26';
    window.inputFocusShadowInsetColor = '#ffffff7d';
    window.inputPlaceholderColor = '#fff'; //Opacity of the Placeholder is 0.5
    window.logoGradientColor1 = '#2b2b2e';
    window.logoGradientColor2 = '#333336';
    window.logoTextShadowColor1 = '#222225';
    window.logoTextShadowColor2 = '#2e2e31';
    window.logoHoverGradientColor1 = '#2b2b2e';
    window.logoHoverGradientColor2 = '#333336';
    window.logoHoverTextShadowColor1 = '#222225';
    window.logoHoverTextShadowColor2 = '#4e4e51';
    window.backgroundGradientColorBottom = '#272729';
    window.backgroundGradientColorTop = '#28282b';
    window.greetingTextColor = '#ffffff50';
    window.weatherIconColor = '#ffffff50';
    window.backgroundImageLink = ''; // Your web image link here
    
    
  // 👋 GREETINGS
    // This is used for greeting you depending on the time of the day. A whitespace is added automatically after the greeting.
    window.userName = 'roschreiber';

    window.timeFormat = '24' // 12 for AM/PM or 24 for 24-hour format
    
    window.greetingMorning = 'Good morning,';
    window.greetingNoon = 'Good afternoon,';
    window.greetingEvening = 'Good evening,';
    window.greetingNight = 'Good night,'

  
  // ☁️ WEATHER
    // This is used for weather info. You can get your API key from https://openweathermap.org/api
    window.apiKey = 'YOUR_API_KEY';
    window.unit = 'C'; // C for Celsius or F for Fahrenheit
    window.latitude = 'LATTITUDE';
    window.longitude = 'LONGITUDE';

    window.weatherIconMap = { // For reference, look at https://openweathermap.org/weather-conditions
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
    
  // 🔎 SEARCH ENGINE
    window.searchEngine = 'DUCKDUCKGO' // GOOGLE, DUCKDUCKGO, DISROOT (SEARX) or CUSTOM
    window.searchEngineName = 'DuckDuckGo' // Name of your search engine, will be displayed as the placeholder for the input box
    window.customSearchURL = 'https://www.search.engine/search?q='; // will only be used if your searchEngine is set to "CUSTOM", fill out with an empty query url


  // 🤖 CSS INJECTIONS
    // This is the place where dotHome injects your colors and other settings into the CSS.
    // Do not change this unless you know what you're doing.
    document.documentElement.style.setProperty('--input-border-color', window.inputBorderColor);
    document.documentElement.style.setProperty('--input-text-color', window.inputTextColor);
    document.documentElement.style.setProperty('--input-background-color', window.inputBackgroundColor);
    document.documentElement.style.setProperty('--input-shadow-color', window.inputShadowColor);
    document.documentElement.style.setProperty('--input-shadow-inset-color', window.inputShadowInsetColor);
    document.documentElement.style.setProperty('--input-text-shadow-color', window.inputTextShadowColor);
    document.documentElement.style.setProperty('--input-focus-border-color', window.inputFocusBorderColor);
    document.documentElement.style.setProperty('--input-focus-shadow-color', window.inputFocusShadowColor);
    document.documentElement.style.setProperty('--input-focus-shadow-inset-color', window.inputFocusShadowInsetColor);
    document.documentElement.style.setProperty('--logo-gradient-color-1', window.logoGradientColor1);
    document.documentElement.style.setProperty('--logo-gradient-color-2', window.logoGradientColor2);
    document.documentElement.style.setProperty('--logo-text-shadow-color-1', window.logoTextShadowColor1);
    document.documentElement.style.setProperty('--logo-text-shadow-color-2', window.logoTextShadowColor2);
    document.documentElement.style.setProperty('--logo-hover-gradient-color-1', window.logoHoverGradientColor1);
    document.documentElement.style.setProperty('--logo-hover-gradient-color-2', window.logoHoverGradientColor2);
    document.documentElement.style.setProperty('--logo-hover-text-shadow-color-1', window.logoHoverTextShadowColor1);
    document.documentElement.style.setProperty('--logo-hover-text-shadow-color-2', window.logoHoverTextShadowColor2);
    document.documentElement.style.setProperty('--background-gradient-color-bottom', window.backgroundGradientColorBottom);
    document.documentElement.style.setProperty('--background-gradient-color-top', window.backgroundGradientColorTop);
    document.documentElement.style.setProperty('--input-placeholder-color', window.inputPlaceholderColor);
    document.documentElement.style.setProperty('--greeting-text-color', window.greetingTextColor);
    document.documentElement.style.setProperty('--weather-icon-color', window.weatherIconColor);+
    document.documentElement.style.setProperty('--background-image-link', `url(${window.backgroundImageLink})`);
