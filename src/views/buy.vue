<template>
  <div style="margin-top: 90px">
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
              <div style="margin: 15px;">การเลือกตัวเลือกนี้จะส่งไปยังที่อยู่สำหรับการเรียกเก็บเงินและการจัดส่งของคุณด้านล่าง</div>
              <br>
              <div style="margin: 15px;">
                <b-button variant="primary">กำหนดสถานที่ส่ง</b-button>
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
                      <b-button variant="primary" v-on:click="chooseinstaller(data.item.name, data.item.address)">เลือกร้านนี้</b-button>
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
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
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
                <div>
                  <div>
                    <div>ยี่ห้อรถยนต์ *</div>
                    <div>
                      <b-input></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>รุ่นรถยนต์ *</div>
                    <div>
                      <b-input></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>หมายเลขทะเบียนรถ *</div>
                    <div>
                      <b-input></b-input>
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
                  <div style="font-weight: bold;font-size: 30px;">*กรุณาตรวจสอบข้อมูลให้ถูกต้อง ไม่สามารถแก้ไขเปลี่ยนแปลงและขอย้อนหลังได้</div>
                  <br>
                  <div>
                    <b-form-radio v-model="selected" name="some-radios" value="false">ไม่ต้องการ</b-form-radio>
                    <b-form-radio v-model="selected" name="some-radios" value="true">ต้องการ</b-form-radio>
                  </div>
                </div>
                <div>
                  <br>
                  <div style="font-weight: bold;font-size: 30px;">ใบเสร็จ</div>
                  <br>
                  <div>
                    <div>
                      ชื่อ *
                    </div>
                    <div>
                      <b-input v-model="firstname"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      นามสกุล *
                    </div>
                    <div>
                      <b-input v-model="lastname"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      ที่อยู่ *
                    </div>
                    <div>
                      <b-input v-model="address.address"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      อำเภอ *
                    </div>
                    <div>
                      <b-input v-model="address.district"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      จังหวัด *
                    </div>
                    <div>
                      <b-input v-model="address.province"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      รหัสไปรษณีย์ *
                    </div>
                    <div>
                      <b-input v-model="address.zipCode"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      โทรศัพท์ *
                    </div>
                    <div>
                      <b-input v-model="phoneNo"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <div>
                      อีเมลแอดเดรส *
                    </div>
                    <div>
                      <b-input v-model="email"></b-input>
                      <br>
                    </div>
                  </div>
                  <div>
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="statuss"
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
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
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
              <b-modal id="modal-1" hide-footer hide-header>
                <p class="my-4">มีรหัสส่วนลดหรือไม่?</p>
                <div>
                  <b-input v-model="couponId" placeholder="รหัสส่วนลด"></b-input>
                </div>
                <br>
                <div>
                  <b-button variant="primary">ใช้รหัสส่วนลด</b-button>
                </div>
              </b-modal>
              <div style="margin: 5px;">
                <b-table ref="table" striped hover :items="items" :fields="fields">
                  <template v-slot:cell(สินค้า)="data">
                    <img style="width: 150px;" :src="data.item.img" alt="">
                  </template>
                  <template v-slot:cell()="data">
                    <div style="color: #005099;font-weight: bold;">{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(จำนวน)="data">
                    <div>{{data.item.qty}}</div>
                  </template>
                  <template v-slot:cell(มูลค่าสินค้า)="data">
                    <div>฿{{data.item.price * data.item.qty}}</div>
                  </template>
                  <template v-slot:cell(รถเข็น)="data">
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
                    <b-col>฿{{count}}</b-col>
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
                        ฿{{count}}
                      </div>
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
                      <b-button variant="primary" v-on:click="paybank">สั่งซื้อ</b-button>
                    </div>
                    <div v-if="selectedp == '2'" style="text-align: right;">
                      <b-button variant="primary" v-on:click="membercredit ()">สั่งซื้อ</b-button>
                    </div>
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
      selected: '',
      statuss: '',
      selectedp: '',
      items: [],
      fields: ['สินค้า', ' ', 'จำนวน', 'มูลค่าสินค้า', 'รถเข็น'],
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
        zipCode: ''
      },
      status: 0,
      couponId: 0,
      totalPrice: 0.0,
      firstname: '',
      lastname: '',
      datainfo: {},
      phoneNo: '',
      email: ''
    }
  },
  mounted () {
    this.dates = new Date()
    console.log('date', this.dates.toLocaleDateString())
    axios.get(apiURL + '/installer').then((res) => {
      // this.testinstaller = res.data.data.installers
      this.installers = res.data.data.installers
      this.itemin = this.installers
      this.totalRows = this.itemin.length
      this.currentPage = 1
      console.log('installer', this.testinstaller)
    })
    console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.totalRows = this.itemin.length
    this.currentPage = 1
    this.items = this.cart
    for (var i = 0; i < this.cart.length; i++) {
      this.count += (this.cart[i].qty * this.cart[i].price)
      console.log('countcart', this.count)
    }
    console.log('countcart', this.count)
  },
  methods: {
    membercredit () {
      this.data = {
        customerId: 'C001',
        couponId: 0,
        status: 1,
        paymentType: 2,
        totalPrice: this.count,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        phoneNo: this.phoneNo,
        email: this.email,
        paymentId: 1,
        taxInvoice: this.selected,
        warranty: this.statuss,
        orderDetails: this.items
      }
      this.datainfo = {
        customerId: 'C001',
        paymentId: 1,
        status: 1,
        totalPrice: this.count,
        orderDetails: this.items
      }
      console.log('data', this.datainfo)
      localStorage.setItem('checkout', localStorage.getItem('cart'))
      localStorage.setItem('info', JSON.stringify(this.data))
      location.replace('/credit')
      // axios.post(apiURL + '/order/create', this.testsss).then((res) => {
      //   console.log('response', res.data.status.code)
      //   console.log('response', res)
      //   if (res.data.status.code === 0) {
      //   }
      // })
    },
    memberbank () {
      this.data = {
        customerId: 'C001',
        couponId: 0,
        status: 1,
        paymentType: 2,
        totalPrice: this.count,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        phoneNo: this.phoneNo,
        email: this.email,
        paymentId: 1,
        taxInvoice: this.selected,
        warranty: this.statuss,
        orderDetails: this.items
      }
      this.testsss = {
        customerId: 'C001',
        paymentId: 1,
        status: 1,
        totalPrice: this.count,
        orderDetails: this.items
      }
      console.log('data', this.testsss)
      localStorage.setItem('checkout', localStorage.getItem('cart'))
      localStorage.setItem('info', JSON.stringify(this.data))
      location.replace('/bank')
      // axios.post(apiURL + '/order/create', this.testsss).then((res) => {
      //   console.log('response', res.data.status.code)
      //   console.log('response', res)
      //   if (res.data.status.code === 0) {
      //   }
      // })
    },
    removeitem (name) {
      console.log('remove', name)
      this.items = this.items.filter((obj) => {
        return obj.name !== name
      })
      console.log('remove: ', this.items)
      localStorage.setItem('test', JSON.stringify(this.items))
      localStorage.setItem('cart', JSON.stringify(this.items))
      location.reload()
    },
    paybank () {
      localStorage.setItem('checkout', localStorage.getItem('cart'))
      // localStorage.removeItem('cart')
      // localStorage.removeItem('cartdetail')
      this.data = JSON.parse(localStorage.getItem('cart'))
      console.log('databank', this.data)
      location.replace('/bank')
    },
    paycredit () {
      localStorage.setItem('checkout', localStorage.getItem('cart'))
      // localStorage.removeItem('cart')
      // localStorage.removeItem('cartdetail')
      // this.data = JSON.parse(localStorage.getItem('cart'))
      // console.log('databank', this.data)
      location.replace('/credit')
    },
    installer () {
      this.statusin = 1
      console.log('status1')
    },
    chooseinstaller (value, add) {
      console.log('choose', value)
      this.ins = value + ' ' + add
    }
  }
}
</script>
