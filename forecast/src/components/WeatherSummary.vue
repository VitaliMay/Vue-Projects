<script setup>
import { computed, ref } from 'vue';
import { capitalizeFirstLetter } from '@/utils';

const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true,
  }
})


const weatherImageUrl = computed(() => {
  if (!props.weatherInfo?.weather[0]?.description) return '';

  // если без props то нужно сделать деструктуризацию с toRefs для сохранения реактивности
  // const { weatherInfo } = toRefs(props)
  const description = props.weatherInfo.weather[0].description;
  // new URL для корректного  пути во время сборки

  try {
    const imageUrl = new URL(`../assets/img/weather-main/${description}.png`, import.meta.url).href;

    // Проверяем на undefined в любой части URL
    if (imageUrl.includes('undefined') || imageUrl.includes('null') || !description) {
      console.log('Некорректный URL, применяю default');
      return new URL('../assets/img/weather-main/default.svg', import.meta.url).href;
    }

    return imageUrl;

  } catch (error) {
    console.log('Ошибка формирования URL:', error);
    return new URL('../assets/img/weather-main/default.svg', import.meta.url).href;
  }
})

const today = new Date().toLocaleString('en-EN',{
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

</script>



<template>

<div v-if="weatherInfo?.weather" class="summary">
  <div
    :style="{ backgroundImage: `url(${weatherImageUrl})` }"
    class="pic-main"
  ></div>
  <div class="weather">
    <div class="temp">
      {{ Math.round(weatherInfo?.main?.temp) }} °C
    </div>
    <div class="weather-desc text-block">
      {{ capitalizeFirstLetter(weatherInfo?.weather[0].description) }}
    </div>
  </div>
  <div class="city text-block">
    {{ weatherInfo?.name }},
    {{  weatherInfo?.sys?.country }}
  </div>
  <div class="date text-block">
    {{ today }}
  </div>
</div>

</template>

<style scoped lang="scss">

.pic-main {
  width: 60px;
  height: 60px;
  margin: 20px 0 12px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
}

.city {
  font-size: 24px;
}

.weather {
  margin: 0 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.temp {
  padding-bottom: 8px;
  font-size: 32px;
}

.text-block {
  position: relative;
  padding-left: 24px;
  padding-bottom: 8px;
  font-size: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    margin-right: 6px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }
}

.weather-desc {
  &::before {
    background-image: url('/src/assets/img/weather.svg');
  }
}

.city {
  &::before {
    background-image: url('@/assets/img/location.svg');
  }
}

.date {
  &::before {
    left: 2px;
    width: 15px;
    height: 15px;
    background-image: url('@/assets/img/calendar.svg');
  }
}

</style>