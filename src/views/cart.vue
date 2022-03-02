<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
          <br>
          <div style="margin-left: 15px;font-weight: bold;">You Have 8 Items In Your Cart</div>
          <br>
              <div style="margin: 5px;">
                <b-table ref="table" striped hover :items="items" :fields="fields">
                  <template v-slot:cell(สินค้า)="data">
                    <img style="width: 150px;" :src="data.item.INSTALLER_INFO" alt="">
                  </template>
                  <template v-slot:cell()="data">
                    <div style="color: #005099;font-weight: bold;">{{data.item.test}}</div>
                  </template>
                  <template v-slot:cell(ราคา)="data">
                    <img :src="data.item.OPENING_HOURS" alt="">
                    fsafaf{{data.index}}
                    <b-input style="  border: none;display: inline;font-family: inherit;font-size: inherit;padding: none;width: auto;background-color: transparent;" disabled :ref="'price' + data.index" v-model="data.item.OPENING_HOURS"></b-input>
                  </template>
                  <template v-slot:cell(จำนวน)="data">
                    <div style="margin: 5px;">
                      <b-form-spinbutton :ref="'count' + data.index" id="demo-sb" :value="value" min="4" max="100"></b-form-spinbutton>
                    </div>
                  </template>
                  <template v-slot:cell(มูลค่าสินค้า)="data">
                    <b-input style="border: none;display: inline;font-family: inherit;font-size: inherit;padding: none;width: auto;background-color: transparent;" disabled ref="total" :value="data.item.OPENING_HOURS * value"></b-input>
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
              <div style="text-align: left;" v-for="(item, index) in items" :key="index">
                <b-container>
                  <b-row>
                    <b-col>
                      <div style="color: black;font-weight: bold;">
                        มูลค่าสินค้า
                      </div>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>{{item.price}}</b-col>
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
                        {{item.price}}
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                </b-container>
              </div>
                <div style="text-align: right;">
                  <b-button variant="primary" v-on:click="updateitem">ปรับปรุงสินค้าในตระกร้า</b-button>
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
      items: [
        { INSTALLER_INFO: 'https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg', test: 'TOYO PROXES SPORT SUV - 255/55R18', OPENING_HOURS: 23100, INSTALLATION_COST: 'Macdonald', price: 92400 },
        { INSTALLER_INFO: 'https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg', test: 'TOYO PROXES SPORT SUV - 255/55R18', OPENING_HOURS: 23105, INSTALLATION_COST: 'Macdonald', price: 92400 }
      ],
      fields: ['สินค้า', ' ', 'ราคา', 'จำนวน', 'มูลค่าสินค้า'],
      value: 4
    }
  },
  methods: {
    updateitem (index) {
      console.log('aa')
      console.log(index)
      console.log('length', this.items.length)
      // console.log(this.$refs.price[index].localValue)
      // console.log(this.$refs.price[1].localValue)
      // console.log(this.$refs.count0.localValue)
      // eslint-disable-next-line dot-notation
      for (var i = 0; i < this.items.length; i++) {
        // eslint-disable-next-line dot-notation
        console.log(this.$refs['count' + i].localValue)
        console.log(this.$refs['count' + i].localValue)
        console.log(this.$refs['count' + i].localValue)
      }
      // console.log(this.$refs.count[1].localValue)
      // console.log(this.$refs.price.localValue * this.$refs.count.localValue)
    }
  }
}
</script>
