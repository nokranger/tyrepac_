<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <b-row>
          <b-col cols="2">
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
                    <div style="color: #005099;font-weight: bold;">
                      TOYO PROXES SPORT – 255/35ZR18
                    </div>
                    <div style="color: #005099;font-weight: bold;">
                      ฿8,550.00 ต่อเส้น
                    </div>
                    <br>
                    <br>
                    <div style="margin: 5px;">
                      <b-form-spinbutton style="width: 30%;" id="demo-sb" v-model="value" min="4" max="100"></b-form-spinbutton>
                      <br>
                      <b-button variant="primary" href="/checkout">สั่งซื้อเลย</b-button>
                    </div>
                    <div>
                      <b-button style="background-color: #00c300;border: none;">แชท + ซื้อผ่าน LINE</b-button>
                    </div>
                    <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;font-size: 14px;">
                      <div style="margin: 5px;">SKU: TH_VTYBB255NJ94YA</div>
                      <div style="margin: 5px;">Categories: Toyo, PROXES SPORT, ยางประสิทธิภาพสูง</div>
                      <div style="margin: 5px;">Tags: PROXES SPORT, Toyo, 255/35ZR18</div>
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
export default {
  data () {
    return {
      value: 4,
      items: [
        { names: 'Tyre Brand', detail: 'Toyo' },
        { names: 'รุ่นยาง', detail: 'ยางประสิทธิภาพสูง' },
        { names: 'ความกว้าง', detail: '255' },
        { names: 'ขนาดวงล้อ', detail: '18' },
        { names: 'ซีรี่ย์ยาง', detail: '35' },
        { names: 'Load Index', detail: '94' },
        { names: 'Speed Index', detail: 'Y' }
      ],
      fields: ['ชื่อ', 'รายละเอียด']
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
