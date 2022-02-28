<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <br>
        <b-row>
          <b-col cols="3">
            <app-menu></app-menu>
          </b-col>
          <b-col cols="9">
            <div style="border-radius: 5px;border: thin solid #E0E0E0;width: 100%;">
              <div style="margin: 5px;">
                <b-container>
                  <b-row>
                    <b-col>
                      <div>
                        <b-form-select
                          style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
                          v-model="selected1"
                          :options="options"
                          name=""
                          id=""
                        >
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col>
                      <!-- <div>
                        <b-form-select
                          style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
                          v-model="selected2"
                          :options="options2"
                          name=""
                          id=""
                        >
                        </b-form-select>
                      </div> -->
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col cols="3" v-for="(toyos, index) in toyo" :key="index" style="margin-bottom: 5px;">
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;">
                        <div>
                          <a :href="'/tyrebrand' + '/' + toyos['Attribute 1 value(s)'] + '/' + toyos.ID">
                            <img :src="toyos.Images" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">{{toyos.Name}}</div>
                        <div style="margin-left: 5px;color: #005099;">฿{{ toyos['Regular price']}} ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary" href="/checkout">สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                    <!-- <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
                        <div>
                          <a href="/tyrebrand/toyo/detail">
                            <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div style="margin-left: 5px;color: #005099;">฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary">สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
                        <div>
                          <a href="/tyrebrand/toyo/detail">
                            <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div style="margin-left: 5px;color: #005099;">฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary">สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col>
                      <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;text-align: left;">
                        <div>
                          <a href="/tyrebrand/toyo/detail">
                            <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                          </a>
                        </div>
                        <div style="margin-left: 5px;color: #005099;font-weight: bold;">TOYO PROXES SPORT SUV – 255/55R18</div>
                        <div style="margin-left: 5px;color: #005099;">฿7,700.00 ต่อเส้น</div>
                        <div style="margin: 5px;">
                          <b-form-spinbutton id="demo-sb" v-model="value2" min="4" max="100"></b-form-spinbutton>
                        </div>
                        <div style="margin: 5px;">
                          <b-button variant="primary">สั่งซื้อเลย</b-button>
                        </div>
                      </div>
                    </b-col> -->
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
import menu from '../components/brand/menu.vue'
import toyo from '../assets/json/tyre/toyo.json'
export default {
  components: {
    'app-menu': menu
  },
  data () {
    return {
      toyo: toyo,
      aa: '',
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
  },
  mounted () {
  }
}
</script>
