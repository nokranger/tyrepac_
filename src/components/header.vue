<template>
  <div v-if="languages === 'TH'">
    <div style="border: 1px solid white;color: white;background-color: white;height: 25px;position: fixed;width:100%;z-index: 99;top: 0;text-align: left;">
      <div style="font-size: 25px;top: 0;">
        <div style="text-align: left;display: inline-block;margin: 10px;color: red">
          <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
        </div>
        <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
          <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
            <i class="fa-brands fa-line"></i>
          </a>
        </div>
      </div>
    </div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      crossorigin="anonymous"
    />
    <div>
      <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-brand href="/">
        <br>
        <br>
          <div>
            <img
              style="width: 184.33px; height: auto; margin-top: -30px"
              src="https://i.imgur.com/XC4tAlX.png"
              alt=""
            />
          </div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" style="color: black;margin-left: -15px;"
          ><i class="fas fa-align-justify"></i
        ></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto align-left">
            <b-nav-item href="/brand"
              ><b style="font-size: 16px; font-weight: normal;margin-left: 15px;"
                >ยางรถยนต์</b
              ></b-nav-item
            >
            <b-nav-item href="/promotions"
              ><b style="font-size: 16px; font-weight: normal;margin-left: 15px;"
                >โปรโมชั่น</b
              ></b-nav-item
            >
          <div  @mouseover="onOvert" @mouseleave="onLeavet">
            <b-nav-item-dropdown toggle-class="text-dark" style="margin-left: 15px;" text="ประเภทยาง" ref="dropdownt" right>
              <b-dropdown-item href="/shop?type=ยางขับขี่ทั่วไป">ยางขับขี่ทั่วไป</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางประสิทธิภาพสูง">ยางประสิทธิภาพสูง</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยาง SUV ประสิทธิภาพสูง">ยาง SUV ประสิทธิภาพสูง</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางประหยัดเชื้อเพลิง">ยางประหยัดเชื้อเพลิง</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางขับขี่นุ่ม เงียบ">ยางขับขี่นุ่ม เงียบ</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางรถเอนกประสงค์/SUV">ยางรถเอนกประสงค์/SUV</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางรถกระบะ">ยางรถกระบะ</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางออฟโรด">ยางออฟโรด</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
            <b-nav-item href="/installer"
              ><b class="installer" style="margin-left: 15px;"
                >ศูนย์บริการติดตั้ง</b
              ></b-nav-item
            >
            <b-nav-item href="/qa"
              ><b class="installer" style="margin-left: 15px;"
                >คำถามที่พบบ่อย</b
              ></b-nav-item
            >
            <b-nav-item href="/register-installer"
              ><b class="installer" style="margin-left: 15px;"
                >สมัครร้านติดตั้ง</b
              ></b-nav-item
            >
            <b-nav-item href="/contact"
              ><b class="installer" style="margin-left: 15px;"
                >ติดต่อเรา</b
              ></b-nav-item
            >
            <b-nav-item href="/shop"
              ><b class="installer" style="margin-left: 15px;"
                >สั่งซื้อเลย</b
              ></b-nav-item
            >
            <!-- <i class="fas fa-align-justify"></i> -->
          <div @mouseover="onOver" @mouseleave="onLeave">
            <b-nav-item-dropdown toggle-class="text-dark" ref="dropdown" right>
              <template slot="button-content">
                <a href="/checkout" style="text-decoration: none;margin-left: 15px;;">
                  <i class="fas fa-shopping-cart"></i>
                  <em v-if="statuss === 1">{{count}}</em>
                </a>
              </template>
              <b-dropdown-item v-for="(carts, index) in cart" :key="index" :href="'/tyrebrand/?brand=' + carts.sku">
              <div style="font-size: 15px;">
                <img :src="carts.img" alt="" width="50" height="50">
                <div>{{carts.name}}</div>
              </div>
              <div style="font-size: 15px;">
                <div>{{carts.qty}} x ฿{{(carts.price).toLocaleString('en')}}</div>
              </div>
              </b-dropdown-item>
              <b-dropdown-item style="display: inline-block;" href="/cart">
                <div>
                  <div>
                    <i class="fas fa-shopping-cart"></i><div class="checkout">Cart View</div>
                  </div>
                </div>
              </b-dropdown-item>
              <b-dropdown-item style="display: inline-block;" href="/checkout">
                <div>
                  <div>
                    <i class="fa-solid fa-check-to-slot"></i><div class="checkout">Check out</div>
                  </div>
                </div>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div  @mouseover="onOvers" @mouseleave="onLeaves">
            <b-nav-item-dropdown toggle-class="text-dark" style="margin-left: 15px;" text="ภาษา" ref="dropdowns" right>
              <b-dropdown-item @click="selectlang('TH')">TH</b-dropdown-item>
              <b-dropdown-item @click="selectlang('EN')">EN</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
  <div v-else-if="languages === 'EN'">
    <div style="border: 1px solid white;color: white;background-color: white;height: 25px;position: fixed;width:100%;z-index: 99;top: 0;text-align: left;">
      <div style="font-size: 25px;top: 0;">
        <div style="text-align: left;display: inline-block;margin: 10px;color: red">
          <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
        </div>
        <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
          <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
            <i class="fa-brands fa-line"></i>
          </a>
        </div>
      </div>
    </div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      crossorigin="anonymous"
    />
    <div>
      <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-brand href="/">
        <br>
        <br>
          <div>
            <img
              style="width: 184.33px; height: auto; margin-top: -30px"
              src="https://i.imgur.com/XC4tAlX.png"
              alt=""
            />
          </div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" style="color: black;margin-left: -15px;"
          ><i class="fas fa-align-justify"></i
        ></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto align-left">
            <b-nav-item href="/brand"
              ><b style="font-size: 16px; font-weight: normal;margin-left: 15px;"
                >Tires</b
              ></b-nav-item
            >
            <b-nav-item href="/promotions"
              ><b style="font-size: 16px; font-weight: normal;margin-left: 15px;"
                >Promotion</b
              ></b-nav-item
            >
          <div  @mouseover="onOvert" @mouseleave="onLeavet">
            <b-nav-item-dropdown toggle-class="text-dark" style="margin-left: 15px;" text="Types of Tires" ref="dropdownt" right>
              <b-dropdown-item href="/shop?type=ยางขับขี่ทั่วไป">General Driving Tires</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางประสิทธิภาพสูง">High Performance Tires</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยาง SUV ประสิทธิภาพสูง">High-Performance SUV Tires</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางประหยัดเชื้อเพลิง">Fuel Economy Tires</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางขับขี่นุ่ม เงียบ">Softest and Quietest Tires</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางรถเอนกประสงค์/SUV">Universal Tires / SUV</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางรถกระบะ">Pickup Truck Tires</b-dropdown-item>
              <b-dropdown-item href="/shop?type=ยางออฟโรด">Off Road Tires</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
            <b-nav-item href="/installer"
              ><b class="installer" style="margin-left: 15px;"
                >Installation service </b
              ></b-nav-item
            >
            <b-nav-item href="/qa"
              ><b class="installer" style="margin-left: 15px;"
                >FAQ</b
              ></b-nav-item
            >
            <b-nav-item href="/register-installer"
              ><b class="installer" style="margin-left: 15px;"
                >Register Tires Installation Shop</b
              ></b-nav-item
            >
            <b-nav-item href="/contact"
              ><b class="installer" style="margin-left: 15px;"
                >Contact Us</b
              ></b-nav-item
            >
            <b-nav-item href="/shop"
              ><b class="installer" style="margin-left: 15px;"
                >Order</b
              ></b-nav-item
            >
            <!-- <i class="fas fa-align-justify"></i> -->
          <div @mouseover="onOver" @mouseleave="onLeave">
            <b-nav-item-dropdown toggle-class="text-dark" ref="dropdown" right>
              <template slot="button-content">
                <a href="/checkout" style="text-decoration: none;margin-left: 15px;;">
                  <i class="fas fa-shopping-cart"></i>
                  <em v-if="statuss === 1">{{count}}</em>
                </a>
              </template>
              <b-dropdown-item v-for="(carts, index) in cart" :key="index" :href="'/tyrebrand/?brand=' + carts.sku">
              <div style="font-size: 15px;">
                <img :src="carts.img" alt="" width="50" height="50">
                <div>{{carts.name}}</div>
              </div>
              <div style="font-size: 15px;">
                <div>{{carts.qty}} x ฿{{(carts.price).toLocaleString('en')}}</div>
              </div>
              </b-dropdown-item>
              <b-dropdown-item style="display: inline-block;" href="/cart">
                <div>
                  <div>
                    <i class="fas fa-shopping-cart"></i><div class="checkout">Cart View</div>
                  </div>
                </div>
              </b-dropdown-item>
              <b-dropdown-item style="display: inline-block;" href="/checkout">
                <div>
                  <div>
                    <i class="fa-solid fa-check-to-slot"></i><div class="checkout">Check out</div>
                  </div>
                </div>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div  @mouseover="onOvers" @mouseleave="onLeaves">
            <b-nav-item-dropdown toggle-class="text-dark" style="margin-left: 15px;" text="Languages" ref="dropdowns" right>
              <b-dropdown-item @click="selectlang('TH')">TH</b-dropdown-item>
              <b-dropdown-item @click="selectlang('EN')">EN</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      qoute: 'Main Customers in Thailand',
      qoute2: 'For project achievements in thailand please contact us',
      langs: '',
      routess: '',
      cart: '',
      statuss: 0,
      test: { name: 'user3', value: 2, test: 'asfasfasf' },
      count: 0,
      lang: 'TH',
      languages: ''
    }
  },
  async mounted () {
    this.languages = JSON.parse(localStorage.getItem('languages'))
    console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      this.languages = 'TH'
      console.log('langNOTLANG')
    } else if (this.languages === 'TH') {
      console.log('langTH')
    } else if (this.languages === 'EN') {
      console.log('langEN')
    }
    this.cart = JSON.parse(localStorage.getItem('cart'))
    // for (var j = 0; j < this.cart.length; j++) {
    //   this.cart[j].regularPrice = this.cart[j].regularPrice.toLocaleString('en')
    // }
    console.log('cart', this.cart)
    if (localStorage.getItem('cart') === null) {
      console.log('show status')
      this.statuss = 0
      // this.cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      console.log('show status')
      this.statuss = 1
      this.cart = JSON.parse(localStorage.getItem('cart'))
      for (var i = 0; i < this.cart.length; i++) {
        this.count += this.cart[i].qty
        // this.cart[i].price = this.cart[i].price.toLocaleString('en')
        console.log('countcart', this.count)
      }
      console.log('countcart', this.count)
    }
  },
  methods: {
    selectlang (select) {
      this.languages = select
      localStorage.setItem('languages', JSON.stringify(this.languages))
      this.languages = localStorage.getItem('languages')
      console.log('lang', this.languages)
      location.reload()
    },
    onOver () {
      this.$refs.dropdown.visible = true
    },
    onLeave () {
      this.$refs.dropdown.visible = false
    },
    onOvert () {
      this.$refs.dropdownt.visible = true
    },
    onLeavet () {
      this.$refs.dropdownt.visible = false
    },
    onOvers () {
      this.$refs.dropdowns.visible = true
    },
    onLeaves () {
      this.$refs.dropdowns.visible = false
    }
  }
}
</script>
<style scoped src="@/assets/css/header.css">
</style>
