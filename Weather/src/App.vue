<script setup>
  import { ref, reactive, computed } from 'vue';

  // const textInput = ref('')
  // const containerAddClassInput = ref('containerAddClass')

</script>

<template>

  <!-- <div :class="containerAddClassInput">
    <input v-model="textInput" placeholder="Type here">
    <p>{{ textInput }}</p>
  </div> -->

  <div class="weather">
   <div class="container">

     <div class="card weather-form">
       <input type="text" class="weather-form__input" placeholder="Enter city">
       <button class="weather-form__btn">Search</button>
     </div>

     <div class="weather-info">

       <div class="weather-info__text">
         <p class="card">Minsk</p>
         <p class="card">28°C</p>
         <p class="card">Sunny</p>
       </div>

     </div>

   </div>

   <div class="weather-bg">
     <div>
       <!-- <img class="weather-bg__img bg" src="./assets/img/bg-01.jpg" alt="App Background">
       <img class="weather-bg__img overcast" src="./assets/img/overcast-02.jpg" alt="App Background">
       <img class="weather-bg__img partly-cloudy" src="./assets/img/partly-cloudy-01.jpg" alt="Partly Cloudy"> -->
       <img class="weather-bg__img sunny" src="./assets/img/sunny-02.jpg" alt="Sunny">
     </div>
   </div>

 </div>

</template>

<style scoped>

.weather {
 /* width: 100%;
 height: 100%; */
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 overflow: hidden;
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
 /* opacity: 0; */
 /* transition: var(--tr) ease-in-out; */
}

.weather .weather-bg__img.sunny {
 opacity: 0.5;
}
/* 
.weather .weather-bg__img.bg {
 opacity: 1;
} */

/* .weather.sunny .weather-bg__img:not(.sunny) {
 opacity: 0;
}

.weather.sunny .weather-bg__img.sunny {
 opacity: 1;
} */

.container {
 width: 100%;
 max-width: 1000px;
 margin: 0 auto;
 padding-left: 15px;
 padding-right: 15px;
 display: grid;
 grid-template-columns: 1fr 100px 200px;
 gap: 20px;
 box-sizing: border-box;
}

.card {
 /* background-color: var(--light);
 border-radius: var(--border-radius); */
 padding: 20px 30px;
 box-sizing: border-box;
}

.weather-form {
 display: flex;
 align-items: stretch;
 gap: 20px;
}

/*
  .containerAddClass {
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  } */

</style>
