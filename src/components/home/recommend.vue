<template>
  <div>
    <br>
    <div>
      <div style="font-weight: bold;font-size: 25px;">สินค้าแนะนำ</div>
      <div>ข้อเสนอสุดพิเศษจากแบรนด์ยาง</div>
      <div>
        <b-container>
          <br>
          <b-row>
            <b-col cols="6" sm="6" md="6" lg="3" xl="3" v-for="(item, index) in promotions" :key="index" style="margin-top: 5px;">
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;height: 400px;">
                <div style="width: 100%;;text-align: center;">
                  <a style="cursor: pointer;" v-on:click="buydetail (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('http://119.63.90.135:2083/image?image_path=' + item.image), item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)">
                    <img :src="'http://119.63.90.135:2083/image?image_path=' + item.image" style="width: 150px;height: 150px;margin: 5px;" alt="">
                  </a>
                </div>
                <div style="margin-left: 5px;color: #005099;font-weight: bold;height: 60px;">{{item.name}}</div>
                <div style="margin-left: 5px;color: #005099;text-align: left;">฿{{ item.regularPrice}} ต่อเส้น</div>
                <!-- <div style="border-top: thin solid #E0E0E0;margin-bottom: 4px;margin-left: 20px;margin-right: 20px;text-align: center;"></div> -->
                <div style="margin-bottom: 4px;margin-left: 20px;margin-right: 20px;">
                  <br>
                  <div style="margin: 5px;width: 100%;">
                    <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
                  </div>
                  <br>
                  <div style="margin: 5px;text-align: left;">
                    <b-button variant="primary" v-on:click="buycart (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('http://119.63.90.135:2083/image?image_path=' + item.image), item.prodId, item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)">สั่งซื้อเลย</b-button>
                    <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('http://119.63.90.135:2083/image?image_path=' + item.image), item.prodId, item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)"></i>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
// import axios from '../../axios/index'
import axios from 'axios'
import apiURL from '../../assets/js/connect'
export default {
  data () {
    return {
      apiURL: apiURL,
      items: [],
      promotions: [],
      value2: 4,
      checkcart: [],
      checkcarts: [],
      checkcartz: []
    }
  },
  mounted () {
    const url = process.env.VUE_APP_API_URL
    console.log('urlrec', url)
    const config = {
      method: 'get',
      url: '/product'
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods': 'GET, POST',
      //   'Access-Control-Allow-Headers': 'Content-Type'
      // }
    }
    console.log('getproduct', config)
    axios(config).then(res => {
      console.log('getproduct', res)
      this.promotions = res.data.data.products
      const promotion = this.promotions.filter((post, index) => {
        return post.recommend === 1
      })
      this.promotions = promotion.slice(0, 9)
      // console.log('promotions', this.promotions)
    })
  },
  methods: {
    buy (url, img, name, price, value, type, sku, brand) {
      console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: url,
        img: img,
        name: name,
        price: price,
        value: this.$refs[value][0].localValue,
        type: type,
        sku: sku,
        brand: brand
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      location.replace('/checkout')
    },
    buydetail (url, img, name, price, value, type, sku, brand) {
      console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: url,
        img: img,
        name: name,
        price: price,
        value: 4,
        type: type,
        sku: sku,
        brand: brand
      }
      localStorage.setItem('cartdetail', JSON.stringify(cart))
      location.replace('/tyrebrand/?brand=' + sku)
    },
    async buycart (url, img, id, name, price, value, type, sku, brand) {
      if (JSON.parse(localStorage.getItem('cart')) === null) {
        localStorage.setItem('cart', JSON.stringify(this.checkcart))
        console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
        })
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        location.replace('/cart')
        // location.reload()
      } else {
        console.log('ไม่ว่าง')
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
        })
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        location.replace('/cart')
        // location.reload()
      }
    },
    async addtocart (url, img, id, name, price, value, type, sku, brand) {
      if (JSON.parse(localStorage.getItem('cart')) === null) {
        localStorage.setItem('cart', JSON.stringify(this.checkcart))
        console.log('ว่าง', this.$refs[value][0].localValue)
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        // console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
        })
        console.log('teams', teams)
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        // location.replace('/checkout')
        location.reload()
      } else {
        console.log('ว่าง', id)
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        // console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: price,
          qty: this.$refs[value][0].localValue,
          type: type,
          sku: sku,
          brand: brand
        })
        console.log('teams', teams)
        await localStorage.setItem('cart', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, qty: 0, price: a.price, img: a.img, type: a.type, sku: a.sku, productId: a.productId }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('test', JSON.stringify(team))
        localStorage.setItem('cart', JSON.stringify(team))
        // location.replace('/checkout')
        location.reload()
      }
    }
  }
}
</script>
