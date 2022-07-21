<template>
  <div style="margin-top: 160px">
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
              Tires order details
            </div>
            <br />
            <div style="text-align: left">
              <b-table
                ref="table"
                hover
                :items="items"
                :fields="fields"
              >
                <template v-slot:cell(Product)="data">
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
                <template v-slot:cell(Value)="data">
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
                        Total
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
                        Delivery
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
                        Payment method
                      </div>
                    </b-col>
                    <b-col>Bank transfer</b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        Total (use discount code)
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
            <div style="text-align: right;">
              <b-button variant="primary" href="/checkout">Edit</b-button>
            </div>
            <div style="font-weight: bold; font-size: 25px">
              <!-- ขอบคุณค่ะ ได้รับรายการสั่งซื้อของคุณเรียบร้อยแล้ว -->
            </div>
            <ul>
              <div>
                <div style="display: inline-block;font-weight: bold;">Date: </div><li>{{dates | moment('DD/MM/YYYY')}}</li>
              </div>
              <!-- <div>
                <div style="display: inline-block;font-weight: bold;">เลขที่คำสั่งซื้อ: </div><li>Test101</li>
              </div> -->
              <div>
                <div style="display: inline-block;font-weight: bold;">Total: </div><li>฿{{(count).toLocaleString('en')}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Payment method: </div><li>Bank transfer</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Name: </div><li>{{info.firstname}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Last Name: </div><li>{{info.lastname}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Address: </div><li>{{info.address.address + ' ' +  info.address.district + ' ' + info.address.province + ' ' + info.address.zipcode}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Telephone: </div><li>{{info.phoneNo}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Email: </div><li>{{info.email}}</li>
              </div>
            </ul>
            <div>
              Make your payment directly to our bank account. Please use your order code as a reference. Your order will not be sent until the funds are cleared in our account.
            </div>
          </div>
          <div style="text-align: center;">
            <div>
              <div style="font-weight: bold; font-size: 25px">
                Scan QR CODE to pay
              </div>
            </div>
            <div>
              <img style="width: 300px;" src="https://i.imgur.com/YGIND7b.png" alt="">
            </div>
            <div style="font-weight: bold; font-size: 25px;text-align: left;">
              <div style="margin-left: 10px;">Bank account information</div>
              <ul>
                <li>Bank: Bangkok Bank</li>
                <li>Account number: 222-453485-5</li>
              </ul>
            </div>
          </div>
        </div>
        <br>
        <br>
        <b-modal id="modal-NC" hide-footer hide-header centered>
          <p style="font-weight: bold;text-align: center;" class="my-4">No coupon</p>
          <b-button variant="primary" href="/checkout">Edit</b-button>
        </b-modal>
        <div style="border-radius: 5px;border: thin solid #e0e0e0;text-align: left;">
          <div style="margin: 15px;">
            <div style="font-weight: bold; font-size: 25px">
              Receipt
            </div>
            <div v-if="previewImage != null">
              <img style="width:400px;height:700px" :src="previewImage">
            </div>
            <div>
              <input ref="file" type="file" name="avatar" id="avatar" accept="image/jpeg, image/png" v-on:change="uploadImage">
              <label for="avatar"><label style="color:red;font-size:25px;">*</label>Choose a file</label>
              <b-button style="margin-left: 15px;" variant="primary" v-on:click="checkout ()">Confirm</b-button>
            </div>
          </div>
        </div>
        <!-- <b-button v-on:click="test ()">Click</b-button> -->
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default ({
  data () {
    return {
      imgs: '',
      previewImage: null,
      items: [],
      fields: ['Product', ' ', 'Value'],
      cart: [],
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
      info: ''
    }
  },
  metaInfo: {
    title: 'การชำระเงิน',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  mounted () {
    this.dates = new Date()
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
    test () {
      this.$bvModal.show('modal-NC')
    },
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
          location.replace('/donebank')
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
