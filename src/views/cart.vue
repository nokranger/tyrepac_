<template>
  <div v-if="languages === 'TH'" style="margin-top: 160px">
    <div>
      <b-container>
        <br>
        <br>
        <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
          <br>
          <div style="margin-left: 15px;font-weight: bold;">คุณมีสินค้า {{counts}} รายการในตระกร้า</div>
          <br>
          <!-- <div>{{cart}}</div> -->
              <div style="margin: 5px;">
              <!-- <div>{{items}}</div> -->
                <b-table ref="table" hover :items="items" :fields="fields">
                  <template v-slot:cell(สินค้า)="data">
                    <div style="color: #005099;font-weight: bold;display:inline-block;">
                      <img style="width: 150px;" :src="data.item.img" alt="">
                    </div>
                    <div style="color: #005099;font-weight: bold;display:inline-block;margin-left: 15px;">{{data.item.name}}</div>
                  </template>
                  <!-- <template v-slot:cell()="data">
                    <div style="color: #005099;font-weight: bold;">{{data.item.name}}</div>
                  </template> -->
                  <template v-slot:cell(จำนวน)="data">
                    <div style="margin: 5px;text-align: left;">
                      <b-form-spinbutton id="demo-sb" v-model="data.item.qty" min="1" max="100" v-on:change="updateitem ()"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(ราคา)="data">
                    <div>
                      <div>฿{{(data.item.price).toLocaleString('en')}}</div>
                    </div>
                  </template>
                  <template v-slot:cell(มูลค่าสินค้า)="data">
                    <div>฿{{(data.item.price * data.item.qty).toLocaleString('en')}}</div>
                  </template>
                  <template v-slot:cell()="data">
                    <i class="fas fa fa-times" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="removeitem (data.item.name)"></i>
                  </template>
                  <!-- <template v-slot:cell(ปรับปรุงสินค้า)="data">
                    <b-button v-on:click="updateitem(data.item.name, data.item.value, data)">ปรับปรุงสินค้า</b-button>
                  </template> -->
                </b-table>
              </div>
        </div>
        <br>
        <br>
        <b-row>
          <b-col>
            <!-- <b-col>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                <div style="margin: 15px;">
                  <div style="font-weight: bold;font-size: 30px;">คำนวนค่าจัดส่ง</div>
                  <div>
                    <b-input></b-input>
                    <br>
                  </div>
                  <div>
                    <b-input></b-input>
                    <br>
                  </div>
                  <div>
                    <b-input></b-input>
                    <br>
                  </div>
                  <div>
                    <b-input></b-input>
                    <br>
                  </div>
                  <div>
                    <b-button variant="primary">ปรับปรุงยอดรวม</b-button>
                  </div>
                </div>
              </div>
            </b-col> -->
            <b-col>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                <div style="margin: 15px;">
                  <div style="font-weight: bold;font-size: 30px;">มีรหัสส่วนลดหรือไม่?</div>
                  <div>
                    <!-- <div>1{{coupons}}</div> -->
                    <div v-if="coupons.status === 1" style="font-weight: bold;display: inline-block;">ออร์เดอร์นี้มีการใช้รหัสส่วนลด:&nbsp;&nbsp;&nbsp;</div><div style="font-weight: bold;display: inline-block;color: #005099;">{{coupons.promotion.name}}</div><i v-if="coupons.status === 1" class="fas fa fa-times" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="cancleCoup ()"></i>
                    <br>
                    <b-input v-model="couponId" placeholder="รหัสส่วนลด"></b-input>
                    <br>
                  </div>
                  <div>
                    <b-button variant="primary" v-on:click="usecoupon()">ใช้รหัสส่วนลด</b-button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
              <div style="margin: 15px;">
                <div style="font-weight: bold;font-size: 30px;">ยอดรวม</div>
              <div style="text-align: left;">
                <b-container>
                  <b-row>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        มูลค่าสินค้า
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>฿{{(count).toLocaleString('en')}}</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                       <div style="color: black;font-weight: bold;">
                        การจัดส่ง
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div>จัดส่งฟรี</div>
                      <!-- <div>จัดส่งไปที่ กรุงเทพมหานคร</div> -->
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        รวมทั้งหมด
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: #005099;">
                        ฿{{(count).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <!-- <div>{{coupons}}</div> -->
                  <b-row v-if="coupons.status === 1">
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        ส่วนลด
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div v-if="coupons.promotion.type === 1" style="color: red;">
                        ฿{{(coupons.promotion.amount).toLocaleString('en')}} <div style="color: #005099;display: inline-block;">บาท</div>
                      </div>
                      <div v-if="coupons.promotion.type === 2" style="color: red;">
                        ฿{{(coupons.promotion.amount).toLocaleString('en')}} <div style="color: #005099;display: inline-block;">%</div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row v-if="coupons.status === 1">
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        รวมทั้งหมด (ใช้รหัสส่วนลด)
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: red;">
                        ฿{{(coupons.priceCoup).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                </b-container>
              </div>
                <!-- <div style="text-align: right;">
                  <b-button variant="primary" v-on:click="updateitem ()">ปรับปรุงสินค้าในตระกร้า</b-button>
                  <br>
                  <br>
                </div> -->
                <div style="text-align: right;">
                  <b-button variant="primary" href="/checkout">สั่งซื้อและชำระเงิน</b-button>
                </div>
                <b-modal id="modal-NC" hide-footer hide-header centered>
                  <p style="font-weight: bold;text-align: center;" class="my-4">ไม่มีรหัสคูปองนี้โปรดตรวจสอบอีกครั้ง</p>
                  <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                </b-modal>
                <b-modal id="modal-NC2" hide-footer hide-header centered>
                  <p style="font-weight: bold;text-align: center;" class="my-4">รหัสคูปองนี้หมดอายุไปแล้วโปรดตรวจเช็คอีกครั้ง</p>
                  <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                </b-modal>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
  <div v-else-if="languages === 'EN'" style="margin-top: 160px">
    <div>
      <b-container>
        <br>
        <br>
        <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
          <br>
          <div style="margin-left: 15px;font-weight: bold;">You Have  {{counts}} products in your cart.</div>
          <br>
          <!-- <div>{{cart}}</div> -->
              <div style="margin: 5px;">
              <!-- <div>{{items}}</div> -->
                <b-table ref="table" hover :items="items" :fields="fieldss">
                  <template v-slot:cell(Product)="data">
                    <div style="color: #005099;font-weight: bold;display:inline-block;">
                      <img style="width: 150px;" :src="data.item.img" alt="">
                    </div>
                    <div style="color: #005099;font-weight: bold;display:inline-block;margin-left: 15px;">{{data.item.name}}</div>
                  </template>
                  <!-- <template v-slot:cell()="data">
                    <div style="color: #005099;font-weight: bold;">{{data.item.name}}</div>
                  </template> -->
                  <template v-slot:cell(Amount)="data">
                    <div style="margin: 5px;text-align: left;">
                      <b-form-spinbutton id="demo-sb" v-model="data.item.qty" min="1" max="100" v-on:change="updateitem ()"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(Price)="data">
                    <div>
                      <div>฿{{(data.item.price).toLocaleString('en')}}</div>
                    </div>
                  </template>
                  <template v-slot:cell(Value)="data">
                    <div>฿{{(data.item.price * data.item.qty).toLocaleString('en')}}</div>
                  </template>
                  <template v-slot:cell()="data">
                    <i class="fas fa fa-times" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="removeitem (data.item.name)"></i>
                  </template>
                  <!-- <template v-slot:cell(ปรับปรุงสินค้า)="data">
                    <b-button v-on:click="updateitem(data.item.name, data.item.value, data)">ปรับปรุงสินค้า</b-button>
                  </template> -->
                </b-table>
              </div>
        </div>
        <br>
        <br>
        <b-row>
          <b-col>
            <b-col>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                <div style="margin: 15px;">
                  <div style="font-weight: bold;font-size: 30px;">Is there a discount code?</div>
                  <div>
                    <!-- <div>1{{coupons}}</div> -->
                    <div v-if="coupons.status === 1" style="font-weight: bold;display: inline-block;">ออร์เดอร์นี้มีการใช้รหัสส่วนลด:&nbsp;&nbsp;&nbsp;</div><div style="font-weight: bold;display: inline-block;color: #005099;">{{coupons.promotion.name}}</div><i v-if="coupons.status === 1" class="fas fa fa-times" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="cancleCoup ()"></i>
                    <br>
                    <b-input v-model="couponId" placeholder="รหัสส่วนลด"></b-input>
                    <br>
                  </div>
                  <div>
                    <b-button variant="primary" v-on:click="usecoupon()">Use discount code</b-button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
              <div style="margin: 15px;">
                <div style="font-weight: bold;font-size: 30px;">Total</div>
              <div style="text-align: left;">
                <b-container>
                  <b-row>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Value
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>฿{{(count).toLocaleString('en')}}</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                       <div style="color: black;font-weight: bold;">
                       Delivery
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div>Free shipping</div>
                      <!-- <div>จัดส่งไปที่ กรุงเทพมหานคร</div> -->
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Total
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: #005099;">
                        ฿{{(count).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <!-- <div>{{coupons}}</div> -->
                  <b-row v-if="coupons.status === 1">
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Discount
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div v-if="coupons.promotion.type === 1" style="color: red;">
                        ฿{{(coupons.promotion.amount).toLocaleString('en')}} <div style="color: #005099;display: inline-block;">Bath</div>
                      </div>
                      <div v-if="coupons.promotion.type === 2" style="color: red;">
                        ฿{{(coupons.promotion.amount).toLocaleString('en')}} <div style="color: #005099;display: inline-block;">%</div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row v-if="coupons.status === 1">
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Total (Use discount code)
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: red;">
                        ฿{{(coupons.priceCoup).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                </b-container>
              </div>
                <!-- <div style="text-align: right;">
                  <b-button variant="primary" v-on:click="updateitem ()">ปรับปรุงสินค้าในตระกร้า</b-button>
                  <br>
                  <br>
                </div> -->
                <div style="text-align: right;">
                  <b-button variant="primary" href="/checkout">Order and Payment</b-button>
                </div>
                <b-modal id="modal-NC" hide-footer hide-header centered>
                  <p style="font-weight: bold;text-align: center;" class="my-4">This coupon code does not exist, please check again.</p>
                  <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                </b-modal>
                <b-modal id="modal-NC2" hide-footer hide-header centered>
                  <p style="font-weight: bold;text-align: center;" class="my-4">This coupon code has expired, please check again.</p>
                  <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                </b-modal>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      items: [],
      fields: ['สินค้า', 'จำนวน', 'ราคา', 'มูลค่าสินค้า', ' '],
      fieldss: ['Product', 'Amount', 'Price', 'Value', ' '],
      value: 4,
      cart: [],
      sortaa: '',
      count: 0,
      counts: 0,
      price: 0,
      couponId: '',
      coupon: '',
      coupons: {
        status: 0,
        promotion: {
          name: ''
        }
      },
      stateCoup: null,
      languages: ''
    }
  },
  metaInfo: {
    title: 'ตะกร้าสินค้า',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  async mounted () {
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
    if (localStorage.getItem('coupon') === null) {
      console.log('nullcoup')
    } else {
      console.log('notnullcoup')
      this.coupons = JSON.parse(localStorage.getItem('coupon'))
    }
    if (localStorage.getItem('cart') === null) {
      console.log('show status')
      this.statuss = 0
      // this.cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      console.log('show status')
      this.statuss = 1
      this.cart = JSON.parse(localStorage.getItem('cart'))
      for (var i = 0; i < this.cart.length; i++) {
        this.counts += this.cart[i].qty
        // this.cart[i].price = this.cart[i].price.toLocaleString('en')
        console.log('countcart', this.counts)
      }
      console.log('countcart', this.counts)
    }
    console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('cart'))
    // this.items = this.cart
    // console.log('countcart', this.cart[1].price)
    // for (var j = 0; j < this.cart.length; j++) {
    //   this.cart[j].price = this.cart[j].price.toLocaleString('en')
    //   console.log('countcart', this.count)
    // }
    this.items = this.cart
    this.sortaa = this.items
    for (var c in this.items) {
      console.log(c)
      console.log('count', this.items[c].price)
      this.count = this.count + (this.items[c].price * this.items[c].qty)
    }
    // this.count = this.count.toLocaleString('en')
    console.log('sum', this.count)
  },
  methods: {
    usecoupon () {
      if (localStorage.getItem('coupon') === null) {
        console.log('nullofcode')
        console.log('coupon', this.couponId)
        console.log('couponDATE', this.dates = new Date('2022-05-16 00:00:00'))
        // var d = new Date()
        this.dates = new Date().getTime()
        console.log('DATE', this.dates)
        axios.get(process.env.VUE_APP_API_URL + '/coupon').then(res => {
          this.coupon = res.data.data
          console.log('ALLcouponssss', this.coupon)
          let promotion = this.coupon.filter((post, index) => {
            // console.log('coupon', this.couponId)
            // var endDate = new Date(post.endAt).getTime()
            // if (endDate >= this.dates) {
            //   console.log('moredate', post.endAt)
            //   return false
            // } else {
            //   console.log('lessdate', post.endAt)
            //   return post.name === this.couponId
            // }
            // console.log('coupDate', post.endAt)
            return post.name === this.couponId
          })
          console.log('coupPromotion', promotion[0])
          if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
            console.log('ไม่มีคูปอง')
            this.stateCoup = null
            this.$bvModal.show('modal-NC')
          } else {
            // this.coupon = promotion[0]
            this.dates = new Date().getTime()
            promotion = promotion.filter((post, index) => {
              var endDate = new Date(post.endAt).getTime()
              console.log('ไม่มีคูปอง')
              return endDate > this.dates
            })
            console.log('coupDate', promotion)
            if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
              console.log('หมดอายุ')
              this.stateCoup = null
              this.$bvModal.show('modal-NC2')
            } else {
              this.coupon = promotion[0]
            }
          }
          // this.coupon = {
          //   status: 1,
          //   promotion: promotion[0]
          // }
          console.log('couponssssKKK', promotion[0])
          if (this.coupon.type === 2) {
            console.log('type')
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count * (1 - (this.coupon.amount / 100))
            }
            // this.count = this.count - this.coupon.amount
          } else if (this.coupon.type === 1) {
            console.log('amout', (1 - (this.coupon.amount / 100)))
            // this.count = this.count * (1 - (this.coupon.amount / 100))
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count - (this.coupon.amount)
            }
          }
          localStorage.setItem('coupon', JSON.stringify(this.coupons))
        })
      } else {
        console.log('test')
        this.coupons = JSON.parse(localStorage.getItem('coupon'))
        console.log('test', this.coupons)
        this.dates = new Date().getTime()
        axios.get(process.env.VUE_APP_API_URL + '/coupon').then(res => {
          this.coupon = res.data.data
          console.log('couponssss', this.coupon)
          let promotion = this.coupon.filter((post, index) => {
            console.log('coupon', this.couponId)
            // var endDate = new Date(post.endAt).getTime()
            return post.name === this.couponId
          })
          if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
            console.log('ไม่มีคูปอง')
            this.stateCoup = null
            this.$bvModal.show('modal-NC')
          } else {
            // this.coupon = promotion[0]
            this.dates = new Date().getTime()
            promotion = promotion.filter((post, index) => {
              var endDate = new Date(post.endAt).getTime()
              console.log('ไม่มีคูปอง')
              return endDate > this.dates
            })
            console.log('coupDate', promotion)
            if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
              console.log('หมดอายุ')
              this.stateCoup = null
              this.$bvModal.show('modal-NC2')
            } else {
              this.coupon = promotion[0]
            }
          }
          console.log('couponssssKKKK', promotion[0])
          if (this.coupon.type === 2) {
            console.log('type')
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count * (1 - (this.coupon.amount / 100))
            }
            // this.count = this.count - this.coupon.amount
          } else if (this.coupon.type === 1) {
            console.log('amout', (1 - (this.coupon.amount / 100)))
            // this.count = this.count * (1 - (this.coupon.amount / 100))
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count - (this.coupon.amount)
            }
          }
          localStorage.setItem('coupon', JSON.stringify(this.coupons))
        })
      }
    },
    async updateitem () {
      console.log('aa', this.items)
      localStorage.setItem('cart', JSON.stringify(this.items))
      this.items = JSON.parse(localStorage.getItem('cart'))
      console.log('sum', this.count)
      localStorage.removeItem('coupon')
      location.reload()
    },
    removeitem (name) {
      console.log('remove', name)
      this.items = this.items.filter((obj) => {
        return obj.name !== name
      })
      console.log('remove: ', this.items)
      localStorage.setItem('test', JSON.stringify(this.items))
      localStorage.setItem('cart', JSON.stringify(this.items))
      localStorage.removeItem('coupon')
      location.reload()
    },
    cancleCoup () {
      this.couponId = ''
      localStorage.removeItem('coupon')
      // this.coupons = {
      //   status: 0,
      //   promotion: '',
      //   price: '',
      //   priceCoup: ''
      // }
      location.reload()
    }
  },
  updated () {
    // this.updateitem()
  }
}
</script>
