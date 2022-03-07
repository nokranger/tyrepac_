<template>
  <div style="background-color: #333333">
    <!-- <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/zeknoss/vue-magnifier@v0.2.0/dist/css/vue-magnifier.css" media="screen" /> -->
    <div>
      <br />
      <h1 style="color: white">ข้อมูลแก้มยาง</h1>
      <br />
      <img
        src="https://i.imgur.com/rYKBx3L.png"
        width="500"
        height="500"
        alt=""
      />
      <!-- <vue-magnifier src="default-image-source" src-large="large-image-source"></vue-magnifier> -->
      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
// import vuePhotoZoomPro from 'vue-photo-zoom-pro'
// import VueMagnifier from "@/components/vue-magnifier";
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default {
  components: {
    // vuePhotoZoomPro
    // VueMagnifier
  },
  data () {
    return {
      imgUrl: 'https://i.imgur.com/rYKBx3L.png'
    }
  }
}
</script>
