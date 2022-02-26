<template>
  <div style="">
    <b-container>
      <br>
      <br>
      <b-row>
        <b-col>
          <div>
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <div>
                  <h1>ผ่อน 0%</h1>
                  <h3>นาน 10 เดือน</h3>
                  <!-- <img src="https://picsum.photos/600/300/?image=25" alt=""> -->
                  <p>เลือกผ่อน 0% นาน 10 เดือน หรือรับส่วนลดเพิ่ม 5% เมื่อชำระเต็มจำนวน</p>
                </div>
              </b-card-text>
              <b-button href="#" variant="primary" style="border-radius: 10%;">เรียนรู้เพิ่มเติม</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <div>
                  <h1>ชำระเงินออนไลน์</h1>
                  <p style="font-weight: bold;">ด้วยบัตรเครดิตหรือการโอนเงิน</p>
                  <!-- <img src="https://picsum.photos/600/300/?image=25" alt=""> -->
                  <p>ชำระเงินตามที่คุณต้องการด้วยระบบการชำระเงินที่ปลอดภัย</p>
                </div>
              </b-card-text>
              <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <div>
                  <h1>ติดตั้งสะดวกที่ร้านบริการใกล้บ้านคุณ</h1>
                  <p>ค้นหาศูนย์บริการที่มกล้คุณ พร้อมบริการติดตั้งฟรี จากร้านที่เข้าร่วมรายการ</p>
                </div>
              </b-card-text>
              <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <div>
                  <h1>แบรนด์ชั้นนำ</h1>
                  <p>เพียงกดค้นหาขนาดยางที่คุณต้องการ</p>
                </div>
              </b-card-text>
              <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.img-wrapper {
    display: inline-block;
    overflow: hidden;
}
.img-wrapper img {
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    vertical-align: middle;
}
.img-wrapper img:hover {
    -webkit-transform:scale(1.5); /* Safari and Chrome */
    -moz-transform:scale(1.5); /* Firefox */
    -ms-transform:scale(1.5); /* IE 9 */
    -o-transform:scale(1.5); /* Opera */
    transform:scale(1.5);
}
</style>
