<script setup>
  import { ref, computed } from 'vue'

  // Состояние (data)
  const location = ref('')
  const country = ref('')
  const temperature = ref(0)
  const description = ref('')
  const searchQuery = ref('')
  const iconWeather = ref('')
  const loading = ref(false)
  const error = ref(false)

  // Вычисляемое свойство (computed)
  const weatherClass = computed(() => {
    if (description.value.includes('Sunny')) {
      return 'sunny'
    } else if (description.value.includes('Overcast')) {
      return 'overcast'
    } else if (description.value.includes('Partly cloudy')) {
      return 'partly-cloudy'
    } else {
      return ''
    }
  })

  // Методы
  const weatherSearch = async () => {
    loading.value = true
    error.value = false

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=36f521fcf5234b91972172159260203&q=${searchQuery.value}`
      )
      const data = await response.json()

      location.value = data.location.name
      country.value = data.location.country
      temperature.value = data.current.temp_c
      description.value = data.current.condition.text
      iconWeather.value = data.current.condition.icon

      resetSearchQuery()
    } catch (error) {
      error.value = true
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  const resetSearchQuery = () => {
    searchQuery.value = ''
  }
</script>

<template>
  <div class="weather" :class="weatherClass">
    <div class="container">
      <div class="card weather-form">
        <input
          type="text"
          class="weather-form__input"
          placeholder="Enter city"
          v-model="searchQuery"
          @keyup.enter="weatherSearch"
        >
        <button
          class="weather-form__btn"
          @click="weatherSearch"
        >
          Search
        </button>
      </div>

      <div class="card weather-load" v-if="loading">Loading...</div>

      <div
        class="weather-info"
        v-show="!error && location && temperature !== 0 && description"
      >
        <div class="card" v-if="error">Error</div>

        <div class="weather-info__text">
          <p class="card">{{ location }} ({{ country }})</p>
          <p class="card">{{ temperature }}°C</p>
          <p class="card">{{ description }}</p>
          <img class="card" :src="iconWeather" alt="icon description">
        </div>
      </div>
    </div>

    <div class="weather-bg">
      <div>
        <img
          class="weather-bg__img bg"
          src="./assets/img/bg-01.jpg"
          alt="App Background"
        >
        <img
          class="weather-bg__img overcast"
          src="./assets/img/overcast-01.jpg"
          alt="Overcast"
        >
        <img
          class="weather-bg__img partly-cloudy"
          src="./assets/img/partly-cloudy-01.jpg"
          alt="Partly Cloudy"
        >
        <img
          class="weather-bg__img sunny"
          src="./assets/img/sunny-02.jpg"
          alt="Sunny"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.weather {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: $mobile-break-point) {
    height: 100%;
    overflow: visible;
  }
}

.weather-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.weather-bg > div {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.weather-bg__img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  opacity: 0;
  transition: $tr ease-in-out;
}

.weather .weather-bg__img.bg {
  opacity: 0.5;
}

/********* sunny **************************************** */
.weather.sunny .weather-bg__img:not(.sunny) {
  opacity: 0;
}
.weather.sunny .weather-bg__img.sunny {
  opacity: 0.5;
}

/********* overcast **************************************** */
.weather.overcast .weather-bg__img:not(.overcast) {
  opacity: 0;
}
.weather.overcast .weather-bg__img.overcast {
  opacity: 0.5;
}

/********* partly-cloudy **************************************** */
.weather.partly-cloudy .weather-bg__img:not(.partly-cloudy) {
  opacity: 0;
}
.weather.partly-cloudy .weather-bg__img.partly-cloudy {
  opacity: 0.5;
}

/************************************************* */

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-columns: 1fr 100px 200px;
  gap: 20px;
  box-sizing: border-box;
}

.card {
  background-color: $color-light;
  border-radius: $border-radius;
  padding: 20px 30px;
  box-sizing: border-box;
}

.weather-form {
  display: flex;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
}

.weather-form__input {
  flex-grow: 1;
  font-size: 20px;
  border: $width-line solid rgba($color-accent, 0.3);
  border-radius: $border-radius;
  padding: 10px 15px;
  box-sizing: border-box;
  transition: $tr;

  @media (max-width: $mobile-break-point) {
    width: 100%;
  }
}

.weather-form__input:focus {
  outline: none;
  border-color: $color-accent;
}

.weather-form__btn {
  flex-basis: 180px;
  font-size: 20px;
  background-color: rgba($color-accent, 0.3);
  border: none;
  border-radius: $border-radius;
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  transition: $tr;
}

@media (hover: hover) and (pointer: fine) {
  .weather-form__btn:hover {
    background-color: $color-accent;
  }
}

// .weather-form,
// .weather-load,
// .weather-info {
//   grid-column: 1 / 4;
// }

.weather-load {
  display: flex;
  align-items: center;
  // height: 87px;
}

.weather-info__text {
  display: grid;
  grid-template-columns: 1fr auto;
  // grid-template-columns: 1fr auto auto;
  gap: 20px;
  font-size: 40px;

  @media (max-width: $mobile-break-point) {
    grid-template-columns: 1fr;
  }
}
</style>
