<template>
  <div style="margin-top: 160px">
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
                          <option value="185"></option>
                          <option value="195"></option>
                          <option value="205"></option>
                          <option value="206"></option>
                          <option value="215"></option>
                          <option value="225"></option>
                          <option value="235"></option>
                          <option value="245"></option>
                          <option value="255"></option>
                          <option value="265"></option>
                          <option value="275"></option>
                          <option value="285"></option>
                          <option value="295"></option>
                          <option value="305"></option>
                          <option value="315"></option>
                          <option value="325"></option>
                        </datalist>
                      <br />
                    </div>
                    <div style="margin-left: 5px;">กรองตามซีรี่ย์ยาง</div>
                    <div>
                      <b-input list="height" placeholder="ทุกๆ ซีรี่ย์ยาง" v-model="height" v-on:change="filterheight (height)"></b-input>
                      <datalist id="height">
                        <option value="0"></option>
                        <option value="25"></option>
                        <option value="30"></option>
                        <option value="35"></option>
                        <option value="40"></option>
                        <option value="45"></option>
                        <option value="50"></option>
                        <option value="55"></option>
                        <option value="60"></option>
                        <option value="65"></option>
                        <option value="70"></option>
                        <option value="75"></option>
                        <option value="85"></option>
                      </datalist>
                      <br />
                    </div>
                    <div style="margin-left: 5px;">กรองตามขนาดวงล้อ</div>
                    <div>
                      <b-input list="diameter" placeholder="ทุกๆ ขนาดวงล้อ" v-model="diameter" v-on:change="filterdiameter (diameter)"></b-input>
                      <datalist id="diameter">
                        <option value="13"></option>
                        <option value="14"></option>
                        <option value="15"></option>
                        <option value="16"></option>
                        <option value="17"></option>
                        <option value="18"></option>
                        <option value="19"></option>
                        <option value="20"></option>
                        <option value="21"></option>
                        <option value="22"></option>
                        <option value="24"></option>
                      </datalist>
                      <br />
                    </div>
                    <div style="margin-left: 5px;">กรองตามรูปแบบยาง</div>
                    <div>
                      <b-input list="tyre" placeholder="ทุกๆ รุ่นยาง" v-model="tyre" v-on:change="filtertyre (tyre)"></b-input>
                      <datalist id="tyre" >
                        <option value="SUV"></option>
                        <option value="ยางขับขี่ทั่วไป"></option>
                        <option value="ยางขับขี่นุ่ม เงียบ"></option>
                        <option value="ยางประสิทธิภาพสูง"></option>
                        <option value="ยางประหยัดเชื้อเพลิง"></option>
                        <option value="ยางรถกระบะ"></option>
                        <option value="ยางรถเอนกประสงค์"></option>
                        <option value="ยางออฟโรด"></option>
                      </datalist>
                      <br />
                    </div>
                    <div>
                      <label style="margin-left: 5px;" for="range-2">กรองตามราคา</label>
                      <div class='range-slider' style="margin-top: -60px;width: 100%;">
                        <input type="range" min="2250" max="21100" step="1" v-model="sliderMin">
                        <input type="range" min="2250" max="21100" step="1" v-model="sliderMax">
                      </div>
                      <div style="margin-left: 5px;" class="mt-2">ราคา {{ sliderMin }} - {{ sliderMax }}</div>
                      <b-button variant="primary" v-on:click="filterprice(sliderMin, sliderMax)">กรอง</b-button>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div style="border-radius: 5px; border: thin solid #e0e0e0">
                  <div style="font-weight: bold;font-size: 20px;">ยางรถยนต์</div>
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
                    <a href="/shop?brand=7">
                      <img src="https://i.imgur.com/yDA4cCy.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=1">
                      <img src="https://i.imgur.com/39bMB69.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=002">
                      <img src="https://i.imgur.com/iBpm6uT.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=3">
                      <img src="https://i.imgur.com/yvhHUsj.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=4">
                      <img src="https://i.imgur.com/TgbxVn2.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=5">
                      <img src="https://i.imgur.com/EByvNfm.png" alt="" style="width:100%" />
                    </a>
                  </div>
                  <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
                    <a href="/shop?brand=9">
                      <img src="https://i.imgur.com/iiTZGZR.png" alt="" style="width:100%" />
                    </a>
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
                      <!-- <div>
                        <b-form-select
                          style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
                          v-model="selected2"
                          name=""
                          id=""
                          v-on:change="qtytyre(selected2)"
                          :options="options2"
                        >
                        </b-form-select>
                      </div> -->
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <!-- {{brand}} -->
                    <b-col cols="3" v-for="(brandd, index) in brand" :key="index" style="margin-bottom: 5px;">
                      <!-- {{brandd.prodId}} -->
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                        <div style="width: 100%;">
                          <a style="cursor: pointer;" v-on:click="buydetail (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">
                            <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 100%;height: auto;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">{{brandd.name}}</div>
                        <div style="margin-left: 5px;color: #005099;" id="currency">฿{{ brandd.regularPrice}} ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary" v-on:click="buycart (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), brandd.prodId, brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">สั่งซื้อเลย</b-button>
                          <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), brandd.prodId, brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)"></i>
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
// import recommend from '../components/home/recommend.vue'
import apiURL from '../assets/js/connect.js'
import axios from 'axios'
export default {
  components: {
    // 'app-recommend': recommend
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
        { value: 'name', text: 'เรียงตาม ชื่อ' },
        { value: 'regularPrice', text: 'เรียงตาม ราคา' }
      ],
      // options2: [
      //   { value: null, text: 'แสดงรายการ' },
      //   { value: 16, text: '16' },
      //   { value: 32, text: '32' },
      //   { value: 48, text: '48' },
      //   { value: 100, text: '100' }
      // ],
      tyre: '',
      filterss: '',
      width: '',
      height: '',
      diameter: '',
      promotions: [],
      checkcart: [],
      checkcarts: [],
      checkcartz: [],
      minAngle: 2250,
      maxAngle: 21100
    }
  },
  metaInfo: {
    title: 'Shop',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  async mounted () {
    await this.product()
    // console.log('promotions')
    axios.get('/product').then(res => {
      this.promotions = res.data.data.products
      const promotion = this.promotions.filter((post, index) => {
        return post.status === 1
      })
      this.promotions = promotion
      console.log('promotionsssss', this.promotions)
    })
  },
  methods: {
    async product () {
      console.log('currency', document.querySelectorAll('currency'))
      var configsearch = {
        method: 'post',
        url: '/productByFilter'
      }
      console.log(location.href)
      var split = await location.href
      split = await split.split('?')
      if (split.length > 1) {
        split = await split[1].split('=')
        // console.log('tyre', split[0])
        // console.log('value', split[1])
        if (split[0] === 'width') {
          // console.log('iswidth')
          configsearch.data = {
            width: split[1]
          }
          axios(configsearch).then((res) => {
            // console.log(res)
            // console.log('valuefilters', res.data.data.products.slice(0, 100))
            this.brand = res.data.data.products.slice(0, 100)
          })
        } else if (split[0] === 'height') {
          console.log('isheight')
          configsearch.data = {
            height: split[1]
          }
          axios(configsearch).then((res) => {
            // console.log(res)
            // console.log('valuefilters', res.data.data.products.slice(0, 100))
            this.brand = res.data.data.products.slice(0, 100)
          })
        } else if (split[0] === 'diameter') {
          console.log('isdiameter')
          // console.log('isdiameter', configsearch)
          configsearch.data = {
            diameter: split[1]
          }
          axios(configsearch).then((res) => {
            // console.log(res)
            // console.log('valuefilters', res.data.data.products.slice(0, 100))
            this.brand = res.data.data.products.slice(0, 100)
          })
        } else if (split[0] === 'type') {
          // console.log('istypess', decodeURIComponent(split[1]))
          // console.log('istype', configsearch)
          configsearch.data = {
            type: decodeURIComponent(split[1])
          }
          // console.log('valuefilters', configsearch)
          axios(configsearch).then((res) => {
            // console.log(res)
            // console.log('valuefilters', res.data.data.products.slice(0, 100))
            this.brand = res.data.data.products.slice(0, 100)
          })
        } else if (split[0] === 'brand') {
          console.log('brands')
          var configbrands = {
            method: 'get',
            url: '/product'
          }
          axios(configbrands).then(res => {
            let brands = res.data.data.products
            brands = brands.filter((post, index) => {
              return post.brandId === split[1]
            })
            // console.log('detailb', brands)
            // console.log('detailr', res.data.data.products)
            this.brand = brands.slice(0, 100)
          })
        }
      } else {
        console.log('nohaveroute')
        var config = {
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'X-Requested-With': 'XMLHttpRequest'
          // },
          method: 'get',
          url: '/product'
        }
        // console.log('all null')
        axios(config).then(res => {
          // console.log(res.data.data)
          this.brand = res.data.data.products.slice(0, 100)
          console.log('brands', res.data.data.products)
          const vvv = this.brand.find((post, index) => {
            if (post.prodId === 'TY001') {
              return true
            }
          })
          console.log('asfaf', vvv)
        })
      }
    },
    sortprice (value) {
      console.log('value', value)
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
    qtytyre (value) {
      console.log('qty', this.brand)
      const brans = this.brand
      this.brand = brans.slice(0, value)
    },
    async filtertyre (value) {
      let brands = []
      console.log('valuefilters', value)
      var split = location.href
      split = split.split('?')
      var config = {
        method: 'post',
        url: '/productByFilter'
      }
      config.data = {
        type: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
      })
      if (split.length > 1) {
        split = split[1].split('=')
        console.log('filtyre', split[0])
        if (split[0] === 'brand') {
          brands = await this.brand.filter((post, index) => {
            console.log('filtyre', split[0])
            console.log('logwidth', post + split[1])
            return post.brandId === split[1]
          })
          console.log('widthfilter', brands)
          this.brand = brands.slice(0, 100)
        }
      } else {
        config = {
          method: 'post',
          url: '/productByFilter',
          data: {
            type: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
        })
      }
    },
    async filterwidth (value) {
      let brands = []
      console.log('valuefilters', value)
      var split = location.href
      split = split.split('?')
      var config = {
        method: 'post',
        url: '/productByFilter'
      }
      config.data = {
        width: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
      })
      if (split.length > 1) {
        split = split[1].split('=')
        console.log('filtyre', split[0])
        if (split[0] === 'brand') {
          brands = await this.brand.filter((post, index) => {
            console.log('filtyre', split[0])
            console.log('logwidth', post + split[1])
            return post.brandId === split[1]
          })
          console.log('widthfilter', brands)
          this.brand = brands.slice(0, 100)
        }
      } else {
        config = {
          method: 'post',
          url: '/productByFilter',
          data: {
            width: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
        })
      }
    },
    async filterheight (value) {
      let brands = []
      console.log('valuefilters', value)
      var split = location.href
      split = split.split('?')
      var config = {
        method: 'post',
        url: '/productByFilter'
      }
      config.data = {
        height: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
      })
      if (split.length > 1) {
        split = split[1].split('=')
        console.log('filtyre', split[0])
        if (split[0] === 'brand') {
          brands = await this.brand.filter((post, index) => {
            console.log('filtyre', split[0])
            console.log('logheight', post + split[1])
            return post.brandId === split[1]
          })
          console.log('heightfilter', brands)
          this.brand = brands.slice(0, 100)
        }
      } else {
        config = {
          method: 'post',
          url: '/productByFilter',
          data: {
            height: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
        })
      }
    },
    async filterdiameter (value) {
      let brands = []
      console.log('valuefilters', value)
      var split = location.href
      split = split.split('?')
      var config = {
        method: 'post',
        url: '/productByFilter'
      }
      config.data = {
        diameter: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
      })
      if (split.length > 1) {
        split = split[1].split('=')
        console.log('filtyre', split[0])
        if (split[0] === 'brand') {
          brands = await this.brand.filter((post, index) => {
            console.log('filtyre', split[0])
            console.log('logdiameter', post + split[1])
            return post.brandId === split[1]
          })
          console.log('diameterfilter', brands)
          this.brand = brands.slice(0, 100)
        }
      } else {
        config = {
          method: 'post',
          url: '/productByFilter',
          data: {
            diameter: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
        })
      }
    },
    async filterprice (min, max) {
      console.log('valuefilterswidth', min + max)
      let brands = []
      // console.log('valuefilters', value)
      var split = location.href
      split = split.split('?')
      var config = {
        method: 'post',
        url: '/productByFilter'
      }
      config.data = {
        minPrice: min,
        maxPrice: max
      }
      console.log('pricecheck', config)
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
      })
      if (split.length > 1) {
        split = split[1].split('=')
        console.log('filtyre', split[0])
        if (split[0] === 'brand') {
          brands = await this.brand.filter((post, index) => {
            // console.log('filtyre', split[0])
            // console.log('logwidth', post + split[1])
            return post.brandId === split[1]
          })
          console.log('widthfilter', brands)
          this.brand = brands.slice(0, 100)
        }
      } else {
        config = {
          method: 'post',
          url: '/productByFilter',
          data: {
            minPrice: min,
            maxPrice: max
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
        })
      }
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
      location.replace('/tyrebrand/?brand=' + sku)
    },
    async buycart (url, img, id, name, price, value, type, sku, brand) {
      if (JSON.parse(localStorage.getItem('cart')) === null) {
        localStorage.setItem('cart', JSON.stringify(this.checkcart))
        console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
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
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
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
    async addtocart (url, img, id, name, price, value, type, sku, brand) {
      if (JSON.parse(localStorage.getItem('cart')) === null) {
        localStorage.setItem('cart', JSON.stringify(this.checkcart))
        console.log('ว่าง', id)
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        // console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
        })
        console.log('teams', teams)
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
        console.log('ว่าง', id)
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        // console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
        })
        console.log('teams', teams)
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
  },
  computed: {
    sliderMin: {
      get: function () {
        var val = parseInt(this.minAngle)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val > this.maxAngle) {
          this.maxAngle = val
        }
        this.minAngle = val
      }
    },
    sliderMax: {
      get: function () {
        var val = parseInt(this.maxAngle)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val < this.minAngle) {
          this.minAngle = val
        }
        this.maxAngle = val
      }
    }
  }
}
</script>
<style scoped>
.range-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=number] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
  border: 2px solid #ff6347;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497e3;
}

input[type=range]:focus::-ms-fill-lower {
  background: #2497e3;
}

input[type=range]:focus::-ms-fill-upper {
  background: #2497e3;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animation: 0.2s;
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

</style>
