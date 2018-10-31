<template lang="html">
  <div class="">
    <h1>{{hello}}</h1>
    <p>{{post.title}}</p>
  </div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
  name:'home',
  data() {
    return {
      hello: 'Hola desde vuejs',
      post: [],
      errors: []
    }
  },
  created() {
      HTTP.get(`posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
}
</script>

<style lang="css">
</style>
