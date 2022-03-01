<template>
  <div style="margin-top: 90px">
    <div style="height: auto; text-align: center">
      <app-toppic></app-toppic>
      <app-searchtyre></app-searchtyre>
      <app-detail></app-detail>
      <app-type></app-type>
      <app-brand></app-brand>
      <!-- <app-detailtyre></app-detailtyre> -->
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
// import detailtyre from '../components/home/detailtyre.vue'
import review from '../components/home/review.vue'
import service from '../components/home/service.vue'
import regis from '../components/home/regis.vue'
import typetyre from '../components/home/typetyre.vue'
export default {
  components: {
    'app-toppic': toppic,
    'app-searchtyre': searchtyre,
    'app-detail': detail,
    'app-brand': brand,
    // 'app-detailtyre': detailtyre,
    'app-review': review,
    'app-service': service,
    'app-regis': regis,
    'app-type': typetyre
  },
  data () {
    return {
    }
  },
  mounted () {
    // axios({
    //   method: 'get',
    //   // headers: { 'Access-Control-Allow-Origin': '*' },
    //   url: 'http://119.63.90.135:2083/productByFilter',
    //   data: {
    //     type: 'suv'
    //   }
    // }).then(function (response) {
    //   console.log(response.data.data)
    // })
    axios.get('http://119.63.90.135:2083/product').then(response => {
      console.log('res')
      console.log(response)
    })
  }
}
</script>
<style scoped>
p {
  font-size: 15px;
}
</style>
