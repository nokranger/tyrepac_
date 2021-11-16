<template>
  <div v-if="langs === 'th'">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
    <div style="height: auto;width: 100%;background-color: #1C8BCB;">
      <br>
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <img src="https://i.imgur.com/VzCZnrW.png" alt="">
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <div style="text-align: left;">
                    <ul>COMPANY
                      <li><a style="font-size: 13px;font-weight: bold;" :href="'/'+ langs + '/about'">เกี่ยวกับเรา</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" :href="'/'+ langs + '/contact'">ติดต่อเรา</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" :href="'/'+ langs + '/workwithus'">ร่วมงานกับเรา</a></li>
                    </ul>
                  </div>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <div style="text-align: left;">
                    <ul>SOCIAL
                      <li><a style="font-size: 13px;font-weight: bold;" href="https://www.facebook.com/ManoyontGroup/" target="_blank">Facebook</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" href="https://www.youtube.com/channel/UCbPcztSREMTyLlP5lbmGd2A/featured" target="_blank">Youtube</a></li>
                    </ul>
                  </div>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <div style="text-align: left;">
                    <ul>CONTACT
                      <li style="font-size: 13px;font-weight: bold;"><i style="font-size: 20px;margin-right: 5px;" class="fas fa-map-marker-alt"></i> 594 ถนนหลวง แขวงป้อมปราบ</li>
                      <li style="font-size: 13px;font-weight: bold;margin-left: 25px;">เขตป้อมปราบศัตรูพ่าย กรุงเทพฯ 10100</li>
                      <li style="font-size: 14px;"><a style="font-size: 13px;font-weight: bold;" href="tel:6622265588" target="_blank"><i style="font-size: 20px;margin-right: 5px;" class="fas fa-phone-volume"></i> โทร : (662) 226-5588</a></li>
                      <li style="font-size: 14px;margin-left: 25px;">แฟกซ์ : (662) 225-4336</li>
                      <li><a style="font-size: 13px;font-weight: bold;" href="" target="_blank"><i style="font-size: 20px;margin-right: 5px;" class="fas fa-globe"></i> www.manoyontchai.com</a></li>
                    </ul>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        <br>
      </b-container>
    </div>
      <div style="max-height: 57px;height: auto;width: 100%;background-color: #1565AC;text-align: left;">
        <b-container>
          <div style="height: 40px;font-size: 11px;font-weight: normal;color: #ffffff">สงวนลิขสิทธิ์ พ.ศ.2564 บริษัท มโนยนต์ชัย จำกัด</div>
        </b-container>
      </div>
  </div>
  <div v-else-if="langs === 'en'">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
    <div style="height: auto;width: 100%;background-color: #1C8BCB;">
      <br>
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <img src="https://i.imgur.com/VzCZnrW.png" alt="">
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <div style="text-align: left;">
                    <ul>COMPANY
                      <li><a style="font-size: 13px;font-weight: bold;" :href="'/'+ langs + '/about'">About us</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" :href="'/'+ langs + '/contact'">Contact us</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" :href="'/'+ langs + '/workwithus'">Join with us</a></li>
                    </ul>
                  </div>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <div style="text-align: left;">
                    <ul>SOCIAL
                      <li><a style="font-size: 13px;font-weight: bold;" href="https://www.facebook.com/ManoyontGroup/" target="_blank">Facebook</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" href="https://www.youtube.com/channel/UCbPcztSREMTyLlP5lbmGd2A/featured" target="_blank">Youtube</a></li>
                    </ul>
                  </div>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3">
                  <div style="text-align: left;">
                    <ul>CONTACT
                      <li style="font-size: 13px;font-weight: bold;"><i style="font-size: 20px;margin-right: 5px;" class="fas fa-map-marker-alt"></i> 594 Luang Road, Pomprap</li>
                      <li style="font-size: 13px;font-weight: bold;margin-left: 25px;">Pomprapsattruphai,</li>
                      <li style="font-size: 13px;font-weight: bold;margin-left: 25px;">Bangkok 10100, Thailand</li>
                      <li style="font-size: 14px;;"><a style="font-size: 13px;font-weight: bold;" href="tel:6622265588" target="_blank"><i style="font-size: 20px;margin-right: 5px;" class="fas fa-phone-volume"></i> Phone : (662) 226-5588</a></li>
                      <li style="font-size: 14px;margin-left: 25px;"><a style="font-size: 13px;font-weight: bold;">Fax : (662) 225-4336</a></li>
                      <li><a style="font-size: 13px;font-weight: bold;" href="" target="_blank"><i style="font-size: 20px;margin-right: 5px;" class="fas fa-globe"></i> www.manoyontchai.com</a></li>
                    </ul>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        <br>
      </b-container>
    </div>
      <div style="max-height: 57px;height: auto;width: 100%;background-color: #1565AC;text-align: left;">
        <b-container>
          <div style="height: 40px;font-size: 11px;font-weight: normal;color: #ffffff">Copyright ©2021 Manoyontchai Co., Ltd.</div>
        </b-container>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      langs: ''
    }
  },
  mounted () {
    this.langs = localStorage.getItem('selectlang')
  }
}
</script>
<style scoped>
div {
color: white;
font-weight: bold;
font-size: 30px;
}
li {
color: #c5c4c0;
font-size: 15px;
font-weight: bold;
list-style-type: none;
margin: 0;
padding: 0;
}
a {
  color: #c5c4c0;
  text-decoration: none;
}
a:hover {
  color: #c5c4c0;
}
</style>
