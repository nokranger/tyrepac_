<template>
  <div style="margin-top: 160px">
    <div style="text-align: left;">
      <a v-if="languages === 'TH'" href="/register-installer">
        <img style="width: 100%;" src="https://i.imgur.com/3zAXjBc.jpg" alt="">
      </a>
      <a v-else-if="languages === 'EN'" href="/register-installer">
        <img style="width: 100%;" src="https://i.imgur.com/Z2uf78r.png" alt="">
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
            <b-col v-if="languages === 'TH'">
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
            <b-col v-else-if="languages === 'EN'">
              <div>Area</div>
              <div>
                <b-input list="area" type="search" v-model="filter" placeholder="Area"></b-input>
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
        <div v-if="languages === 'TH'">
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
        <div v-else-if="languages === 'EN'">
          <b-container>
              <div style="text-align: left;">
                <b-table ref="table" striped hover :items="items" :fields="fieldss" :filter="filter" :filter-included-fields="filterOn" :per-page="perpage" :current-page="currentPage">
                  <template v-slot:cell(Name_of_Store_Service_Installation)="data">
                    <div>{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(Address)="data">
                    <div>{{data.item.address}}</div>
                  </template>
                  <template v-slot:cell(เวลาทำการ)="data">
                    <div>{{data.item.hours}}</div>
                  </template>
                  <template v-slot:cell(Telephone)="data">
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
      fieldss: ['Name_of_Store_Service_Installation', 'Address', 'Telephone'],
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
      status: 0,
      languages: ''
    }
  },
  metaInfo: {
    title: 'ร้านติดตั้ง',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
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
    axios.get(process.env.VUE_APP_API_URL + '/installer').then((res) => {
      // this.testinstaller = res.data.data.installers
      this.installers = res.data.data.installers
      this.items = this.installers
      this.totalRows = this.items.length
      this.currentPage = 1
      // console.log('installer', this.installers)
    })
  },
  methods: {
    test (value) {
      this.filter = value
      // console.log('testttclick')
      this.$refs.table.refresh()
    },
    sendContact () {
      // console.log('contact', this.data)
      axios.post(process.env.VUE_APP_API_URL + '/contact', this.data).then(res => {
        // console.log('done')
        this.status = 1
        location.replace('#top')
      })
    }
  }
}
</script>
