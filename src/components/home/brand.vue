<template>
  <div style="background-color: #eaeaea">
    <div v-if="languages === 'TH'" style="margin-top: 10px">
      <br />
      <h1>แบรนด์ยอดนิยม</h1>
      <p>ตั้งแต่ปี 2008 เรามีความตั้งใจ</p>
      <p>ทำให้การซื้อยางออนไลน์เป็นเรื่องง่ายที่สุด</p>
      <p>ในขณะเดียวกันก็ให้มีสินค้าที่หลากหลาย</p>
      <p>ไว้เป็นตัวเลือก และคุ้มค่ามากที่สุด</p>
      <p>ไม่ว่าจะเป็นยางรถยนต์ราคาประหยัด</p>
      <p>ระดับกลาง หรือระดับพรีเมียม</p>
      <p>คุณจะพบว่าที่ TYREPAC มีสินค้าที่หลากหลาย</p>
      <p>– จากผู้ผลิตยางรถยนต์ที่มีชื่อเสียงที่สุดในโลก –</p>
      <br />
      <br>
      <br>
    </div>
    <div v-else-if="languages === 'EN'" style="margin-top: 10px">
      <br />
      <h1>Popular Brands</h1>
      <p>Since 2008, We have the intention.</p>
      <p>Makes buying tires online as easy as possible.</p>
      <p>At the same time providing a variety of products.</p>
      <p>As an option and the most worthwhile.</p>
      <p>Whether it is an economical tires</p>
      <p>Intermediate or Premium</p>
      <p>You will find that TYREPAC has a wide range of products.</p>
      <p>– From the most famous tire manufacturers in the world –</p>
      <br />
      <br>
      <br>
    </div>
    <b-container>
      <b-row>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=8">
            <div>
              <b-card
                title="Toyo Tyres"
                img-src="https://i.imgur.com/HnVRyeA.png"
                img-alt="Image"
                img-top
                tag="article"
                style="box-shadow: 5px 10px 18px #888888;"
                class="mb-2"
              >
              </b-card>
            </div>
          </a>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=7">
            <div>
            <b-card
              title="Nitto Tyres"
              img-src="https://i.imgur.com/8eRfIGM.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=6">
            <div>
            <b-card
              title="Nankang Tyres"
              img-src="https://i.imgur.com/WMx7X6v.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=1">
            <div>
            <b-card
              title="Bridgestone Tyres"
              img-src="https://i.imgur.com/V7YflQX.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=2">
            <div>
            <b-card
              title="Continental Tyres"
              img-src="https://i.imgur.com/SpcS77d.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=3">
            <div>
            <b-card
              title="Dunlop Tyres"
              img-src="https://i.imgur.com/9fDZ7WQ.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=4">
            <div>
            <b-card
              title="Goodyear Tyres"
              img-src="https://i.imgur.com/soeny1R.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=5">
            <div>
            <b-card
              title="Michelin Tyres"
              img-src="https://i.imgur.com/C9ClH5K.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4" xl="4">
          <a href="/shop?brand=9">
            <div>
            <b-card
              title="Yokohama Tyres"
              img-src="https://i.imgur.com/bI5cNEQ.png"
              img-alt="Image"
              img-top
              tag="article"
              style="box-shadow: 5px 10px 18px #888888;"
              class="mb-2"
            >
            </b-card>
          </div>
          </a>
        </b-col>
      </b-row>
      <br>
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
    // // console.log('lang', this.languages)
    if (this.languages === '' || this.languages === null || this.languages === 'null' || this.languages === undefined || this.languages === 'undefined') {
      // // console.log('langNOTLANG')
      this.languages = 'TH'
    } else if (this.languages === 'TH') {
      // // console.log('langTH')
    } else if (this.languages === 'EN') {
      // // console.log('langEN')
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');
p {
  font-size: 17px;
}
a {
  text-decoration: none;
  color: black;
}
h1 {
  font-family: 'Kanit', sans-serif;
  font-weight: bold;
}
</style>
