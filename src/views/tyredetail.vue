<template>
  <div v-if="languages === 'TH'" style="margin-top: 180px">
    <div>
      <b-container>
        <b-row>
          <b-col cols="3">
                <div style="border-radius: 5px; border: thin solid #e0e0e0">
                  <div style="font-weight: bold;font-size: 20px;">ยางรถยนต์</div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=8">
                      <img src="https://i.imgur.com/dFBbXVM.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px;">
                    <a href="/shop?brand=7">
                      <img src="https://i.imgur.com/9JpV8e2.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=6">
                      <img src="https://i.imgur.com/yDA4cCy.png" alt="" style="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=1">
                      <img src="https://i.imgur.com/39bMB69.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=2">
                      <img src="https://i.imgur.com/iBpm6uT.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=3">
                      <img src="https://i.imgur.com/yvhHUsj.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=4">
                      <img src="https://i.imgur.com/TgbxVn2.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=5">
                      <img src="https://i.imgur.com/EByvNfm.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=9">
                      <img src="https://i.imgur.com/iiTZGZR.png" alt="" />
                    </a>
                  </div>
                </div>
          </b-col>
          <b-col>
            <!-- <b-button v-on:mouseover="testmouse()">test</b-button> -->
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
              <b-container>
                <b-row>
                  <b-col>
                    <br>
                    <div>
                      <img :src="'http://119.63.90.135:2083/image?image_path=' + brand.image" style="width: 300px;" alt="">
                    </div>
                  </b-col>
                  <b-col>
                    <br>
                    <!-- {{brand}} -->
                    <div style="color: #005099;font-weight: bold;font-size: 25px;">
                      {{brand.name}}
                    </div>
                    <div style="color: #005099;font-weight: bold;">
                      ฿{{(brand.regularPrice).toLocaleString('en')}} ต่อเส้น
                    </div>
                    <br>
                    <br>
                    <!-- {{brand.sku}} -->
                    <div style="margin: 5px;">
                      <b-form-spinbutton style="width: 30%;" id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
                      <br>
                      <b-button variant="primary" v-on:click="buycart (value)">สั่งซื้อเลย</b-button>
                      <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (value)"></i>
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
                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <div style="font-size: 25px;">
                      <div style="text-align: left;display: inline-block;margin: 10px;color: #4267B2;">
                      <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
                        <i class="fa-brands fa-facebook-square"></i>
                      </a>
                      </div>
                      <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
                        <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
                          <i class="fa-brands fa-line"></i>
                        </a>
                      </div>
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
  <div v-else-if="languages === 'EN'" style="margin-top: 180px">
    <div>
      <b-container>
        <b-row>
          <b-col cols="3">
                <div style="border-radius: 5px; border: thin solid #e0e0e0">
                  <div style="font-weight: bold;font-size: 20px;">Tires</div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=8">
                      <img src="https://i.imgur.com/dFBbXVM.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px;">
                    <a href="/shop?brand=7">
                      <img src="https://i.imgur.com/9JpV8e2.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=6">
                      <img src="https://i.imgur.com/yDA4cCy.png" alt="" style="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=1">
                      <img src="https://i.imgur.com/39bMB69.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=2">
                      <img src="https://i.imgur.com/iBpm6uT.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=3">
                      <img src="https://i.imgur.com/yvhHUsj.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=4">
                      <img src="https://i.imgur.com/TgbxVn2.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=5">
                      <img src="https://i.imgur.com/EByvNfm.png" alt="" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=9">
                      <img src="https://i.imgur.com/iiTZGZR.png" alt="" />
                    </a>
                  </div>
                </div>
          </b-col>
          <b-col>
            <!-- <b-button v-on:mouseover="testmouse()">test</b-button> -->
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
              <b-container>
                <b-row>
                  <b-col>
                    <br>
                    <div>
                      <img :src="'http://119.63.90.135:2083/image?image_path=' + brand.image" style="width: 300px;" alt="">
                    </div>
                  </b-col>
                  <b-col>
                    <br>
                    <!-- {{brand}} -->
                    <div style="color: #005099;font-weight: bold;font-size: 25px;">
                      {{brand.name}}
                    </div>
                    <div style="color: #005099;font-weight: bold;">
                      ฿{{(brand.regularPrice).toLocaleString('en')}} 1 / Tire.
                    </div>
                    <br>
                    <br>
                    <!-- {{brand.sku}} -->
                    <div style="margin: 5px;">
                      <b-form-spinbutton style="width: 30%;" id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
                      <br>
                      <b-button variant="primary" v-on:click="buycart (value)">Order</b-button>
                      <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (value)"></i>
                    </div>
                    <div style="margin-left: 5px;">
                      <b-button style="background-color: #00c300;border: none;" href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank">Chat + Order LINE</b-button>
                    </div>
                    <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;font-size: 14px;">
                      <div style="margin: 5px;">SKU: {{brand.sku}}</div>
                      <div style="margin: 5px;">Categories: {{brand.type}}</div>
                      <div style="margin: 5px;">Tags: {{brand.name}}, {{brand.type}}</div>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <div style="font-size: 25px;">
                      <div style="text-align: left;display: inline-block;margin: 10px;color: #4267B2;">
                      <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
                        <i class="fa-brands fa-facebook-square"></i>
                      </a>
                      </div>
                      <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
                        <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
                          <i class="fa-brands fa-line"></i>
                        </a>
                      </div>
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
                      <div style="color: black;">More Detail</div>
                      <br>
                      <b-table :items="items" :fields="fieldss" thead-class="d-none">
                      <template v-slot:cell(Name)="data">
                        <div style="color: #005099;">{{data.item.names}}</div>
                      </template>
                      <template v-slot:cell(Detail)="data">
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
      fieldss: ['Name', 'Detail'],
      cart: [],
      brand: [],
      checkcart: [],
      checkcarts: [],
      checkcartz: [],
      languages: ''
    }
  },
  metaInfo: {
    title: 'Shop',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
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
          url: process.env.VUE_APP_API_URL + '/product'
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
  },
  methods: {
    buy (value) {
      console.log('buy', this.brand.sku)
      // console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        img: 'http://119.63.90.135:2083/image?image_path=' + this.brand.image,
        name: this.brand.name,
        price: this.brand.regularPrice,
        value: value,
        type: this.brand.type,
        sku: this.brand.sku,
        brand: this.brand.brand
      }
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
      location.replace('/cart')
    },
    async buycart (value) {
      if (JSON.parse(localStorage.getItem('cart')) === null) {
        localStorage.setItem('cart', JSON.stringify(this.checkcart))
        console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          // url: url,
          img: 'http://119.63.90.135:2083/image?image_path=' + this.brand.image,
          name: this.brand.name,
          productId: this.brand.prodId,
          price: this.brand.regularPrice,
          qty: value,
          type: this.brand.type,
          sku: this.brand.sku,
          brand: this.brand.brand
        })
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        location.replace('/cart')
        // location.reload()
      } else {
        console.log('ไม่ว่าง')
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          // url: url,
          img: 'http://119.63.90.135:2083/image?image_path=' + this.brand.image,
          name: this.brand.name,
          productId: this.brand.prodId,
          price: this.brand.regularPrice,
          qty: value,
          type: this.brand.type,
          sku: this.brand.sku,
          brand: this.brand.brand
        })
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        location.replace('/cart')
        // location.reload()
      }
    },
    async addtocart (value) {
      if (JSON.parse(localStorage.getItem('cart')) === null) {
        localStorage.setItem('cart', JSON.stringify(this.checkcart))
        console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          // url: url,
          img: 'http://119.63.90.135:2083/image?image_path=' + this.brand.image,
          name: this.brand.name,
          productId: this.brand.prodId,
          price: this.brand.regularPrice,
          qty: value,
          type: this.brand.type,
          sku: this.brand.sku,
          brand: this.brand.brand
        })
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        // location.replace('/checkout')
        location.reload()
      } else {
        console.log('ไม่ว่าง')
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          // url: url,
          img: 'http://119.63.90.135:2083/image?image_path=' + this.brand.image,
          name: this.brand.name,
          productId: this.brand.prodId,
          price: this.brand.regularPrice,
          qty: value,
          type: this.brand.type,
          sku: this.brand.sku,
          brand: this.brand.brand
        })
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        // location.replace('/checkout')
        location.reload()
      }
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
