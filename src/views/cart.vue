<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
          <br>
          <div style="margin-left: 15px;font-weight: bold;">คุณมีสินค้า {{counts}} รายการในตระกร้า</div>
          <br>
          <!-- <div>{{cart}}</div> -->
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
                      <b-form-spinbutton id="demo-sb" v-model="data.item.qty" min="4" max="100"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(มูลค่าสินค้า)="data">
                    <b-input style="border: none;display: inline;font-family: inherit;font-size: inherit;padding: none;width: auto;background-color: transparent;" disabled ref="total" :value="data.item.price * data.item.qty"></b-input>
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
                    <b-col>฿{{count}}</b-col>
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
                      <div style="color: #005099;font-weight: bold;">
                        ฿{{count}}
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
      counts: 0,
      price: 0
    }
  },
  mounted () {
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
        console.log('countcart', this.counts)
      }
      console.log('countcart', this.counts)
    }
    console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.items = this.cart
    this.sortaa = this.items
    for (var c in this.items) {
      console.log(c)
      console.log('count', this.items[c].price)
      this.count = this.count + (this.items[c].price * this.items[c].qty)
    }
    console.log('sum', this.count)
  },
  methods: {
    async updateitem () {
      console.log('aa', this.items)
      localStorage.setItem('cart', JSON.stringify(this.items))
      this.items = JSON.parse(localStorage.getItem('cart'))
      console.log('sum', this.count)
      location.reload()
    }
  }
}
</script>
