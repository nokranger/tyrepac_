<template>
  <div style='background-color: #333333;color: white;text-align: left;'>
    <!-- <link rel="stylesheet" href="/css/magnify.css"> -->
    <div>
      <b-container>
        <b-row>
          <b-col>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div>
              <ul>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">1. </div><li>ยี่ห้อยาง</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">2. </div><li>น้ำหนักและแรงดันสูงสุด</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">3. </div><li>ทิศทางการติดตั้ง</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">4. </div><li>รับน้ำหนักได้มากกว่าปกติ</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">5. </div><li>ขนาดของยาง</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">6. </div><li>ประเทศที่ผลิต</li>
                </div>
              </ul>
            </div>
          </b-col>
          <b-col>
            <div>
              <br />
              <h1 style="color: white;text-align: center;font-weight: bold;">ข้อมูลแก้มยาง</h1>
              <br />
              <img
                src='https://i.imgur.com/rYKBx3L.png'
                width='500'
                height='500'
                alt=''
              />
            </div>
          </b-col>
          <b-col>
            <br>
            <br>
            <br>
            <br>
            <br>
            <dir>
              <ul>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">7.</div><li>รุ่นของยาง</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">8.</div><li>สัปดาห์ของยาง</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">9.</div><li>รหัสของผู้ผลิต</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">10.</div><li>ปีที่ผลิต</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">11.</div><li>ยางที่ไม่ใช้ยางใน</li>
                </div>
                <div>
                  <div style="display: inline-block;font-size: 25px;margin-right: 5px;">12.</div><li>ประเภทของยาง</li>
                </div>
              </ul>
            </dir>
          </b-col>
        </b-row>
        <br>
        <br>
        <br>
      </b-container>
      <div>
        <img class="magnifiedImg" src="https://3.bp.blogspot.com/-uu5s-2BvvgA/ToLadCZShOI/AAAAAAAAALE/_aj4_xuXd3E/s1600/Green+nature+wallpaper+%25283%2529.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
// import vuePhotoZoomPro from 'vue-photo-zoom-pro'
// import VueMagnifier from '@/components/vue-magnifier';
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default {
  components: {
    // vuePhotoZoomPro
    // VueMagnifier
  },
  data () {
    return {
      imgUrl: 'https://i.imgur.com/rYKBx3L.png',
      img: '',
      glass: '',
      w: '',
      h: '',
      bw: ''
    }
  },
  mounted () {
  },
  methods: {
    // async magnify (imgID, zoom) {
    //   // eslint-disable-next-line no-unused-vars
    //   this.img = document.getElementById(imgID)
    //   this.glass = document.createElement('DIV')
    //   this.glass.setAttribute('class', 'img-magnifier-glass')
    //   this.img.parentElement.insertBefore(this.glass, this.img)
    //   this.glass.style.backgroundImage = "url('" + this.img.src + "')"
    //   this.glass.style.backgroundRepeat = 'no-repeat'
    //   this.glass.style.backgroundSize = (this.img.width * zoom) + 'px ' + (this.img.height * zoom) + 'px'
    //   this.bw = 3
    //   this.w = this.glass.offsetWidth / 2
    //   this.h = this.glass.offsetHeight / 2
    //   this.glass.addEventListener('mousemove', this.moveMagnifier())
    //   this.img.addEventListener('mousemove', this.moveMagnifier())
    //   this.glass.addEventListener('touchmove', this.moveMagnifier())
    //   this.img.addEventListener('touchmove', this.moveMagnifier())
    //   await this.moveMagnifier()
    // },
    // async moveMagnifier (e) {
    //   var pos, x, y
    //   await e.preventDefault()
    //   pos = this.getCursorPos(e)
    //   x = pos.x
    //   y = pos.y
    //   if (x > this.img.width - (this.w / this.zoom)) { x = this.img.width - (this.w / this.zoom) }
    //   if (x < this.w / this.zoom) { x = this.w / this.zoom }
    //   if (y > this.img.height - (this.h / this.zoom)) { y = this.img.height - (this.h / this.zoom) }
    //   if (y < this.h / this.zoom) { y = this.h / this.zoom }
    //   this.glass.style.left = (x - this.w) + 'px'
    //   this.glass.style.top = (y - this.h) + 'px'
    //   this.glass.style.backgroundPosition = '-' + ((x * this.zoom) - this.w + this.bw) + 'px -' + ((y * this.zoom) - this.h + this.bw) + 'px'
    // },
    // getCursorPos (e) {
    //   // eslint-disable-next-line one-var
    //   var a, x = 0, y = 0
    //   e = e || window.event
    //   a = this.img.getBoundingClientRect()
    //   x = e.pageX - a.left
    //   y = e.pageY - a.top
    //   x = x - window.pageXOffset
    //   y = y - window.pageYOffset
    //   return { x: x, y: y }
    // }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
  margin-top: 15px;
  font-size: 25px;
  display: inline-block;
}
* {box-sizing: border-box;}
.img-magnifier-container {
  position:relative;
}
.img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}

p, h2{
  font: bold 15px 'Open Sans', sans-serif;
  color: #222;
  text-align: center;
}
h2{
  font-size: 35px;
  margin: 10px 0;
}
img{
  width: 700px;
  display: block;
  margin: auto;
}
.magnify{
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  z-index: 20;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: inset 0 0 20px rgba(0,0,0,.5);
  display: none;
  cursor: none;
}
</style>
