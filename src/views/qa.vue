<template>
  <div style="margin-top: 160px;">
    <div
      style="
        color: #005099;
        background-color: #f9bd45;
        height: 200px;
        margin: 0;
      "
    >
      <br />
      <br />
      <br />
      <a href="#tyre">
        <div style="display: inline-block; margin: 10px">ยางรถยนต์</div>
      </a>
      <a href="#order">
        <div style="display: inline-block; margin: 10px">การสั่งซื้อ</div>
      </a>
      <a href="#delivery">
        <div style="display: inline-block; margin: 10px">การจัดส่ง</div>
      </a>
      <a href="#aftersales">
        <div style="display: inline-block; margin: 10px">บริการหลังการขาย</div>
      </a>
      <a href="/shop">
        <div style="display: inline-block; margin: 10px">
          <i class="fas fa-shopping-cart"></i>
        </div>
      </a>
      <!-- <div style="display: inline-block; margin: 10px">รถเข็น</div> -->
      <br />
      <br />
    </div>
    <div>
      <br />
      <div>
        <img
          src="https://tyrepac.co.th/wp-content/uploads/2019/12/icon-3lines.png"
          alt=""
        />
      </div>
      <br>
      <div style="font-weight: bold;font-size: 20px;">คำถามที่พบบ่อย</div>
      <br>
      <div>
        <b-container>
          <b-row>
            <b-col>
              <div style="background-color: #005099; color: whitesmoke;width: 250px;height: 250px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
                <br>
                <!-- <img src="" height="100" width="100" alt=""> -->
                <div style="width: 100px;height: 100px;"></div>
                <div style="font-weight: bold;font-size: 20px;">ยางรถยนต์</div>
                <div>
                  การเลือกยางรถยนต์ การเปลี่ยนยาง ความรู้เบื้องต้นยางรถยนต์
                </div>
              </div>
            </b-col>
            <b-col>
              <div style="background-color: #282828; color: whitesmoke;width: 250px;height: 250px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
                <br>
                <img src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/icon-order.png" height="100" width="100" alt="">
                <div style="font-weight: bold;font-size: 20px;">การสั่งซื้อสินค้า</div>
                <div>สั่งซื้อสินค้า ติดตามการสั่งซื้อ การชำระเงิน</div>
              </div>
            </b-col>
            <b-col>
              <div style="background-color: #005099; color: whitesmoke;width: 250px;height: 250px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
                <br>
                <div style="width: 100px;height: 100px;"></div>
                <div style="font-weight: bold;font-size: 20px;">การจัดส่งสินค้าและติดตั้ง</div>
                <div>
                  การเปลี่ยนแปลงการจัดส่ง ระยะเวลาในการจัดส่ง การติดตั้ง
                </div>
              </div>
            </b-col>
            <b-col>
              <div style="background-color: #282828; color: whitesmoke;width: 250px;height: 250px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
                <br>
                <img src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/icon-support.png" width="100" height="100" alt="">
                <div style="font-weight: bold;font-size: 25px;">บริการหลังการขาย</div>
                <div>
                  การยกเลิกคำสั่งซื้อ นโยบายการคืนสินค้า การรับประกันสินค้า
                </div>
              </div>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <div style="background-color: #282828; color: whitesmoke;height: 100px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;text-align: left;">
                <div style="margin: 15px;">
                  <div style="font-weight: bold;font-size: 25px;">สอบถามข้อมูลทางอีเมล์</div>
                  <div>
                    info@tyrepac.co.th
                  </div>
                  <div>
                    เราจะติดต่อคุณกลับโดยเร็วที่สุด
                  </div>
                </div>
              </div>
            </b-col>
            <b-col>
              <div style="background-color: #f9bd45; color: whitesmoke;height: 100px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;text-align: left;">
                <div style="margin: 15px;">
                  <div style="font-weight: bold;font-size: 25px;">โทรศัพท์</div>
                  <div>
                    091-889-5127
                  </div>
                  <div id="tyre">
                    จันทร์-ศุกร์ 8:30 – 17:00
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <br/>
      <br />
      <div style="background-color: #f7f7f7">
        <b-container>
          <div>
            <br />
            <br />
            <img
              src="https://tyrepac.co.th/wp-content/uploads/2019/12/icon-3lines.png"
              alt=""
            />
            <br />
            <br />
          </div>
          <div style="font-weight: bold;font-size: 20px;">ยางรถยนต์</div>
          <br>
          <b-row>
            <b-col>
              <b-col>
                <div style="margin: 15px;text-align: left;">
                  <div style="font-weight: bold;font-size: 20px;">A. การเลือกยางรถยนต์</div>
                  <div style="font-weight: bold;font-size: 20px;">ขนาดยางรถยนต์ของฉันคือเท่าใด ?</div>
                  <div>
                    สามารถอ่านขนาดของยางรถยนต์ได้ที่แก้มยางรถยนต์ของคุณ
                    ซึ่งจะเป็นชุดหมายเลขเช่นนี้ 205/55R16
                  </div>
                </div>
              </b-col>
              <b-col>
                <div style="margin: 15px;text-align: left;">
                  <div style="font-weight: bold;font-size: 20px;">ยางแบบไหนเหมาะกับรถของเรา?</div>
                  <div>
                    สิ่งนี้จะขึ้นอยู่กับสไตล์การขับขี่และความชอบส่วนตัวของคุณ
                    TYREPAC ได้จัดทำรายละเอียดเกี่ยวกับยางแต่ละตัวบนเว็บไซต์
                    คุณสามารถอ่านรีวิวที่โพสต์โดยลูกค้าของเรา
                    เพื่อเป็นแนวทางในการเลือกรูปแบบยางรถยนต์ที่เหมาะสมกับคุณ
                  </div>
                </div>
              </b-col>
            </b-col>
            <b-col>
              <div>
                <img style="width: 100%;"
                  src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/tyre-guide.jpg"
                  alt=""
                />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-col>
                <br />
                <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 850px;text-align: left;">
                  <br>
                  <div style="margin: 15px;">
                    <br />
                    <div class="headers" style="font-size: 30px;">Directional ดอกยางแบบทิศทางเดียว</div>
                    <div class="headers">รายละเอียด</div>
                    <p>
                      ลวดลายดอกยางถูกออกแบบมาเพื่อหมุนไปในทิศทางเดียวเท่านั้น
                      ด้วยเหตุผลนี้ยางจึงมีสัญลักษณ์ลูกศร แสดงอยู่ที่ขอบยาง
                      เพื่อระบุทิศทางในการติดตั้งยาง
                      ลายร่องด้านข้างทั้งสองข้างของยาง
                      จะหันไปทางกึ่งกลางของยางทำให้เกิดรูปร่างตัววี (v)
                      ร่องยางลักษณะนี้สามารถระบายน้ำได้อย่างมีประสิทธิภาพ
                      ผ่านดอกยาง เพื่อให้ยางสามารถสัมผัสกับถนน
                      และเพื่อเพิ่มการยึดเกาะถนนเปียก
                      และยังสามารถต้านทานแรงดันน้ำได้แม้ในความเร็วสูง
                    </p>
                    <br />
                    <div class="headers">ข้อดี</div>
                    <p>
                      เหมาะกับรถยนต์สมรรถนะสูง
                      จะให้ความเสถียรเมื่อขับขี่ด้วยความเร็วสูง
                    </p>
                    <div style="text-align: center;">
                      <img
                        src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/tyre-directional.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </b-col>
            </b-col>
            <b-col>
              <b-col>
                <br />
                <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 850px;text-align: left;">
                  <br>
                  <div style="margin: 15px;">
                    <br />
                    <div class="headers" style="font-size: 30px;">Symmetrical Design ดอกยางแบบสมมาตร</div>
                    <div class="headers">รายละเอียด</div>
                    <p>
                      เป็นรูปแบบดอกยางที่พบมากที่สุด
                      สำหรับรถซีดานมาตรฐานและรถบรรทุกขนาดเล็ก
                      ยางเหล่านี้มีบล็อกดอกยางแบบต่อเนื่องทั่วพื้นผิวทั้งหมดของยาง
                      ลวดลายในแต่ละด้านของยางนั้นเหมือนกันทุกประการ
                    </p>
                    <br />
                    <div class="headers">ข้อดี</div>
                    <p>
                      ดอกยางเป็นลายเล็ก ๆ และละเอียด
                      ช่วยลดเสียงของยางและเสียงเมื่อสัมผัสกับถนน
                      ทำให้เป็นยางที่ค่อนข้างเงียบ
                    </p>
                    <p>
                      การสึกหรอและอายุการใช้งานที่ยาวนาน
                      เนื่องจากสามารถสลับยางได้ทั้ง 4 เส้น
                      เพื่อให้การสึกหรอเท่ากันในทุกๆ ด้าน
                    </p>
                    <div style="text-align: center;">
                      <img
                        src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/tyre-directional.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </b-col>
            </b-col>
            <b-col>
              <b-col>
                <br />
                <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 850px;text-align: left;">
                  <br>
                  <div style="margin: 15px;">
                    <br />
                    <div class="headers" style="font-size: 30px;">Asymmetric Design ดอกยางแบบอสมมาตร</div>
                    <div class="headers">รายละเอียด</div>
                    <p>
                      ลักษณะลายดอกยางบนหน้ายางสองฝั่งไม่เหมือนกัน
                      เพื่อช่วยเพิ่มประสิทธิภาพในการขับขี่ให้ดียิ่งขึ้น
                      หน้ายางด้านในเหมาะสำหรับขับทางตรงและใช้ความเร็วสูง
                      ในขณะที่หน้ายางด้านนอกมีหน้าที่ช่วยยึดเกาะถนนได้ดีเวลาเข้าโค้ง
                      เหมาะกับการขับรถที่ใช้ความเร็วและต้องการเข้าโค้งที่ปลอดภัย
                    </p>
                    <br />
                    <div class="headers">ข้อดี</div>
                    <p>
                      เหมาะกับรถยนต์สมรรถนะสูง และรถยนต์ที่ใช้ความเร็ว
                      เพื่อการทรงตัวที่ดีขณะเข้าโค้ง
                    </p>
                    <p>
                      สามารถสลับยางได้ทั้ง 4 ล้อ
                      เพื่อให้การสึกหรอเป็นไปอย่างสม่ำเสมอ และช่วยยืดอายุการใช้งาน
                      โดยบนแก้มยางแบบ “อสมมาตร” จะมีคำว่า “inside” และ “outside”
                      อยู่บนแก้มยาง เมื่อต้องสลับยาง
                      ต้องดูให้แน่ใจว่าได้เอาด้านที่มีคำว่า “outside”
                      ไว้ด้านนอกเสมอ
                    </p>
                    <div style="text-align: center;">
                      <img
                        src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/tyre-directional.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </b-col>
            </b-col>
          </b-row>
          <div>
            <br>
            <div class="headers">
              B.MIXED TYRE
            </div>
            <br>
          </div>
          <b-row>
            <b-col>
              <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                <div style="margin: 15px;">
                  <br>
                  <div class="headers">สามารถเปลี่ยนยางเส้นเดียวได้หรือไม่ ?</div>
                  <p>
                    สามารถเปลี่ยนได้แต่อย่างไรก็ตามเราไม่แนะนำให้เปลี่ยนยางที่แตกต่างกันทีละเส้น
                    ควรเปลี่ยนยางเป็นคู่เพื่อป้องกันการสึกหรอหรือความไม่สมดุลของยาง
                  </p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                <div style="margin: 15px;">
                  <br>
                  <div class="headers">ควรติดตั้งยางคู่ใหม่ที่ไหน?</div>
                  <p>
                    ติดที่เพลาล้อหลัง
                    การยึดเกาะถนนกับเพลาล้อหลังบนพื้นผิวที่เปียกนั้นเป็นสิ่งจำเป็นเพื่อป้องกันไม่ให้เกิดสภาวะการเลี้ยวเกินและสูญเสียการควบคุมรถโดยเฉพาะอย่างยิ่งในระหว่างการเบรคอย่างกะทันหัน
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <br>
            <div class="headers">C.ข้อมูลทางเทคนิค</div>
            <br>
            <br>
            <div class="headers">ข้อมูลยางพื้นฐานที่ควรทราบ</div>
            <br>
            <br>
            <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
              <b-row>
                <b-col>
                  <div>
                    <img
                      src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/basic_tyreinfo.png"
                      alt=""
                    />
                  </div>
                </b-col>
                <b-col>
                  <br>
                  <br>
                  <div v-for="(details, index) in detail" :key="index">
                    <div style="text-align: left;">{{index + 1}}. {{details.name}}</div>
                  </div>
                  <div>**(C & U regulations stipulate all tyres used in the UK must carry an E number)</div>
                </b-col>
              </b-row>
            </div>
          </b-row>
          <br>
          <br>
          <b-row>
            <b-col>
              <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;text-align: left;">
                <div style="margin: 15px;">
                  <br>
                  <div class="headers">
                    ขนาดยาง
                  </div>
                  <p>รหัสยางซึ่งขึ้นรูปอยู่กับแก้มยางโดยทั่วไป จะอธิบายด้วยค่าตัวเลขและตัวอักษร รหัสนี้ระบุขนาดของยางและข้อจำกัดที่สำคัญบางประการ เช่น ความสามารถในการรับน้ำหนักและความเร็วสูงสุด</p>
                  <div style="margin: 10px;">
                    <img src="https://www.tyrepac.co.th/wp-content/uploads/2019/12/tech-tyresize.jpg" alt="">
                  </div>
                </div>
              </div>
            </b-col>
            <b-col>
              <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
                <div style="margin: 15px;text-align: left;">
                  <br>
                  <div class="headers">
                    สัญลักษณ์ความเร็ว
                  </div>
                  <p>An alphabet representing the maximum speed of this tyre.</p>
                </div>
                <div style="margin: 10px;">
                  <b-table striped hover :items="items"></b-table>
                </div>
              </div>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <div style="background-color: white;box-shadow: 5px 10px 18px #888888;border-radius: 5px;">
              <div style="text-align: left;">
                <br>
                <div class="headers">ดัชนีการรับน้ำหนัก</div>
                <br>
                <p >A numeric code that tells you the maximum load carrying ability of each tyre.</p>
              </div>
              <div style="margin: 10px;">
                <b-table sticky-header striped hover :items="items2"></b-table>
              </div>
            </div>
          </b-row>
          <br id="order">
        </b-container>
        <div style="background-color: #333333;color: white;">
          <div>
            <br>
            <br>
            <br>
            <img src="https://tyrepac.co.th/wp-content/uploads/2019/12/small-icon-white.png" alt="">
          </div>
          <br>
          <div class="headers">
            การสั่ง
          </div>
          <br>
          <br>
          <b-container>
            <b-row>
              <div class="headers" style="text-align: left;margin-left: 40px;">
                  ก. การสั่งซื้อสินค้าของฉัน
              </div>
              <br>
              <br>
              <b-col>
                <b-col>
                  <div style="background-color: white;color: black;margin: 10px;margin-bottom: 20px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                    <br>
                    <div class="headers" style="text-align: left;margin: 15px;">
                      ขั้นตอนการสั่งซื้อสินค้ามีอะไรบ้าง?
                      </div>
                      <ul style="text-align: left;">
                        <li>
                          ค้นหาและเลือกยางที่ต้องการ
                        </li>
                        <li>
                          เลือกสถานที่ติดตั้ง วัน และเวลา
                        </li>
                        <li>
                          การชำระเงินด้วยเงินสดหรือบัตรเครดิต
                        </li>
                        <li>
                          ติดตั้งยางตามกำหนด
                        </li>
                      </ul>
                  </div>
                  <div style="background-color: white;color: black;margin: 10px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                    <br>
                    <div style="margin: 15px;">
                      <div class="headers" style="text-align: left;margin: 15px;">
                        สามารถสั่งซื้อสินค้าผ่านทางโทรศัพท์ได้หรือไม่?
                      </div>
                      <p>สามารถสั่งซื้อผ่านทางโทรศัพท์และ Line Add และ เพจเฟสบุ๊ค <a href="https://www.facebook.com/tyrepacthailand/" target="_blank" style="text-decoration:none;">Tyrepac Thailand</a> </p>
                    </div>
                  </div>
                </b-col>
              </b-col>
              <b-col>
                  <div style="background-color: white;color: black;margin: 10px;margin-bottom: 20px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                    <br>
                    <div style="margin: 15px;">
                      <div class="headers" style="text-align: left;margin: 15px;">
                        หากยางที่ฉันต้องการไม่มีในสต๊อก ฉันยังสามารถสั่งซื้อรุ่นนั้นได้หรือไม่?
                      </div>
                      <p>ติดต่อสายด่วนของเรา และเราให้คำแนะนำในการประมาณความพร้อมในการให้บริการยาง คุณสามารถส่งอีเมลถึงเราที่ info@tyrepac.co.th และเราจะติดต่อกลับคุณ</p>
                    </div>
                  </div>
                  <div style="background-color: white;color: black;margin: 10px;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                    <br>
                    <div style="margin: 15px;">
                      <div class="headers" style="text-align: left;margin: 15px;">
                        สามารถขับรถไปยังสถานที่ติดตั้งโดยตรงดังที่แสดงไว้ได้หรือไม่?
                        </div>
                        <p id="delivery">ไม่ ยางจะถูกส่งเมื่อได้รับการสั่งซื้อและการชำระเงินออนไลน์</p>
                    </div>
                  </div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </div>
        <div style="background-color: #f7f7f7;">
          <b-container>
            <b-row>
              <div>
                <br>
                <img src="https://tyrepac.co.th/wp-content/uploads/2019/12/icon-3lines.png" alt="">
                <br>
                <br>
              </div>
              <div style="font-weight: bold;font-size: 25px;">
                <div>
                  การจัดส่งและติดตั้ง
                </div>
                <div>
                  การเปลี่ยนแปลงการจัดส่ง
                </div>
              </div>
              <br>
              <div style="font-weight: bold;text-align: left;font-size: 25px;">การเปลี่ยนแปลงการจัดส่ง</div>
              <br>
              <b-col>
                <br>
                <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                  <br>
                  <div style="margin: 15px;">
                    <div class="headers">
                      ฉันสามารถเปลี่ยนแปลงคำสั่งซื้อหลังจากการชำระเงินแล้วได้หรือไม่
                    </div>
                    <div>
                      หากต้องการเปลี่ยนแปลงใดๆในการสั่งซื้อ คุณสามารถแจ้งได้ก่อนที่จะมีการจัดส่งสินค้า มิเช่นนั้นจะมีการคิดค่าขนส่ง กรุณาติดต่อสายด่วนบริการลูกค้าของเรา และเราจะดำเนินการตามคำขอของคุณ หรือเขียนอีเมลล์ส่งมาที่ info@tyrepac.co.th
                    </div>
                  </div>
                </div>
                <br>
                <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                  <br>
                  <div style="margin: 15px;">
                    <div class="headers">
                      ฉันสามารถเข้ารับการติดตั้งยางได้เร็วที่สุดเมื่อไหร่?
                    </div>
                    <div>
                      ทำการจัดส่งภายใน 3-5 วันทำการนับจากวันที่ทำการชำระเงิน หากต้องการติดตั้งแบบเร่งด่วน กรุณาแจ้งศูนย์บริการลูกค้าของเราเพื่อทำการนัดหมาย
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col>
                <br>
                <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                  <br>
                  <div style="margin: 15px;">
                    <div class="headers">ฉันสามารถเปลี่ยนศูนย์บริการติดตั้งและเวลาได้หรือไม่</div>
                    <div>
                      ได้ หากยางที่จัดเตรียมไว้ยังไม่ถูกส่ง มิเช่นนั้นจะมีการคิดค่าขนส่ง
                    </div>
                  </div>
                </div>
                <br>
                <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 200px;text-align: left;">
                  <br>
                  <div id="aftersales" style="margin: 15px;">
                    <div class="headers">ฉันสามารถติดตั้งยางวันเดียวกับวันที่สั่งซื้อได้หรือไม่?</div>
                    <div>วันติดตั้งจะนับจากวันที่คุณทำการสั่งซื้อ 3 วันทำการ หากต้องการติดตั้งแบบเร่งด่วน กรุณาติดต่อสายด่วนบริการลูกค้าเพื่อนัดหมาย</div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </div>
        <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 150px;" >
          <b-container>
            <b-row>
              <b-col>
                <div>
                  <div>
                    <br>
                    <img src="https://tyrepac.co.th/wp-content/uploads/2019/12/icon-3lines.png" alt="">
                  </div>
                  <br>
                  <div class="headers">
                    <div>
                      บริการหลังการขาย
                    </div>
                    <div style="text-align: left;">
                      การยกเลิกการสั่งซื้อ
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div style="background-color: #f7f7f7;color: black;text-align: left;">
          <b-container>
            <b-row>
              <b-col>
                <br>
                <div style="margin: 40px;">
                  <div class="headers">นโยบายการยกเลิกการสั่งซื้อของทางบริษัทเป็นอย่างไร?</div>
                  <p>การยกเลิกล่วงหน้าก่อนการจัดส่งสามารถทำได้ จะมีการคิดค่าขนส่งสำหรับการยกเลิกหากมีการจัดส่งยางไปแล้ว กรุณาตรวจสอบข้อกำหนดและเงื่อนไขการขายของเรา</p>
                </div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </div>
        <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 150px;">
          <b-container>
            <br>
            <b-row>
              <b-col>
                <div class="headers" style="text-align: left;">นโยบายการคืนสินค้า</div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </div>
        <div style="background-color: #f7f7f7;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 150px;">
          <b-container>
            <br>
            <b-row>
              <b-col>
                <div style="text-align: left;">
                  <div class="headers">
                    ฉันสามารถยกเลิกการสั่งซื้อสินค้าของฉันได้หรือไม่?
                  </div>
                  <p>
                    คุณสามารถยกเลิกการสั่งซื้อได้ แต่จะมีการคิดค่าขนส่งสำหรับกรณีทีสินค้ามีการจัดส่งออกไปยังศูนย์รับบริการ
                  </p>
                </div>
              </b-col>
              <b-col>
                <div style="text-align: left;">
                  <div class="headers">
                    ฉันสามารถติดตั้งยางวันเดียวกับวันที่สั่งซื้อได้หรือไม่?
                  </div>
                  <p>
                    วันติดตั้งจะนับจากวันที่คุณทำการสั่งซื้อ 3 วันทำการ หากต้องการติดตั้งแบบเร่งด่วน กรุณาติดต่อสายด่วนบริการลูกค้าของเราเพื่อทำการนัดหมาย
                  </p>
                </div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </div>
        <div style="background-color: white;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;height: 150px;">
          <b-container>
            <br>
            <b-row>
              <b-col>
                <div class="headers" style="text-align: left;">นโยบายการคืนสินค้า</div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </div>
        <div style="background-color: #f7f7f7;color: black;box-shadow: 5px 10px 18px #888888;border-radius: 5px;text-align: left;">
          <b-container>
            <br>
            <br>
            <b-row>
              <b-col>
                <div class="headers">
                  บริษัทมีการรับประกันสินค้าสำหรับยางที่จำหน่ายหรือไม่?
                </div>
                <p>
                  ยางรถยนต์ทุกเส้นที่ทางไทร์แพคขายมีการรับประกันสินค้าจากทางผู้ผลิตเป็นเวลา 4 ปี ซึ่งยางทุกเส้นถูกรับประกันว่าเป็นยางใหม่ ซึ่งมีข้อจำกัดการรับประกันทั่วไปบางอย่าง:
                </p>
                <ul>
                  <li>ยางได้รับความเสียหายจากสิ่งกีดขวางบนถนน ไฟ อุบัติเหตุ การกัดกร่อน หรือภัยธรรมชาติอื่นๆ</li>
                  <li>ยางที่ชำรุดสึกหรอ</li>
                  <li>การใช้ยางผิด เช่น บนขอบถนน วิ่งบนวัตถุแปลกปลอม และหลุมบนพื้นถนน</li>
                  <li>ยางที่ชำรุดจากการติดตั้งยางล้อรถที่ไม่เหมาะสมและการเติมลมยางที่มากเกินไป ขอบยางที่ไม่สมบูรณ์ ความประมาท การแก้ไข หรือการซ่อม</li>
                  <li>การรับประกันสิ้นสุดเมื่อความลึกของหน้ายางอยู่ที่ 1.6 มิลลิเมตร</li>
                  <li>ใช้ในกีฬาแข่งรถเร็ว หรือการใช้กรณีพิเศษ</li>
                </ul>
                <div class="headers">
                  เงื่อนไขการรับประกัน
                </div>
                <ul style="list-style-type: value;">
                  <li>บริษัทรับประกันสินค้าจากความผิดพลาดในการผลิต 4 ปี หรือ 50,000 กม. (นับจากวันที่ออกใบเสร็จรับเงิน)</li>
                  <li>บริษัทผู้ผลิตจะเป็นผู้ตรวจวิเคราะห์สินค้าที่มีการส่งเคลม</li>
                  <li>ลูกค้าจะต้องซื้อสินค้าเพื่อใช้ระหว่างรอผลการตรวจสอบ โดยระยะเวลาในการตรวจสอบขึ้นอยู่กับทางบริษัทผู้ผลิต (ประมาณ 6-10 สัปดาห์)</li>
                  <li>สินค้าที่ได้รับการพิจารณาว่าผิดพลาดจากการผลิต บริษัทฯ จะคืนเงินค่าสินค้าตามเปอร์เซ็นต์การใช้งานที่เหลือ</li>
                  <li>การรับประกันสินค้าไม่ครอบคลุมถึง อุบัติเหตุ การบาดเจ็บ ความเสียหายต่างๆ ที่เกิดขึ้น</li>
                  <li>ผลการพิจารณาสินค้าที่มีการส่งเคลมถือเป็นสิทธิ์ขาดของตัวแทนจำหน่าย/ผู้ผลิตสินค้า ยี่ห้อนั้นๆ</li>
                  <li>กรุณาเก็บใบเสร็จหรือใบยืนยันคำสั่งซื้อ เพื่อใช้ประกอบในการเคลมสินค้า</li>
                </ul>
                <p>พึงตระหนักไว้ว่าการติดตั้งยางล้อรถที่ไม่เหมาะสมและการเติมลมยางที่มากเกินไปอาจก่อความเสียหายต่อยางและล้อได้และอาจทำให้ระเบิดก่อให้เกิดความเสียหายร้ายแรงถึงขั้นเสียชีวิต info@tyrepac.co.th</p>
              </b-col>
            </b-row>
            <br>
            <br>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detail: [{
        name: 'Tyre brand name'
      }, {
        name: 'Pattern or model code'
      }, {
        name: 'Tyre size'
      }, {
        name: 'Service description (Load index & Speed symbol)'
      }, {
        name: 'ECE or EEC type approval number**'
      }, {
        name: 'ECE noise approval'
      }, {
        name: 'North American recall code'
      }, {
        name: 'Date of manufacture code'
      }, {
        name: 'UTQG quality rating'
      }, {
        name: 'Maximum permitted load (USA)'
      }, {
        name: 'Maximum permitted inflation pressure (USA)'
      }, {
        name: 'Denotes tubeless construction'
      }, {
        name: 'Safety warning'
      }, {
        name: 'Direction of rotation (Directional or Composite tyres)'
      }, {
        name: 'Rim fitment instruction (Asymmetrical or Composite tyres)'
      }, {
        name: 'Denotes extra load tyre construction'
      }, {
        name: 'Denotes reinforced tyre construction'
      }, {
        name: 'Position of tread wear indicators.'
      }],
      items: [
        { speed: 'S', Category: '180 km/h ( 112 mph )' },
        { speed: 'T', Category: '190 km/h ( 118 mph )' },
        { speed: 'U', Category: '200 km/h ( 124 mph )' },
        { speed: 'H', Category: '210 km/h ( 130 mph )' },
        { speed: 'V', Category: '240 km/h ( 149 mph )' },
        { speed: '*W', Category: '270 km/h ( 168 mph )' },
        { speed: '*Y', Category: '300 km/h ( 186 mph )' }
      ],
      items2: [
        { รหัส: 60, กิโลกรัม: 250 },
        { รหัส: 61, กิโลกรัม: 257 },
        { รหัส: 62, กิโลกรัม: 265 },
        { รหัส: 63, กิโลกรัม: 272 },
        { รหัส: 64, กิโลกรัม: 280 },
        { รหัส: 65, กิโลกรัม: 290 },
        { รหัส: 66, กิโลกรัม: 300 },
        { รหัส: 67, กิโลกรัม: 307 },
        { รหัส: 68, กิโลกรัม: 315 },
        { รหัส: 69, กิโลกรัม: 325 },
        { รหัส: 70, กิโลกรัม: 335 },
        { รหัส: 71, กิโลกรัม: 345 },
        { รหัส: 72, กิโลกรัม: 355 },
        { รหัส: 73, กิโลกรัม: 365 },
        { รหัส: 74, กิโลกรัม: 375 },
        { รหัส: 75, กิโลกรัม: 387 },
        { รหัส: 76, กิโลกรัม: 400 },
        { รหัส: 77, กิโลกรัม: 412 },
        { รหัส: 78, กิโลกรัม: 425 },
        { รหัส: 79, กิโลกรัม: 437 },
        { รหัส: 80, กิโลกรัม: 450 },
        { รหัส: 81, กิโลกรัม: 462 },
        { รหัส: 82, กิโลกรัม: 475 },
        { รหัส: 83, กิโลกรัม: 487 },
        { รหัส: 84, กิโลกรัม: 500 },
        { รหัส: 85, กิโลกรัม: 515 },
        { รหัส: 86, กิโลกรัม: 530 },
        { รหัส: 87, กิโลกรัม: 545 },
        { รหัส: 88, กิโลกรัม: 560 },
        { รหัส: 89, กิโลกรัม: 580 },
        { รหัส: 90, กิโลกรัม: 600 },
        { รหัส: 91, กิโลกรัม: 615 },
        { รหัส: 92, กิโลกรัม: 630 },
        { รหัส: 93, กิโลกรัม: 650 },
        { รหัส: 94, กิโลกรัม: 670 },
        { รหัส: 95, กิโลกรัม: 690 },
        { รหัส: 96, กิโลกรัม: 710 },
        { รหัส: 97, กิโลกรัม: 730 },
        { รหัส: 98, กิโลกรัม: 750 },
        { รหัส: 99, กิโลกรัม: 775 },
        { รหัส: 100, กิโลกรัม: 800 },
        { รหัส: 101, กิโลกรัม: 825 },
        { รหัส: 102, กิโลกรัม: 850 },
        { รหัส: 103, กิโลกรัม: 875 },
        { รหัส: 104, กิโลกรัม: 900 },
        { รหัส: 105, กิโลกรัม: 925 },
        { รหัส: 106, กิโลกรัม: 950 },
        { รหัส: 107, กิโลกรัม: 975 },
        { รหัส: 108, กิโลกรัม: 1000 },
        { รหัส: 109, กิโลกรัม: 1030 },
        { รหัส: 110, กิโลกรัม: 1060 },
        { รหัส: 111, กิโลกรัม: 1090 },
        { รหัส: 112, กิโลกรัม: 1120 },
        { รหัส: 113, กิโลกรัม: 1150 },
        { รหัส: 114, กิโลกรัม: 1180 },
        { รหัส: 115, กิโลกรัม: 1215 },
        { รหัส: 116, กิโลกรัม: 1250 },
        { รหัส: 117, กิโลกรัม: 1285 },
        { รหัส: 118, กิโลกรัม: 1320 },
        { รหัส: 119, กิโลกรัม: 1360 }
      ]
    }
  },
  metaInfo: {
    title: 'คำถามที่พบบ่อย',
    titleTemplate: "%s - Tyrepac - Asia's First Tyre Portal"
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #005099;
}
a:hover {
  color: whitesmoke;
}
.headers {
font-weight: bold;
font-size: 20px;
}

</style>
