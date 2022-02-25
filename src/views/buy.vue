<template>
  <div style="margin-top: 90px">
    <div style="border-radius: 5px;border: thin solid #E0E0E0;">
      <b-container>
        <b-row>
          <div>รูปแบบการจัดส่งสินค้า</div>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <div>ซื้อยาง 4 เส้น ติดตั้งฟรีกับร้านที่ร่วมรายการ</div>
              <div>
                <b-button>เลือกร้านติดตั้ง</b-button>
              </div>
            </div>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <div>การเลือกตัวเลือกนี้จะส่งไปยังที่อยู่สำหรับการเรียกเก็บเงินและการจัดส่งของคุณด้านล่าง</div>
              <div>
                <b-button>กำหนดสถานที่ส่ง</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
        <br>
        <br>
        <b-row>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <div>ข้อมูลรถยนต์ในการขอรับประกันยาง</div>
              <br>
              <div>
                <div>
                  <div>ยี่ห้อรถยนต์ *</div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                 <div>
                  <div>รุ่นรถยนต์ *</div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>หมายเลขทะเบียนรถ *</div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
              </div>
              <div>
                ใบกำกับภาษี
              </div>
              <br>
              <div>
                <div>*กรุณาตรวจสอบข้อมูลให้ถูกต้อง ไม่สามารถแก้ไขเปลี่ยนแปลงและขอย้อนหลังได้</div>
                <div>
                  <b-form-radio v-model="selected" name="some-radios" value="A">ไม่ต้องการ</b-form-radio>
                  <b-form-radio v-model="selected" name="some-radios" value="B">ต้องการ</b-form-radio>
                </div>
              </div>
              <div>
                <div>ใบเสร็จ</div>
                <div>
                  <div>
                    ชื่อ
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    นามสกุล
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    ที่อยู่
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    อำเภอ
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    จังหวัด
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    รหัสไปรษณีย์
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    โทรศัพท์
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <div>
                    อีเมลแอดเดรส
                  </div>
                  <div>
                    <b-input></b-input>
                  </div>
                </div>
                <div>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="statuss"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    กรุณาตรวจสอบรายการคำสั่งซื้อของคุณ ทางเราขอสงวนสิทธิ์หากชำระเงินแล้วไม่รับเปลี่ยนหรือคืน *
                  </b-form-checkbox>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
              <div>
                ข้อมูลเพิ่มเติม
              </div>
              <br>
              <div>
                <div>
                  บันทึกเพิ่มเติม (ต้องระบุ)
                </div>
                <b-input placeholder="หมายเหตุต่างๆ เช่น รายละเอียดการจัดส่ง"></b-input>
              </div>
            </div>
          </b-col>
        </b-row>
        <br>
        <br>
        <b-row>
          <div style="border-radius: 5px;border: thin solid #E0E0E0;margin: 5px;">
            <div>รายการสั่งซื้อของคุณ</div>
            <div v-b-modal.modal-1>ใส่รหัสส่วนลดที่นี่? คลิกที่นี่ เพื่อใส่รหัสส่วนลด.</div>
              <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">มีรหัสส่วนลดหรือไม่?</p>
                <div>
                  <b-input placeholder="รหัสส่วนลด"></b-input>
                </div>
                <div>
                  <b-button>ใช้รหัสส่วนลด</b-button>
                </div>
              </b-modal>
          </div>
          fsafsaf
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '',
      statuss: 'not_accepted'
    }
  }
}
</script>
