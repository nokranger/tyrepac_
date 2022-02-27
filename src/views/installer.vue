<template>
  <div style="margin-top: 90px">
    <div style="text-align: left;">
      <img style="width: 100%;" src="https://www.tyrepac.co.th/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%A2%E0%B8%B2%E0%B8%87-OK.jpg" alt="">
      <div>
        <div>
          <!-- {{installer}} -->
        </div>
        <b-container>
          <br>
          <b-row>
            <!-- <b-col>
              <div>REGION</div>
              <div>
                <b-input list="region" type="search" v-model="filter" placeholder="REGION"></b-input>
              </div>
              <div>
                <datalist id="region" >
                  <option value="ประเทศไทย"></option>
                </datalist>
              </div>
            </b-col> -->
            <b-col>
              <div>AREA</div>
              <div>
                <b-input list="area" type="search" v-model="filter" placeholder="AREA"></b-input>
              </div>
              <div>
                <datalist id="area" >
                  <option v-for="(item, index) in items" :key="index" :value="item.address"></option>
                </datalist>
              </div>
            </b-col>
            <b-col>
              <div>Postal Code</div>
              <div>
                <b-input list="postal" type="search" v-model="filter" placeholder="Postal Code"></b-input>
              </div>
              <div>
                <datalist id="postal" >
                  <option v-for="(item, index) in items" :key="index" :value="item.zip"></option>
                </datalist>
              </div>
            </b-col>
            <b-col>
              <div>INSTALLER TYPE</div>
              <div>
                <b-input list="type" type="search" v-model="filter" placeholder="INSTALLER TYPE"></b-input>
              </div>
              <div>
                <datalist id="type" >
                  <option value="ร้านติดตั้งทั้งหมด"></option>
                  <option value="ร้านติดตั้งฟรี"></option>
                </datalist>
              </div>
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
                  <template v-slot:cell(Name)="data">
                    <div>{{data.item.name}}</div>
                  </template>
                  <template v-slot:cell(Address)="data">
                    <div>{{data.item.address}}</div>
                  </template>
                  <template v-slot:cell(Hour)="data">
                    <div>{{data.item.hour}}</div>
                  </template>
                  <template v-slot:cell(Phone)="data">
                    <div>{{data.item.phone}}</div>
                  </template>
                  <template v-slot:cell(Category)="data">
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
import installer from '../assets/installer.json'
export default {
  data () {
    return {
      items: installer,
      fields: ['name', 'address', 'hours', 'phone', 'category'],
      filter: null,
      filterOn: [],
      perpage: 10,
      totalRows: 1,
      currentPage: 1,
      installer: installer,
      post: ''
    }
  },
  mounted () {
    this.totalRows = this.items.length
    this.currentPage = 1
  },
  methods: {
  }
}
</script>
