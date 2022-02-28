<template>
  <div>
    <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
      <div style="text-align: left; font-weight: bold;margin: 5px;">
        <div style="margin-left: 5px;">กรองตามความกว้าง</div>
        <div>
          <b-input placeholder="ทุกๆ ความกว้าง"></b-input>
          <br />
        </div>
        <div style="margin-left: 5px;">กรองตามซีรี่ย์ยาง</div>
        <div>
          <b-input placeholder="ทุกๆ ซีรี่ย์ยาง"></b-input>
          <br />
        </div>
        <div style="margin-left: 5px;">กรองตามขนาดวงล้อ</div>
        <div>
          <b-input placeholder="ทุกๆ ขนาดวงล้อ"></b-input>
          <br />
        </div>
        <div style="margin-left: 5px;">กรองตามรูปแบบยาง</div>
        <div>
          <b-input placeholder="ทุกๆ รุ่นยาง"></b-input>
          <br />
        </div>
        <div>
          <label style="margin-left: 5px;" for="range-2">กรองตามราคา</label>
          <b-form-input
            id="range-2"
            v-model="value"
            type="range"
            min="2250"
            max="21100"
            step="10"
          ></b-form-input>
          <div style="margin-left: 5px;" class="mt-2">ราคา {{ 2250 }} - {{ value }}</div>
          <br />
        </div>
      </div>
    </div>
    <br />
    <div style="border-radius: 5px; border: thin solid #e0e0e0">
      <div>ยางรถยนต์</div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/dFBbXVM.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/9JpV8e2.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/yDA4cCy.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/39bMB69.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/iBpm6uT.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/yvhHUsj.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/TgbxVn2.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/EByvNfm.png" alt="" />
      </div>
      <div style="border-radius: 5px; border: thin solid #e0e0e0; margin: 5px">
        <img src="https://i.imgur.com/iiTZGZR.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '2250'
    }
  }
}
</script>
