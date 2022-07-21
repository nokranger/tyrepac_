<template>
  <div v-if="languages === 'TH'" style="margin-top: 160px">
    <div>
      <br>
      <br>
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
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
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div style="text-align: left;">
              <div>
                <div style="font-weight: bold;">ติดต่อเรา</div>
                <br />
                <div class="test">เบอร์ติดต่อ: <a style="text-decoration: none;color: black;" href="tel:+66992839256">099-283-9256</a></div>
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
  <div v-else-if="languages === 'EN'" style="margin-top: 160px">
    <div>
      <br>
      <br>
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
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
                  <h1 style="font-weight: bold;">Inquiry Form</h1>
                </div>
                <br />
                <div>Name</div>
                <b-input placeholder="Name" v-model="data.name"></b-input>
                <br />
                <div>Email</div>
                <b-input placeholder="Email" v-model="data.email"></b-input>
                <br />
                <div>Tel /Fax .</div>
                <b-input placeholder="Tel /Fax ." v-model="data.mobileNo"></b-input>
                <br>
                <div style="font-weight: bold;">
                  Answer your questions more efficiently. Please let us know the information about your car.
                </div>
                <br />
                <div>Car Brand</div>
                <b-input placeholder="Car Brand" v-model="data.carBrand"></b-input>
                <br />
                <div>Car Model</div>
                <b-input placeholder="Car Model" v-model="data.carModel"></b-input>
                <br />
                <div>Car Year</div>
                <b-input placeholder="Car Year" v-model="data.carYear"></b-input>
                <br />
                <div>Comment</div>
                <b-textarea placeholder="Comment" v-model="data.note"></b-textarea>
                <div>
                  <br />
                  <b-button variant="primary" v-on:click="sendContact ()">Send</b-button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div style="text-align: left;">
              <div>
                <div style="font-weight: bold;">Contact Us</div>
                <br />
                <div class="test">Mobile: <a style="text-decoration: none;color: black;" href="tel:+66992839256">099-283-9256</a></div>
                <div>Mobile: <a style="text-decoration: none;color: black;" href="tel:+66824771520">082-477-1520</a></div>
                <div>Email: <a style="text-decoration: none;color: black;" href="mailto:info.tyrepac@apo-th.com">info.tyrepac@apo-th.com</a></div>
                <div>
                  Address: 594 Luang Road, Pomprap, Pomprapsattruphai, Bangkok 10100, Thailand
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
                <div style="font-weight: bold;">Working Hours</div>
                <br />
                <div>Monday - Friday: 8:30 AM to 5:00 PM.</div>
                <div>Saturday-Sunday: Closed</div>
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
      status: 0,
      languages: ''
    }
  },
  mounted () {
    this.languages = JSON.parse(localStorage.getItem('languages'))
    // console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      // console.log('langNOTLANG')
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      // console.log('langTH')
    } else if (this.languages === 'EN') {
      // console.log('langEN')
    }
    // console.log('product')
    var config = {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'X-Requested-With': 'XMLHttpRequest'
      // },
      method: 'get',
      url: process.env.VUE_APP_API_URL + '/product'
    }
    axios(config).then(res => {
      // console.log('product', res)
    })
    var x = document.querySelectorAll('.currency')
    // console.log('currency', x)
    for (let i = 0, len = x.length; i < len; i++) {
      const num = Number(x[i].innerHTML).toLocaleString('en')
      x[i].innerHTML = num
      x[i].innerHTML.add('currSign')
    }
  },
  methods: {
    sendContact () {
      // console.log('contact', this.data)
      axios.post(process.env.VUE_APP_API_URL + '/contact', this.data).then(res => {
        // console.log('done')
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
/* .test {
  background-color: lightblue;
} */

/* @media screen and (min-width: 400px) {
  .test {
    background-color: lightgreen;
  }
} */

/* @media only screen and (max-width: 800px) {
  .test {
    background-color: lavender;
  }
} */
</style>
