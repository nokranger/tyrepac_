<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
    <div>
      <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-brand href="/">
          <div>
            <img style="width: 184.33px;height: auto;margin: 10px;" src="https://www.tyrepac.co.th/wp-content/uploads/2019/10/tyrepac-logo.png" alt="">
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" style="color: black"><i class="fas fa-align-justify"></i></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto align-left">
            <b-nav-item :href="'/' + langs + '/home'"><b style="font-size: 16px;font-weight: normal;">ยางรถยนต์</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/about'"><b style="font-size: 16px;font-weight: normal;">โปรโมชั่น</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/category'"><b style="font-size: 16px;font-weight: normal;">ประเภทยาง</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/joint-venture-company'"><b style="font-size: 16px;font-weight: normal;">ประเภทยาง</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/news'"><b style="font-size: 16px;font-weight: normal;">ศูนย์บริการติดตั้ง</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/contact'"><b style="font-size: 16px;font-weight: normal;">คำถามที่พบบ่อย</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/contact'"><b style="font-size: 16px;font-weight: normal;">สมัครร้านติดตั้ง</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/contact'"><b style="font-size: 16px;font-weight: normal;">ติดต่อเรา</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/contact'"><b style="font-size: 16px;font-weight: normal;">สั่งซื้อเลย</b></b-nav-item>
            <!-- <div class="dropdown" style="text-transform: uppercase;">
              <button class="dropbtn" style="height: 20px;width: 30px;"><div style="text-transform: uppercase;">{{langs}}</div></button>
              <div class="dropdown-content" style="position: relative;">
                <a v-on:click="setLangTh()">th</a>
                <a v-on:click="setLangEn()">en</a>
              </div>
            </div> -->
          </b-navbar-nav>
          <!-- <b-navbar-nav v-else-if="routess === 'en'" class="ml-auto align-left">
            <b-nav-item :href="'/' + langs + '/home'"><b style="font-size: 16px;font-weight: normal;">Home</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/about'"><b style="font-size: 16px;font-weight: normal;">About Us</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/category'"><b style="font-size: 16px;font-weight: normal;">Product</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/joint-venture-company'"><b style="font-size: 16px;font-weight: normal;">Join Venture Company</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/news'"><b style="font-size: 16px;font-weight: normal;">News and Events</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/contact'"><b style="font-size: 16px;font-weight: normal;">Contact us</b></b-nav-item>
            <div class="dropdown" style="text-transform: uppercase;">
              <button class="dropbtn" style="height: 20px;width: 30px;"><div style="text-transform: uppercase;">{{langs}}</div></button>
              <div class="dropdown-content" style="position: relative;">
                <a v-on:click="setLangTh()">th</a>
                <a v-on:click="setLangEn()">en</a>
              </div>
            </div>
          </b-navbar-nav> -->
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      qoute: 'Main Customers in Thailand',
      qoute2: 'For project achievements in thailand please contact us',
      langs: '',
      routess: ''
    }
  },
  created () {
    this.routess = localStorage.getItem('selectlang')
    if (this.routess === '' || this.routess === null || this.routess === 'null' || this.routess === undefined) {
      var path = window.location.pathname
      var split = path.split('/')
      console.log('selectset', split[1])
      this.$route.params.lang = split[1]
      this.routess = split[1]
      this.langs = this.$route.params.lang
      this.$route.params.lang = localStorage.getItem('selectlang')
      console.log('THs')
    } else if (this.routess === 'th') {
      path = window.location.pathname
      split = path.split('/')
      split[1] = 'en'
      console.log('selectset', split[1])
      this.$route.params.lang = split[1]
      console.log('THss')
      this.routess = localStorage.getItem('selectlang')
      this.langs = localStorage.getItem('selectlang')
      this.$route.params.lang = localStorage.getItem('selectlang')
    } else if (this.routess === 'en') {
      path = window.location.pathname
      split = path.split('/')
      split[1] = 'en'
      console.log('selectset', split[1])
      this.$route.params.lang = split[1]
      console.log('ENss')
      this.routess = localStorage.getItem('selectlang')
      this.langs = localStorage.getItem('selectlang')
      this.$route.params.lang = localStorage.getItem('selectlang')
    }
  },
  mounted () {
  },
  methods: {
    setLangTh () {
      var url = ''
      console.log('langTH', this.langs = 'th')
      // this.lang = 'TH'
      var path = window.location.pathname
      var split = path.split('/')
      split[1] = 'th'
      console.log('selectset', split[1])
      this.$route.params.lang = split[1]
      this.langs = split[1]
      this.routess = split[1]
      localStorage.setItem('selectlang', split[1])
      for (var i = 0; i < split.length; i++) {
        if (i + 1 < split.length) {
          url += '/' + split[i + 1]
        }
      }
      console.log('urlReplace', url)
      // location.reload()
      location.replace(url)
    },
    setLangEn () {
      var url = ''
      console.log('langTH', this.langs = 'en')
      // this.lang = 'TH'
      var path = window.location.pathname
      var split = path.split('/')
      split[1] = 'en'
      console.log('selectset', split[1])
      this.$route.params.lang = split[1]
      this.langs = split[1]
      this.routess = split[1]
      localStorage.setItem('selectlang', split[1])
      for (var i = 0; i < split.length; i++) {
        if (i + 1 < split.length) {
          url += '/' + split[i + 1]
        }
      }
      console.log('urlReplace', url)
      // location.reload()
      location.replace(url)
    }
  }
}
</script>
<style scoped src="@/assets/css/header.css">

</style>
