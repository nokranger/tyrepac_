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
                <b-input placeholder="REGION"></b-input>
              </div>
            </b-col>
            <b-col>
              <div>AREA</div>
              <div>
                <b-input placeholder="AREA"></b-input>
              </div>
            </b-col>
            <b-col>
              <div>Postal Code</div>
              <div>
                <b-input placeholder="Postal Code"></b-input>
              </div>
            </b-col>
            <b-col>
              <div>INSTALLER TYPE</div>
              <div>
                <b-input placeholder="Postal Code"></b-input>
              </div>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
              <div>
                <b-button>SEARCH NOW</b-button>
              </div>
            </b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
          <br>
          <br>
        </b-container>
        <div>
          <b-container>
              <div>
                <b-table ref="table" striped hover :items="items" :fields="fields">
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
                    <img :src="data.item.installer" alt="">
                    <div>One United Tyre Pte Ltd 7 Soon Lee Street, #01-35-36 Ispace 627608</div>
                  </template>
                  <template v-slot:cell(INSTALLATION_COST)="data">
                    <a :href="data.item.INSTALLATION_COST">Price From
Charges Detail
Users rating</a>
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
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald' }
      ],
      fields: ['INSTALLER_INFO', 'OPENING_HOURS', 'INSTALLATION_COST']
    }
  }
}
</script>
