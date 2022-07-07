<template>
  <div v-if="languages === 'TH'" id="pic">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 4px #000; font-size: 27px;width: 100%;"
      fade
      indicators
    >
    <a href="/register-installer">
      <b-carousel-slide
        img-src="https://i.imgur.com/3zAXjBc.jpg"
      >
      </b-carousel-slide>
    </a>
    <a href="https://www.facebook.com/tyrepacthailand">
      <b-carousel-slide
        img-src="https://i.imgur.com/7FF5JUf.jpg"
      >
      </b-carousel-slide>
    </a>
    </b-carousel>
  </div>
  <div v-else-if="languages === 'EN'" id="pic">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 4px #000; font-size: 27px;width: 100%;"
      fade
      indicators
    >
    <a href="/register-installer">
      <b-carousel-slide
        img-src="https://i.imgur.com/Z2uf78r.png"
      >
      </b-carousel-slide>
    </a>
    <a href="https://www.facebook.com/tyrepacthailand">
      <b-carousel-slide
        img-src="https://i.imgur.com/dBAQW2k.png"
      >
      </b-carousel-slide>
    </a>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      languages: ''
    }
  },
  mounted () {
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
  }
}
</script>
