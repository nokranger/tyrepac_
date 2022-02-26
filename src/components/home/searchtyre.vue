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
          <b-button variant="light" style="border-radius: 1px;border: thin solid black;">ค้นหา</b-button>
        </div>
        <br />
        <b><a href="" style="color: black;text-decoration: none;">ไม่แน่ใจวิธีอ่านขนาดยางของคุณ ? คลิกที่นี่</a></b>
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
        { value: 'a', text: '155' },
        { value: 'b', text: '165' },
        { value: { C: '3PO' }, text: '175' },
        { value: { C: '3PO' }, text: '185' },
        { value: { C: '3PO' }, text: '195' },
        { value: { C: '3PO' }, text: '205' }
      ],
      options2: [
        { value: null, text: '--ซีรี่ย์ยาง--' },
        { value: 'a', text: '0' },
        { value: 'b', text: '25' },
        { value: { C: '3PO' }, text: '30' },
        { value: 'd', text: '35' }
      ],
      options3: [
        { value: null, text: '--ขนาดวงล้อ--' },
        { value: 'a', text: '13' },
        { value: 'b', text: '14' },
        { value: { C: '3PO' }, text: '15' },
        { value: 'd', text: '16' }
      ]
    }
  }
}
</script>
