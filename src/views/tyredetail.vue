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
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <b-container>
                <b-row>
                  <b-col>
                    <div>
                      <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 300px;" alt="">
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      TOYO PROXES SPORT – 255/35ZR18
                    </div>
                    <div>
                      ฿8,550.00 ต่อเส้น
                    </div>
                    <div style="margin: 5px;">
                      <label for="demo-sb">จำนวนที่สั่งซื้อ</label>
                      <b-form-spinbutton id="demo-sb" v-model="value" min="4" max="100"></b-form-spinbutton>
                      <b-button>สั่งซื้อเลย</b-button>
                    </div>
                    <div>
                      <b-button variant="success">แชท + ซื้อผ่าน LINE</b-button>
                    </div>
                    <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                      <div>SKU: TH_VTYBB255NJ94YA</div>
                      <div>Categories: Toyo, PROXES SPORT, ยางประสิทธิภาพสูง</div>
                      <div>Tags: PROXES SPORT, Toyo, 255/35ZR18</div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <br>
            <div>
              <div>ข้อมูลเพิ่มเติม</div>
              <div>Tyre Brand / Toyo</div>
              <div>รุ่นยาง / ยางประสิทธิภาพสูง</div>
              <div>ความกว้าง / 255</div>
              <div>ขนาดวงล้อ / 18</div>
              <div>ซีรี่ย์ยาง / 35</div>
              <div>Load Index / 94</div>
              <div>Speed Index / Y</div>
            </div>
            <br>
            <br>
            <div>
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
      value: 4
    }
  }
}
</script>
