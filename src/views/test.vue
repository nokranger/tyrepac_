<template>
  <div style="margin-top: 160px">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>
      <b-container>
        <div style="font-size: 25; font-weight: bold">TEST</div>
        <div>
          กว้าง
          <b-form-select
            style="width: 100%; font-size: 20px; color: gray; height: 35px"
            v-model="selectedwidth"
            :options="optionswidth"
            name=""
            id=""
            v-on:change="filterwidth(selectedwidth)"
          >
          </b-form-select>
          <br />
        </div>
        <div>
          กว้าง
          <b-form-select
            style="width: 100%; font-size: 20px; color: gray; height: 35px"
            v-model="selectedserie"
            :options="optionsserie"
            name=""
            id=""
            v-on:change="filterserie(selectedserie)"
          >
          </b-form-select>
          <br />
        </div>
        <br>
        <br>
        <br>
        <div v-for="(filter, index) in filterGet" :Key="index">
          {{index}} : => - {{filter.prodId}} - {{filter.name}}
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      products: '',
      filterGet: '',
      filterheight: '',
      selectedwidth: null,
      selectedserie: null,
      selecteddiameter: null,
      selectedtyre: null,
      optionswidth: [
        { value: null, text: '--ความกว้าง--' },
        { value: '155', text: '155' },
        { value: '165', text: '165' },
        { value: '175', text: '175' },
        { value: '185', text: '185' },
        { value: '195', text: '195' },
        { value: '205', text: '205' },
        { value: '206', text: '206' },
        { value: '215', text: '215' },
        { value: '225', text: '225' },
        { value: '235', text: '235' },
        { value: '245', text: '245' },
        { value: '255', text: '255' },
        { value: '265', text: '265' },
        { value: '275', text: '275' },
        { value: '285', text: '285' },
        { value: '295', text: '295' },
        { value: '305', text: '305' },
        { value: '315', text: '315' },
        { value: '325', text: '325' }
      ],
      optionsserie: [
        { value: null, text: '--ซีรี่ย์ยาง--' },
        { value: '0', text: '0' },
        { value: '25', text: '25' },
        { value: '30', text: '30' },
        { value: '35', text: '35' },
        { value: '40', text: '40' },
        { value: '45', text: '45' },
        { value: '50', text: '50' },
        { value: '55', text: '55' },
        { value: '60', text: '60' },
        { value: '65', text: '65' },
        { value: '70', text: '70' },
        { value: '75', text: '75' },
        { value: '85', text: '85' }
      ],
      optionsdiameter: [
        { value: null, text: '--ขนาดวงล้อ--' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
        { value: '21', text: '21' },
        { value: '22', text: '22' },
        { value: '24', text: '24' }
      ],
      optionstyre: [
        { value: null, text: '--รูปแบบยาง--' },
        { value: 'ยาง SUV', text: 'ยาง SUV' },
        { value: 'ยางขับขี่ทั่วไป', text: 'ยางขับขี่ทั่วไป' },
        { value: 'ยางขับขี่นุ่ม เงียบ', text: 'ยางขับขี่นุ่ม เงียบ' },
        { value: 'ยางประสิทธิภาพสูง', text: 'ยางประสิทธิภาพสูง' },
        { value: 'ยางประหยัดเชื้อเพลิง', text: 'ยางประหยัดเชื้อเพลิง' },
        { value: 'ยางรถกระบะ', text: 'ยางรถกระบะ' },
        { value: 'ยางรถเอนกประสงค์', text: 'ยางรถเอนกประสงค์' },
        { value: 'ยางออฟโรด', text: 'ยางออฟโรด' }
      ]
    }
  },
  mounted () {
    localStorage.removeItem('filter')
  },
  methods: {
    async filterwidth (value) {
      console.log('filterwidth')
      console.log('filterwidth')
      if (JSON.parse(localStorage.getItem('filter')) === null) {
        const filter = {
          width: value,
          height: '',
          diameter: '',
          tyre: '',
          price: {
            min: '',
            max: ''
          }
        }
        localStorage.setItem('filter', JSON.stringify(filter))
      } else {
        const filters = await JSON.parse(localStorage.getItem('filter'))
        const filter = {
          width: value,
          height: filters.height,
          diameter: filters.diameter,
          tyre: filters.tyre,
          price: {
            min: filters.price.min,
            max: filters.price.max
          }
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        if (value !== null) {
          this.data = {
            width: value
          }
          await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.data).then(res => {
            console.log('Filtertyre: ', res.data.data.products)
            const data = res.data.data.products
            // this.filterGet = res.data.data.products
            localStorage.setItem('data', JSON.stringify(data))
          })
          this.filterGet = await JSON.parse(localStorage.getItem('data'))
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.width === parseInt(value)
          })
          console.log('width', this.filterGet)
        } else {
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.width
          })
        }
        if (filters.width !== null) {
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.height === parseInt(filters.width)
          })
        } else {
          console.log('testdone')
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.height
          })
        }
      }
    },
    async filterserie (value) {
      console.log('tyre')
      this.data = {
        height: value
      }
      if (value !== null) {
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.data).then(res => {
          console.log('Filtertyre: ', res)
          this.filterGet = res.data.data.products
        })
      }
      if (JSON.parse(localStorage.getItem('filter')) === null) {
        console.log('filterNull')
        const filter = {
          width: '',
          height: value,
          diameter: '',
          tyre: '',
          price: {
            min: '',
            max: ''
          }
        }
        localStorage.setItem('filter', JSON.stringify(filter))
      } else {
        const filters = await JSON.parse(localStorage.getItem('filter'))
        console.log('filterNOTNULL', filters.width)
        const filter = {
          width: filters.width,
          height: value,
          diameter: filters.diameter,
          tyre: filters.tyre,
          price: {
            min: filters.price.min,
            max: filters.price.max
          }
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        if (filters.width !== null) {
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.width === parseInt(filters.width)
          })
        } else {
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.width
          })
        }
        if (value !== null) {
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.height === parseInt(value)
          })
        } else {
          console.log('testdone')
          this.filterGet = await this.filterGet.filter((post, index) => {
            return post.height
          })
        }
        console.log('filterh', this.filterGet)
      }
    }
  }
}
</script>
<style scoped>
</style>
