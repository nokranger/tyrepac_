<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <div>
              <img
                style="width: 569px; height: 750px"
                src="https://i.imgur.com/yzulKjb.jpg"
                alt=""
              />
            </div>
          </b-col>
          <b-col>
            <div
              style="
                border-radius: 5px;
                border: thin solid #e0e0e0;
                text-align: left;
              "
            >
              <div style="margin: 15px">
                <div style="font-weight: bold;">กรุณากรอกข้อมูลเพื่อติดต่อกลับ</div>
                <br />
                <div>
                  <br />
                  <div>ชิ้อร้านติดตั้ง *</div>
                  <b-input v-model="nameinstaller" placeholder="ชื่อร้านติดตั้ง"></b-input>
                </div>
                <div>
                  <br />
                  <div>ชื่อผู้ติดต่อ *</div>
                  <b-input v-model="namecontact" placeholder="ชื่อผู้ติดต่อ"></b-input>
                </div>
                <div>
                  <br />
                  <div>เบอร์โทรศัพท์ *</div>
                  <b-input v-model="phoneinstaller" placeholder="เบอร์โทรศัพท์"></b-input>
                </div>
                <div>
                  <br />
                  <b-button variant="primary" v-on:click="registor()">ส่ง</b-button>
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
      data: ''

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
      axios.post('/installer/create', this.data).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
