<template>
    <div style="margin-top: 160px">
      <b-container>
        <!-- <div>
          {{promotions}}
        </div> -->
        <div v-if="languages === 'TH'" style="font-weight: bold;font-size: 30px;">
          โปรโมชั่น
        </div>
        <div v-else-if="languages === 'EN'" style="font-weight: bold;font-size: 30px;">
          Promotions
        </div>
        <br>
        <br>
        <br>
        <b-row>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3" v-for="(promotion, index) in promotions" :key="index">
            <div style="text-align: left;">
              <div>
                <a :href="'/shop?promotionId=' + promotion.id">
                  <img :src="'http://119.63.90.135:2083/image?image_path=' + promotion.image" width="200" height="200" alt="">
                </a>
                <div style="font-weight: bold;font-size: 20px;">
                  {{promotion.name}}
                </div>
                <div>
                  {{promotion.description}}
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <!-- <div style="text-align: left;">
          <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/12/pro-marry-christmas-200x200.jpg" alt="">
        </div> -->
        <br>
        <br>
        <br>
      </b-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      promotions: '',
      languages: ''
    }
  },
  mounted () {
    this.languages = JSON.parse(localStorage.getItem('languages'))
    console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      console.log('langNOTLANG')
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      console.log('langTH')
    } else if (this.languages === 'EN') {
      console.log('langEN')
    }
    axios.get(process.env.VUE_APP_API_URL + '/promotion').then(res => {
      this.promotions = res.data.data
      console.log('promotions', this.promotions)
      const promotion = this.promotions.filter((post, index) => {
        return post.isActive === 1
      })
      this.promotions = promotion
      console.log('promotionsssss', this.promotions)
    })
  },
  metaInfo: {
    title: 'โปรโมชั่น',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  }
}
</script>
