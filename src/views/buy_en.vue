<template>
  <div style="margin-top: 160px">
    <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
      <b-container>
        <b-row>
          <br>
          <div style="margin: 15px;">
            <div style="font-weight: bold;font-size: 30px;">Shipping form</div>
          </div>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <br>
              <div style="margin: 15px;">Buy 4 tires, free installation at participating stores.</div>
              <br>
              <div style="margin: 15px;">
                <b-button variant="primary" v-on:click="installer ()">Choose an installation shop</b-button>
                <br>
                <br>
              </div>
            </div>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <br>
              <div id="information" style="margin: 15px;">Selecting this option will send it to your billing and shipping address below.</div>
              <br>
              <div style="margin: 15px;">
                <b-button variant="primary" href="#more">Set delivery location</b-button>
                <br>
                <br>
              </div>
            </div>
          </b-col>
        </b-row>
        <br>
        <br>
        <b-row>
        <div v-if="statusin === 0">
        </div>
        <div v-if="statusin === 1">
          <b-container>
              <div style="text-align: left;">
                <b-table ref="table" striped hover :items="itemin" :fields="fieldin" :per-page="perpage" :current-page="currentPage">
                  <template v-slot:cell(Name)="data">
                    <div>{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(Address)="data">
                    <div>{{data.item.address}}</div>
                  </template>
                  <!-- <template v-slot:cell(เวลาทำการ)="data">
                    <div>{{data.item.hours}}</div>
                  </template> -->
                  <template v-slot:cell(Telephone)="data">
                    <div>{{data.item.phoneNo}}</div>
                  </template>
                  <!-- <template v-slot:cell(ประเภท)="data">
                    <div>{{data.item.category}}</div>
                  </template> -->
                  <template v-slot:cell(state)="data">
                    <div>
                      <b-button variant="primary" v-on:click="chooseinstaller(data.item.name, data.item.address, data.item.province, data.item.id, data.item.district, data.item.zipCode, true)" href="#installer">เลือกร้านนี้</b-button>
                    </div>
                  </template>
                </b-table>
              </div>
              <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perpage"
              align="fill"
              size="sm"
              class="my-0"
            ></b-pagination>
          </b-container>
          <br>
          <br>
        </div>
        </b-row>
        <b-row>
          <b-col>
            <div id="installer" style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <div style="margin: 15px;">
                <br>
                <div v-if="statusin === 1">
                  <div style="font-weight: bold;font-size: 30px;">Selected installation</div>
                  <br>
                  <div>
                    <div>Selected installation (Required)</div>
                    <div>
                      <b-textarea v-model="ins"></b-textarea>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>เลือกวันที่ติดตั้ง (Required)</div>
                    <div>
                      <b-form-datepicker v-model="date" :min="dates" class="mb-2"></b-form-datepicker>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>select installation date (optional)</div>
                    <div>
                      <div>
                        <b-form-timepicker v-model="valuetime" locale="en"></b-form-timepicker>
                        <!-- <div class="mt-2">Value: '{{ valuetime }}'</div> -->
                      </div>
                      <br>
                    </div>
                    <div> <label for="" style="color: #ee2456;">*</label> If there is a change in date, the team will contact you back.</div>
                  </div>
                </div>
                <div style="font-weight: bold;font-size: 30px;">Vehicle information for applying for a tire warranty</div>
                <br>
                  <div v-if="information == 1" style="color: red;font-weight: bold;">
                    ** Please fill out the information completely.
                  </div>
                <br>
                <div>
                  <div>
                    <div>Car brand <div style="color: red;display: inline-block;font-weight: bold;">*</div></div>
                    <div>
                      <b-input placeholder="Car brand"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>Car model <div style="color: red;display: inline-block;font-weight: bold;">*</div></div>
                    <div>
                      <b-input placeholder="Car model" v-model="warranty.carModel"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>Vehicle registration number <div style="color: red;display: inline-block;font-weight: bold;">*</div></div>
                    <div>
                      <b-input placeholder="Vehicle registration number" v-model="warranty.carNo"></b-input>
                      <br>
                    </div>
                  </div>
                </div>
                <div style="font-weight: bold;font-size: 30px;">Tax invoice
                </div>
                <br>
                <br>
                <div>
                  <div style="font-weight: bold;font-size: 30px;">* Please verify that the information is correct. Can't modify and request retrospectively</div>
                  <br>
                  <div>
                    <b-form-radio v-model="selectedtax" name="some-radios" value="false">No</b-form-radio>
                    <b-form-radio v-model="selectedtax" name="some-radios" value="true">Yes</b-form-radio>
                  </div>
                </div>
                <div>
                  <br>
                  <div style="font-weight: bold;font-size: 30px;">Invoice</div>
                  <br>
                  <div v-if="information == 1" style="color: red;font-weight: bold;">
                    ** Please fill out the information completely.
                  </div>
                  <br>
                  <div>
                    <div>
                      Name <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="fname" name="fname" autocomplete="on" v-model="firstname" placeholder="Name"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      Last Name <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="lname" name="lname" autocomplete="on"  v-model="lastname" placeholder="Last Name"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      Address <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="address" name="address" autocomplete="on" v-model="address.address" placeholder="Address"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      District <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="address" name="address" autocomplete="on" v-model="address.district" placeholder="District"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      Province <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="address" name="address" autocomplete="on" v-model="address.province" placeholder="Province"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      Zip code <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="zipcode" name="zipcode" autocomplete="on" v-model="address.zipcode" placeholder="Zip Code"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      Telephone <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="phone" name="phone" autocomplete="on" v-model="phoneNo" placeholder="Telephone"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      Email <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="email" id="email" name="email" autocomplete="on" v-model="email" placeholder="Email"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="warranty.carBrand"
                      name="checkbox-1"
                      value="true"
                      unchecked-value="false"
                    >
                    Please check your order list. We reserve the right to not accept exchanges or refunds after payment has been made. *
                    </b-form-checkbox>
                    <br>
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div id="more" style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <div style="margin: 15px;">
                <br>
                <div style="font-weight: bold;font-size: 30px;">More information
                </div>
                <br>
                <div>
                  <div>
                    Additional notes (Required)
                  </div>
                  <b-textarea placeholder="Notes such as delivery details"></b-textarea>
                  <br>
                  <br>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <br>
        <br>
        <b-row>
          <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
            <div>
              <br>
            <div style="font-weight: bold;font-size: 30px;">Your order list</div>
              <div >Enter a discount code here? <a href="#" v-b-modal.modal-1 style="text-decoration: none;">Click here to enter the discount code.</a></div>
              <div v-if="coupons.status === 1" style="font-weight: bold;display: inline-block;">This order has a discount code.:&nbsp;&nbsp;&nbsp;</div><div style="font-weight: bold;display: inline-block;color: red;">{{coupons.promotion.name}}</div>
              <b-modal id="modal-1" hide-footer hide-header>
                <p class="my-4">Is there a discount code?</p>
                <div>
                  <b-input v-model="couponId" placeholder="discount code"></b-input>
                </div>
                <br>
                <div>
                  <b-button variant="primary" v-on:click="usecoupon()">Use discount code</b-button>
                </div>
              </b-modal>
              <div style="margin: 5px;text-align: left;">
                <b-table ref="table" hover :items="items" :fields="fields">
                  <template v-slot:cell(Product)="data">
                    <div style="color: #005099;font-weight: bold;display:inline-block;">
                      <img style="width: 150px;" :src="data.item.img" alt="">
                    </div>
                    <div style="color: #005099;font-weight: bold;display:inline-block;margin-left: 15px;">{{data.item.name}} x {{data.item.qty}}</div>
                  </template>
                  <!-- <template v-slot:cell()="data">
                    <div style="color: #005099;font-weight: bold;">{{data.item.name}}</div>
                  </template> -->
                  <!-- <template v-slot:cell(จำนวน)="data">
                    <div>{{data.item.qty}}</div>
                  </template> -->
                  <template v-slot:cell(Amount)="data">
                    <div style="margin: 5px;text-align: left;">
                      <b-form-spinbutton id="demo-sb" v-model="data.item.qty" min="1" max="100" v-on:change="updateitem ()"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(Value)="data">
                    <div>฿{{(data.item.price * data.item.qty).toLocaleString('en')}}</div>
                  </template>
                  <template v-slot:cell()="data">
                    <i class="fas fa fa-times" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="removeitem (data.item.name)"></i>
                  </template>
                </b-table>
              </div>
              <div style="text-align: right;">
                <b-container>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Value
                      </div>
                    </b-col>
                    <b-col>฿{{(count).toLocaleString('en')}}</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                       <div style="color: black;font-weight: bold;">Delivery
                      </div>
                    </b-col>
                    <b-col>Free shipping</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Total
                      </div>
                    </b-col>
                    <b-col>
                      <div style="color: #005099;font-weight: bold;">
                        ฿{{(count).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <b-row v-if="coupons.status === 1">
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: black;font-weight: bold;">Total (use discount code)
                      </div>
                    </b-col>
                    <b-col>
                      <div style="color: red;font-weight: bold;">
                        ฿{{(coupons.priceCoup).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <!-- <div>
                        <b-button variant="primary" v-on:click="updateitem ()">ปรับปรุงสินค้าในตระกร้า</b-button>
                      </div> -->
                    </b-col>
                  </b-row>
                  <br>
                </b-container>
              </div>
              <div style="border-radius: 5px;border-top: thin solid #E0E0E0;">
                <br>
                <div style="margin: 15px;">
                  <div>
                    <b-form-radio v-model="selectedp" name="some-radios" value="1">Bank transfer</b-form-radio>
                    <br>
                    <div style="margin: 15px;">Make your payments directly to our bank account. Please use your order ID as a payment reference. Your order will not be sent until the funds are cleared in our account.
                    </div>
                    <br>
                    <br>
                    <br>
                    <b-form-radio v-model="selectedp" name="some-radios" value="2">Credit Card Visa / MasterCard</b-form-radio>
                    <!-- {{selected}} -->
                    <br>
                    <div style="margin-left: 5px;">Your information will be used in the ordering process. to create your experience through the website study privacy policy Privacy Policy.
                    </div>
                    <div v-if="selectedp == '1'" style="text-align: right;">
                      <b-button variant="primary" v-on:click="memberbank ()">Order</b-button>
                    </div>
                    <div v-if="selectedp == '2'" style="text-align: right;">
                      <b-button variant="primary" v-on:click="membercredit ()">Order</b-button>
                    </div>
                    <b-modal id="modal-NC" hide-footer hide-header centered>
                      <p style="font-weight: bold;text-align: center;" class="my-4">This coupon code does not exist or the coupon has expired, please check again.</p>
                      <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                    </b-modal>
                    <b-modal id="modal-NC2" hide-footer hide-header centered>
                      <p style="font-weight: bold;text-align: center;" class="my-4">This coupon code has expired, please check again.</p>
                      <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                    </b-modal>
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
// import installer from '../assets/installer.json'
import apiURL from '../assets/js/connect'
import axios from 'axios'
export default {
  data () {
    return {
      apiURL: apiURL,
      selectedtax: false,
      warranty: {
        carBrand: null,
        carModel: '',
        carNo: ''
      },
      statuss: '',
      selectedp: '',
      items: [],
      fields: ['Product', 'Amount', 'Value', ' '],
      pay: '',
      cart: [],
      check: [],
      statusin: 0,
      itemin: '',
      fieldin: ['Name', 'Address', 'Telephone', 'state'],
      perpage: 10,
      currentPage: 1,
      totalRows: 1,
      date: '',
      ins: '',
      count: 0,
      valuetime: '',
      dates: '',
      testss: '',
      data: {},
      address: {
        address: '',
        district: '',
        province: '',
        zipcode: ''
      },
      shipment: {
        installerId: 0,
        shipmentDate: '',
        address: '',
        district: '',
        province: '',
        zipcode: '',
        type: 1
      },
      status: 0,
      couponId: '',
      coupon: '',
      coupons: {
        status: 0,
        promotion: {
          name: ''
        }
      },
      totalPrice: 0.0,
      firstname: '',
      lastname: '',
      datainfo: {},
      phoneNo: '',
      email: '',
      autoinfo: '',
      information: 0,
      remark: null
    }
  },
  metaInfo: {
    title: 'การชำระเงิน',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  mounted () {
    if (localStorage.getItem('coupon') === null) {
      // // console.log('nullcoup')
    } else {
      // // console.log('notnullcoup')
      this.coupons = JSON.parse(localStorage.getItem('coupon'))
    }
    if (localStorage.getItem('info') === null) {
      // // console.log('null of info')
    } else {
      // // console.log('not null of info')
      this.autoinfo = JSON.parse(localStorage.getItem('info'))
      // // console.log('not null of info', this.autoinfo)
      this.address = this.autoinfo.address
      this.firstname = this.autoinfo.firstname
      this.lastname = this.autoinfo.lastname
      this.phoneNo = this.autoinfo.phoneNo
      this.email = this.autoinfo.email
      this.selected = this.autoinfo.taxInvoice
    }
    this.dates = new Date(Date.now() + (24 * 60 * 60 * 1000))
    // this.dates = this.dates.toLocaleDateString()
    // // console.log('date', this.dates.toLocaleDateString())
    axios.get(process.env.VUE_APP_API_URL + '/installer').then((res) => {
      // this.testinstaller = res.data.data.installers
      this.installers = res.data.data.installers
      this.itemin = this.installers
      this.totalRows = this.itemin.length
      this.currentPage = 1
      // // console.log('installer', this.itemin)
    })
    // // console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.totalRows = this.itemin.length
    this.currentPage = 1
    this.items = this.cart
    for (var i = 0; i < this.cart.length; i++) {
      this.count += (this.cart[i].qty * this.cart[i].price)
      // // console.log('countcart', this.count)
    }
    // // console.log('countcart', this.count)
  },
  methods: {
    usecoupon () {
      if (localStorage.getItem('coupon') === null) {
        // // console.log('nullofcode')
        // // console.log('coupon', this.couponId)
        this.dates = new Date().getTime()
        axios.get(process.env.VUE_APP_API_URL + '/coupon').then(res => {
          this.coupon = res.data.data
          // // console.log('couponssss', this.coupon)
          let promotion = this.coupon.filter((post, index) => {
            // // console.log('coupon', this.couponId)
            // var endDate = new Date(post.endAt).getTime()
            return post.name === this.couponId
          })
          if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
            // // console.log('ไม่มีคูปอง')
            this.stateCoup = null
            this.$bvModal.show('modal-NC')
          } else {
            // this.coupon = promotion[0]
            this.dates = new Date().getTime()
            promotion = promotion.filter((post, index) => {
              var endDate = new Date(post.endAt).getTime()
              // // console.log('ไม่มีคูปอง')
              return endDate > this.dates
            })
            // console.log('coupDate', promotion)
            if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
              // // console.log('หมดอายุ')
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
          // // console.log('couponssss', this.coupon.type)
          if (this.coupon.type === 2) {
            // // console.log('type')
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count * (1 - (this.coupon.amount / 100))
            }
            // this.count = this.count - this.coupon.amount
          } else if (this.coupon.type === 1) {
            // // console.log('amout', (1 - (this.coupon.amount / 100)))
            // this.count = this.count * (1 - (this.coupon.amount / 100))
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count - (this.coupon.amount)
            }
          }
          localStorage.setItem('coupon', JSON.stringify(this.coupons))
          this.$bvModal.hide('modal-1')
        })
      } else {
        // // console.log('test')
        this.coupons = JSON.parse(localStorage.getItem('coupon'))
        // // console.log('test', this.coupons)
        this.dates = new Date().getTime()
        axios.get(process.env.VUE_APP_API_URL + '/coupon').then(res => {
          this.coupon = res.data.data
          // // console.log('couponssss', this.coupon)
          let promotion = this.coupon.filter((post, index) => {
            // // console.log('coupon', this.couponId)
            // var endDate = new Date(post.endAt).getTime()
            return post.name === this.couponId
          })
          if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
            // // console.log('ไม่มีคูปอง')
            this.stateCoup = null
            this.$bvModal.show('modal-NC')
          } else {
            // this.coupon = promotion[0]
            this.dates = new Date().getTime()
            promotion = promotion.filter((post, index) => {
              var endDate = new Date(post.endAt).getTime()
              // // console.log('ไม่มีคูปอง')
              return endDate > this.dates
            })
            // console.log('coupDate', promotion)
            if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
              // // console.log('หมดอายุ')
              this.stateCoup = null
              this.$bvModal.show('modal-NC2')
            } else {
              this.coupon = promotion[0]
            }
          }
          // console.log('couponssss', this.coupon.type)
          if (this.coupon.type === 2) {
            // // console.log('type')
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count * (1 - (this.coupon.amount / 100))
            }
            // this.count = this.count - this.coupon.amount
          } else if (this.coupon.type === 1) {
            // // console.log('amout', (1 - (this.coupon.amount / 100)))
            // this.count = this.count * (1 - (this.coupon.amount / 100))
            this.coupons = {
              status: 1,
              promotion: promotion[0],
              price: this.count,
              priceCoup: this.count - (this.coupon.amount)
            }
          }
          localStorage.setItem('coupon', JSON.stringify(this.coupons))
          this.$bvModal.hide('modal-1')
        })
      }
    },
    async updateitem () {
      // // console.log('aa', this.items)
      localStorage.setItem('cart', JSON.stringify(this.items))
      this.items = JSON.parse(localStorage.getItem('cart'))
      // // console.log('sum', this.count)
      location.reload()
    },
    membercredit () {
      if (this.firstname === '' || this.lastname === '' || this.address.district === '' || this.address.province === '' || this.address.address === '' || this.address.zipCode === '' || this.phoneNo === '' || this.email === '') {
        // // console.log('null')
        location.replace('#information')
        this.information = 1
      } else {
        if (this.selectedtax === 'true') {
          this.selectedtax = true
        } else if (this.selectedtax === 'false') {
          this.selectedtax = false
        }
        if (this.warranty.carBrand === 'true') {
          this.warranty.carBrand = true
          this.remark = true
        } else if (this.warranty.carBrand === 'false') {
          this.warranty.carBrand = false
          this.remark = false
        }
        // // console.log('warranty', this.warranty)
        if (this.coupons.status === 1) {
          this.data = {
            customerId: 'C001',
            paymentId: 2,
            status: 1,
            totalPrice: this.coupons.priceCoup,
            detailList: this.items,
            couponId: this.coupons.promotion.id,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            phoneNo: this.phoneNo,
            email: this.email,
            taxInvoice: this.selectedtax,
            warranty: this.warranty,
            remark: this.remark,
            shipment: {
              installerId: this.shipment.installerId,
              shipmentDate: this.date + ' ' + this.valuetime,
              address: this.shipment.address,
              district: this.shipment.district,
              province: this.shipment.province,
              zipcode: this.shipment.zipcode,
              type: this.shipment.type
            }
          }
        } else {
          this.data = {
            customerId: 'C001',
            paymentId: 2,
            status: 1,
            totalPrice: this.count,
            detailList: this.items,
            couponId: null,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            phoneNo: this.phoneNo,
            email: this.email,
            taxInvoice: this.selectedtax,
            warranty: this.warranty,
            remark: this.remark,
            shipment: {
              installerId: this.shipment.installerId,
              shipmentDate: this.date + ' ' + this.valuetime,
              address: this.shipment.address,
              district: this.shipment.district,
              province: this.shipment.province,
              zipcode: this.shipment.zipcode,
              type: this.shipment.type
            }
          }
        }
        this.datainfo = {
          customerId: 1,
          paymentId: 1,
          status: 1,
          totalPrice: this.count,
          detailList: this.items
        }
        // // console.log('data', this.data)
        // // console.log('datainfo', this.datainfo)
        localStorage.setItem('checkout', localStorage.getItem('cart'))
        localStorage.setItem('info', JSON.stringify(this.data))
        // // console.log('id', this.data.shipment)
        location.replace('/checkcredit')
      }
    },
    memberbank () {
      if (this.firstname === '' || this.lastname === '' || this.address.district === '' || this.address.province === '' || this.address.address === '' || this.address.zipCode === '' || this.phoneNo === '' || this.email === '') {
        // // console.log('null')
        location.replace('#information')
        this.information = 1
      } else {
        if (this.selectedtax === 'true') {
          this.selectedtax = true
        } else if (this.selectedtax === 'false') {
          this.selectedtax = false
        }
        if (this.warranty.carBrand === 'true') {
          this.warranty.carBrand = true
          this.remark = true
        } else if (this.warranty.carBrand === 'false') {
          this.warranty.carBrand = false
          this.remark = false
        }
        // // console.log('warranty', this.warranty)
        if (this.coupons.status === 1) {
          this.data = {
            customerId: 'C001',
            paymentId: 1,
            status: 1,
            totalPrice: this.coupons.priceCoup,
            detailList: this.items,
            couponId: this.coupons.promotion.id,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            phoneNo: this.phoneNo,
            email: this.email,
            taxInvoice: this.selectedtax,
            warranty: this.warranty,
            remark: this.remark,
            shipment: {
              installerId: this.shipment.installerId,
              shipmentDate: this.date + ' ' + this.valuetime,
              address: this.shipment.address,
              district: this.shipment.district,
              province: this.shipment.province,
              zipcode: this.shipment.zipcode,
              type: this.shipment.type
            }
          }
        } else {
          this.data = {
            customerId: 'C001',
            paymentId: 1,
            status: 1,
            totalPrice: this.count,
            detailList: this.items,
            couponId: null,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            phoneNo: this.phoneNo,
            email: this.email,
            taxInvoice: this.selectedtax,
            warranty: this.warranty,
            remark: this.remark,
            shipment: {
              installerId: this.shipment.installerId,
              shipmentDate: this.date + ' ' + this.valuetime,
              address: this.shipment.address,
              district: this.shipment.district,
              province: this.shipment.province,
              zipcode: this.shipment.zipcode,
              type: this.shipment.type
            }
          }
        }
        this.datainfo = {
          customerId: 1,
          paymentId: 1,
          status: 1,
          totalPrice: this.count,
          detailList: this.items
        }
        // // console.log('data', this.data)
        // // console.log('datainfo', this.datainfo)
        localStorage.setItem('checkout', localStorage.getItem('cart'))
        localStorage.setItem('info', JSON.stringify(this.data))
        location.replace('/checkbank')
      }
    },
    removeitem (name) {
      // // console.log('remove', name)
      this.items = this.items.filter((obj) => {
        return obj.name !== name
      })
      // // console.log('remove: ', this.items)
      localStorage.setItem('test', JSON.stringify(this.items))
      localStorage.setItem('cart', JSON.stringify(this.items))
      location.reload()
    },
    installer () {
      this.statusin = 1
      // this.shipment = {
      //   installerId: 0,
      //   shipmentDate: '',
      //   address: '',
      //   district: '',
      //   province: '',
      //   zipcode: '',
      //   type: true
      // }
      // // console.log('status1')
    },
    chooseinstaller (value, add, province, id, district, zipCode, type) {
      this.shipment = {
        installerId: id,
        shipmentDate: '',
        address: add,
        district: district,
        province: province,
        zipcode: zipCode,
        type: type
      }
      this.shipment.installerId = id
      this.shipment.address = add
      this.shipment.district = district
      this.shipment.province = province
      this.shipment.zipcode = zipCode
      this.shipment.type = type
      // // console.log('choose', this.shipment.installerId)
      this.ins = value + ' ' + add
      if (province === 'กรุงเทพมหานคร' || province === 'ปทุมธานี' || province === 'นครปฐม' || province === 'นนทบุรี' || province === 'สมุทรปราการ' || province === 'สมุทรสาคร') {
        // // console.log('ปทุมกรุงเทพ')
        this.dates = new Date(Date.now() + (24 * 60 * 60 * 1000))
      } else {
        this.dates = new Date(Date.now() + (3 * (24 * 60 * 60 * 1000)))
      }
    }
  }
}
</script>
