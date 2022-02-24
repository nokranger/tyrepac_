<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <b-row>
          <b-col cols="2">
            <div>
              <div>กรองตามความกว้าง</div>
              <div>
                <b-input placeholder="ทุกๆ ความกว้าง"></b-input>
              </div>
              <div>กรองตามซีรี่ย์ยาง</div>
              <div>
                <b-input placeholder="ทุกๆ ซีรี่ย์ยาง"></b-input>
              </div>
              <div>กรองตามขนาดวงล้อ</div>
              <div>
                <b-input placeholder="ทุกๆ ขนาดวงล้อ"></b-input>
              </div>
              <div>กรองตามรูปแบบยาง</div>
              <div>
                <b-input placeholder="ทุกๆ รุ่นยาง"></b-input>
              </div>
              <div>
                <label for="range-2">กรองตามราคา</label>
                <b-form-input id="range-2" v-model="value" type="range" min="2250" max="21100" step="10"></b-form-input>
                <div class="mt-2">ราคา {{ 2250 }} - {{value}}</div>
              </div>
            </div>
            <br>
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
          <b-col cols="10">
            <div style="border-radius: 5px;border: thin solid #E0E0E0;">
              <div style="margin: 5px;">
                <b-container>
                  <b-row>
                    <b-col>
                      <div>
                        <b-form-select
                          style="width: 50%; font-size: 20px; margin: 5px"
                          v-model="selected1"
                          :options="options"
                          name=""
                          id=""
                        >
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col>
                      <div>
                        <b-form-select
                          style="width: 50%; font-size: 20px; margin: 5px"
                          v-model="selected2"
                          :options="options2"
                          name=""
                          id=""
                        >
                        </b-form-select>
                      </div>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                        <div>
                          <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                        </div>
                        <div>TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div>฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <label for="demo-sb">จำนวนที่สั่งซื้อ</label>
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button>สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                        <div>
                          <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                        </div>
                        <div>TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div>฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <label for="demo-sb">จำนวนที่สั่งซื้อ</label>
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button>สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                        <div>
                          <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                        </div>
                        <div>TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div>฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <label for="demo-sb">จำนวนที่สั่งซื้อ</label>
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button>สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
                        <div>
                          <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                        </div>
                        <div>TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div>฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <label for="demo-sb">จำนวนที่สั่งซื้อ</label>
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button>สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
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
      value: '2250',
      value2: 4,
      selected1: null,
      selected2: null,
      options: [
        { value: null, text: 'เรียงตาม ปีที่ผลิต' },
        { value: 'a', text: 'เรียงตาม ชื่อ' },
        { value: 'b', text: 'เรียงตาม ราคา' },
        { value: 'c', text: 'เรียงตาม ยอดนิยม' },
        { value: 'd', text: 'เรียงตาม อันดับ' }
      ],
      options2: [
        { value: null, text: '16' },
        { value: 'a', text: '32' },
        { value: 'b', text: '48' }
      ]
    }
  }
}
</script>
