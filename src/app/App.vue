<template>
  <div id="app">



      <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">



        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand>
          <router-link id="brand-link" class="nav-link" to="/home">
            FlowChart
            </router-link>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">


          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav right>
              <router-link class="nav-link" to="/error500wsod">500 Error WSOD</router-link>
              <router-link class="nav-link" to="/error403">403 Errors</router-link>
              <router-link class="nav-link" to="/error404">404 Errors</router-link>
            </b-navbar-nav>


          </b-navbar-nav>

        </b-collapse>
        </div>
      </div>


      <br><br>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>

      </div>

  </div>
</template>

<script>
export default {
  name: 'App'
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
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
#brand-link{
  color: #fff;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
