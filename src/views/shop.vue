<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <br>
        <b-row>
          <b-col cols="3">
            <app-menu></app-menu>
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
                          name=""
                          id=""
                          v-on:change="sortprice(selected1)"
                          :options="options"
                        >
                        <option value="">ราคา</option>
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    {{brand}}
                    <b-col cols="3" v-for="(brandd, index) in brand" :key="index" style="margin-bottom: 5px;">
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                        <div>
                          <a :href="'/tyrebrand' + '/' + brandd.proId + '/' + brandd.sku">
                            <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">{{brandd.name}}</div>
                        <div style="margin-left: 5px;color: #005099;">฿{{ brandd.regularPrice}} ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
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
import menu from '../components/brand/menu.vue'
import toyo from '../assets/json/tyre/toyo.json'
import bridgestone from '../assets/json/tyre/bridgestone.json'
import continantal from '../assets/json/tyre/continantal.json'
import dunlop from '../assets/json/tyre/dunlop.json'
import goodyear from '../assets/json/tyre/goodyear.json'
import michelin from '../assets/json/tyre/michelin.json'
import nankang from '../assets/json/tyre/nankang.json'
import nitto from '../assets/json/tyre/nitto.json'
import yokohama from '../assets/json/tyre/yokohama.json'
import apiURL from '../assets/js/connect.js'
import axios from 'axios'
export default {
  components: {
    'app-menu': menu
  },
  data () {
    return {
      apiURL: apiURL,
      newArray: [],
      toyo: toyo,
      bridgestone: bridgestone,
      continantal: continantal,
      dunlop: dunlop,
      goodyear: goodyear,
      michelin: michelin,
      nankang: nankang,
      nitto: nitto,
      yokohama: yokohama,
      brands: '',
      brand: '',
      aa: '',
      value: '2250',
      value2: 4,
      selected1: null,
      selected2: null,
      options: [
        { value: null, text: 'เรียงลำดับ' },
        { value: 'createAt', text: 'เรียงตาม ปีที่ผลิต' },
        { value: 'name', text: 'เรียงตาม ชื่อ' },
        { value: 'regularPrice', text: 'เรียงตาม ราคา' },
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
  async mounted () {
    await axios.get(apiURL + '/product').then(res => {
      console.log(res.data.data)
      this.brand = res.data.data.products
    })
    this.brands = window.location.pathname
    // await this.sortaa()
    // await this.sortprice()
    // for (const k in this.brand) {
    //   const newObj = this.brand[k]
    //   // console.log(newObj)
    //   this.newArray.push(newObj)
    //   // console.log(this.newArray)
    // }
    // console.log('sortsssss', this.newArray)
    // this.sortaa = this.newArray
    // this.sortaa.sort((a, b) => {
    //   return b.regularPrice - a.regularPrice
    // })
    // this.brand = this.sortaa
    // console.log('sortafasfasf', this.sortaa)
  },
  methods: {
    sortprice (value) {
      console.log('value', value)
      // this.brand = this.brand
      for (const k in this.brand) {
        const newObj = this.brand[k]
        // console.log(newObj)
        this.newArray.push(newObj)
        // console.log(this.newArray)
      }
      console.log('sortsssss', this.newArray)
      this.sortaa = this.brand
      if (value.toString() === 'regularPrice') {
        this.sortaa.sort((a, b) => {
          return b[value.toString()] - a[value.toString()]
        })
        this.brand = this.sortaa
        console.log('regu', this.sortaa)
      } else if (value.toString() === 'name') {
        this.sortaa.sort((a, b) => {
          return a.sku > b.sku ? 1 : b.sku > a.sku ? -1 : 0
        })
        this.brand = this.sortaa
        console.log('regu', this.sortaa)
      }
    }
  }
}
</script>
