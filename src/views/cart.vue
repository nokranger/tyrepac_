<template>
  <div style="margin-top: 90px">
    <div>
      <b-container>
        <div>
          <div>You Have 8 Items In Your Cart</div>
          <br>
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
        </div>
        <br>
        <br>
        <b-row>
          <b-col>
            <b-col>
              <div>
                <div>คำนวนค่าจัดส่ง</div>
                <div>
                  <b-input></b-input>
                </div>
                <div>
                  <b-input></b-input>
                </div>
                <div>
                  <b-input></b-input>
                </div>
                <div>
                  <b-input></b-input>
                </div>
                <div>
                  <b-button>ปรับปรุงยอดรวม</b-button>
                </div>
              </div>
            </b-col>
            <b-col>
              <div>
                <div>มีรหัสส่วนลดหรือไม่?</div>
                <div>
                  <b-input></b-input>
                </div>
                <div>
                  <b-button>ใช้รหัสส่วนลด</b-button>
                </div>
              </div>
            </b-col>
          </b-col>
          <b-col>
            <div>
              <div>ยอดรวม</div>
              <div>
                มูลค่าสินค้า ฿39,600.00
              </div>
              <div>การจัดส่ง จัดส่งฟรี จัดส่งไปที่ ๆดๆไดๆได, ๆไดๆไดๆได, ๆดๆไดๆไดๆ, อ่างทอง, ดๆไดๆไดๆไ</div>
              <div>
                รวมทั้งหมด ฿39,600.00
              </div>
              <div>
                <b-button>ปรับปรุงสินค้าในตระกร้า</b-button>
                <b-button>สั่งซื้อและชำระเงิน</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Monday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald', price: '22' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Tuesday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald2', price: '22' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Wednesday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald3', price: '22' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Thursday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald4', price: '22' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Friday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald5', price: '22' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Saturday - Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald6', price: '22' },
        { INSTALLER_INFO: 'https://i.imgur.com/9JpV8e2.png', OPENING_HOURS: 'Sunday 8:00 AM - 8:00 PM', INSTALLATION_COST: 'Macdonald7', price: '22' }
      ],
      fields: ['สินค้า', 'ราคา', 'จำนวน', 'มูลค่าสินค้า']
    }
  }
}
</script>
