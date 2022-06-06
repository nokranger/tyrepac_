<template>
  <div style='background-color: #333333;color: white;text-align: left;'>
    <div>
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="4" xl="4">
            <br>
            <br>
            <br>
            <br>
            <br>
            <div>
              <ul>
                <div v-on:mouseover="mouseover (1)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">1 </div><li>ยี่ห้อยาง</li>
                </div>
                <div v-on:mouseover="mouseover (2)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">2 </div><li>น้ำหนักและแรงดันสูงสุด</li>
                </div>
                <div v-on:mouseover="mouseover (3)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">3 </div><li>ทิศทางการติดตั้ง</li>
                </div>
                <div v-on:mouseover="mouseover (4)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">4 </div><li>รับน้ำหนักได้มากกว่าปกติ</li>
                </div>
                <div v-on:mouseover="mouseover (5)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">5 </div><li>ขนาดของยาง</li>
                </div>
                <div v-on:mouseover="mouseover (6)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">6 </div><li>ประเทศที่ผลิต</li>
                </div>
              </ul>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="4" xl="4">
            <div>
              <br />
              <h1 style="color: white;text-align: center;font-weight: bold;">ข้อมูลแก้มยาง</h1>
              <br />
              <template>
                <div v-if="statebrand == 1">
                  <img :style="styles" :src="tyrebrand" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="stateweight == 1">
                  <img :style="styles" :src="tyreweight" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="stateinstallation == 1">
                  <img :style="styles" :src="tyreinstallation" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="stateweight == 1">
                  <img :style="styles" :src="tyreweight" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="statesize == 1">
                  <img :style="styles" :src="tyresize" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="statemade == 1">
                  <img :style="styles" :src="tyremade" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="stateserie == 1">
                  <img :style="styles" :src="tyreserie" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="stateweek == 1">
                  <img :style="styles" :src="tyreweek" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="statecode == 1">
                  <img :style="styles" :src="tyrecode" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="stateyear == 1">
                  <img :style="styles" :src="tyreyear" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="statetubless == 1">
                  <img :style="styles" :src="tyretubless" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <div v-if="statetype == 1">
                  <img :style="styles" :src="tyretype" alt="" width="345px" height="345px" v-on:mouseover="mousezoom()">
                </div>
                <!-- <img style="position:absolute;z-index: 1;" :src="imgUrl" alt="" width="345px" height="345px"> -->
                <div v-if="statezoom == 1">
                  <vue-photo-zoom-pro :highUrl="imgUrl">
                    <img style="z-index: 3" :src="imgUrl" alt="" width="345px" height="345px">
                  </vue-photo-zoom-pro>
                </div>
              </template>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="4" xl="4">
            <br>
            <br>
            <br>
            <br>
            <br>
            <div style="margin-left: 100px;">
              <ul>
                <div v-on:mouseover="mouseover (7)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">7</div><li>รุ่นของยาง</li>
                </div>
                <div v-on:mouseover="mouseover (8)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">8</div><li>สัปดาห์ของยาง</li>
                </div>
                <div v-on:mouseover="mouseover (9)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">9</div><li>รหัสของผู้ผลิต</li>
                </div>
                <div v-on:mouseover="mouseover (10)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">10</div><li>ปีที่ผลิต</li>
                </div>
                <div v-on:mouseover="mouseover (11)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">11</div><li>ยางที่ไม่ใช้ยางใน</li>
                </div>
                <div v-on:mouseover="mouseover (12)">
                  <div style="display: inline-block;font-size: 22px;margin-right: 5px;background-color: #005199;border-radius: 50%;width: 30px;text-align: center;">12</div><li>ประเภทของยาง</li>
                </div>
              </ul>
            </div>
          </b-col>
        </b-row>
        <br>
        <br>
        <br>
      </b-container>
    </div>
  </div>
</template>
<script>
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default {
  components: {
    VuePhotoZoomPro
    // VueMagnifier
  },
  data () {
    return {
      imgUrl: 'https://i.imgur.com/rYKBx3L.png',
      img: '',
      glass: '',
      w: '',
      h: '',
      bw: '',
      tyrebrand: '',
      tyreweight: '',
      tyreinstallation: '',
      tyreextra: '',
      tyresize: '',
      tyremade: '',
      tyreserie: '',
      tyreweek: '',
      tyrecode: '',
      tyreyear: '',
      tyretubless: '',
      tyretype: '',
      styles: {},
      statebrand: 0,
      stateweight: 0,
      stateinstallation: 0,
      stateextra: 0,
      statesize: 0,
      statemade: 0,
      stateserie: 0,
      stateweek: 0,
      statecode: 0,
      stateyear: 0,
      statetubless: 0,
      statetype: 0,
      statezoom: 1
    }
  },
  mounted () {
  },
  methods: {
    mouseover (value) {
      // console.log('mouseovers', value)
      if (value === 1) {
        this.statebrand = 1
        this.tyrebrand = 'https://i.imgur.com/cEocsB6.png'
      } else if (value === 2) {
        this.stateweight = 1
        this.tyreweight = 'https://i.imgur.com/bEnLDIJ.png'
      } else if (value === 3) {
        this.stateinstallation = 1
        this.tyreinstallation = 'https://i.imgur.com/P22As2c.png'
      } else if (value === 4) {
        this.stateextra = 1
        this.tyreextra = 'https://i.imgur.com/sys0wSf.png'
      } else if (value === 5) {
        this.statesize = 1
        this.tyresize = 'https://i.imgur.com/UzxV8EQ.png'
      } else if (value === 6) {
        this.statemade = 1
        this.tyremade = 'https://i.imgur.com/FEstEpi.png'
      } else if (value === 7) {
        this.stateserie = 1
        this.tyreserie = 'https://i.imgur.com/N7vLLOj.png'
      } else if (value === 8) {
        this.stateweek = 1
        this.tyreweek = 'https://i.imgur.com/H8KYROv.png'
      } else if (value === 9) {
        this.statecode = 1
        this.tyrecode = 'https://i.imgur.com/4AYub09.png'
      } else if (value === 10) {
        this.stateyear = 1
        this.tyreyear = 'https://i.imgur.com/4KUnUJs.png'
      } else if (value === 11) {
        this.statetubless = 1
        this.tyretubless = 'https://i.imgur.com/wj9aKA2.png'
      } else if (value === 12) {
        this.statetype = 1
        this.tyretype = 'https://i.imgur.com/wtTMmXE.png'
      }
      this.styles = {
        position: 'absolute',
        zIndex: 2
      }
    },
    mousezoom () {
      console.log('zoom')
      this.statebrand = 0
      this.stateweight = 0
      this.stateinstallation = 0
      this.stateextra = 0
      this.statesize = 0
      this.statemade = 0
      this.stateserie = 0
      this.stateweek = 0
      this.statecode = 0
      this.stateyear = 0
      this.statetubless = 0
      this.statetype = 0
      this.statezoom = 1
    }
  }
}
</script>
<style scoped>
/* img {
  position:absolute;
} */
li {
  list-style-type: none;
  margin-top: 15px;
  font-size: 22px;
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
</style>
