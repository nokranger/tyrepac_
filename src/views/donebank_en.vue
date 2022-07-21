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
              Thank you. Your order has been received.
            </div>
            <ul>
              <div>
                <div style="display: inline-block;font-weight: bold;">Date: </div><li>{{dates | moment('DD/MM/YYYY')}}</li>
              </div>
              <div>
                <div style="display: inline-block;font-weight: bold;">Order number: </div><li>-</li>
              </div>
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
            </div>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
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
      fields: ['สินค้า', ' ', 'จำนวน', 'มูลค่าสินค้า'],
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
    this.dates = this.dates.toLocaleDateString()
    // // console.log(JSON.parse(localStorage.getItem('cart')))
    // this.cart = JSON.parse(localStorage.getItem('checkout'))
    this.info = JSON.parse(localStorage.getItem('user'))
    this.cart = this.info.orderDetails
    // console.log('countcart', this.items)
    for (var i = 0; i < this.cart.length; i++) {
      this.count += (this.cart[i].qty * this.cart[i].price)
      // console.log('countcart', this.count)
    }
    // console.log('countcart', this.count)
  },
  methods: {
    test () {
      // console.log('fsafasfaff')
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
    checkout () {
      this.testsss = {
        customerId: 'C001',
        paymentId: 1,
        status: 1,
        totalPrice: this.count,
        orderDetails: this.items
      }
      // console.log('data', this.testsss)
      // localStorage.setItem('checkout', localStorage.getItem('cart'))
      axios.post(process.env.VUE_APP_API_URL + '/order', this.testsss).then((res) => {
        // console.log('response', res.data.status.code)
        // console.log('response', res)
        if (res.data.status.code === 0) {
          // localStorage.setItem('info', JSON.stringify(this.data))
          location.replace('/checkdone')
        }
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
