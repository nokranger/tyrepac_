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
                    <br>
                    <div style="margin-left: 5px;display: inline-block;">กรองตามความกว้าง</div>
                    <div style="display: inline-block;">
                      <a style="margin-left: 5px;color: #005099;" v-on:click="refreshfilter ()">ล้างตัวกรอง</a>
                      <i class="fas fa fa-times" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="refreshfilter ()"></i>
                    </div>
                    <br>
                    <br>
                    <div>
                    <b-form-select
                        style="width: 100%; font-size: 20px;color: gray;height: 35px;"
                        v-model="selectedwidth"
                        :options="optionswidth"
                        name=""
                        id=""
                        v-on:change="filterwidth(selectedwidth)"
                      >
                    </b-form-select>
                      <br />
                    </div>
                    <br>
                    <div style="margin-left: 5px;">กรองตามซีรี่ย์ยาง</div>
                    <br>
                    <div>
                    <b-form-select
                        style="width: 100%; font-size: 20px;color: gray;height: 35px;"
                        v-model="selectedserie"
                        :options="optionsserie"
                        name=""
                        id=""
                        v-on:change="filtersheight(selectedserie)"
                      >
                    </b-form-select>
                      <br />
                    </div>
                    <br>
                    <div style="margin-left: 5px;">กรองตามขนาดวงล้อ</div>
                    <br>
                    <div>
                    <b-form-select
                        style="width: 100%; font-size: 20px;color: gray;height: 35px;"
                        v-model="selecteddiameter"
                        :options="optionsdiameter"
                        name=""
                        id=""
                        v-on:change="filtersdiameter(selecteddiameter)"
                      >
                    </b-form-select>
                      <br />
                    </div>
                    <br>
                    <div style="margin-left: 5px;">กรองตามรูปแบบยาง</div>
                    <br>
                    <div>
                    <b-form-select
                        style="width: 100%; font-size: 20px;color: gray;height: 35px;"
                        v-model="selectedtype"
                        :options="optionstype"
                        name=""
                        id=""
                        v-on:change="filterstype(selectedtype)"
                      >
                    </b-form-select>
                      <br />
                    </div>
                    <div>
                      <div>
                        <br>
                        <label style="margin-left: 5px;" for="range-2">กรองตามราคา</label>
                        <div class='range-slider' style="margin-top: -60px;width: 100%;">
                          <input type="range" min="2250" max="21100" step="1" v-model="sliderMin">
                          <input type="range" min="2250" max="21100" step="1" v-model="sliderMax">
                        </div>
                        <div style="margin: 10px;">
                          <div style="display: inline-block;">
                            <b-button variant="primary" v-on:click="filterminmax(sliderMin, sliderMax)">กรอง</b-button>
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
                    <a v-on:click="filterbrand(8)">
                      <img src="https://i.imgur.com/dFBbXVM.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(7)">
                      <img src="https://i.imgur.com/9JpV8e2.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(6)">
                      <img src="https://i.imgur.com/yDA4cCy.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(1)">
                      <img src="https://i.imgur.com/39bMB69.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(2)">
                      <img src="https://i.imgur.com/iBpm6uT.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(3)">
                      <img src="https://i.imgur.com/yvhHUsj.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(4)">
                      <img src="https://i.imgur.com/TgbxVn2.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(5)">
                      <img src="https://i.imgur.com/EByvNfm.png" alt="" />
                    </a>
                  </div>
                  <div class="menutyre">
                    <a v-on:click="filterbrand(9)">
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
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <!-- {{brand}} -->
                    <b-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="(brandd, index) in brand" :key="index" style="margin-bottom: 25px;">
                      <!-- {{brandd.prodId}} -->
                      <div class="bordertyre">
                        <div style="width: 100%;">
                        <div v-if="brandd.promotionId > 0" class="SalesBanner">Promotion</div>
                        <!-- <div v-if="brandd.recommend === 1" class="SalesBanner">Sale</div> -->
                        <div v-else-if="brandd.promotionId === 0 || brandd.promotionId === null || brandd.recommend === 0 || brandd.recommend === null" class="NoBanner"></div>
                          <a v-on:click="buydetail (('/tyrebrand' + '/' + brandd.prodId + '/' + brandd.sku), ('http://119.63.90.135:2083/image?image_path=' + brandd.image), brandd.name, brandd.regularPrice, ('values' + index), brandd.type, brandd.sku, brandd)">
                            <img v-if="brandd.image !== null || brandd.image !== ''" :src="'http://119.63.90.135:2083/image?image_path=' + brandd.image" width="100%" height="172.72" alt="" loading="lazy">
                            <img v-if="brandd.image === null || brandd.image === ''" :src="'https://i.imgur.com/hri10EH.png'" width="100%" height="172.72" alt="" loading="lazy">
                          </a>
                        </div>
                        <div class="nametyre">{{brandd.name}}</div>
                        <div>
                          <div class="regularprice2">฿</div>
                          <div class="regularprice">{{ brandd.regularPrice }}</div>
                          <div class="regularprice3">  ต่อเส้น</div>
                        </div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="1" max="100"></b-form-spinbutton>
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
                            <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="1" max="100"></b-form-spinbutton>
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
      selectedserie: null,
      selecteddiameter: null,
      selectedtype: null,
      options: [
        { value: null, text: 'เรียงลำดับ' },
        { value: 'name', text: 'เรียงตาม ชื่อ' },
        { value: 'regularPrice', text: 'เรียงตาม ราคา' }
      ],
      optionswidth: [
        { value: null, text: '--ความกว้าง--' },
        { value: '155', text: '155' },
        { value: '165', text: '165' },
        { value: '175', text: '175' },
        { value: '185', text: '185' },
        { value: '195', text: '195' },
        { value: '205', text: '205' },
        { value: '206', text: '206' },
        { value: '215', text: '215' },
        { value: '225', text: '225' },
        { value: '235', text: '235' },
        { value: '245', text: '245' },
        { value: '255', text: '255' },
        { value: '265', text: '265' },
        { value: '275', text: '275' },
        { value: '285', text: '285' },
        { value: '295', text: '295' },
        { value: '305', text: '305' },
        { value: '315', text: '315' },
        { value: '325', text: '325' }
      ],
      optionsserie: [
        { value: null, text: '--ซีรี่ย์ยาง--' },
        { value: '0', text: '0' },
        { value: '25', text: '25' },
        { value: '30', text: '30' },
        { value: '35', text: '35' },
        { value: '40', text: '40' },
        { value: '45', text: '45' },
        { value: '50', text: '50' },
        { value: '55', text: '55' },
        { value: '60', text: '60' },
        { value: '65', text: '65' },
        { value: '70', text: '70' },
        { value: '75', text: '75' },
        { value: '85', text: '85' }
      ],
      optionsdiameter: [
        { value: null, text: '--ขนาดวงล้อ--' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
        { value: '21', text: '21' },
        { value: '22', text: '22' },
        { value: '24', text: '24' }
      ],
      optionstype: [
        { value: null, text: '--รูปแบบยาง--' },
        { value: 'ยาง SUV ประสิทธิภาพสูง', text: 'ยาง SUV ประสิทธิภาพสูง' },
        { value: 'ยางขับขี่ทั่วไป', text: 'ยางขับขี่ทั่วไป' },
        { value: 'ยางขับขี่นุ่ม เงียบ', text: 'ยางขับขี่นุ่ม เงียบ' },
        { value: 'ยางประสิทธิภาพสูง', text: 'ยางประสิทธิภาพสูง' },
        { value: 'ยางประหยัดเชื้อเพลิง', text: 'ยางประหยัดเชื้อเพลิง' },
        { value: 'ยางรถกระบะ', text: 'ยางรถกระบะ' },
        { value: 'ยางรถเอนกประสงค์/SUV', text: 'ยางรถเอนกประสงค์/SUV' },
        { value: 'ยางออฟโรด', text: 'ยางออฟโรด' }
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
      iconcompare: 0,
      filtersTyre: '',
      statusFilter: ''
    }
  },
  metaInfo: {
    title: 'Shop',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  async mounted () {
    localStorage.removeItem('filter')
    await this.product()
    // const st = await JSON.parse(localStorage.getItem('filter'))
    // console.log('filter', st)
    // if (st === null || st === 'null' || st === '' || st === undefined) {
    //   this.statusFilter = 0
    // } else {
    //   console.log('nofilter', st)
    //   this.statusFilter = 1
    // }
    // await this.filter()
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
    refreshfilter () {
      location.replace('/shop')
    },
    async filterTyre () {
      const filters = JSON.parse(localStorage.getItem('filter'))
      console.log('post', filters.width)
      if (JSON.parse(localStorage.getItem('filter')) === null) {
        console.log('filterNull')
      } else {
        await axios.get(process.env.VUE_APP_API_URL + '/product').then(res => {
          this.filtersTyre = res.data.data.products
          console.log('filterTyre')
          const filtersTyres = this.filtersTyre.filter((post, index) => {
            // console.log('post', post)
            return post.width === filters.width
          })
          this.filtersTyre = filtersTyres
          console.log('filterTyrewidth', filtersTyres)
        })
        console.log('filterNOTNULL')
      }
    },
    async removeitem (name) {
      // console.log('remove', name)
      this.showcompares = this.showcompares.filter((obj) => {
        return obj.name !== name
      })
      // console.log('remove: ', this.showcompares)
      localStorage.setItem('compare', JSON.stringify(this.showcompares))
      // location.reload()
      this.$bvModal.show('modal-1')
    },
    async compare (itemss) {
      // console.log('compare', itemss)
      if (JSON.parse(localStorage.getItem('compare')) === null) {
        localStorage.setItem('compare', JSON.stringify(this.compares))
        // console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('compare'))
        console.log('teams', teams)
        await teams.push(itemss)
        await localStorage.setItem('compare', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            // console.log('aname', a.name)
            this[a.name] = { name: a.name, regularPrice: a.regularPrice, image: a.image, type: a.type, diameter: a.diameter, height: a.height, loadIndex: a.loadIndex, speedIndex: a.speedIndex, width: a.width }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        // console.log('team', team)
        localStorage.setItem('compare', JSON.stringify(team))
        location.reload()
      } else {
        console.log('ไม่ว่าง')
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('compare'))
        // console.log('teams', teams)
        await teams.push(itemss)
        await localStorage.setItem('compare', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            // console.log('aname', a.name)
            this[a.name] = { name: a.name, regularPrice: a.regularPrice, image: a.image, type: a.type, diameter: a.diameter, height: a.height, loadIndex: a.loadIndex, speedIndex: a.speedIndex, width: a.width }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        // console.log('team', team)
        localStorage.setItem('compare', JSON.stringify(team))
        location.reload()
      }
    },
    showcompare () {
      // console.log('showcompare', JSON.parse(localStorage.getItem('compare')))
      this.showcompares = JSON.parse(localStorage.getItem('compare'))
    },
    clearcompare () {
      localStorage.removeItem('compare')
      // eslint-disable-next-line no-undef
      this.$bvModal.hide('modal-1')
    },
    async filter (width, height, diameter, type, min, max, brandId) {
      console.log('getvalueFilter', width, height, diameter, type, min, max, brandId)
      if (width !== null || width !== '' || width !== 'null' || width !== undefined || width !== 'undefined') {
        this.width = {
          width: width
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.width).then(res => {
          this.brand = res.data.data.products
          this.pageItem = this.brand
          console.log('getwidth')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (height !== null || height !== '' || height !== 'null' || height !== undefined || height !== 'undefined') {
        this.height = {
          height: height
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.height).then(res => {
          this.brand = res.data.data.products
          this.pageItem = this.brand
          console.log('getheight')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (diameter !== null || diameter !== '' || diameter !== 'null' || diameter !== undefined || diameter !== 'undefined') {
        this.diameter = {
          diameter: diameter
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.diameter).then(res => {
          this.brand = res.data.data.products
          this.pageItem = this.brand
          console.log('getdiameter')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (type !== null || type !== '' || type !== 'null' || type !== undefined || type !== 'undefined') {
        this.type = {
          type: type
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.type).then(res => {
          this.brand = res.data.data.products
          this.pageItem = this.brand
          console.log('gettype')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (min !== null || min !== '' || min !== 'null' || min !== undefined || min !== 'undefined') {
        this.range = {
          minPrice: min,
          maxPrice: max
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.range).then(res => {
          this.brand = res.data.data.products
          this.pageItem = this.brand
          console.log('gettype', this.brand)
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (brandId !== null || brandId !== '' || brandId !== 'null' || brandId !== undefined || brandId !== 'undefined') {
        await axios.get(process.env.VUE_APP_API_URL + '/product').then(res => {
          this.brand = res.data.data.products
          this.pageItem = this.brand
          console.log('gettypebrandId', this.brand)
          localStorage.setItem('data', JSON.stringify(this.brand))
          this.pageItem = this.brand
        })
      }
      const filters = await JSON.parse(localStorage.getItem('filter'))
      if (filters.width === null || filters.width === '' || filters.width === 'null') {
      } else {
        console.log('NOTNULLFILLTERWIDTH')
        const data = await JSON.parse(localStorage.getItem('data'))
        console.log('NOTNULLFILLTERWIDTH2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('NOTNULLFILLTERWIDTH3', filters)
        this.brand = await data.filter((post, index) => {
          return post.width === parseInt(filters.width)
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
        this.pageItem = this.brand
      }
      if (filters.height === null || filters.height === '' || filters.height === 'null') {
      } else {
        console.log('NOTNULLFILLTERHEIGHT')
        const data = await JSON.parse(localStorage.getItem('data'))
        console.log('NOTNULLFILLTERHEIGHT2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('NOTNULLFILLTERHEIGHT3', filters)
        this.brand = await data.filter((post, index) => {
          return post.height === parseInt(filters.height)
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
        this.pageItem = this.brand
      }
      if (filters.diameter === null || filters.diameter === '' || filters.diameter === 'null') {
      } else {
        console.log('NOTNULLFILLTERDIAMETER')
        const data = await JSON.parse(localStorage.getItem('data'))
        console.log('NOTNULLFILLTERDIAMETER2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('NOTNULLFILLTERDIAMETER3', filters)
        this.brand = await data.filter((post, index) => {
          return post.diameter === parseInt(filters.diameter)
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
        this.pageItem = this.brand
      }
      if (filters.type === null || filters.type === '' || filters.type === 'null') {
      } else {
        console.log('NOTNULLFILLTERtype')
        const data = await JSON.parse(localStorage.getItem('data'))
        console.log('NOTNULLFILLTERtype2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('NOTNULLFILLTERtype3', filters)
        this.brand = await data.filter((post, index) => {
          return post.type === filters.type
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
        this.pageItem = this.brand
      }
      if (filters.price.min === null || filters.price.min === '' || filters.price.min === 'null') {
      } else {
        console.log('NOTNULLFILLTERminmax')
        const data = await JSON.parse(localStorage.getItem('data'))
        console.log('NOTNULLFILLTERminmax2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('NOTNULLFILLTERminmax3', filters)
        this.brand = await data.filter((post, index) => {
          return post.regularPrice <= filters.price.max && post.regularPrice >= filters.price.min
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
        this.pageItem = this.brand
      }
      if (filters.brandId === null || filters.brandId === '' || filters.brandId === 'null') {
      } else {
        console.log('NOTNULLFILLTERbrandid')
        const data = await JSON.parse(localStorage.getItem('data'))
        console.log('NOTNULLFILLTERbrandid2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('NOTNULLFILLTERbrandid3', filters)
        this.brand = await data.filter((post, index) => {
          return post.brandId === filters.brandId.toString()
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
        this.pageItem = this.brand
      }
    },
    async filterwidth (value) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        console.log('filterNullWidth')
        const filter = {
          width: value,
          height: '',
          diameter: '',
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(value, null, null, null, null, null, null)
      } else {
        console.log('filterNotNullWidth')
        const filter = {
          width: value,
          height: filters.height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(value, null, null, null, null, null, null)
      }
    },
    async filtersheight (height) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        console.log('filterNullWidth')
        const filter = {
          width: '',
          height: height,
          diameter: '',
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, height, null, null, null, null, null)
      } else {
        console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, height, null, null, null, null, null)
      }
    },
    async filtersdiameter (diameter) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: diameter,
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, diameter, null, null, null, null)
      } else {
        console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, diameter, null, null, null, null)
      }
    },
    async filterstype (type) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: '',
          type: type,
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, type, null, null, null)
      } else {
        console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: filters.diameter,
          type: type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, type, null, null, null)
      }
    },
    async filterminmax (min, max) {
      console.log('minmax', min + max)
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: '',
          type: '',
          price: {
            min: min,
            max: max
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, min, max, null)
      } else {
        console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: min,
            max: max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, min, max, null)
      }
    },
    async filterbrand (brandId) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: '',
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, null, null, brandId)
      } else {
        console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: brandId
        }
        console.log('filterNotNullBrandID', filter)
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, null, null, brandId)
      }
    },
    getQueryVariable (variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] === variable) {
          return pair[1]
        }
      }
      return (false)
    },
    async onChangePage (pageOfitems) {
      // console.log('pagination', pageOfitems)
      for (var i = 0; i < pageOfitems.length; i++) {
        pageOfitems[i].regularPrice = pageOfitems[i].regularPrice.toLocaleString('en')
      }
      this.brand = pageOfitems
    },
    async product () {
      // console.log('currency', document.querySelectorAll('currency'))
      console.log(location.href)
      var split = await location.href
      split = await split.split('?')
      if (split.length > 1) {
        split = await split[1].split('=')
        // console.log('tyre', split[0])
        // console.log('value', split[1])
        // console.log('splitURL', location.search.substring(1))
        if (split[0] === 'width') {
          var splitfilter = location.search.substring(1)
          splitfilter = splitfilter.split('&')
          console.log('splitURL1', splitfilter)
          splitfilter[0] = splitfilter[0].split('=')
          splitfilter[1] = splitfilter[1].split('=')
          splitfilter[2] = splitfilter[2].split('=')
          console.log('splitURL1')
          if (splitfilter[0][1] !== null || splitfilter[0][1] !== '' || splitfilter[0][1] !== 'null') {
            await this.filterwidth(splitfilter[0][1])
          } else {
            await this.filterwidth()
          }
          if (splitfilter[1][1] !== null || splitfilter[1][1] !== '' || splitfilter[1][1] !== 'null') {
            console.log('splitURL2')
            await this.filtersheight(splitfilter[1][1])
          }
          if (splitfilter[2][1] !== null || splitfilter[2][1] !== '' || splitfilter[2][1] !== 'null') {
            console.log('splitURL3')
            await this.filtersdiameter(splitfilter[2][1])
          }
          // await this.filter(splitfilter[0][1], splitfilter[1][1], splitfilter[2][1], null, null, null)
          console.log('splitWidth', splitfilter[0][0])
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
          console.log('brands', split[1])
          await this.filterbrand(split[1])
        } else if (split[0] === 'type') {
          // console.log('brands', split[1])
          var splitfiltertype = location.search.substring(1)
          console.log('type', decodeURIComponent(splitfiltertype))
          splitfiltertype = decodeURIComponent(splitfiltertype).split('=')
          console.log('type', splitfiltertype[1])
          await this.filterstype(splitfiltertype[1])
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
