<template>
  <div style="margin-top: 160px">
    <div style="text-align: left;">
      <a href="/register-installer">
        <img style="width: 100%;" src="https://www.tyrepac.co.th/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%A2%E0%B8%B2%E0%B8%87-OK.jpg" alt="">
      </a>
      <div>
        <div>
          <!-- {{installer}} -->
        </div>
        <b-container>
          <br>
          <b-row>
            <b-col>
              <!-- <div>พื้นที่</div>
              <div>
                <b-input list="area" type="search" v-model="filter" placeholder="พื้นที่"></b-input>
              </div>
              <div>
                <datalist id="area" >
                  <option v-for="(item, index) in items" :key="index" :value="item.address"></option>
                </datalist>
              </div> -->
            </b-col>
            <b-col>
              <!-- <div>รหัสไปรษณีย์</div>
              <div>
                <b-input list="postal" type="search" v-model="filter" placeholder="รหัสไปรษณีย์"></b-input>
              </div>
              <div>
                <datalist id="postal" >
                  <option v-for="(item, index) in items" :key="index" :value="item.zipCode"></option>
                </datalist>
              </div> -->
            </b-col>
            <b-col>
              <div>พื้นที่</div>
              <div>
                <b-input list="area" type="search" v-model="filter" placeholder="พื้นที่"></b-input>
              </div>
              <div>
                <datalist id="area" >
                  <option v-for="(item, index) in items" :key="index" :value="item.address"></option>
                </datalist>
              </div>
              <!-- <div>ประเภทร้านติดตั้ง</div>
              <div>
                <b-input list="type" type="search" v-model="filter" placeholder="ประเภทร้านติดตั้ง"></b-input>
              </div>
              <div>
                <datalist id="type" >
                  <option value="ร้านติดตั้งทั้งหมด"></option>
                  <option value="ร้านติดตั้งฟรี"></option>
                </datalist>
              </div> -->
            </b-col>
          </b-row>
          <br>
          <br>
          <br>
        </b-container>
        <div>
          <b-container>
              <div style="text-align: left;">
                <b-table ref="table" striped hover :items="items" :fields="fields" :filter="filter" :filter-included-fields="filterOn" :per-page="perpage" :current-page="currentPage">
                  <template v-slot:cell(ชื่อร้าน)="data">
                    <div>{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(ที่อยู่)="data">
                    <div>{{data.item.address}}</div>
                  </template>
                  <template v-slot:cell(เวลาทำการ)="data">
                    <div>{{data.item.hours}}</div>
                  </template>
                  <template v-slot:cell(โทรศัพท์)="data">
                    <div>{{data.item.phoneNo}}</div>
                  </template>
                  <template v-slot:cell(ประเภท)="data">
                    <div>{{data.item.category}}</div>
                  </template>
                </b-table>
              </div>
              <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perpage"
              align="fill"
              size="sm"
              class="my-0"
            ></b-pagination>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import apiURL from '../assets/js/connect'
export default {
  data () {
    return {
      apiURL: apiURL,
      items: '',
      // items: installer,
      fields: ['ชื่อร้าน', 'ที่อยู่', 'โทรศัพท์'],
      // fields: ['ชื่อร้าน', 'ที่อยู่', 'เวลาทำการ', 'โทรศัพท์', 'ประเภท'],
      filter: null,
      filterOn: [],
      perpage: 10,
      totalRows: 1,
      currentPage: 1,
      post: '',
      testinstaller: '',
      installers: '',
      data: {
        installerName: '',
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
  metaInfo: {
    title: 'ร้านติดตั้ง',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  mounted () {
    axios.get('/installer').then((res) => {
      // this.testinstaller = res.data.data.installers
      this.installers = res.data.data.installers
      this.items = this.installers
      this.totalRows = this.items.length
      this.currentPage = 1
      console.log('installer', this.testinstaller)
    })
  },
  methods: {
    test (value) {
      this.filter = value
      console.log('testttclick')
      this.$refs.table.refresh()
    },
    sendContact () {
      console.log('contact', this.data)
      axios.post('/contact', this.data).then(res => {
        console.log('done')
        this.status = 1
        location.replace('#top')
      })
    }
  }
}
</script>
