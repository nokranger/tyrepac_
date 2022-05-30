<template>
  <div style="margin-top: 160px">
    <div style="height: auto; text-align: center">
      <app-toppic></app-toppic>
      <app-searchtyre></app-searchtyre>
      <app-detail></app-detail>
      <app-type></app-type>
      <app-recommend></app-recommend>
      <app-brand></app-brand>
      <app-detailtyre></app-detailtyre>
      <app-review></app-review>
      <app-service></app-service>
      <app-regis></app-regis>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import toppic from '../components/home/toppic.vue'
import searchtyre from '../components/home/searchtyre.vue'
import detail from '../components/home/detail.vue'
import brand from '../components/home/brand.vue'
import detailtyre from '../components/home/detailtyre.vue'
import review from '../components/home/review.vue'
import service from '../components/home/service.vue'
import regis from '../components/home/regis.vue'
import typetyre from '../components/home/typetyre.vue'
import recommend from '../components/home/recommend.vue'
export default {
  components: {
    'app-toppic': toppic,
    'app-searchtyre': searchtyre,
    'app-detail': detail,
    'app-brand': brand,
    'app-detailtyre': detailtyre,
    'app-review': review,
    'app-service': service,
    'app-regis': regis,
    'app-type': typetyre,
    'app-recommend': recommend
  },
  data () {
    return {
    }
  },
  metaInfo: {
    title: 'Tyrepac Home',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  },
  mounted () {
    var config = {
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // },
      method: 'get',
      url: process.env.VUE_APP_API_URL + '/product'
    }
    // console.log('all null')
    axios(config).then(res => {
      // console.log(res.data.data)
      this.brand = res.data.data.products
      // console.log('brands', res.data.data.products)
      // const vvv = this.brand.find((post, index) => {
      //   if (post.prodId === 'TY001') {
      //     return true
      //   }
      // })
      // console.log('asfaf', vvv)
    })
  }
}
</script>
<style scoped>
p {
  font-size: 15px;
}
</style>
