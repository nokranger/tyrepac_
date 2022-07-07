<template>
  <div v-if="languages === 'TH'">
    <div>
      <br />
      <h3 style="font-weight: bold;">ดูสิ่งที่ผู้คนพูดเกี่ยวกับเราบน Facebook</h3>
      <br>
      <b-button v-b-modal.my-modal variant="primary">ดูรีวิว</b-button>
        <b-modal id="my-modal">รีวิว</b-modal>
      <br />
      <img
      style="width: 100%;"
        src="https://i.imgur.com/mSBToEE.jpg"
        alt=""
      />
    </div>
  </div>
  <div v-else-if="languages === 'EN'">
    <div>
      <br />
      <h3 style="font-weight: bold;">See what people are saying about us on Facebook.</h3>
      <br>
      <b-button v-b-modal.my-modal variant="primary">Review</b-button>
        <b-modal id="my-modal">รีวิว</b-modal>
      <br />
      <img
      style="width: 100%;"
        src="https://i.imgur.com/mSBToEE.jpg"
        alt=""
      />
    </div>
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
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      console.log('langTH')
    } else if (this.languages === 'EN') {
      console.log('langEN')
    }
  }
}
</script>
