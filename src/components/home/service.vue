<template>
  <div
    style="
      background-image: url('https://i.imgur.com/am2boDx.jpg');
      height: 700px;
      text-align: left;
      background-repeat: no-repeat;
      background-size: 100% 100%;

    "
    v-if="languages === 'TH'"
  >
  <b-container>
      <br />
      <br />
      <br />
      <br>
      <div
        style="
          background-color: white;
          opacity: 0.8;
          width: 300px;
          color: black;
          margin: 5px;
        "
      >
        <h1>บริการลูกค้า</h1>
        <p style="font-size: 20px;width: 200px;">
          กรุณาติดต่อฝ่ายบริการลูกค้าของเราหากมีคำถามใด ๆ เกี่ยวกับการเลือกยาง
        </p>
        <h1><a href="tel:+66992839256" style="text-decoration:none;color: black;">099-283-9256</a></h1>
        <h1 style="font-size: 20px;">เวลาทำการคอลเซนเตอร์</h1>
        <p style="font-size: 20px;">วันจันทร์ – ศุกร์ 08.30 น. – 17.00 น.</p>
      </div>
      <br />
  </b-container>
  </div>
  <div
    style="
      background-image: url('https://i.imgur.com/am2boDx.jpg');
      height: 700px;
      text-align: left;
      background-repeat: no-repeat;
      background-size: 100% 100%;

    "
    v-else-if="languages === 'EN'"
  >
  <b-container>
      <br />
      <br />
      <br />
      <br>
      <div
        style="
          background-color: white;
          opacity: 0.8;
          width: 300px;
          color: black;
          margin: 5px;
        "
      >
        <h1>Customer Service</h1>
        <p style="font-size: 20px;width: 300px;">
          Please contact our customer service
          with any questions regarding tires selection.
        </p>
        <h1><a href="tel:+66992839256" style="text-decoration:none;color: black;">Mobile: 099-283-9256</a></h1>
        <h1 style="font-size: 20px;">Call Center Business Hours</h1>
        <p style="font-size: 20px;">Monday - Friday 08:30 a.m. - 5:00 p.m.</p>
      </div>
      <br />
  </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      languages: ''
    }
  },
  mounted () {
    this.languages = JSON.parse(localStorage.getItem('languages'))
    console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      console.log('langNOTLANG')
    } else if (this.languages === 'TH') {
      console.log('langTH')
    } else if (this.languages === 'EN') {
      console.log('langEN')
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');
h1 {
  font-family: 'Kanit', sans-serif;
  font-weight: bold;
  font-size: 25px;
}
</style>
