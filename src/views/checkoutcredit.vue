<template>
  <div v-if="languages === 'TH'" style="margin-top: 160px">
    <div>
      <b-container>
        <div
          style="
            border-radius: 5px;
            border: thin solid #e0e0e0;
            text-align: left;
          "
        >
          <div style="margin: 15px">
            <div style="font-weight: bold; font-size: 25px">
              รายละเอียดสั่งซื้อยาง
            </div>
            <br />
            <div style="text-align: left">
              <b-table
                ref="table"
                hover
                :items="items"
                :fields="fields"
              >
                <template v-slot:cell(สินค้า)="data">
                  <div>
                    <img style="width:150px;" :src="data.item.img " alt="">
                  </div>
                </template>
                <template v-slot:cell()="data">
                  <div>{{ data.item.name }} x {{ data.item.qty }}</div>
                </template>
                <!-- <template v-slot:cell(จำนวน)="data">
                  <div>{{ data.item.qty }}</div>
                </template> -->
                <template v-slot:cell(มูลค่าสินค้า)="data">
                  <div>{{ (data.item.price * data.item.qty).toLocaleString('en') }}</div>
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
                        รวม
                      </div>
                    </b-col>
                    <b-col>{{(count).toLocaleString('en')}}</b-col>
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
                        วิธีการชำระเงิน
                      </div>
                    </b-col>
                    <b-col>บัตรเครดิตวีซ่า / มาสเตอร์การ์ด</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        รวมทั้งหมด (ใช้รหัสส่วนลด)
                      </div>
                    </b-col>
                    <b-col>
                      <div style="color: #005099;font-weight: bold;">
                        ฿{{(info.totalPrice).toLocaleString('en')}}
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                </b-container>
              </div>
          </div>
        </div>
        <br>
        <br>
        <div
          style="
            border-radius: 5px;
            border: thin solid #e0e0e0;
            text-align: left;
          "
        >
          <div style="margin: 15px">
            <!-- {{info}} -->
            <div style="text-align: right;">
              <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button>
            </div>
            <div style="font-weight: bold; font-size: 25px">
              <!-- ขอบคุณค่ะ ได้รับรายการสั่งซื้อของคุณเรียบร้อยแล้ว -->
            </div>
            <ul>
              <div>
                <div style="display: inline-block;font-weight: bold;">วันที่: </div><li>{{dates | moment('DD/MM/YYYY')}}</li>
              </div>
              <div>
                <!-- <div style="display: inline-block;font-weight: bold;">เลขที่คำสั่งซื้อ: </div><li>-</li> -->
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">รวมทั้งหมด: </div><li>฿{{(count).toLocaleString('en')}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">วิธีการชำระเงิน: </div><li>บัตรเครดิต วีซ่า / มาสเตอร์การ์ด</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">ชื่อ: </div><li>{{info.firstname}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">นามสกุล: </div><li>{{info.lastname}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">ที่อยุ่: </div><li>{{info.address.address + ' ' +  info.address.district + ' ' + info.address.province + ' ' + info.address.zipcode}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">โทรศัพท์: </div><li>{{info.phoneNo}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">อีเมล: </div><li>{{info.email}}</li>
              </div>
            </ul>
            <div>
              Please send a check to store name, store street, store town, store
              state / country, store postcode
            </div>
          </div>
        </div>
        <br>
        <br>
        <b-modal id="modal-NC" hide-footer hide-header centered>
          <p style="font-weight: bold;text-align: center;" class="my-4">ไม่มีคูปอง</p>
          <b-button variant="primary" href="/checkout">แก้ไขข้อมูล</b-button>
        </b-modal>
        <div style="text-align: right;">
          <div style="margin: 15px;">
            <!-- <div style="font-weight: bold; font-size: 25px">
              ใบเสร็จรับเงิน
            </div> -->
            <div v-if="previewImage != null">
              <img style="width:400px;height:700px" :src="previewImage">
            </div>
            <div>
              <!-- <input ref="file" type="file" name="avatar" id="avatar" accept="image/jpeg, image/png" v-on:change="uploadImage">
              <label for="avatar"><label style="color:red;font-size:25px;">*</label>Choose a file</label> -->
              <b-button style="margin-left: 15px;" variant="primary" v-on:click="checkout ()">ยืนยัน</b-button>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
  <div v-else-if="languages === 'EN'">
    <app-credit></app-credit>
  </div>
</template>
<script>
import apiURL from '../assets/js/connect'
import axios from 'axios'
import checkoutcreditEn from '../views/checkoutcredit_en.vue'
export default ({
  components: {
    'app-credit': checkoutcreditEn
  },
  data () {
    return {
      apiURL: apiURL,
      imgs: '',
      previewImage: null,
      items: [],
      fields: ['สินค้า', ' ', 'มูลค่าสินค้า'],
      count: 0,
      dates: '',
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
      info: '',
      languages: ''
    }
  },
  metaInfo: {
    title: 'การชำระเงิน',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  mounted () {
    this.dates = new Date()
    this.languages = JSON.parse(localStorage.getItem('languages'))
    // console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      // console.log('langNOTLANG')
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      // console.log('langTH')
    } else if (this.languages === 'EN') {
      // console.log('langEN')
    }
    // this.dates = this.dates.toLocaleDateString()
    // console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('checkout'))
    this.info = JSON.parse(localStorage.getItem('info'))
    this.items = this.cart
    for (var i = 0; i < this.cart.length; i++) {
      this.count += (this.cart[i].qty * this.cart[i].price)
      // console.log('countcart', this.count)
    }
    // console.log('countcart', this.count)
  },
  methods: {
    uploadImage () {
      // console.log('test')
      this.imgs = this.$refs.file.files[0]
      // console.log(this.$refs.file.files[0])
      const reader = new FileReader()
      reader.readAsDataURL(this.imgs)
      reader.onload = e => {
        this.previewImage = e.target.result
      }
    },
    async checkout () {
      // console.log(JSON.parse(localStorage.getItem('info')))
      this.data = await JSON.parse(localStorage.getItem('info'))
      // console.log('data', this.data)
      // localStorage.setItem('checkout', localStorage.getItem('cart'))
      await axios.post(process.env.VUE_APP_API_URL + '/order', this.data).then((res) => {
        // console.log('response', res.data.status.code)
        // console.log('response', res)
        if (res.data.status.code === 0) {
          // localStorage.setItem('info', JSON.stringify(this.data))
          localStorage.removeItem('cart')
          localStorage.removeItem('test')
          localStorage.removeItem('checkout')
          localStorage.removeItem('info')
          localStorage.removeItem('coupon')
          localStorage.setItem('user', JSON.stringify(this.data))
          location.replace('/donecredit')
        } else if (res.data.status.code === 2) {
          // console.log('ไม่พบคูปอง')
          this.$bvModal.show('modal-NC')
        }
      }).catch((err) => {
        console.log('resErr', err.response)
      })
    }
  }
})
</script>
<style scoped>
li {
  list-style-type: none;
  margin-top: 15px;
  margin-left: 5px;
  /* font-size: 25px; */
  display: inline-block;
}
</style>
