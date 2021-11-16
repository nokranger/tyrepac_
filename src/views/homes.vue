<template>
  <div style="margin-top: 90px">
    <div style="height: auto; text-align: center">
      <div id="pic">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 4px #000; font-size: 27px"
          fade
          indicators
        >
          <b-carousel-slide
            img-src="https://www.tyrepac.co.th/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%A2%E0%B8%B2%E0%B8%87-OK.jpg"
          >
            <!-- <h1 style="color: #1d89ca;font-style: bold;">ความไว้ใจ</h1>
            <p style="color: black;">(ค่านิยมองค์กร)</p>
            <p style="text-shadow: 1px 2px black;color:whitesmoke;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;font-size: 16px;font-weight: normal;">การทำงานเป็นทีม, ความน่าเชื่อถือ, ความเป็นน้ำหนึ่งใจเดียวกัน, การให้บริการ และความพึงพอใจของลูกค้า</p> -->
          </b-carousel-slide>
          <b-carousel-slide
            img-src="https://www.tyrepac.co.th/wp-content/uploads/2020/05/%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B22.jpg"
          >
            <!-- <h1 style="color: #1d89ca;font-style: bold;">ความไว้ใจ</h1>
            <p style="color: black;">(ค่านิยมองค์กร)</p>
            <p style="text-shadow: 1px 2px black;color:whitesmoke;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;font-size: 16px;font-weight: normal;">การทำงานเป็นทีม, ความน่าเชื่อถือ, ความเป็นน้ำหนึ่งใจเดียวกัน, การให้บริการ และความพึงพอใจของลูกค้า</p> -->
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div>
        <div style="height: 300px; background-color: #f7b00d;width: 100%;">
          <br />
          <p style="font-size: 25px; font-weight: bold">ค้นหาตามขนาดยาง</p>
          <div>
            <b-form-select v-model="selected1" :options="options" name="" id="">
            </b-form-select>
          </div>
          <div>
            <b-form-select v-model="selected2" :options="options2" name="" id="">
            </b-form-select>
          </div>
          <div>
            <b-form-select v-model="selected3" :options="options3" name="" id="">
            </b-form-select>
          </div>
          <br>
          <div>
            <b-button>ค้นหา</b-button>
          </div>
          <br>
          <a href="">ไม่แน่ใจวิธีอ่านขนาดยางของคุณ ? คลิกที่นี่</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected1: null,
      selected2: null,
      selected3: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      options2: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      options3: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>
