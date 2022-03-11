<template>
  <div style="margin-top: 90px">
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
              ขอบคุณค่ะ ได้รับรายการสั่งซื้อของคุณเรียบร้อยแล้ว
            </div>
            <ul>
              <li>เลขที่คำสั่งซื้อ</li>
              <li>วันที่</li>
              <li>รวมทั้งหมด</li>
              <li>วิธีการชำระเงิน</li>
            </ul>
            <div>
              Please send a check to store name, store street, store town, store
              state / country, store postcode
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
            <div style="font-weight: bold; font-size: 25px">
              รายละเอียดสั่งซื้อยาง
            </div>
            <br />
            <div style="text-align: left">
              <b-table
                ref="table"
                striped
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
                  <div>{{ data.item.name }}</div>
                </template>
                <template v-slot:cell(จำนวน)="data">
                  <div>{{ data.item.value }}</div>
                </template>
                <template v-slot:cell(มูลค่าสินค้า)="data">
                  <div>{{ data.item.price * data.item.value }}</div>
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
                    <b-col>{{ count }}</b-col>
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
          </div>
        </div>
        <br>
        <br>
        <div style="border-radius: 5px;border: thin solid #e0e0e0;text-align: left;">
          <div style="margin: 15px;">
            <div style="font-weight: bold; font-size: 25px">
              ใบเสร็จรับเงิน
            </div>
            <div v-if="previewImage != null">
              <img style="width:400px;height:700px" :src="previewImage">
            </div>
            <div>
              <input ref="file" type="file" name="avatar" id="avatar" accept="image/jpeg, image/png" v-on:change="uploadImage">
              <label for="avatar"><label style="color:red;font-size:25px;">*</label>Choose a file</label>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      imgs: '',
      previewImage: null,
      items: [],
      fields: ['สินค้า', ' ', 'จำนวน', 'มูลค่าสินค้า'],
      count: 0
    }
  },
  mounted () {
    console.log(JSON.parse(localStorage.getItem('cart')))
    this.cart = JSON.parse(localStorage.getItem('checkout'))
    this.items = this.cart
    for (var i = 0; i < this.cart.length; i++) {
      this.count += (this.cart[i].value * this.cart[i].price)
      console.log('countcart', this.count)
    }
    console.log('countcart', this.count)
  },
  methods: {
    test () {
      console.log('fsafasfaff')
    },
    uploadImage () {
      console.log('test')
      this.imgs = this.$refs.file.files[0]
      console.log(this.$refs.file.files[0])
      const reader = new FileReader()
      reader.readAsDataURL(this.imgs)
      reader.onload = e => {
        this.previewImage = e.target.result
      }
    }
  }
})
</script>
