<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header id="header"></app-header>
    <router-view/>
    <!-- <back-to-top bottom="50px" right="50px">
      <button href="#header" type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top> -->
    <button @click="backtotop()" id="mybtn"><i class="fa fa-chevron-up"></i></button>
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
  },
  mounted () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  methods: {
    scrollFunction () {
      console.log('scroll')
      var mybutton = document.getElementById('mybtn')
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = 'block'
      } else {
        mybutton.style.display = 'none'
      }
    },
    backtotop () {
      console.log('backtotop')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
#app {
  font-family: 'Kanit', sans-serif;
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
/* in your css */
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
#mybtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 30;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: rgb(121, 116, 116);
  color: whitesmoke;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
#mybtn:hover {
  background-color: skyblue;
}
</style>
