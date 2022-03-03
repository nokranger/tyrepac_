<template>
  <div style="background-color: #333333">
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
      <vue-photo-zoom-pro :url="imgUrl" high-url="200px"></vue-photo-zoom-pro>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default {
  components: {
    vuePhotoZoomPro
  },
  data () {
    return {
      imgUrl: 'https://i.imgur.com/rYKBx3L.png'
    }
  }
}
</script>
