<template>
  <div
    style="
      border-style: solid;
      border: 3px #a0a0a0;
      background-color: #282828;
      height: 200px;
    "
  >
    <br />
    <br />
    <div>
      <b-container>
        <b-row>
          <b-col>
            <h4 style="color: whitesmoke">
              สมัครสมาชิกตอนนี้และรับข้อเสนอพิเศษ
            </h4>
          </b-col>
          <b-col>
            <div style="display: inline-block;margin-right: 10px;">
              <b-input style="width: auto" placeholder="โปรดใส่อีเมลล์ของคุณ" v-model="data.email"></b-input>
            </div>
            <div style="display: inline-block;">
              <b-button variant="primary" v-on:click="sendContact ()">ส่ง</b-button>
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
  },
  methods: {
    sendContact () {
      console.log('contact', this.data)
      axios.post(process.env.VUE_APP_API_URL + '/contact', this.data).then(res => {
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
