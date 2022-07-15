<template>
  <div id="app">
    <div v-if="cookiewebs === 1">
    </div>
    <div v-else-if="cookiewebs === 0">
    <div v-if="languages === 'TH'">
      <div class="cookie-consent-banner">
        <div class="cookie-consent-banner__inner">
          <div class="cookie-consent-banner__copy">
            <div class="cookie-consent-banner__header">เว็บไซต์นี้มีการใช้งานคุกกี้</div>
            <div class="cookie-consent-banner__description">
              เราใช้คุกกี้เพื่อนำเสนอคอนเทนต์ และโฆษณาที่ท่านอาจสนใจ   เพื่อให้ท่านได้รับประสบการณ์ที่ดี
              บนบริการของเราหากท่านใช้บริการเว็บไซต์ของเราต่อไป    โดยไม่ได้ปรับการตั้งค่าใดๆ เราเข้าใจว่า
              ท่านยินยอมที่จะรับคุกกี้บนเว็บไซต์ของเรา
            </div>
          </div>

          <div class="cookie-consent-banner__actions">
            <a style="cursor: pointer;" class="cookie-consent-banner__cta" v-on:click="cookieweb ()">
              ยอมรับ
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="languages === 'EN'">
      <div class="cookie-consent-banner">
        <div class="cookie-consent-banner__inner">
          <div class="cookie-consent-banner__copy">
            <div class="cookie-consent-banner__header">This website uses cookies and third party services</div>
            <div class="cookie-consent-banner__description">We use cookies to improve your experience on our website, to personalise content and ads, to provide social media features and to analyse our traffic. We share information about your use of our website with our social media, advertising and analytics partners, who may combine it with other information that you have provided to them or that they have collected from your use of their services. Please click [Accept All Cookies] if you agree with the use of all of our cookies.</div>
          </div>

          <div class="cookie-consent-banner__actions">
            <a style="cursor: pointer;" class="cookie-consent-banner__cta" v-on:click="cookieweb ()">
              Accept All Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <app-header id="header"></app-header>
    <router-view/>
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
    return {
      cookiewebs: 0,
      languages: 'TH'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollFunction)
    if (JSON.parse(sessionStorage.getItem('cookie')) === true) {
      console.log('truecookie')
      this.cookiewebs = 1
    } else {
      this.cookiewebs = 0
    }
    this.languages = JSON.parse(localStorage.getItem('languages'))
    console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      console.log('langNOTLANG')
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      console.log('langTH')
    } else if (this.languages === 'EN') {
      console.log('langEN')
    }
  },
  methods: {
    cookieweb () {
      console.log('cookie')
      sessionStorage.setItem('cookie', true)
      if (JSON.parse(sessionStorage.getItem('cookie')) === true) {
        console.log('truecookie')
        this.cookiewebs = 1
      } else {
        this.cookiewebs = 0
      }
    },
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
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2147483645;
  box-sizing: border-box;
  width: 100%;

  background-color: #F1F6F4;
}

.cookie-consent-banner__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
}

.cookie-consent-banner__copy {
  margin-bottom: 16px;
}

.cookie-consent-banner__header {
  margin-bottom: 8px;
  font-family: "CeraPRO-Bold", sans-serif, arial;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.cookie-consent-banner__description {
  font-family: "CeraPRO-Regular", sans-serif, arial;
  font-weight: normal;
  color: #838F93;
  font-size: 16px;
  line-height: 24px;
}

.cookie-consent-banner__cta {
  box-sizing: border-box;
  display: inline-block;
  min-width: 164px;
  padding: 11px 13px;
  border-radius: 2px;
  background-color: #2CE080;
  color: #FFF;
  text-decoration: none;
  text-align: center;
  font-family: "CeraPRO-Regular", sans-serif, arial;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}

.cookie-consent-banner__cta--secondary {
  padding: 9px 13px;
  border: 2px solid #3A4649;
  background-color: transparent;
  color: #2CE080;
}

.cookie-consent-banner__cta:hover {
  background-color: #20BA68;
}

.cookie-consent-banner__cta--secondary:hover {
  border-color: #838F93;
  background-color: transparent;
  color: #22C870;
}

.cookie-consent-banner__cta:last-child {
  margin-left: 16px;
}
</style>
