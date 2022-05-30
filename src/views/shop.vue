<template>
  <div style="margin-top: 160px">
    <div>
      <b-container>
        <br>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="3" xl="3">
              <div>
                <div class="bordermenu">
                  <div class="alignmenu">
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
                        <option value="ยาง SUV"></option>
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
                      <div>
                        <label style="margin-left: 5px;" for="range-2">กรองตามราคา</label>
                        <div class='range-slider' style="margin-top: -60px;width: 100%;">
                          <input type="range" min="2250" max="21100" step="1" v-model="sliderMin">
                          <input type="range" min="2250" max="21100" step="1" v-model="sliderMax">
                        </div>
                        <div style="margin: 10px;">
                          <div style="display: inline-block;">
                            <b-button variant="primary" v-on:click="filterprice(sliderMin, sliderMax)">กรอง</b-button>
                          </div>
                          <div style="margin-left: 5px;display: inline-block;font-size: 15px;" class="mt-2">ราคา ฿{{ (sliderMin).toLocaleString('en') }} - ฿{{ (sliderMax).toLocaleString('en') }}</div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div style="border-radius: 5px; border: thin solid #e0e0e0">
                  <div style="font-weight: bold;font-size: 20px;">ยางรถยนต์</div>
                  <div class="menutyre">
                    <a href="/shop?brand=8">
                      <img src="https://i.imgur.com/dFBbXVM.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=7">
                      <img src="https://i.imgur.com/9JpV8e2.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=6">
                      <img src="https://i.imgur.com/yDA4cCy.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=1">
                      <img src="https://i.imgur.com/39bMB69.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=2">
                      <img src="https://i.imgur.com/iBpm6uT.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=3">
                      <img src="https://i.imgur.com/yvhHUsj.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=4">
                      <img src="https://i.imgur.com/TgbxVn2.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=5">
                      <img src="https://i.imgur.com/EByvNfm.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a href="/shop?brand=9">
                      <img src="https://i.imgur.com/iiTZGZR.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="9" xl="9">
            <div style="border-radius: 5px;border: thin solid #E0E0E0;width: 100%;">
              <div style="margin: 5px;">
                <b-container>
                  <b-row>
                    <b-col>
                      <div>
                        <b-form-select
                          style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
                          v-model="selected1"
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
                    <b-col cols="6" sm="4" md="4" lg="4" xl="3" v-for="(brandd, index) in brand" :key="index" style="margin-bottom: 25px;">
                      <!-- {{brandd.prodId}} -->
                      <div class="bordertyre">
                        <div style="width: 100%;">
                        <div v-if="brandd.promotionId != 0 && brandd.promotionId != null && brandd.promotionId != 'null'" class="SalesBanner">Sale</div>
                        <div v-if="brandd.promotionId == 0 || brandd.promotionId == null" class="NoBanner"></div>
                          <a v-on:click="buydetail (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('http://119.63.90.135:2083/image?image_path=' + brandd.image), brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">
                            <img :src="'http://119.63.90.135:2083/image?image_path=' + brandd.image" width="100%" height="auto" alt="" loading="lazy">
                          </a>
                        </div>
                        <div class="nametyre">{{brandd.name}}</div>
                        <div>
                          <div class="regularprice2">฿</div>
                          <div class="regularprice">{{ brandd.regularPrice }}</div>
                          <div class="regularprice3">  ต่อเส้น</div>
                        </div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <br>
                        <div style="margin: 5px;">
                          <b-button variant="primary" v-on:click="buycart (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('http://119.63.90.135:2083/image?image_path=' + brandd.image), brandd.prodId, brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">สั่งซื้อเลย</b-button>
                          <i class="fas fa-shopping-cart icontyre" v-on:click="addtocart (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('http://119.63.90.135:2083/image?image_path=' + brandd.image), brandd.prodId, brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)"></i>
                        </div>
                        <div>
                          <i class="fa-solid fa-plus" style="cursor: pointer;margin-left: 5px;" @click="compare(brandd)"></i><a style="cursor: pointer;margin-left: 5px;color: #005099;font-weight: bold;"  @click="showcompare()" v-b-modal.modal-1>ข้อมูลสินค้า</a>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <div style="margin: 15px;">
                    <jw-pagination :items="pageItem" @changePage="onChangePage"></jw-pagination>
                  </div>
                </b-container>
                <div>
                  <b-modal id="modal-1" size="xl" title="Compare list">
                    <div style="cursor: pointer;color: red;font-weight: bold;;" @click="clearcompare()">Clear compare list</div>
                    <br>
                    <div>
                      <b-row>
                        <b-col cols="6" sm="6" md="6" lg="4" xl="3" v-for="(showcompare, index) in showcompares" :key="index">
                          <div style="margin: 5px;text-align: left;">
                            <b-button variant="primary" v-on:click="buycart (('/tyrebrand' + '/' + showcompare.prodId + '/' + showcompare.sku), ('http://119.63.90.135:2083/image?image_path=' + showcompare.image), showcompare.prodId, showcompare.name, showcompare.regularPrice, ('values' + index), showcompare.type, showcompare.sku, showcompare)">สั่งซื้อเลย</b-button>
                            <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (('/tyrebrand' + '/' + showcompare.prodId + '/' + showcompare.sku), ('http://119.63.90.135:2083/image?image_path=' + showcompare.image), showcompare.prodId, showcompare.name, showcompare.regularPrice, ('values' + index), showcompare.type, showcompare.sku, showcompare)"></i>
                            <i class="fas fa fa-times" style="display: inline-block;margin-left: 20px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="removeitem (showcompare.name)"></i>
                          </div>
                          <div style="margin-bottom: 5px;;width: 100%;">
                            <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
                          </div>
                          <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;width: 100%;height: 420px;">
                            <div style="width: 100%;;text-align: center;">
                              <a style="cursor: pointer;" v-on:click="buydetail (('/tyrebrand' + '/' + showcompare.prodId + '/' + showcompare.sku), ('http://119.63.90.135:2083/image?image_path=' + showcompare.image), showcompare.name, showcompare.regularPrice, ('values' + index), showcompare.type, showcompare.sku, showcompare)">
                                <img :src="'http://119.63.90.135:2083/image?image_path=' + showcompare.image" style="width: 150px;height: 150px;margin: 5px;" alt="">
                              </a>
                            </div>
                            <div style="margin-left: 5px;color: #005099;font-weight: bold;height: 60px;">{{showcompare.name}}</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">ราคา: ฿{{ showcompare.regularPrice}} ต่อเส้น</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">ความกว้าง: {{ showcompare.width}}</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">ซีรี่ย์ยาง: {{ showcompare.diameter}}</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">ขนาดวงล้อ: {{ showcompare.height}}</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">Load Index: {{ showcompare.loadIndex}}</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">Speed Index: {{ showcompare.speedIndex}}</div>
                            <div style="margin-left: 5px;color: #005099;text-align: left;">สินค้า รุ่นยาง: {{ showcompare.type}}</div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </b-modal>
                </div>
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
import apiURL from '../assets/js/connect.js'
import axios from 'axios'
// import LazyText from 'vue-lazyload-text-dev/src/components/lazy-text'
export default {
  components: {
    // LazyText
    // 'app-recommend': recommend
  },
  data () {
    return {
      apiURL: apiURL,
      newArray: [],
      brands: '',
      brand: '',
      aa: '',
      value: '2250',
      value2: 4,
      selected1: null,
      selected2: null,
      selectedwidth: null,
      options: [
        { value: null, text: 'เรียงลำดับ' },
        { value: 'name', text: 'เรียงตาม ชื่อ' },
        { value: 'regularPrice', text: 'เรียงตาม ราคา' }
      ],
      optionswidth: [
        { value: null, text: 'ความกว้าง' },
        { value: null, text: 'ความกว้าง' },
        { value: null, text: 'ความกว้าง' }
      ],
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
      maxAngle: 21100,
      pageOfitems: [],
      pageItem: '',
      compares: [],
      showcompares: '',
      iconcompare: 0
    }
  },
  metaInfo: {
    title: 'Shop',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  async mounted () {
    await this.product()
    // console.log('promotions')
    axios.get(process.env.VUE_APP_API_URL + '/product').then(res => {
      this.promotions = res.data.data.products
      const promotion = this.promotions.filter((post, index) => {
        return post.status === 1
      })
      this.promotions = promotion
      // console.log('promotionsssss', this.promotions)
    })
  },
  methods: {
    async removeitem (name) {
      console.log('remove', name)
      this.showcompares = this.showcompares.filter((obj) => {
        return obj.name !== name
      })
      console.log('remove: ', this.showcompares)
      localStorage.setItem('compare', JSON.stringify(this.showcompares))
      // location.reload()
      this.$bvModal.show('modal-1')
    },
    async compare (itemss) {
      console.log('compare', itemss)
      if (JSON.parse(localStorage.getItem('compare')) === null) {
        localStorage.setItem('compare', JSON.stringify(this.compares))
        console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('compare'))
        console.log('teams', teams)
        await teams.push(itemss)
        await localStorage.setItem('compare', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, regularPrice: a.regularPrice, image: a.image, type: a.type, diameter: a.diameter, height: a.height, loadIndex: a.loadIndex, speedIndex: a.speedIndex, width: a.width }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('compare', JSON.stringify(team))
        location.reload()
      } else {
        console.log('ไม่ว่าง')
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('compare'))
        console.log('teams', teams)
        await teams.push(itemss)
        await localStorage.setItem('compare', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, regularPrice: a.regularPrice, image: a.image, type: a.type, diameter: a.diameter, height: a.height, loadIndex: a.loadIndex, speedIndex: a.speedIndex, width: a.width }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('compare', JSON.stringify(team))
        location.reload()
      }
    },
    showcompare () {
      console.log('showcompare', JSON.parse(localStorage.getItem('compare')))
      this.showcompares = JSON.parse(localStorage.getItem('compare'))
    },
    clearcompare () {
      localStorage.removeItem('compare')
      // eslint-disable-next-line no-undef
      this.$bvModal.hide('modal-1')
    },
    currency () {
      var x = document.querySelectorAll('.regularprice')
      console.log('currency', x)
      for (let i = 0, len = x.length; i < len; i++) {
        const num = Number(x[i].innerHTML).toLocaleString('en')
        x[i].innerHTML = num
      }
    },
    async onChangePage (pageOfitems) {
      console.log('pagination', pageOfitems)
      for (var i = 0; i < pageOfitems.length; i++) {
        pageOfitems[i].regularPrice = pageOfitems[i].regularPrice.toLocaleString('en')
      }
      this.brand = pageOfitems
    },
    async product () {
      console.log('currency', document.querySelectorAll('currency'))
      var configsearch = {
        method: 'post',
        url: process.env.VUE_APP_API_URL + '/productByFilter'
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
            // console.log('valuefilters', res.data.data.products)
            this.brand = res.data.data.products
            this.pageItem = this.brand
          })
        } else if (split[0] === 'height') {
          console.log('isheight')
          configsearch.data = {
            height: split[1]
          }
          axios(configsearch).then((res) => {
            // console.log(res)
            // console.log('valuefilters', res.data.data.products)
            this.brand = res.data.data.products
            this.pageItem = this.brand
          })
        } else if (split[0] === 'diameter') {
          console.log('isdiameter')
          // console.log('isdiameter', configsearch)
          configsearch.data = {
            diameter: split[1]
          }
          axios(configsearch).then((res) => {
            // console.log(res)
            // console.log('valuefilters', res.data.data.products)
            this.brand = res.data.data.products
            this.pageItem = this.brand
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
            // console.log('valuefilters', res.data.data.products)
            this.brand = res.data.data.products
            this.pageItem = this.brand
          })
        } else if (split[0] === 'promotionId') {
          // console.log('istypess', decodeURIComponent(split[1]))
          // console.log('istype', configsearch)
          // console.log('promotions', split[1])
          var configpromotion = {
            method: 'get',
            url: process.env.VUE_APP_API_URL + '/product'
          }
          axios(configpromotion).then(res => {
            let brands = res.data.data.products
            // console.log('promotions', split[1])
            brands = brands.filter((post, index) => {
              // console.log('promotions', post.promotionId)
              return post.promotionId === parseInt(split[1])
            })
            // console.log('detailb', brands)
            // console.log('detailr', res.data.data.products)
            this.brand = brands
            this.pageItem = this.brand
          })
        } else if (split[0] === 'brand') {
          console.log('brands')
          var configbrands = {
            method: 'get',
            url: process.env.VUE_APP_API_URL + '/product'
          }
          axios(configbrands).then(res => {
            let brands = res.data.data.products
            brands = brands.filter((post, index) => {
              // console.log('promotionsbrand', post.brandId)
              return post.brandId === split[1]
            })
            // console.log('detailb', brands)
            // console.log('detailr', res.data.data.products)
            this.brand = brands
            this.pageItem = this.brand
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
          url: process.env.VUE_APP_API_URL + '/product'
        }
        // console.log('all null')
        axios(config).then(res => {
          // console.log(res.data.data)
          this.brand = res.data.data.products
          this.pageItem = this.brand
          // console.log('brands', res.data.data.products)
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
      console.log('value', this.brand)
      this.sortaa = this.brand
      if (value.toString() === 'regularPrice') {
        this.sortaa.sort((a, b) => {
          // console.log('regupricess', a.regularPrice + '====' + b.regularPrice)
          return Number(a.regularPrice.replace(/[^0-9.]+/g, '')) - Number(b.regularPrice.replace(/[^0-9.]+/g, ''))
        })
        this.brand = this.sortaa
        this.pageItem = this.brand
        // console.log('regu', this.sortaa)
      } else if (value.toString() === 'name') {
        // this.sortaa.sort((a, b) => {
        //   // console.log('regupricesssname', this.sortaa)
        //   return a.sku > b.sku ? 1 : b.sku > a.sku ? -1 : 0
        // })
        this.brand = this.sortaa.sort()
        this.pageItem = this.brand
        // console.log('regu', this.sortaa)
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
        url: process.env.VUE_APP_API_URL + '/productByFilter'
      }
      config.data = {
        type: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
        this.pageItem = this.brand
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
          this.brand = brands
          this.pageItem = this.brand
        }
      } else {
        config = {
          method: 'post',
          url: process.env.VUE_APP_API_URL + '/productByFilter',
          data: {
            type: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
          this.pageItem = this.brand
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
        url: process.env.VUE_APP_API_URL + '/productByFilter'
      }
      config.data = {
        width: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
        this.pageItem = this.brand
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
          this.brand = brands
          this.pageItem = this.brand
        }
      } else {
        config = {
          method: 'post',
          url: process.env.VUE_APP_API_URL + '/productByFilter',
          data: {
            width: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
          this.pageItem = this.brand
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
        url: process.env.VUE_APP_API_URL + '/productByFilter'
      }
      config.data = {
        height: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
        this.pageItem = this.brand
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
          this.brand = brands
          this.pageItem = this.brand
        }
      } else {
        config = {
          method: 'post',
          url: process.env.VUE_APP_API_URL + '/productByFilter',
          data: {
            height: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
          this.pageItem = this.brand
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
        url: process.env.VUE_APP_API_URL + '/productByFilter'
      }
      config.data = {
        diameter: value
      }
      await axios(config).then((res) => {
        console.log(res)
        // const brandtest = res.data.data.products
        this.brand = res.data.data.products
        this.pageItem = this.brand
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
          this.brand = brands
          this.pageItem = this.brand
        }
      } else {
        config = {
          method: 'post',
          url: process.env.VUE_APP_API_URL + '/productByFilter',
          data: {
            diameter: value
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
          this.pageItem = this.brand
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
        url: process.env.VUE_APP_API_URL + '/productByFilter'
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
        this.pageItem = this.brand
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
          this.brand = brands
          this.pageItem = this.brand
        }
      } else {
        config = {
          method: 'post',
          url: process.env.VUE_APP_API_URL + '/productByFilter',
          data: {
            minPrice: min,
            maxPrice: max
          }
        }
        console.log('valuefilters')
        await axios(config).then((res) => {
          console.log(res)
          this.brand = res.data.data.products
          this.pageItem = this.brand
        })
      }
    },
    buydetail (url, img, name, price, value, type, sku, brand) {
      console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: url,
        img: img,
        name: name,
        price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
<style scoped src="@/assets/css/shop.css">
</style>
