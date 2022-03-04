<template>
  <div id="size">
    <div style="background-color: #f7b00d">
      <b-container>
        <br />
        <br>
        <p style="font-size: 25px; font-weight: bold;color: black;">ค้นหาตามขนาดยาง</p>
        <div>
          <b-form-select
            style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
            v-model="selected1"
            :options="options"
            name=""
            id=""
          >
          </b-form-select>
        </div>
        <div>
          <b-form-select
            style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
            v-model="selected2"
            :options="options2"
            name=""
            id=""
          >
          </b-form-select>
        </div>
        <div>
          <b-form-select
            style="width: 100%; font-size: 20px; margin: 5px;color: gray;height: 35px;"
            v-model="selected3"
            :options="options3"
            name=""
            id=""
          >
          </b-form-select>
        </div>
        <br />
        <div style="text-align: left;margin-left: 20px;">
          <b-button variant="light" style="border-radius: 1px;border: thin solid black;" v-on:click="search (selected1, selected2, selected3)">ค้นหา</b-button>
        </div>
        <br />
        <b><a href="#" style="color: black;text-decoration: none;" v-b-modal.modal-tyre>ไม่แน่ใจวิธีอ่านขนาดยางของคุณ ? คลิกที่นี่</a></b>
          <b-modal id="modal-tyre" size="xl" hide-footer hide-header>
            <p style="text-align: center;" class="my-4">วิธีค้นหาขนาดยางของคุณ</p>
            <img src="https://tyrepac.co.th/wp-content/uploads/2020/01/tyre-reading.jpg" alt="">
          </b-modal>
        <br>
        <br>
        <br>
        <br>
      </b-container>
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
        { value: null, text: '--ความกว้าง--' },
        { value: '155', text: '155' },
        { value: '165', text: '165' },
        { value: '175', text: '175' },
        { value: '185', text: '185' },
        { value: '195', text: '195' },
        { value: '205', text: '205' },
        { value: '206', text: '206' },
        { value: '215', text: '215' },
        { value: '225', text: '225' },
        { value: '235', text: '235' },
        { value: '245', text: '245' },
        { value: '255', text: '255' },
        { value: '265', text: '265' },
        { value: '275', text: '275' },
        { value: '285', text: '285' },
        { value: '295', text: '295' },
        { value: '305', text: '305' },
        { value: '315', text: '315' },
        { value: '325', text: '325' }
      ],
      options2: [
        { value: null, text: '--ซีรี่ย์ยาง--' },
        { value: '0', text: '0' },
        { value: '25', text: '25' },
        { value: '30', text: '30' },
        { value: '35', text: '35' },
        { value: '40', text: '40' },
        { value: '45', text: '45' },
        { value: '50', text: '50' },
        { value: '55', text: '55' },
        { value: '60', text: '60' },
        { value: '65', text: '65' },
        { value: '70', text: '70' },
        { value: '75', text: '75' },
        { value: '85', text: '85' }
      ],
      options3: [
        { value: null, text: '--ขนาดวงล้อ--' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
        { value: '21', text: '21' },
        { value: '22', text: '22' },
        { value: '24', text: '24' }
      ]
    }
  },
  methods: {
    search (width, height, diameter) {
      console.log('aaaa', width + height + diameter)
      const search = {
        width: width,
        height: height,
        diameter: diameter
      }
      console.log(search)
      localStorage.setItem('filter', JSON.stringify(search))
      // location.replace('/shop')
      if (width !== null) {
        console.log('width', width)
        location.replace('/shop?width=' + width)
      } else if (height !== null) {
        console.log('height', height)
        location.replace('/shop?height=' + height)
      } else if (diameter !== null) {
        console.log('diameter', diameter)
        location.replace('/shop?diameter=' + diameter)
      }
    }
  }
}
</script>
