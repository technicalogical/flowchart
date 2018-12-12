<template>
  <div class="home">
    <h1>{{title}}</h1>
    <h4>{{ message }}</h4>

    <b-card-group deck
                  class="mb-3">
      <b-card title="403 Error"
          img-src=""
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      The 403 Forbidden error is an HTTP status code which means that accessing the page or resource you were trying to reach is absolutely forbidden for some reason. This article contains basic troubleshooting instructions for 403 Forbidden errors.
    </p>
    <router-link to="error403">
      <b-button variant="primary">403 Errors</b-button>
    </router-link>
  </b-card>
  
  <b-card title="404 Error"
          img-src=""
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      The HTTP 404, 404 Not Found, and 404 error message is a Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications, to indicate that the client was able to communicate with a given server, but the server could not find what was requested.
    </p>
    <router-link to="error404">
      <b-button variant="primary">404 Errors</b-button>
    </router-link>
  </b-card> 
  
  <b-card title="500 WSOD"
          img-src=""
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      500 Internal Server Error. The 500 status code, or Internal Server Error, means that server cannot process the request for an unknown reason. 
    </p>
    <router-link to="error500wsod">
      <b-button variant="primary">500 Errors</b-button>
    </router-link>
  </b-card> 
  </b-card-group>
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
