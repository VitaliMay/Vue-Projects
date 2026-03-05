export const weatherConfig = {
  // 1. Ясно / Солнечно
  clear: {
    class: 'clear',
    image: 'sunny-01.jpg', // яркое солнце, голубое небо
    alt: 'Clear Sky',
    keywords: ['Sunny', 'Clear']
  },

  // 2. Облачно
  cloudy: {
    class: 'cloudy',
    image: 'cloudy-01.jpg', // обычная облачность
    alt: 'Cloudy',
    keywords: ['Partly cloudy', 'Cloudy']
  },

  // 3. Пасмурно
  overcast: {
    class: 'overcast',
    image: 'overcast-01.jpg', // серое небо, низкая облачность
    alt: 'Overcast',
    keywords: ['Overcast']
  },

  // 4. Туман / Мгла
  fog: {
    class: 'fog',
    image: 'fog-01.jpg', // туман, плохая видимость
    alt: 'Fog',
    keywords: ['Mist', 'Fog', 'Freezing fog']
  },

  // 5. Дождь (легкий/умеренный)
  rain: {
    class: 'rain',
    image: 'rain-01.jpg', // обычный дождь
    alt: 'Rain',
    keywords: [
      'Patchy rain possible',
      'Light drizzle',
      'Light rain',
      'Moderate rain',
      'Patchy light drizzle',
      'Light rain shower'
    ]
  },

  // 6. Сильный дождь / Ливень
  heavyRain: {
    class: 'heavy-rain',
    image: 'heavy-rain-01.jpg', // сильный ливень, грозовые тучи
    alt: 'Heavy Rain',
    keywords: [
      'Heavy rain',
      'Moderate or heavy rain shower',
      'Torrential rain shower',
      'Heavy rain at times',
      'Moderate or heavy rain with thunder'
    ]
  },

  // 7. Снег (легкий/умеренный)
  snow: {
    class: 'snow',
    image: 'snow-01.jpg', // легкий снегопад
    alt: 'Snow',
    keywords: [
      'Patchy snow possible',
      'Light snow',
      'Moderate snow',
      'Light snow showers',
      'Patchy light snow'
    ]
  },

  // 8. Сильный снегопад / Метель
  heavySnow: {
    class: 'heavy-snow',
    image: 'heavy-snow-01.jpg', // сильный снегопад, метель
    alt: 'Heavy Snow',
    keywords: [
      'Heavy snow',
      'Blizzard',
      'Blowing snow',
      'Moderate or heavy snow showers',
      'Patchy heavy snow'
    ]
  },

  // 9. Ледяной дождь / Гололед
  sleet: {
    class: 'sleet',
    image: 'sleet-01.jpg', // ледяной дождь, гололед
    alt: 'Sleet',
    keywords: [
      'Patchy sleet possible',
      'Light sleet',
      'Moderate or heavy sleet',
      'Ice pellets',
      'Light sleet showers',
      'Light freezing rain',
      'Patchy freezing drizzle possible',
      'Freezing drizzle',
      'Light showers of ice pellets'
    ]
  },

  // 10. Гроза
  thunderstorm: {
    class: 'thunderstorm',
    image: 'thunderstorm-01.jpg', // молнии, темные тучи
    alt: 'Thunderstorm',
    keywords: [
      'Thundery outbreaks possible',
      'Patchy light rain with thunder',
      'Moderate or heavy rain with thunder',
      'Patchy light snow with thunder',
      'Moderate or heavy snow with thunder'
    ]
  },

  // 11. Морось / Изморось
  drizzle: {
    class: 'drizzle',
    image: 'drizzle-01.jpg', // мелкий моросящий дождь
    alt: 'Drizzle',
    keywords: [
      'Light drizzle',
      'Patchy light drizzle',
      'Freezing drizzle',
      'Heavy freezing drizzle'
    ]
  },

  // 12. Ледяная крупа / Ледяные иглы
  icePellets: {
    class: 'ice-pellets',
    image: 'ice-pellets-01.jpg', // ледяная крупа, град
    alt: 'Ice Pellets',
    keywords: [
      'Ice pellets',
      'Moderate or heavy showers of ice pellets',
      'Moderate or heavy freezing rain'
    ]
  }
}

// Опционально: добавим маппинг по кодам для более точного соответствия
export const weatherCodeMap = {
  1000: 'clear',       // Sunny/Clear
  1003: 'cloudy',      // Partly cloudy
  1006: 'cloudy',      // Cloudy
  1009: 'overcast',    // Overcast
  1030: 'fog',         // Mist
  1063: 'rain',        // Patchy rain possible
  1066: 'snow',        // Patchy snow possible
  1069: 'sleet',       // Patchy sleet possible
  1072: 'sleet',       // Patchy freezing drizzle possible
  1087: 'thunderstorm', // Thundery outbreaks possible
  1114: 'heavy-snow',  // Blowing snow
  1117: 'heavy-snow',  // Blizzard
  1135: 'fog',         // Fog
  1147: 'fog',         // Freezing fog
  1150: 'drizzle',     // Patchy light drizzle
  1153: 'drizzle',     // Light drizzle
  1168: 'sleet',       // Freezing drizzle
  1171: 'sleet',       // Heavy freezing drizzle
  1180: 'rain',        // Patchy light rain
  1183: 'rain',        // Light rain
  1186: 'rain',        // Moderate rain at times
  1189: 'rain',        // Moderate rain
  1192: 'heavy-rain',  // Heavy rain at times
  1195: 'heavy-rain',  // Heavy rain
  1198: 'sleet',       // Light freezing rain
  1201: 'ice-pellets', // Moderate or heavy freezing rain
  1204: 'sleet',       // Light sleet
  1207: 'sleet',       // Moderate or heavy sleet
  1210: 'snow',        // Patchy light snow
  1213: 'snow',        // Light snow
  1216: 'snow',        // Patchy moderate snow
  1219: 'snow',        // Moderate snow
  1222: 'heavy-snow',  // Patchy heavy snow
  1225: 'heavy-snow',  // Heavy snow
  1237: 'ice-pellets', // Ice pellets
  1240: 'rain',        // Light rain shower
  1243: 'heavy-rain',  // Moderate or heavy rain shower
  1246: 'heavy-rain',  // Torrential rain shower
  1249: 'sleet',       // Light sleet showers
  1252: 'sleet',       // Moderate or heavy sleet showers
  1255: 'snow',        // Light snow showers
  1258: 'heavy-snow',  // Moderate or heavy snow showers
  1261: 'ice-pellets', // Light showers of ice pellets
  1264: 'ice-pellets', // Moderate or heavy showers of ice pellets
  1273: 'thunderstorm', // Patchy light rain with thunder
  1276: 'thunderstorm', // Moderate or heavy rain with thunder
  1279: 'thunderstorm', // Patchy light snow with thunder
  1282: 'thunderstorm'  // Moderate or heavy snow with thunder
}

// Фоновое изображение по умолчанию
export const defaultBackground = {
  class: 'bg',
  image: 'bg-01.jpg',
  alt: 'App Background',
  always: true
}


console.log(Object.entries(weatherConfig))
