<template>
  <div style="margin-top: 90px">
    <div>
      <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%A2%E0%B8%B2%E0%B8%87-OK.jpg" alt="">
      <div>
        <b-container>
          <br>
          <b-row>
            <b-col>
              <div>REGION</div>
              <div>
                <b-input list="region" type="search" v-model="filter" placeholder="REGION"></b-input>
              </div>
              <div>
                <datalist id="region" >
                  <option v-for="(item, index) in items" :key="index" :value="item.INSTALLATION_COST">{{index}}</option>
                </datalist>
              </div>
            </b-col>
            <b-col>
              <div>AREA</div>
              <div>
                <b-input list="area" type="search" v-model="filter" placeholder="AREA"></b-input>
              </div>
              <div>
                <datalist id="area" >
                  <option v-for="(item, index) in items" :key="index" :value="item.INSTALLATION_COST">{{index}}</option>
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
                  <option v-for="(item, index) in items" :key="index" :value="item.INSTALLATION_COST">{{index}}</option>
                </datalist>
              </div>
            </b-col>
            <b-col>
              <div>INSTALLER TYPE</div>
              <div>
                <b-input list="type" type="search" v-model="filter" placeholder="Postal Code"></b-input>
              </div>
              <div>
                <datalist id="type" >
                  <option v-for="(item, index) in items" :key="index" :value="item.INSTALLATION_COST">{{index}}</option>
                </datalist>
              </div>
            </b-col>
          </b-row>
          <br>
          <!-- <b-row>
            <b-col>
              <div>
                <b-button>SEARCH NOW</b-button>
              </div>
            </b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
          </b-row> -->
          <br>
          <br>
        </b-container>
        <div>
          <b-container>
              <div>
                <b-table ref="table" striped hover :items="items" :fields="fields" :filter="filter" :filter-included-fields="filterOn" :per-page="perpage" :current-page="currentPage">
                  <template v-slot:cell(INSTALLER_INFO)="data">
                      <img :src="data.item.INSTALLER_INFO" alt="">
                      <div>One United Tyre Pte Ltd
                7 Soon Lee Street, #01-35-36 Ispace
                627608</div>
                <div>
                  recommend
                </div>
                  </template>
                  <template v-slot:cell(OPENING_HOURS)="data">
                    <img :src="data.item.OPENING_HOURS" alt="">
                    <div>{{data.item.OPENING_HOURS}}</div>
                  </template>
                  <template v-slot:cell(INSTALLATION_COST)="data">
                    <a :href="data.item.INSTALLATION_COST">{{data.item.INSTALLATION_COST}}</a>
                  </template>
                </b-table>
              </div>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Tuesday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald2' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Wednesday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald3' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Thursday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald4' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Friday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald5' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Saturday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald6' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald7' }
      ],
      fields: ['INSTALLER_INFO', 'OPENING_HOURS', 'INSTALLATION_COST'],
      filter: null,
      filterOn: [],
      perpage: 10,
      totalRows: 1,
      currentPage: 1
    }
  },
  mounted () {
    this.totalRows = this.items.length
    this.currentPage = 1
  }
}
</script>
