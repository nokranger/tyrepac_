<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <b-row>
          <b-col cols="3">
            <div style="border-radius: 5px;border: thin solid #E0E0E0;">
              <div>
                ยางรถยนต์
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/dFBbXVM.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/9JpV8e2.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/yDA4cCy.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/39bMB69.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/iBpm6uT.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/yvhHUsj.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/TgbxVn2.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/EByvNfm.png" alt="">
              </div>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                <img src="https://i.imgur.com/iiTZGZR.png" alt="">
              </div>
            </div>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
              <b-container>
                <b-row>
                  <b-col>
                    <br>
                    <div>
                      <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 300px;" alt="">
                    </div>
                  </b-col>
                  <b-col>
                    <br>
                    <div style="color: #005099;font-weight: bold;font-size: 25px;">
                      {{cart.name}}
                    </div>
                    <div style="color: #005099;font-weight: bold;">
                      {{cart.price}} ต่อเส้น
                    </div>
                    <br>
                    <br>
                    <!-- {{brand.sku}} -->
                    <div style="margin: 5px;">
                      <b-form-spinbutton style="width: 30%;" id="demo-sb" v-model="cart.value" min="4" max="100"></b-form-spinbutton>
                      <br>
                      <b-button variant="primary" v-on:click="buy (cart.value)">สั่งซื้อเลย</b-button>
                    </div>
                    <div style="margin-left: 5px;">
                      <b-button style="background-color: #00c300;border: none;" href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank">แชท + ซื้อผ่าน LINE</b-button>
                    </div>
                    <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;font-size: 14px;">
                      <div style="margin: 5px;">SKU: {{cart.sku}}</div>
                      <div style="margin: 5px;">Categories: {{cart.type}}</div>
                      <div style="margin: 5px;">Tags: {{cart.name}}, {{cart.type}}</div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <br>
            <div>
              <b-container>
                <b-row>
                  <b-col>
                    <div style="text-align: left;font-weight: bold;color: #005099;">
                      <div style="color: black;">ข้อมูลเพิ่มเติม</div>
                      <br>
                      <b-table :items="items" :fields="fields" thead-class="d-none">
                      <template v-slot:cell(ชื่อ)="data">
                        <div style="color: #005099;">{{data.item.names}}</div>
                      </template>
                      <template v-slot:cell(รายละเอียด)="data">
                        <div style="color: #005099;font-weight: none;">{{data.item.detail}}</div>
                      </template>
                      </b-table>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <br>
            <br>
            <div style="text-align: left;font-weight: bold;color: black;">
              <div>Related products</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import toyo from '../assets/json/tyre/toyo.json'
export default {
  data () {
    return {
      toyo: toyo,
      value: 4,
      code: '',
      items: [],
      fields: ['ชื่อ', 'รายละเอียด'],
      cart: [],
      brand: []
    }
  },
  mounted () {
    console.log('code', this.$route.params.name)
    console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('cartdetail'))
    this.brand = this.cart.brand
    this.items = [
      { names: 'Tyre Brand', detail: this.brand.brandId },
      { names: 'รุ่นยาง', detail: this.brand.type },
      { names: 'ความกว้าง', detail: this.brand.width },
      { names: 'ขนาดวงล้อ', detail: this.brand.height },
      { names: 'ซีรี่ย์ยาง', detail: this.brand.diameter },
      { names: 'Load Index', detail: this.brand.loadIndex },
      { names: 'Speed Index', detail: this.brand.speedIndex }
    ]
  },
  methods: {
    buy (value) {
      console.log(value)
      // console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: this.cart.url,
        img: this.cart.img,
        name: this.cart.name,
        price: this.cart.price,
        value: value,
        type: this.cart.type,
        sku: this.cart.sku,
        brand: this.cart.brand
      }
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
      location.replace('/checkout')
    },
    getcode (code) {
      // console.log('toyo', this.toyo)
      // console.log('codefilter', code)
      return this.toyo.filter(
        (toyo) => {
          // console.log('toyofilter', toyo.Name)
          return code === toyo.Name
        }
      )
    },
    getObjectByValue (array, key, value) {
      return array.filter(function (object) {
        return object[key] === value
      })
    }
  }
}
</script>
<style scoped>
</style>
