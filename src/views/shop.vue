<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <br>
        <b-row>
          <b-col cols="3">
              <div>
                <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                  <div style="text-align: left; font-weight: bold;margin: 5px;">
                    <div style="margin-left: 5px;">กรองตามความกว้าง</div>
                    <div>
                      <b-input list="width" placeholder="ทุกๆ ความกว้าง" v-model="width" v-on:change="filterwidth (width)"></b-input>
                        <datalist id="width" >
                          <option value="155"></option>
                          <option value="165"></option>
                          <option value="175"></option>
                        </datalist>
                      <br />
                    </div>
                    <div style="margin-left: 5px;">กรองตามซีรี่ย์ยาง</div>
                    <div>
                      <b-input placeholder="ทุกๆ ซีรี่ย์ยาง"></b-input>
                      <br />
                    </div>
                    <div style="margin-left: 5px;">กรองตามขนาดวงล้อ</div>
                    <div>
                      <b-input placeholder="ทุกๆ ขนาดวงล้อ"></b-input>
                      <br />
                    </div>
                    <div style="margin-left: 5px;">กรองตามรูปแบบยาง</div>
                    <div>
                      <b-input list="tyre" placeholder="ทุกๆ รุ่นยาง" v-model="tyre" v-on:change="filtertyre (tyre)"></b-input>
                      <datalist id="tyre" >
                        <option value="suv"></option>
                        <option value="suv"></option>
                      </datalist>
                      <br />
                    </div>
                    <div>
                      <label style="margin-left: 5px;" for="range-2">กรองตามราคา</label>
                      <b-form-input
                        id="range-2"
                        v-model="value"
                        type="range"
                        min="2250"
                        max="21100"
                        step="10"
                      ></b-form-input>
                      <div style="margin-left: 5px;" class="mt-2">ราคา {{ 2250 }} - {{ value }}</div>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div style="border-radius: 5px; border: thin solid #e0e0e0">
                  <div>ยางรถยนต์</div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/dFBbXVM.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/9JpV8e2.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/yDA4cCy.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/39bMB69.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/iBpm6uT.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/yvhHUsj.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/TgbxVn2.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/EByvNfm.png" alt="" />
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <img src="https://i.imgur.com/iiTZGZR.png" alt="" />
                  </div>
                </div>
              </div>
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
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <!-- {{brand}} -->
                    <b-col cols="3" v-for="(brandd, index) in brand" :key="index" style="margin-bottom: 5px;">
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                        <div>
                          <a v-on:click="buydetail (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">
                            <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">{{brandd.name}}</div>
                        <div style="margin-left: 5px;color: #005099;">฿{{ brandd.regularPrice}} ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary" v-on:click="buy (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">สั่งซื้อเลย</b-button>
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
    // 'app-menu': menu
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
        // { value: 'createAt', text: 'เรียงตาม ปีที่ผลิต' },
        { value: 'name', text: 'เรียงตาม ชื่อ' },
        { value: 'regularPrice', text: 'เรียงตาม ราคา' }
        // { value: 'c', text: 'เรียงตาม ยอดนิยม' },
        // { value: 'd', text: 'เรียงตาม อันดับ' }
      ],
      options2: [
        { value: null, text: '16' },
        { value: 'a', text: '32' },
        { value: 'b', text: '48' }
      ],
      tyre: '',
      filterss: '',
      width: ''
    }
  },
  mounted () {
    this.filterss = localStorage.getItem('filter')
    this.filterss = JSON.parse(this.filterss)
    // fetch('http://119.63.90.135:2083/product', {
    //   method: 'get',
    //   mode: 'no-cors',
    //   headers: {}
    // }).then((res) => {
    //   console.log(res)
    // })
    var config = {
      headers: { 'Access-Control-Allow-Origin': '*' },
      method: 'get',
      mode: 'cors',
      url: 'http://119.63.90.135:2083/product'
    }
    // console.log('all null')
    axios(config).then(res => {
      // console.log(res.data.data)
      this.brand = res
      console.log(this.brand)
    })
    // console.log('filter', this.filterss)
    // console.log('check', this.filterss.diameter)
    // if (this.filterss.width !== null) {
    //   axios.get(apiURL + '/productByFilter', { width: this.filterss.width }).then((res) => {
    //     console.log('width')
    //     this.brand = res.data.data.products
    //   })
    // } else if (this.filterss.height !== null) {
    //   axios.get(apiURL + '/productByFilter', { height: this.filterss.height }).then((res) => {
    //     console.log('height')
    //     console.log(res.data.data.products)
    //     this.brand = res.data.data.products
    //   })
    // } else if (this.filterss.diameter !== null) {
    //   axios.get(apiURL + '/productByFilter', { diameter: this.filterss.diameter }).then((res) => {
    //     console.log('diameter')
    //     console.log(res.data.data.products)
    //     this.brand = res.data.data.products
    //   })
    // } else
    if (this.filterss.diameter === null) {
      // console.log('all null')
      // axios.get(apiURL + '/product').then(res => {
      //   // console.log(res.data.data)
      //   this.brand = res.data.data.products
      // })
    } else if (this.filterss.height === null) {
      // console.log('all null')
      // axios.get(apiURL + '/product').then(res => {
      //   // console.log(res.data.data)
      //   this.brand = res.data.data.products
      // })
    } else if (this.filterss === null) {
    }
    // console.log('fasfsaf', toyo)
    // await axios.get(apiURL + '/product').then(res => {
    //   console.log(res.data.data)
    //   this.brand = res.data.data.products
    // })
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
      // console.log('sortsssss', this.newArray)
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
    },
    filtertyre (value) {
      console.log('valuefilters', value)
      // var data = JSON.stringify({
      //   // eslint-disable-next-line quote-props
      //   'type': 'suv'
      // })
      var config = {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        url: apiURL + '/productByFilter',
        // headers: {
        //   'Content-Type': 'application/json, text/plain, */*',
        //   'Access-Control-Allow-Origin': '*'
        // },
        data: {
          type: value
        }
        // data: data
      }
      // var config = {
      //   method: 'get',
      //   url: apiURL + '/productByFilter',
      //   // headers: {
      //   //   'Content-Type': 'application/json'
      //   // },
      //   params: {
      //     type: value
      //   }
      // }
      console.log('valuefilters')
      axios(config).then((res) => {
        console.log(res)
        this.brand = res.data.data.products
      })
      // axios.post(apiURL + '/productByFilter', { type: value }).then(res => {
      //   // console.log(res.data.data)
      //   this.brand = res.data.data.products
      // })
    },
    filterwidth (value) {
      console.log('valuefilterswidth', value)
      var data = JSON.stringify({
        // eslint-disable-next-line quote-props
        'width': value
      })
      var config = {
        method: 'get',
        url: apiURL + '/productByFilter',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
      // var config = {
      //   method: 'get',
      //   url: apiURL + '/productByFilter',
      //   // headers: {
      //   //   'Content-Type': 'application/json'
      //   // },
      //   params: {
      //     type: value
      //   }
      // }
      console.log('valuefilters', data)
      axios(config).then((res) => {
        console.log(res)
        this.brand = res.data.data.products
      })
    },
    buy (url, img, name, price, value, type, sku, brand) {
      console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: url,
        img: img,
        name: name,
        price: price,
        value: this.$refs[value][0].localValue,
        type: type,
        sku: sku,
        brand: brand
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      location.replace('/cart')
    },
    buydetail (url, img, name, price, value, type, sku, brand) {
      console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: url,
        img: img,
        name: name,
        price: price,
        value: 4,
        type: type,
        sku: sku,
        brand: brand
      }
      localStorage.setItem('cartdetail', JSON.stringify(cart))
      location.replace(url)
    }
  }
}
</script>
