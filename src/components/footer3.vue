<template>
  <div
    style="
      border-style: solid;
      border: 3px #a0a0a0;
      background-color: #282828;
      height: auto;
      margin-top: 10px;
      margin-bottom: 2px;
    "
    v-if="languages === 'TH'"
  >
    <br />
    <br />
    <div>
      <b-container>
        <b-row>
          <b-col>
            <div style="color: white;text-align: left;">
              <div>
                <img src="https://i.imgur.com/XC4tAlX.png" style="width: 150px;" alt="">
                <br>
                <br>
              </div>
              <div>สายด่วน : <a href="tel:+66992839256" style="text-decoration:none;color: white;">099-283-9256</a></div>
              <div>สายด่วน : <a href="tel:+66824771520" style="text-decoration:none;color: white;">082-477-1520</a></div>
              <br>
              <div>
                ที่อยู่ : บริษัท ออโต้ พาร์ท ออนไลน์ (ประเทศไทย) จำกัด 594
                ถนนหลวง แขวงป้อมปราบ เขตป้อมปราบศัตรูพ่าย กรุงเทพฯ 10100
              </div>
              <br>
              <div style="font-size: 25px;">
                <div style="text-align: left;display: inline-block;margin: 10px;color: #4267B2;">
                  <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
                    <i class="fa-brands fa-facebook-square"></i>
                  </a>
                </div>
                <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
                  <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
                    <i class="fa-brands fa-line"></i>
                  </a>
                </div>
              </div>
              <br>
              <div>
                <a
                  href="https://www.trustmarkthai.com/callbackData/popup.php?data=1b-24-5-a431ccba7d0c0410c90b1c659209e7c265517d97152&markID=firstmar"
                  target="_blank"
                  >
                  <img style="width: 150px;" src="https://i.imgur.com/iADev1A.png" alt="">
                  </a>
              </div>
            </div>
          </b-col>
          <b-col>
            <div>
              <h1 style="color: white">
                <div style="width: 100%;">
                  <iframe
                  title="Facebook Page"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftyrepacthailand%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=944390439229085"
                    height="500"
                    style="border: none; overflow: scroll"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
  <div
    style="
      border-style: solid;
      border: 3px #a0a0a0;
      background-color: #282828;
      height: auto;
      margin-top: 10px;
      margin-bottom: 2px;
    "
    v-else-if="languages === 'EN'"
  >
    <br />
    <br />
    <div>
      <b-container>
        <b-row>
          <b-col>
            <div style="color: white;text-align: left;">
              <div>
                <img src="https://i.imgur.com/XC4tAlX.png" style="width: 150px;" alt="">
                <br>
                <br>
              </div>
              <h1><a href="tel:+66992839256" style="text-decoration:none;color: black;">099-283-9256</a></h1>
              <h1><a href="tel:+66824771520" style="text-decoration:none;color: black;">082-477-1520</a></h1>
              <br>
              <div>
                Address:
                Auto-Parts-Online (Thailand) Co.,LTD.
                594 Luang Road, Pomprap, Pomprapsattruphai,
                Bangkok 10100, Thailand
              </div>
              <br>
              <div style="font-size: 25px;">
                <div style="text-align: left;display: inline-block;margin: 10px;color: #4267B2;">
                  <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="color: #4267B2;">
                    <i class="fa-brands fa-facebook-square"></i>
                  </a>
                </div>
                <div style="text-align: left;display: inline-block;margin: 10px;color: #00B900;">
                  <a href="https://line.me/R/ti/p/%40tyrepac_th" target="_blank" style="color: #00B900;">
                    <i class="fa-brands fa-line"></i>
                  </a>
                </div>
              </div>
              <br>
              <div>
                <a
                  href="https://www.trustmarkthai.com/callbackData/popup.php?data=1b-24-5-a431ccba7d0c0410c90b1c659209e7c265517d97152&markID=firstmar"
                  target="_blank"
                  >
                  <img style="width: 150px;" src="https://i.imgur.com/iADev1A.png" alt="">
                  </a>
              </div>
            </div>
          </b-col>
          <b-col>
            <div>
              <h1 style="color: white">
                <div style="width: 100%;">
                  <iframe
                  title="Facebook Page"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftyrepacthailand%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=944390439229085"
                    height="500"
                    style="border: none; overflow: scroll"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </h1>
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
