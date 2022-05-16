<template>
  <div style="margin-top: 160px">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <div id="top"
              style="
                border-radius: 5px;
                border: thin solid #e0e0e0;
                text-align: left;
              "
            >
            <div v-if="status === 1" style="margin: 15px;color: #42ba96;font-weight: bold;font-size: 25;">ส่งข้อมูลการติดต่อเรียบร้อยแล้วค่ะ</div>
              <div style="margin: 15px">
                <div>
                  <h1 style="font-weight: bold;">แบบฟอร์มสอบถาม</h1>
                </div>
                <br />
                <div>ชื่อของท่าน</div>
                <b-input placeholder="กรุณากรอกชื่อ" v-model="data.name"></b-input>
                <br />
                <div>อีเมล์</div>
                <b-input placeholder="กรุณากรอกอีเมล" v-model="data.email"></b-input>
                <br />
                <div>โทรศัพท์/แฟกซ์</div>
                <b-input placeholder="กรุณากรอกเบอร์ / แฟกซ์" v-model="data.mobileNo"></b-input>
                <br>
                <div style="font-weight: bold;">
                  เพื่อตอบคำถามของคุณได้อย่างมีประสิทธิภาพมากขึ้น
                  กรุณาแจ้งให้เราทราบข้อมูลเกี่ยวกับรถยนต์ของคุณ
                </div>
                <br />
                <div>ยี่ห้อรถยนต์</div>
                <b-input placeholder="ยี่ห้อรถยนต์" v-model="data.carBrand"></b-input>
                <br />
                <div>รุ่นรถยนต์</div>
                <b-input placeholder="รุ่นรถยนต์" v-model="data.carModel"></b-input>
                <br />
                <div>ปี</div>
                <b-input placeholder="ปี" v-model="data.carYear"></b-input>
                <br />
                <div>ความคิดเห็น</div>
                <b-textarea placeholder="ความเห็น" v-model="data.note"></b-textarea>
                <div>
                  <br />
                  <b-button variant="primary" v-on:click="sendContact ()">ส่ง</b-button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col>
            <div style="text-align: left;">
              <div>
                <div style="font-weight: bold;">ติดต่อเรา</div>
                <br />
                <div>เบอร์ติดต่อ: <a style="text-decoration: none;color: black;" href="tel:+66992839256">099-283-9256</a></div>
                <div>เบอร์ติดต่อ: <a style="text-decoration: none;color: black;" href="tel:+66824771520">082-477-1520</a></div>
                <div>อีเมล์: <a style="text-decoration: none;color: black;" href="mailto:info.tyrepac@apo-th.com">info.tyrepac@apo-th.com</a></div>
                <div>
                  ที่อยู่: 594 ถนนหลวง แขวงป้อมปราบ เขตป้อมปราบศัตรูพ่าย
                  กรุงเทพฯ 10100
                </div>
                <div style="font-size: 30px;">
                  <div style="text-align: left;display: inline-block;margin: 10px;color: #4267B2;">
                    <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
                      <i class="fa-brands fa-facebook-square"></i>
                    </a>
                  </div>
                  <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
                    <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
                      <i class="fa-brands fa-line"></i>
                    </a>
                  </div>
                </div>
                <br />
                <br />
                <div style="font-weight: bold;">ชั่วโมงการทำงาน</div>
                <br />
                <div>จันทร์ – ศุกร์: 8:30 น. ถึง 17:00 น.</div>
                <div>เสาร์-อาทิตย์: หยุดทำการ</div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import axios from 'axios'
export default {
  data () {
    return {
      installerName: '',
      data: {
        name: '',
        email: '',
        mobileNo: '',
        carBrand: '',
        carModel: '',
        carYear: 0,
        note: '',
        type: 1
      },
      status: 0
    }
  },
  mounted () {
    var x = document.querySelectorAll('.currency')
    console.log('currency', x)
    for (let i = 0, len = x.length; i < len; i++) {
      const num = Number(x[i].innerHTML).toLocaleString('en')
      x[i].innerHTML = num
      x[i].innerHTML.add('currSign')
    }
  },
  methods: {
    sendContact () {
      console.log('contact', this.data)
      axios.post('/contact', this.data).then(res => {
        console.log('done')
        this.status = 1
        location.replace('#top')
        this.data = {}
      })
    }
  },
  metaInfo: {
    title: 'ติดต่อเรา',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  }
}
</script>
<style scoped>
  .currSign:before {
    content: '$';
  }
</style>
