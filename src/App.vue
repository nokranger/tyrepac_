<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header></app-header>
    <router-view/>
    <app-footer3></app-footer3>
    <app-footer2></app-footer2>
  </div>
</template>
<script>
import header from './components/header'
import footer2 from '../src/components/footer2.vue'
import footer3 from '../src/components/footer3.vue'
export default {
  components: {
    'app-header': header,
    'app-footer2': footer2,
    'app-footer3': footer3
  },
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
