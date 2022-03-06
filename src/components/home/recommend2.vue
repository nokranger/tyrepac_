<template>
  <div>
    <br>
    <div>
      <div style="font-weight: bold;font-size: 25px;text-align:">สินค้าแนะนำ</div>
      <div>
        <b-container>
          <br>
          <b-row>
            <b-col v-for="(item, index) in promotions" :key="index" cols="4">
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: center;width: 100%;">
                <div>
                  <a v-on:click="buydetail (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)">
                    <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg" style="width: 150px;height: 150px;margin: 5px;" alt="">
                  </a>
                </div>
                <div style="margin-left: 5px;color: #005099;font-weight: bold;text-align: left;">{{item.name}}</div>
                <div style="margin-left: 5px;color: #005099;text-align: left;">฿{{ item.regularPrice}} ต่อเส้น</div>
                <div style="border-top: thin solid #E0E0E0;margin-bottom: 4px;margin-left: 20px;margin-right: 20px;text-align: center;"></div>
                <div style="border-top: thin solid #E0E0E0;margin-bottom: 4px;margin-left: 20px;margin-right: 20px;">
                  <div style="margin: 5px;width: 50%;">
                    <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="4" max="100"></b-form-spinbutton>
                  </div>
                  <div style="margin: 5px;text-align: left;">
                    <b-button variant="primary" v-on:click="buy (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('https://www.tyrepac.co.th/wp-content/uploads/2020/02/tyre-toyo-proxes-sport-suv.jpg'), item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)">สั่งซื้อเลย</b-button>
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
import axios from 'axios'
import apiURL from '../../assets/js/connect'
export default {
  data () {
    return {
      apiURL: apiURL,
      items: [],
      promotions: [],
      value2: 4
    }
  },
  mounted () {
    axios.get(apiURL + '/product').then(res => {
      this.promotions = res.data.data.products
      const promotion = this.promotions.filter((post, index) => {
        return post.status === 1
      })
      this.promotions = promotion
      console.log('promotions', this.promotions)
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
      location.replace('/cart')
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
    }
  }
}
</script>
