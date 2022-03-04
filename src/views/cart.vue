<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
          <br>
          <div style="margin-left: 15px;font-weight: bold;">คุณมีสินค้า {{cart.value}} รายการในตระกร้า</div>
          <br>
              <div style="margin: 5px;">
                <b-table ref="table" striped hover :items="items" :fields="fields">
                  <template v-slot:cell(สินค้า)="data">
                    <img style="width: 150px;" :src="data.item.img" alt="">
                  </template>
                  <template v-slot:cell()="data">
                    <div style="color: #005099;font-weight: bold;">{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(จำนวน)="data">
                    <div style="margin: 5px;">
                      <b-form-spinbutton id="demo-sb" v-model="data.item.value" min="4" max="100"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(มูลค่าสินค้า)="data">
                    <b-input style="border: none;display: inline;font-family: inherit;font-size: inherit;padding: none;width: auto;background-color: transparent;" disabled ref="total" :value="data.item.price * data.item.value"></b-input>
                  </template>
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
            </b-col>
            <b-col>
              <br>
              <br>
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                <div style="margin: 15px;">
                  <div style="font-weight: bold;font-size: 30px;">มีรหัสส่วนลดหรือไม่?</div>
                  <div>
                    <b-input placeholder="รหัสส่วนลด"></b-input>
                    <br>
                  </div>
                  <div>
                    <b-button variant="primary">ใช้รหัสส่วนลด</b-button>
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
                    <b-col>{{count}}</b-col>
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
                      <div>จัดส่งไปที่ กรุงเทพมหานคร</div>
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
                      <div style="color: #005099;font-weight: bold;">
                        {{count}}
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                </b-container>
              </div>
                <div style="text-align: right;">
                  <b-button variant="primary" v-on:click="updateitem ()">ปรับปรุงสินค้าในตระกร้า</b-button>
                  <br>
                  <br>
                </div>
                <div style="text-align: right;">
                  <b-button variant="primary" href="/checkout">สั่งซื้อและชำระเงิน</b-button>
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
export default {
  data () {
    return {
      items: [],
      fields: ['สินค้า', ' ', 'จำนวน', 'มูลค่าสินค้า'],
      value: 4,
      cart: [],
      sortaa: '',
      count: 0,
      price: 0
    }
  },
  mounted () {
    console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.items = [
      { img: this.cart.img, name: this.cart.name, value: this.cart.value, price: this.cart.price }
    ]
    this.sortaa = this.items
    // this.sortaa.sort((a, b) => {
    //   console.log('aa', a.price)
    //   return a.price * a.value
    // })
    // console.log('regu', this.sortaa)
    for (var c in this.items) {
      console.log(c)
      console.log('count', this.items[c].price)
      this.count = this.count + (this.items[c].price * this.items[c].value)
    }
    console.log('sum', this.count)
  },
  methods: {
    updateitem (index) {
      console.log('aa')
      console.log(index)
    }
  }
}
</script>
