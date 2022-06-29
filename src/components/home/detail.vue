<template>
  <div v-if="languages === 'TH'" style="text-align: left;">
    <b-container>
      <br>
      <br>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 18px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text>
                <div style="background-image: url('https://i.imgur.com/4NyGgMw.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                  <h1>ผ่อน 0%</h1>
                  <h3 style="font-weight: bold;font-size: 20px;">นาน 10 เดือน</h3>
                  <!-- <img src="https://picsum.photos/600/300/?image=25" alt=""> -->
                  <p style="font-size: 16px;width: 200px;">เลือกผ่อน 0% นาน 10 เดือน หรือรับส่วนลดเพิ่ม 5% เมื่อชำระเต็มจำนวน</p>
                </div>
                <b-button href="#" variant="primary" style="border-radius: 10%;">เรียนรู้เพิ่มเติม</b-button>
              </b-card-text>
              <!-- <b-button href="#" variant="primary" style="border-radius: 10%;">เรียนรู้เพิ่มเติม</b-button> -->
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 18px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text>
                <div  style="background-image: url('https://i.imgur.com/met85HX.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                  <h1>ชำระเงินออนไลน์</h1>
                  <p style="font-weight: bold;font-size: 20px;width: 200px;">ด้วยบัตรเครดิตหรือการโอนเงิน</p>
                  <!-- <img src="https://picsum.photos/600/300/?image=25" alt=""> -->
                  <p style="font-size: 16px;width: 150px;">ชำระเงินตามที่คุณต้องการด้วยระบบการชำระเงินที่ปลอดภัย</p>
                </div>
                <b-button href="#" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 18px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text style="height: 340px;">
                <div  style="background-image: url('https://i.imgur.com/aJlyFk3.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                  <h1 style="width: 200px;">ติดตั้งสะดวกที่ร้านบริการใกล้บ้านคุณ</h1>
                  <p style="width: 200px;font-size: 16px;">ค้นหาศูนย์บริการที่มกล้คุณ พร้อมบริการติดตั้งฟรี จากร้านที่เข้าร่วมรายการ</p>
                </div>
                <b-button href="/installer" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <!-- <img src="https://i.imgur.com/QgkWWLi.png" alt=""> -->
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 16px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text>
                <div style="background-image: url('https://i.imgur.com/jgwzHLZ.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                <!-- <img src="https://i.imgur.com/QgkWWLi.png" style="width: 100%;" alt=""> -->
                  <h1>แบรนด์ชั้นนำ</h1>
                  <p style="width: 200px;font-size: 16px;">เพียงกดค้นหาขนาดยางที่คุณต้องการ</p>
                </div>
                <b-button href="/brand" variant="primary">เรียนรู้เพิ่มเติม</b-button>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div v-else-if="languages === 'EN'" style="text-align: left;">
    <b-container>
      <br>
      <br>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 18px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text>
                <div style="background-image: url('https://i.imgur.com/4NyGgMw.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                  <h1>Payment Term 0% </h1>
                  <h3 style="font-weight: bold;font-size: 20px;">Per 10 Month</h3>
                  <!-- <img src="https://picsum.photos/600/300/?image=25" alt=""> -->
                  <p style="font-size: 16px;width: 200px;">Select Payment Term 0% for 10 months or Get an additional 5% discount when paying in full.</p>
                </div>
                <b-button href="#" variant="primary" style="border-radius: 10%;">Learn More</b-button>
              </b-card-text>
              <!-- <b-button href="#" variant="primary" style="border-radius: 10%;">เรียนรู้เพิ่มเติม</b-button> -->
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 18px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text>
                <div  style="background-image: url('https://i.imgur.com/met85HX.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                  <h1>Payment Online</h1>
                  <p style="font-weight: bold;font-size: 20px;width: 200px;">Payment Online by Credit Card or Transfer Cash with Mobile Banking </p>
                  <!-- <img src="https://picsum.photos/600/300/?image=25" alt=""> -->
                  <p style="font-size: 16px;width: 150px;">Pay as you want with our secure payment system.</p>
                </div>
                <b-button href="#" variant="primary">Learn More</b-button>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 18px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text style="height: 340px;">
                <div  style="background-image: url('https://i.imgur.com/aJlyFk3.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                  <h1 style="width: 200px;">Easy to install at the shop service near you.</h1>
                  <p style="width: 200px;font-size: 16px;">Find the service center near you. Free installation service from participating stores.</p>
                </div>
                <b-button href="/installer" variant="primary">Learn More</b-button>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <!-- <img src="https://i.imgur.com/QgkWWLi.png" alt=""> -->
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <div style="box-shadow: 5px 10px 16px #888888;">
            <b-card
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;height: 400px;"
              class="mb-2"
            >
              <b-card-text>
                <div style="background-image: url('https://i.imgur.com/jgwzHLZ.png');height: 310px;background-repeat: no-repeat;background-size: 100% 100%;">
                <!-- <img src="https://i.imgur.com/QgkWWLi.png" style="width: 100%;" alt=""> -->
                  <h1>Best Global Brand</h1>
                  <p style="width: 200px;font-size: 16px;">Just search complete tyre size list by user size.</p>
                </div>
                <b-button href="/brand" variant="primary">Learn More</b-button>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
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
      this.languages = 'TH'
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
h1 {
  font-family: 'Kanit', sans-serif;
  font-weight: bold;
  font-size: 25px;
}
</style>
