<template>
  <div class="home">
    <h1>{{title}}</h1>
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      message: 'What are you working on?'
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
