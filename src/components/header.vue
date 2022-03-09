<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      crossorigin="anonymous"
    />
    <div>
      <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-brand href="/">
          <div>
            <img
              style="width: 184.33px; height: auto; margin: 10px"
              src="https://www.tyrepac.co.th/wp-content/uploads/2019/10/tyrepac-logo.png"
              alt=""
            />
          </div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" style="color: black"
          ><i class="fas fa-align-justify"></i
        ></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav> </b-navbar-nav>
          <b-navbar-nav class="ml-auto align-left">
            <b-nav-item href="/brand"
              ><b style="font-size: 16px; font-weight: normal"
                >ยางรถยนต์</b
              ></b-nav-item
            >
            <b-nav-item href="/promotions"
              ><b style="font-size: 16px; font-weight: normal"
                >โปรโมชั่น</b
              ></b-nav-item
            >
          <b-nav-item-dropdown toggle-class="text-dark" text="ประเภทยาง" right>
            <b-dropdown-item href="/shop?type=ยางประสิทธิภาพสูง">ยาง SUV ประสิทธิภาพสูง</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางขับขี่ทั่วไป">ยางขับขี่ทั่วไป</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางขับขี่นุ่ม เงียบ">ยางยางขับขี่นุ่ม เงียบ</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางประสิทธิภาพสูง">ยางประสิทธิภาพสูง</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางประหยัดเชื้อเพลิง">ยางประหยัดเชื้อเพลิง</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางรถกระบะ">ยางรถกระบะ</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางรถเอนกประสงค์">ยางเอนกประสงค์ / SUV</b-dropdown-item>
            <b-dropdown-item href="/shop?type=ยางออฟโรด">ยางออฟโรด</b-dropdown-item>
          </b-nav-item-dropdown>
            <b-nav-item href="/installer"
              ><b style="font-size: 16px; font-weight: normal"
                >ศูนย์บริการติดตั้ง</b
              ></b-nav-item
            >
            <b-nav-item href="/qa"
              ><b style="font-size: 16px; font-weight: normal"
                >คำถามที่พบบ่อย</b
              ></b-nav-item
            >
            <b-nav-item href="/register-installer"
              ><b style="font-size: 16px; font-weight: normal"
                >สมัครร้านติดตั้ง</b
              ></b-nav-item
            >
            <b-nav-item href="/contact"
              ><b style="font-size: 16px; font-weight: normal"
                >ติดต่อเรา</b
              ></b-nav-item
            >
            <b-nav-item href="/shop"
              ><b style="font-size: 16px; font-weight: normal"
                >สั่งซื้อเลย</b
              ></b-nav-item
            >
            <!-- <i class="fas fa-align-justify"></i> -->
            <b-nav-item href="/checkout"
              ><b style="font-size: 16px; font-weight: normal"
                ><i class="fas fa-shopping-cart" style="display: inline-block"
                  ><div
                    style="
                      display: inline-block;
                      border-radius: 90%;
                      border: thin solid #e0e0e0;
                      background-color: #005099;
                      color: whitesmoke;
                      margin-top: -5px;
                    "
                  >
                    <div v-if="statuss === 1" style="margin: 5px">{{cart.value}}</div>
                    <div v-if="statuss === 0"></div>
                  </div></i
                ></b
              ></b-nav-item
            >
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
      cart: [],
      statuss: 0,
      test: { name: 'user3', value: 2, test: 'asfasfasf' }
    }
  },
  async mounted () {
    // var team = []
    // const teams = await JSON.parse(localStorage.getItem('test'))
    // console.log('teams', teams)
    // teams.push({ name: 'user3', value: 20, test: 'asfasfasf' })
    // localStorage.setItem('test', JSON.stringify(team))
    // await teams.forEach((a) => {
    //   if (!this[a.name]) {
    //     console.log('aname', a.name)
    //     this[a.name] = { name: a.name, value: 0, test: a.test }
    //     team.push(this[a.name])
    //   }
    //   this[a.name].value += a.value
    // }, Object.create(null))
    // console.log('team', team)
    // localStorage.setItem('test', JSON.stringify(team))
    this.cart = JSON.parse(localStorage.getItem('cart'))
    if (localStorage.getItem('cart') === null) {
      console.log('show status')
      this.statuss = 0
      // this.cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      console.log('show status')
      this.statuss = 1
      this.cart = JSON.parse(localStorage.getItem('cart'))
    }
  }
}
</script>
<style scoped src="@/assets/css/header.css">
</style>
