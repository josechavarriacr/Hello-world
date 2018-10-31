<template lang="html">
  <div class="">
    <h1>{{hello}}</h1>
    <li v-for="item of posts">
      <h5>greeting: {{item.greeting}}</h5>
      <h5>server: {{item.server}}</h5>
    </li>
    <h2 v-for></h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'home',
  data() {
    return {
      hello: 'Hola desde vuejs',
      posts: [],
      errored: false
    }
  },
  mounted () {
     axios
       .get('http://chavarria.cr:1337/tests')
       .then(response => {
         this.posts= response.data
       })
       .catch(error => {
         this.errored = true
       })
       .finally(() => this.loading = false)
   }
}
</script>

<style lang="css">
</style>
