<template>
  <div style="margin-top: 160px">
    <div>
      <b-container>
        <br>
        <b-row>
          <b-col cols="3">
            <!-- <app-menu></app-menu> -->
          </b-col>
          <b-col cols="9">
            <div style="border-radius: 5px;border: thin solid #E0E0E0;width: 100%;">
              <div style="margin: 5px;">
                <b-container>
                  <b-row>
                    <b-col>
                      <div>
                        <b-form-select
                          style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
                          v-model="selected1"
                          :options="options"
                          name=""
                          id=""
                        >
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col>
                      <!-- <div>
                        <b-form-select
                          style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
                          v-model="selected2"
                          :options="options2"
                          name=""
                          id=""
                        >
                        </b-form-select>
                      </div> -->
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col cols="3" v-for="(brandd, index) in brand" :key="index" style="margin-bottom: 5px;">
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                        <div>
                          <a :href="'/tyrebrand' + '/' + brandd['Attribute 1 value(s)'] + '/' + brandd.ID">
                            <img :src="brandd.Images" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">{{brandd.Name}}</div>
                        <div style="margin-left: 5px;color: #005099;">฿{{ brandd['Regular price']}} ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary" href="/checkout">สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
// import menu from '../components/brand/menu.vue'
// import toyo from '../assets/json/tyre/toyo.json'
// import bridgestone from '../assets/json/tyre/bridgestone.json'
// import continantal from '../assets/json/tyre/continantal.json'
// import dunlop from '../assets/json/tyre/dunlop.json'
// import goodyear from '../assets/json/tyre/goodyear.json'
// import michelin from '../assets/json/tyre/michelin.json'
// import nankang from '../assets/json/tyre/nankang.json'
// import nitto from '../assets/json/tyre/nitto.json'
// import yokohama from '../assets/json/tyre/yokohama.json'
export default {
  components: {
    // 'app-menu': menu
  },
  data () {
    return {
      // toyo: toyo,
      // bridgestone: bridgestone,
      // continantal: continantal,
      // dunlop: dunlop,
      // goodyear: goodyear,
      // michelin: michelin,
      // nankang: nankang,
      // nitto: nitto,
      // yokohama: yokohama,
      brands: '',
      brand: '',
      aa: '',
      value: '2250',
      value2: 4,
      selected1: null,
      selected2: null,
      options: [
        { value: null, text: 'เรียงตาม ปีที่ผลิต' },
        { value: 'a', text: 'เรียงตาม ชื่อ' },
        { value: 'b', text: 'เรียงตาม ราคา' },
        { value: 'c', text: 'เรียงตาม ยอดนิยม' },
        { value: 'd', text: 'เรียงตาม อันดับ' }
      ],
      options2: [
        { value: null, text: '16' },
        { value: 'a', text: '32' },
        { value: 'b', text: '48' }
      ]
    }
  },
  mounted () {
    // console.log('brands', this.$route.params.name)
    // this.brands = this.$route.params.name
    // if (this.brands === 'nitto') {
    //   this.brand = this.nitto
    // } else if (this.brands === 'toyo') {
    //   this.brand = this.toyo
    // } else if (this.brands === 'bridgestone') {
    //   this.brand = this.bridgestone
    // } else if (this.brands === 'continantal') {
    //   this.brand = this.continantal
    // } else if (this.brands === 'dunlop') {
    //   this.brand = this.dunlop
    // } else if (this.brands === 'goodyear') {
    //   this.brand = this.goodyear
    // } else if (this.brands === 'yokohama') {
    //   this.brand = this.yokohama
    // } else if (this.brands === 'michelin') {
    //   this.brand = this.michelin
    // } else if (this.brands === 'nankang') {
    //   this.brand = this.nankang
    // }
  }
}
</script>
