<template>
  <div>
    <br>
    <div>
      <div style="font-weight: bold;font-size: 25px;text-align:">สินค้าแนะนำ</div>
      <div>
        <b-container>
          <br>
          <b-row>
            <b-col cols="6" sm="6" md="6" lg="4" xl="3" v-for="(item, index) in promotions" :key="index" style="margin-top: 25px;">
              <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;width: 100%;height: 470px;">
                <div style="width: 100%;text-align: center;">
                <div v-if="item.promotionId > 0" style="border-radius: 5px;margin-left: auto;margin-right: -15px;margin-top: -15px;background-color: #f16543;color: white;width: max-content;padding: 10px;">Promotion</div>
                <div v-else-if="item.promotionId === 0 || item.promotionId === null || item.recommend === 0 || item.recommend === null" style="height: 28px;;padding: 10px;"></div>
                  <a style="cursor: pointer;" v-on:click="buydetail (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('http://119.63.90.135:2083/image?image_path=' + item.image), item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)">
                    <img :src="'http://119.63.90.135:2083/image?image_path=' + item.image" style="width: 150px;height: 150px;margin: 5px;" alt="">
                    <!-- <img if  :src="'http://119.63.90.135:2083/image?image_path=' + item.image" style="width: 150px;height: 150px;margin: 5px;" alt=""> -->
                  </a>
                </div>
                <div style="margin-left: 5px;color: #005099;font-weight: bold;height: 60px;">{{item.name}}</div>
                <div style="margin-left: 5px;color: #005099;text-align: left;">฿{{ item.regularPrice}} ต่อเส้น</div>
                <!-- <div style="border-top: thin solid #E0E0E0;margin-bottom: 4px;margin-left: 20px;margin-right: 20px;text-align: center;"></div> -->
                <div style="margin-bottom: 4px;margin-left: 20px;margin-right: 20px;">
                  <br>
                  <div style="margin: 5px;width: 100%;">
                    <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="1" max="100"></b-form-spinbutton>
                  </div>
                  <br>
                  <div style="margin: 5px;text-align: left;">
                    <b-button variant="primary" v-on:click="buycart (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('http://119.63.90.135:2083/image?image_path=' + item.image), item.prodId, item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)">สั่งซื้อเลย</b-button>
                    <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 10px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (('/tyrebrand' + '/' + item.prodId + '/' + item.sku), ('http://119.63.90.135:2083/image?image_path=' + item.image), item.prodId, item.name, item.regularPrice, ('values' + index), item.type, item.sku, item)"></i>
                  </div>
                  <div>
                    <i class="fa-solid fa-plus" style="cursor: pointer;" @click="compare(item)"></i><a style="cursor: pointer;margin-left: 5px;color: #005099;"  @click="showcompare()" v-b-modal.modal-1>ข้อมูลสินค้า</a>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
          <div>
            <b-modal id="modal-1" size="xl" title="Compare list">
              <div style="cursor: pointer;color: red;font-weight: bold;;" @click="clearcompare()">Clear compare list</div>
              <br>
              <div>
                <b-row>
                  <b-col cols="6" sm="6" md="6" lg="3" xl="3" v-for="(showcompare, index) in showcompares" :key="index">
                    <div style="margin: 5px;text-align: left;">
                      <b-button variant="primary" v-on:click="buycart (('/tyrebrand' + '/' + showcompare.prodId + '/' + showcompare.sku), ('http://119.63.90.135:2083/image?image_path=' + showcompare.image), showcompare.prodId, showcompare.name, showcompare.regularPrice, ('values' + index), showcompare.type, showcompare.sku, showcompare)">สั่งซื้อเลย</b-button>
                      <i class="fas fa-shopping-cart" style="display: inline-block;margin-left: 20px;font-size: 20px;cursor: pointer;color: #005099;" v-on:click="addtocart (('/tyrebrand' + '/' + showcompare.prodId + '/' + showcompare.sku), ('http://119.63.90.135:2083/image?image_path=' + showcompare.image), showcompare.prodId, showcompare.name, showcompare.regularPrice, ('values' + index), showcompare.type, showcompare.sku, showcompare)"></i>
                      <i class="fas fa fa-times" style="display: inline-block;margin-left: 20px;font-size: 20px;cursor: pointer;color: #ee2456;" v-on:click="removeitem (showcompare.name)"></i>
                    </div>
                    <div style="margin-bottom: 5px;;width: 100%;">
                      <b-form-spinbutton :ref="'values' + index" id="demo-sb" :value="value2" min="1" max="100"></b-form-spinbutton>
                    </div>
                    <div style="border-radius: 5px;border: thin solid #E0E0E0;text-align: left;width: 100%;height: 420px;">
                      <div style="width: 100%;;text-align: center;">
                        <a style="cursor: pointer;" v-on:click="buydetail (('/tyrebrand' + '/' + showcompare.prodId + '/' + showcompare.sku), ('http://119.63.90.135:2083/image?image_path=' + showcompare.image), showcompare.name, showcompare.regularPrice, ('values' + index), showcompare.type, showcompare.sku, showcompare)">
                          <img :src="'http://119.63.90.135:2083/image?image_path=' + showcompare.image" style="width: 150px;height: 150px;margin: 5px;" alt="">
                        </a>
                      </div>
                      <div style="margin-left: 5px;color: #005099;font-weight: bold;height: 60px;">{{showcompare.name}}</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">ราคา: ฿{{ showcompare.regularPrice}} ต่อเส้น</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">ความกว้าง: {{ showcompare.width}}</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">ซีรี่ย์ยาง: {{ showcompare.diameter}}</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">ขนาดวงล้อ: {{ showcompare.height}}</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">Load Index: {{ showcompare.loadIndex}}</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">Speed Index: {{ showcompare.speedIndex}}</div>
                      <div style="margin-left: 5px;color: #005099;text-align: left;">สินค้า รุ่นยาง: {{ showcompare.type}}</div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-modal>
          </div>
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
      value2: 4,
      checkcart: [],
      checkcarts: [],
      checkcartz: [],
      compares: [],
      showcompares: ''
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_API_URL + '/product').then(res => {
      this.promotions = res.data.data.products
      const promotion = this.promotions.filter((post, index) => {
        return post.recommend === 1 || post.promotionId > 0
      })
      for (var i = 0; i < promotion.length; i++) {
        promotion[i].regularPrice = promotion[i].regularPrice.toLocaleString('en')
      }
      this.promotions = promotion.slice(0, 8)
      // console.log('promotions', this.promotions)
    })
  },
  methods: {
    removeitem (name) {
      console.log('remove', name)
      this.showcompares = this.showcompares.filter((obj) => {
        return obj.name !== name
      })
      console.log('remove: ', this.showcompares)
      localStorage.setItem('compare', JSON.stringify(this.showcompares))
      // location.reload()
      this.$bvModal.show('modal-1')
    },
    async compare (itemss) {
      console.log('compare', itemss)
      if (JSON.parse(localStorage.getItem('compare')) === null) {
        localStorage.setItem('compare', JSON.stringify(this.compares))
        console.log('ว่าง')
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('compare'))
        console.log('teams', teams)
        await teams.push(itemss)
        await localStorage.setItem('compare', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, regularPrice: a.regularPrice, image: a.image, type: a.type, diameter: a.diameter, height: a.height, loadIndex: a.loadIndex, speedIndex: a.speedIndex, width: a.width }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('compare', JSON.stringify(team))
        location.reload()
      } else {
        console.log('ไม่ว่าง')
        team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('compare'))
        console.log('teams', teams)
        await teams.push(itemss)
        await localStorage.setItem('compare', JSON.stringify(team))
        await teams.forEach((a) => {
          if (!this[a.name]) {
            console.log('aname', a.name)
            this[a.name] = { name: a.name, regularPrice: a.regularPrice, image: a.image, type: a.type, diameter: a.diameter, height: a.height, loadIndex: a.loadIndex, speedIndex: a.speedIndex, width: a.width }
            team.push(this[a.name])
          }
          this[a.name].qty += a.qty
        }, Object.create(null))
        console.log('team', team)
        localStorage.setItem('compare', JSON.stringify(team))
        location.reload()
      }
    },
    showcompare () {
      console.log('showcompare', JSON.parse(localStorage.getItem('compare')))
      this.showcompares = JSON.parse(localStorage.getItem('compare'))
    },
    clearcompare () {
      localStorage.removeItem('compare')
      // eslint-disable-next-line no-undef
      this.$bvModal.hide('modal-1')
    },
    buy (url, img, name, price, value, type, sku, brand) {
      console.log('itemcart', localStorage.getItem('cart'))
      console.log('buy', url + '-' + img + '-' + name + '-' + price + '-' + this.$refs[value][0].localValue)
      const cart = {
        url: url,
        img: img,
        name: name,
        price: Number(price.replace(/[^0-9.]+/g, '')),
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
        price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
        console.log('ว่าง', id)
        var team = []
        // localStorage.setItem('test', JSON.stringify(team))
        const teams = await JSON.parse(localStorage.getItem('cart'))
        // console.log('teams', teams)
        await teams.push({
          url: url,
          img: img,
          name: name,
          productId: id,
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
          price: Number(price.replace(/[^0-9.]+/g, '')),
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
