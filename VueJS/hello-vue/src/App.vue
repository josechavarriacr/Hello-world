<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ShowDataApi/>
  </div>
</template>

<script>
import ShowDataApi from './components/ShowDataApi.vue'

export default {
  name: 'app',
  components: {
    ShowDataApi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
