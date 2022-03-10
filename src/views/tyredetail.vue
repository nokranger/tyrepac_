<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <b-row>
          <b-col cols="3">
                <div style="border-radius: 5px; border: thin solid #e0e0e0">
                  <div style="font-size: 20px;font-weight: bold;">ยางรถยนต์</div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=8">
                      <img src="https://i.imgur.com/dFBbXVM.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=6">
                      <img src="https://i.imgur.com/9JpV8e2.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="">
                      <img src="https://i.imgur.com/yDA4cCy.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=1">
                      <img src="https://i.imgur.com/39bMB69.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=">
                      <img src="https://i.imgur.com/iBpm6uT.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=3">
                      <img src="https://i.imgur.com/yvhHUsj.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=">
                      <img src="https://i.imgur.com/TgbxVn2.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=">
                      <img src="https://i.imgur.com/EByvNfm.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=">
                      <img src="https://i.imgur.com/iiTZGZR.png" alt="" style="width:100%" />
                    </a>
                  </div>
                </div>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
              <b-container>
                <b-row>
                  <b-col>
                    <br>
                    <div>
                      <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 300px;" alt="">
                    </div>
                  </b-col>
                  <b-col>
                    <br>
                    <!-- {{brand}} -->
                    <div style="color: #005099;font-weight: bold;font-size: 25px;">
                      {{brand.name}}
                    </div>
                    <div style="color: #005099;font-weight: bold;">
                      ฿{{brand.regularPrice}} ต่อเส้น
                    </div>
                    <br>
                    <br>
                    <!-- {{brand.sku}} -->
                    <div style="margin: 5px;">
                      <b-form-spinbutton style="width: 30%;" id="demo-sb" v-model="value" min="4" max="100"></b-form-spinbutton>
                      <br>
                      <b-button variant="primary" v-on:click="buy (value)">สั่งซื้อเลย</b-button>
                    </div>
                    <div style="margin-left: 5px;">
                      <b-button style="background-color: #00c300;border: none;" href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank">แชท + ซื้อผ่าน LINE</b-button>
                    </div>
                    <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;font-size: 14px;">
                      <div style="margin: 5px;">SKU: {{brand.sku}}</div>
                      <div style="margin: 5px;">Categories: {{brand.type}}</div>
                      <div style="margin: 5px;">Tags: {{brand.name}}, {{brand.type}}</div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <br>
            <div>
              <b-container>
                <b-row>
                  <b-col>
                    <div style="text-align: left;font-weight: bold;color: #005099;">
                      <div style="color: black;">ข้อมูลเพิ่มเติม</div>
                      <br>
                      <b-table :items="items" :fields="fields" thead-class="d-none">
                      <template v-slot:cell(ชื่อ)="data">
                        <div style="color: #005099;">{{data.item.names}}</div>
                      </template>
                      <template v-slot:cell(รายละเอียด)="data">
                        <div style="color: #005099;font-weight: none;">{{data.item.detail}}</div>
                      </template>
                      </b-table>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <br>
            <br>
            <div style="text-align: left;font-weight: bold;color: black;">
              <app-recommend></app-recommend>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import toyo from '../assets/json/tyre/toyo.json'
import apiURL from '../assets/js/connect.js'
import axios from 'axios'
import recommend from '../components/home/recommend2.vue'
export default {
  components: {
    'app-recommend': recommend
  },
  data () {
    return {
      apiURL: apiURL,
      toyo: toyo,
      value: 4,
      code: '',
      items: [],
      fields: ['ชื่อ', 'รายละเอียด'],
      cart: [],
      brand: []
    }
  },
  mounted () {
    console.log(location.href)
    var split = location.href
    split = split.split('?')
    if (split.length > 1) {
      console.log('good')
      console.log('fsafaf')
      split = split[1].split('=')
      console.log('tyre', split[0])
      console.log('value', split[1])
      if (split[0] === 'brand') {
        console.log('brands')
        var config = {
          method: 'get',
          url: 'http://119.63.90.135:2083/product'
        }
        axios(config).then(res => {
          this.brand = res.data.data.products
          const brands = this.brand.find((post, index) => {
            if (post.sku === split[1]) {
              return true
            }
          })
          console.log('detail', brands)
          this.brand = brands
          this.items = [
            { names: 'Tyre Brand', detail: brands.brandId },
            { names: 'รุ่นยาง', detail: brands.type },
            { names: 'ความกว้าง', detail: brands.width },
            { names: 'ขนาดวงล้อ', detail: brands.height },
            { names: 'ซีรี่ย์ยาง', detail: brands.diameter },
            { names: 'Load Index', detail: brands.loadIndex },
            { names: 'Speed Index', detail: brands.speedIndex }
          ]
        })
      }
    }
    // console.log('code', this.$route.params.name)
    // console.log(JSON.parse(localStorage.getItem('cart')))
    // this.cart = JSON.parse(localStorage.getItem('cartdetail'))
    // this.brand = this.cart.brand
    // this.items = [
    //   { names: 'Tyre Brand', detail: this.brand.brandId },
    //   { names: 'รุ่นยาง', detail: this.brand.type },
    //   { names: 'ความกว้าง', detail: this.brand.width },
    //   { names: 'ขนาดวงล้อ', detail: this.brand.height },
    //   { names: 'ซีรี่ย์ยาง', detail: this.brand.diameter },
    //   { names: 'Load Index', detail: this.brand.loadIndex },
    //   { names: 'Speed Index', detail: this.brand.speedIndex }
    // ]
  },
  methods: {
    buy (value) {
      console.log('buy', this.brand.sku)
      // console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        img: 'https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg',
        name: this.brand.name,
        price: this.brand.regularPrice,
        value: value,
        type: this.brand.type,
        sku: this.brand.sku,
        brand: this.brand.brand
      }
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
      location.replace('/checkout')
    },
    getcode (code) {
      // console.log('toyo', this.toyo)
      // console.log('codefilter', code)
      return this.toyo.filter(
        (toyo) => {
          // console.log('toyofilter', toyo.Name)
          return code === toyo.Name
        }
      )
    },
    getObjectByValue (array, key, value) {
      return array.filter(function (object) {
        return object[key] === value
      })
    }
  }
}
</script>
<style scoped>
</style>
