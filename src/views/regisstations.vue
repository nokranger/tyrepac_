<template>
  <div style="margin-top: 160px">
    <div>
      <b-container>
        <b-row>
          <b-col  cols="12" sm="12" md="6" lg="6" xl="6">
            <div>
              <img
                style="width: 100%; height: 750px"
                src="https://i.imgur.com/yzulKjb.jpg"
                alt=""
              />
            </div>
          </b-col>
          <b-col  cols="12" sm="12" md="6" lg="6" xl="6">
            <div
              style="
                border-radius: 5px;
                border: thin solid #e0e0e0;
                text-align: left;
              "
            >
            <div v-if="status === 1" style="margin: 15px;color: #42ba96;font-weight: bold;font-size: 25;">ส่งข้อมูลการติดต่อเรียบร้อยแล้วค่ะ</div>
              <div style="margin: 15px">
                <div style="font-weight: bold;">กรุณากรอกข้อมูลเพื่อติดต่อกลับ</div>
                <br />
                <div>
                  <br />
                  <div>ชิ้อร้านติดตั้ง *</div>
                  <b-input v-model="data.installerName" placeholder="ชื่อร้านติดตั้ง"></b-input>
                </div>
                <div>
                  <br />
                  <div>ชื่อผู้ติดต่อ *</div>
                  <b-input v-model="data.name" placeholder="ชื่อผู้ติดต่อ"></b-input>
                </div>
                <div>
                  <br />
                  <div>เบอร์โทรศัพท์ *</div>
                  <b-input v-model="data.mobileNo" placeholder="เบอร์โทรศัพท์"></b-input>
                </div>
                <div>
                  <br />
                  <b-button variant="primary" v-on:click="sendContact ()">ส่ง</b-button>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
            <br>
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
                <div style="font-weight: bold;">รายละเอียดเพิ่มเติม</div>
                <br />
                <div>
                  <b-button variant="primary" href="https://www.tyrepac.co.th/wp-content/uploads/2020/06/shop_installer_registration_form.pdf" target="_blank">Download</b-button>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <br>
        <br>
      </b-container>
    </div>
  </div>
</template>
<script>
import apiURL from '../assets/js/connect.js'
import axios from 'axios'
export default {
  data () {
    return {
      apiURL: apiURL,
      nameinstaller: '',
      namecontact: '',
      phoneinstaller: '',
      data: {
        installerName: '',
        name: '',
        email: '',
        mobileNo: '',
        carBrand: '',
        carModel: '',
        carYear: 0,
        note: '',
        type: 2
      },
      status: 0

    }
  },
  metaInfo: {
    title: 'สมัครร้านติดตั้ง',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  methods: {
    registor () {
      this.data = {
        name: this.nameinstaller,
        address: '',
        latitude: 100.0,
        longitude: 100.0,
        installerWorking: {
          monStatus: true,
          tueStatus: true,
          wedStatus: true,
          thuStatus: true,
          friStatus: true,
          satStatus: true
        }
      }
      console.log('datain', '/installer/create')
      axios.post(process.env.VUE_APP_API_URL + '/installer/create', this.data).then((res) => {
        console.log(res)
      })
    },
    sendContact () {
      console.log('contact', this.data)
      axios.post(process.env.VUE_APP_API_URL + '/contact', this.data).then(res => {
        console.log('done')
        this.status = 1
        location.replace('#top')
        this.data = {}
      })
    }
  }
}
</script>
