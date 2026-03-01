<script setup>
  import { ref, reactive, computed } from 'vue';
  // import '@/assets/styles/global.scss'
  // import '@/styles/global.scss'

  const titleAddClass = ref('expClass global titleClass textClass')
  // const titleAddClass = ref('textClass titleClass')
  const containerAddClassButton = ref('containerClassButton')

  const message = ref('Hello Vue')
  message.value = 'Я сделал это!'

  const counter = reactive({
    count: 5,
  })
  const counterIncrement = () => counter.count += 1
  const clearIncrement = () => counter.count = 0

  const textInput = ref('')
  // const onInput = (event) => textInput.value = event.target.value
  const containerAddClassInput = ref('containerAddClass')

  setInterval(counterIncrement, 1000)
  const buttonClass = computed(() => counter.count > 10 ? 'redHtml' : '')

  // const buttonClass = ref('')

  // const isCounterTooBig = () => {
  //   if (counter.count > 10) { buttonClass.value = 'redHtml'}
  //   else { buttonClass.value = ''}
  // }

</script>

<template>
  <h1 :class="titleAddClass">{{ message }}</h1>

  <div :class="containerAddClassButton">
    <button :class="buttonClass" @click="counterIncrement">
      Count is: {{ counter.count }}
    </button>
    <button @click="clearIncrement">
      Clear count
    </button>
  </div>

  <div :class="containerAddClassInput">
    <!-- <input @input="onInput" :value="textInput" placeholder="Type here"> -->
    <input v-model="textInput" placeholder="Type here">
    <p>{{ textInput }}</p>
  </div>

</template>

<style scoped>
  /* :global(.titleClass) {
    color: red;
    text-align: center;
  }*/
  .titleClass {
    color: red;
  }

  .containerClassButton {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    row-gap: 15px;
    max-width: 200px;
    padding: 20px;
  }

  .containerAddClass {
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
</style>
