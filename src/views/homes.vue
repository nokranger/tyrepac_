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
      <div id="size">
        <div style="height: 300px; background-color: #f7b00d;">
          <br />
          <p style="font-size: 25px; font-weight: bold">ค้นหาตามขนาดยาง</p>
          <div>
            <b-form-select style="width: 50%;font-size: 20px;margin: 5px;" v-model="selected1" :options="options" name="" id="">
            </b-form-select>
          </div>
          <div>
            <b-form-select style="width: 50%;font-size: 20px;margin: 5px;" v-model="selected2" :options="options2" name="" id="">
            </b-form-select>
          </div>
          <div>
            <b-form-select style="width: 50%;font-size: 20px;margin: 5px;" v-model="selected3" :options="options3" name="" id="">
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
      <div style="margin: 10px;">
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <div>
              <b-card
                title="ผ่อน 0%"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  <p>นาน 10 เดือน</p>
เลือกผ่อน 0% นาน 10 เดือน หรือรับส่วนลดเพิ่ม 5% เมื่อชำระเต็มจำนวน
                </b-card-text>

                <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="ชำระเงินออนไลน์"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  <p>ด้วยบัตรเครดิตหรือการโอนเงิน</p>
                  ชำระเงินตามที่คุณต้องการด้วยระบบการชำระเงินที่ปลอดภัย
                  <br>
                </b-card-text>

                <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="ติดตั้งสะดวกที่ร้่านบริการใกล้บ้านคุณ"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  ค้นหาศูนย์บริการที่มกล้คุณ พร้อมบริการติดตั้งฟรี จากร้านที่เข้าร่วมรายการ
                  <br>
                  <br>
                </b-card-text>

                <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="แบรนด์ชั้นนำ"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  เพียงกดค้นหาขนาดยางที่คุณต้องการ
                  <br>
                  <br>
                  <br>
                  <br>
                </b-card-text>

                <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </div>
      <div style="background-color: #eaeaea;">
        <div>
          <p>แบรนด์ยอดนิยม</p>
          <p>ตั้งแต่ปี 2008 เรามีความตั้งใจ</p>
          <p>ทำให้การซื้อยางออนไลน์เป็นเรื่องง่ายที่สุด</p>
          <p>ในขณะเดียวกันก็ให้มีสินค้าที่หลากหลาย</p>
          <p>ไว้เป็นตัวเลือก และคุ้มค่ามากที่สุด</p>
          <p>ไม่ว่าจะเป็นยางรถยนต์ราคาประหยัด</p>
          <p>ระดับกลาง หรือระดับพรีเมียม</p>
          <p>คุณจะพบว่าที่ TYREPAC มีสินค้าที่หลากหลาย</p>
          <p>– จากผู้ผลิตยางรถยนต์ที่มีชื่อเสียงที่สุดในโลก –</p>
        </div>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <div>
              <b-card
                title="Toyo Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="Nitto Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="Nankang Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
                <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <div>
              <b-card
                title="Bridgestone Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="Continental Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="Dunlop Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
                <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <div>
              <b-card
                title="Goodyear Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="Mechelin Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
                    <b-col>
            <div>
              <b-card
                title="Yokohama Tyres"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              </b-card>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </div>
      <div>
        <div>
          <br>
          <h3>ดูสิ่งที่ผู้คนพูดเกี่ยวกับเราบน Facebook</h3>
          <b-button>ดูรีวิว</b-button>
          <br>
          <img src="https://www.tyrepac.co.th/wp-content/uploads/2020/02/fbReviews-1200x368.jpg" alt="">
        </div>
      </div>
      <div>
        <div>
          <h4>บริการลูกค้า</h4>
          <p>กรุณาติดต่อฝ่ายบริการลูกค้าของเราหากมีคำถามใด ๆ เกี่ยวกับการเลือกยาง</p>
          <h4>+66 091-889-5127</h4>
          <h4>เวลาทำการคอลเซนเตอร์</h4>
          <p>วันจันทร์ – ศุกร์ 08.30 น. – 17.00 น.</p>
        </div>
      </div>
      <div style="border-style: solid;border: 3px #A0A0A0;background-color: #282828;height: 200px;">
        <br>
        <br>
        <div>
          <b-row>
            <b-col>
              <h4 style="color: whitesmoke">สมัครสมาชิกตอนนี้และรับข้อเสนอพิเศษ</h4>
            </b-col>
            <b-col>
              <b-row>
              <b-col>
                <b-input style="width: 100%;" placeholder="โปรดใส่อีเมลล์ของคุณ"></b-input>
              </b-col>
              <b-col>
                <b-button>ส่ง</b-button>
              </b-col>
              </b-row>
            </b-col>
          </b-row>
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
