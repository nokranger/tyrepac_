<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossorigin="anonymous">
    <div>
      <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-brand href="/">
          <div>
            <img style="width: 184.33px;height: auto;margin: 10px;" src="https://www.tyrepac.co.th/wp-content/uploads/2019/10/tyrepac-logo.png" alt="">
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" style="color: black"><i class="fas fa-align-justify"></i></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto align-left">
            <b-nav-item href="/brand"><b style="font-size: 16px;font-weight: normal;">ยางรถยนต์</b></b-nav-item>
            <b-nav-item href="promotions"><b style="font-size: 16px;font-weight: normal;">โปรโมชั่น</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/joint-venture-company'"><b style="font-size: 16px;font-weight: normal;">ประเภทยาง</b></b-nav-item>
            <b-nav-item href="installer"><b style="font-size: 16px;font-weight: normal;">ศูนย์บริการติดตั้ง</b></b-nav-item>
            <b-nav-item href="/qa"><b style="font-size: 16px;font-weight: normal;">คำถามที่พบบ่อย</b></b-nav-item>
            <b-nav-item href="/register"><b style="font-size: 16px;font-weight: normal;">สมัครร้านติดตั้ง</b></b-nav-item>
            <b-nav-item href="/contact"><b style="font-size: 16px;font-weight: normal;">ติดต่อเรา</b></b-nav-item>
            <b-nav-item :href="'/' + langs + '/contact'"><b style="font-size: 16px;font-weight: normal;">สั่งซื้อเลย</b></b-nav-item>
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
      routess: ''
    }
  }
}
</script>
<style scoped src="@/assets/css/header.css">

</style>
