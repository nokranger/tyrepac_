<template>
  <div v-if="languages === 'TH'" style="margin-top: 160px">
    <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
      <b-container>
        <b-row>
          <br>
          <div style="margin: 15px;">
            <div style="font-weight: bold;font-size: 30px;">รูปแบบการจัดส่งสินค้า</div>
          </div>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <br>
              <div style="margin: 15px;">ซื้อยาง 4 เส้น ติดตั้งฟรีกับร้านที่ร่วมรายการ</div>
              <br>
              <div style="margin: 15px;">
                <b-button variant="primary" v-on:click="installer ()">เลือกร้านติดตั้ง</b-button>
                <br>
                <br>
              </div>
            </div>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <br>
              <div id="information" style="margin: 15px;">การเลือกตัวเลือกนี้จะส่งไปยังที่อยู่สำหรับการเรียกเก็บเงินและการจัดส่งของคุณด้านล่าง</div>
              <br>
              <div style="margin: 15px;">
                <b-button variant="primary" href="#more">กำหนดสถานที่ส่ง</b-button>
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
                  <template v-slot:cell(ชื่อร้าน)="data">
                    <div>{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(ที่อยู่)="data">
                    <div>{{data.item.address}}</div>
                  </template>
                  <!-- <template v-slot:cell(เวลาทำการ)="data">
                    <div>{{data.item.hours}}</div>
                  </template> -->
                  <template v-slot:cell(โทรศัพท์)="data">
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
                  <div style="font-weight: bold;font-size: 30px;">ศูนย์การติดตั้งที่เลือก</div>
                  <br>
                  <div>
                    <div>ศูนย์การติดตั้งที่เลือก (ต้องระบุ)</div>
                    <div>
                      <b-textarea v-model="ins"></b-textarea>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>เลือกวันที่ติดตั้ง (ต้องระบุ)</div>
                    <div>
                      <b-form-datepicker v-model="date" :min="dates" class="mb-2"></b-form-datepicker>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>เลือกเวลาการติดตั้ง (optional)</div>
                    <div>
                      <div>
                        <b-form-timepicker v-model="valuetime" locale="en"></b-form-timepicker>
                        <!-- <div class="mt-2">Value: '{{ valuetime }}'</div> -->
                      </div>
                      <br>
                    </div>
                    <div> <label for="" style="color: #ee2456;">*</label> หากมีวันมีการเปลี่ยนแปลงทีมงานจะติดต่อกลับ</div>
                  </div>
                </div>
                <div style="font-weight: bold;font-size: 30px;">ข้อมูลรถยนต์ในการขอรับประกันยาง</div>
                <br>
                  <div v-if="information == 1" style="color: red;font-weight: bold;">
                    ** กรุณากรอกข้อมูลให้ครบถ้วน
                  </div>
                <br>
                <div>
                  <div>
                    <div>ยี่ห้อรถยนต์ <div style="color: red;display: inline-block;font-weight: bold;">*</div></div>
                    <div>
                      <b-input placeholder="ยี่ห้อรถยนต์"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>รุ่นรถยนต์ <div style="color: red;display: inline-block;font-weight: bold;">*</div></div>
                    <div>
                      <b-input placeholder="รุ่นรถยนต์" v-model="warranty.carModel"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>หมายเลขทะเบียนรถ <div style="color: red;display: inline-block;font-weight: bold;">*</div></div>
                    <div>
                      <b-input placeholder="หมายเลขทะเบียนรถ" v-model="warranty.carNo"></b-input>
                      <br>
                    </div>
                  </div>
                </div>
                <div style="font-weight: bold;font-size: 30px;">
                  ใบกำกับภาษี
                </div>
                <br>
                <br>
                <div>
                  <div style="font-weight: bold;font-size: 30px;">* กรุณาตรวจสอบข้อมูลให้ถูกต้อง ไม่สามารถแก้ไขเปลี่ยนแปลงและขอย้อนหลังได้</div>
                  <br>
                  <div>
                    <b-form-radio v-model="selectedtax" name="some-radios" value="false">ไม่ต้องการ</b-form-radio>
                    <b-form-radio v-model="selectedtax" name="some-radios" value="true">ต้องการ</b-form-radio>
                  </div>
                </div>
                <div>
                  <br>
                  <div style="font-weight: bold;font-size: 30px;">ใบเสร็จ</div>
                  <br>
                  <div v-if="information == 1" style="color: red;font-weight: bold;">
                    ** กรุณากรอกข้อมูลให้ครบถ้วน
                  </div>
                  <br>
                  <div>
                    <div>
                      ชื่อ <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="fname" name="fname" autocomplete="on" v-model="firstname" placeholder="ชื่อ"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      นามสกุล <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="lname" name="lname" autocomplete="on"  v-model="lastname" placeholder="นามสกุล"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      ที่อยู่ <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="address" name="address" autocomplete="on" v-model="address.address" placeholder="ที่อยู่"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      อำเภอ <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="address" name="address" autocomplete="on" v-model="address.district" placeholder="อำเภอ"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      จังหวัด <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="address" name="address" autocomplete="on" v-model="address.province" placeholder="จังหวัด"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      รหัสไปรษณีย์ <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="zipcode" name="zipcode" autocomplete="on" v-model="address.zipcode" placeholder="รหัสไปรษณีย์"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      โทรศัพท์ <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="text" id="phone" name="phone" autocomplete="on" v-model="phoneNo" placeholder="โทรศัพท์"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      อีเมลแอดเดรส <div style="color: red;display: inline-block;font-weight: bold;">*</div>
                    </div>
                    <div>
                      <b-input type="email" id="email" name="email" autocomplete="on" v-model="email" placeholder="อีเมลแอดเดรส"></b-input>
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
                      กรุณาตรวจสอบรายการคำสั่งซื้อของคุณ ทางเราขอสงวนสิทธิ์หากชำระเงินแล้วไม่รับเปลี่ยนหรือคืน *
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
                <div style="font-weight: bold;font-size: 30px;">
                  ข้อมูลเพิ่มเติม
                </div>
                <br>
                <div>
                  <div>
                    บันทึกเพิ่มเติม (ต้องระบุ)
                  </div>
                  <b-textarea placeholder="หมายเหตุต่างๆ เช่น รายละเอียดการจัดส่ง"></b-textarea>
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
            <div style="font-weight: bold;font-size: 30px;">รายการสั่งซื้อของคุณ</div>
              <div >ใส่รหัสส่วนลดที่นี่? <a href="#" v-b-modal.modal-1 style="text-decoration: none;">คลิกที่นี่ เพื่อใส่รหัสส่วนลด.</a></div>
              <div v-if="coupons.status === 1" style="font-weight: bold;display: inline-block;">ออร์เดอร์นี้มีการใช้รหัสส่วนลด:&nbsp;&nbsp;&nbsp;</div><div style="font-weight: bold;display: inline-block;color: red;">{{coupons.promotion.name}}</div>
              <b-modal id="modal-1" hide-footer hide-header>
                <p class="my-4">มีรหัสส่วนลดหรือไม่?</p>
                <div>
                  <b-input v-model="couponId" placeholder="รหัสส่วนลด"></b-input>
                </div>
                <br>
                <div>
                  <b-button variant="primary" v-on:click="usecoupon()">ใช้รหัสส่วนลด</b-button>
                </div>
              </b-modal>
              <div style="margin: 5px;text-align: left;">
                <b-table ref="table" hover :items="items" :fields="fields">
                  <template v-slot:cell(สินค้า)="data">
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
                  <template v-slot:cell(จำนวน)="data">
                    <div style="margin: 5px;text-align: left;">
                      <b-form-spinbutton id="demo-sb" v-model="data.item.qty" min="1" max="100" v-on:change="updateitem ()"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(มูลค่าสินค้า)="data">
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
                        มูลค่าสินค้า
                      </div>
                    </b-col>
                    <b-col>฿{{(count).toLocaleString('en')}}</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                       <div style="color: black;font-weight: bold;">
                        การจัดส่ง
                      </div>
                    </b-col>
                    <b-col>จัดส่งฟรี</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        รวมทั้งหมด
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
                      <div style="color: black;font-weight: bold;">
                        รวมทั้งหมด (ใช้รหัสส่วนลด)
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
                    <b-form-radio v-model="selectedp" name="some-radios" value="1">โอนเงินผ่านธนาคาร</b-form-radio>
                    <br>
                    <div style="margin: 15px;">
                      ชำระเงินของคุณโดยตรงไปยังบัญชีธนาคารของเรา โปรดใช้รหัสคำสั่งซื้อของคุณเป็นข้อมูลอ้างอิงการชำระเงิน คำสั่งซื้อของคุณจะไม่ถูกส่งจนกว่าเงินจะเคลียร์ในบัญชีของเรา
                    </div>
                    <br>
                    <br>
                    <br>
                    <b-form-radio v-model="selectedp" name="some-radios" value="2">บัตรเครดิต วีซ่า / มาสเตอร์การ์ด</b-form-radio>
                    <!-- {{selected}} -->
                    <br>
                    <div style="margin-left: 5px;">
                      ข้อมูลของคุณจะถูกใช้ในกระบวนการสั่งซื้อ เพื่อสร้างประสบการณ์ของคุณผ่านเว็บไซต์ ศึกษานโยบายส่วนตัว นโยบายความเป็นส่วนตัว.
                    </div>
                    <div v-if="selectedp == '1'" style="text-align: right;">
                      <b-button variant="primary" v-on:click="memberbank ()">สั่งซื้อ</b-button>
                    </div>
                    <div v-if="selectedp == '2'" style="text-align: right;">
                      <b-button variant="primary" v-on:click="membercredit ()">สั่งซื้อ</b-button>
                    </div>
                    <b-modal id="modal-NC" hide-footer hide-header centered>
                      <p style="font-weight: bold;text-align: center;" class="my-4">ไม่มีรหัสคูปองนี้หรือคูปองหมดอายุไปแล้วโปรดตรวจเช็คอีกครั้ง</p>
                      <!-- <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button> -->
                    </b-modal>
                    <b-modal id="modal-NC2" hide-footer hide-header centered>
                      <p style="font-weight: bold;text-align: center;" class="my-4">รหัสคูปองนี้หมดอายุไปแล้วโปรดตรวจเช็คอีกครั้ง</p>
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
  <div v-else-if="languages === 'EN'">
  <app-buy></app-buy>
  </div>
</template>
<script>
// import installer from '../assets/installer.json'
import apiURL from '../assets/js/connect'
import axios from 'axios'
import buyEn from '../views/buy_en.vue'
export default {
  components: {
    'app-buy': buyEn
  },
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
      fields: ['สินค้า', 'จำนวน', 'มูลค่าสินค้า', ' '],
      pay: '',
      cart: [],
      check: [],
      statusin: 0,
      itemin: '',
      fieldin: ['ชื่อร้าน', 'ที่อยู่', 'โทรศัพท์', 'state'],
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
      remark: null,
      languages: ''
    }
  },
  metaInfo: {
    title: 'การชำระเงิน',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  mounted () {
    this.languages = JSON.parse(localStorage.getItem('languages'))
    // // console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      // // console.log('langNOTLANG')
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      // // console.log('langTH')
    } else if (this.languages === 'EN') {
      // // console.log('langEN')
    }
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
            // // console.log('coupDate', promotion)
            if (promotion[0] === null || promotion[0] === 'null' || promotion[0] === '' || promotion[0] === undefined || promotion[0] === 'undefined') {
              // // console.log('หมดอายุ')
              this.stateCoup = null
              // this.$bvModal.show('modal-NC2')
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
            // this.$bvModal.show('modal-NC')
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
