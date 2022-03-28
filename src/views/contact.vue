<template>
  <div style="margin-top: 160px">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <div
              style="
                border-radius: 5px;
                border: thin solid #e0e0e0;
                text-align: left;
              "
            >
              <div style="margin: 15px">
                <div>
                  <h1 style="font-weight: bold;">แบบฟอร์มสอบถาม</h1>
                </div>
                <br />
                <div>ชื่อของท่าน</div>
                <b-input placeholder="กรุณากรอกชื่อ"></b-input>
                <br />
                <div>อีเมล์</div>
                <b-input placeholder="กรุณากรอกอีเมล"></b-input>
                <br />
                <div>โทรศัพท์/แฟกซ์</div>
                <b-input placeholder="กรุณากรอกเบอร์ / แฟกซ์"></b-input>
                <br>
                <div style="font-weight: bold;">
                  เพื่อตอบคำถามของคุณได้อย่างมีประสิทธิภาพมากขึ้น
                  กรุณาแจ้งให้เราทราบข้อมูลเกี่ยวกับรถยนต์ของคุณ
                </div>
                <br />
                <div>ยี่ห้อรถยนต์</div>
                <b-input placeholder="ยี่ห้อรถยนต์"></b-input>
                <br />
                <div>รุ่นรถยนต์</div>
                <b-input placeholder="รุ่นรถยนต์"></b-input>
                <br />
                <div>ปี</div>
                <b-input placeholder="ปี"></b-input>
                <br />
                <div>ความคิดเห็น</div>
                <b-textarea placeholder="ความเห็น"></b-textarea>
                <div>
                  <br />
                  <b-button variant="primary">ส่ง</b-button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col>
            <div style="text-align: left;">
              <div>
                <div style="font-weight: bold;">ติดต่อเรา</div>
                <br />
                <div>เบอร์ติดต่อ: <a style="text-decoration: none;color: black;" href="tel:+66992839256">099-283-9256</a></div>
                <div>เบอร์ติดต่อ: <a style="text-decoration: none;color: black;" href="tel:+66824771520">082-477-1520</a></div>
                <div>อีเมล์: <a style="text-decoration: none;color: black;" href="mailto:info.tyrepac@apo-th.com">info.tyrepac@apo-th.com</a></div>
                <div>
                  ที่อยู่: 594 ถนนหลวง แขวงป้อมปราบ เขตป้อมปราบศัตรูพ่าย
                  กรุงเทพฯ 10100
                </div>
                <br />
                <br />
                <div style="font-weight: bold;">ชั่วโมงการทำงาน</div>
                <br />
                <div>จันทร์ – ศุกร์: 8:30 น. ถึง 17:00 น.</div>
                <div>เสาร์-อาทิตย์: หยุดทำการ</div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  metaInfo: {
    title: 'ติดต่อเรา',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  }
}
</script>
