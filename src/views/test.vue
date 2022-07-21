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
          ซีรี่ย์ยาง
          <b-form-select
            style="width: 100%; font-size: 20px; color: gray; height: 35px"
            v-model="selectedserie"
            :options="optionsserie"
            name=""
            id=""
            v-on:change="filtersheight(selectedserie)"
          >
          </b-form-select>
          <br />
        </div>
        <div>
          Diameter
          <b-form-select
            style="width: 100%; font-size: 20px; color: gray; height: 35px"
            v-model="selecteddiameter"
            :options="optionsdiameter"
            name=""
            id=""
            v-on:change="filtersdiameter(selecteddiameter)"
          >
          </b-form-select>
          <br />
        </div>
        <div>
          type
          <b-form-select
            style="width: 100%; font-size: 20px; color: gray; height: 35px"
            v-model="selectedtype"
            :options="optionstype"
            name=""
            id=""
            v-on:change="filterstype(selectedtype)"
          >
          </b-form-select>
          <br />
        </div>
        <div>
          <b-button v-on:click="filterminmax(16000, 20000)">Click</b-button>
        </div>
        <div>
          <b-button v-on:click="filterbrand(1)">Click</b-button>
        </div>
        <br>
        <br>
        <br>
        <div v-for="(filter, index) in brand" :Key="index">
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
      brand: '',
      filterheight: '',
      selectedwidth: null,
      selectedserie: null,
      selecteddiameter: null,
      selectedtype: null,
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
      optionstype: [
        { value: null, text: '--รูปแบบยาง--' },
        { value: 'ยาง SUV ประสิทธิภาพสูง', text: 'ยาง SUV ประสิทธิภาพสูง' },
        { value: 'ยางขับขี่ทั่วไป', text: 'ยางขับขี่ทั่วไป' },
        { value: 'ยางขับขี่นุ่ม เงียบ', text: 'ยางขับขี่นุ่ม เงียบ' },
        { value: 'ยางประสิทธิภาพสูง', text: 'ยางประสิทธิภาพสูง' },
        { value: 'ยางประหยัดเชื้อเพลิง', text: 'ยางประหยัดเชื้อเพลิง' },
        { value: 'ยางรถกระบะ', text: 'ยางรถกระบะ' },
        { value: 'ยางรถเอนกประสงค์/SUV', text: 'ยางรถเอนกประสงค์/suv' },
        { value: 'ยางออฟโรด', text: 'ยางออฟโรด' }
      ]
    }
  },
  mounted () {
    localStorage.removeItem('filter')
  },
  methods: {
    async filter (width, height, diameter, type, min, max, brandId) {
      // console.log('getvalueFilter', width, height, diameter, type, min, max, brandId)
      if (width !== null || width !== '' || width !== 'null' || width !== undefined || width !== 'undefined') {
        this.width = {
          width: width
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.width).then(res => {
          this.brand = res.data.data.products
          // console.log('getwidth')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (height !== null || height !== '' || height !== 'null' || height !== undefined || height !== 'undefined') {
        this.height = {
          height: height
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.height).then(res => {
          this.brand = res.data.data.products
          // console.log('getheight')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (diameter !== null || diameter !== '' || diameter !== 'null' || diameter !== undefined || diameter !== 'undefined') {
        this.diameter = {
          diameter: diameter
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.diameter).then(res => {
          this.brand = res.data.data.products
          // console.log('getdiameter')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (type !== null || type !== '' || type !== 'null' || type !== undefined || type !== 'undefined') {
        this.type = {
          type: type
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.type).then(res => {
          this.brand = res.data.data.products
          // console.log('gettype')
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (min !== null || min !== '' || min !== 'null' || min !== undefined || min !== 'undefined') {
        this.range = {
          minPrice: min,
          maxPrice: max
        }
        await axios.post(process.env.VUE_APP_API_URL + '/productByFilter', this.range).then(res => {
          this.brand = res.data.data.products
          // console.log('gettype', this.brand)
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      } else if (brandId !== null || brandId !== '' || brandId !== 'null' || brandId !== undefined || brandId !== 'undefined') {
        await axios.get(process.env.VUE_APP_API_URL + '/product').then(res => {
          this.brand = res.data.data.products
          // console.log('gettypebrandId', this.brand)
          localStorage.setItem('data', JSON.stringify(this.brand))
        })
      }
      const filters = await JSON.parse(localStorage.getItem('filter'))
      if (filters.width === null || filters.width === '' || filters.width === 'null') {
      } else {
        // console.log('NOTNULLFILLTERWIDTH')
        const data = await JSON.parse(localStorage.getItem('data'))
        // console.log('NOTNULLFILLTERWIDTH2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        // console.log('NOTNULLFILLTERWIDTH3', filters)
        this.brand = await data.filter((post, index) => {
          return post.width === parseInt(filters.width)
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
      }
      if (filters.height === null || filters.height === '' || filters.height === 'null') {
      } else {
        // console.log('NOTNULLFILLTERHEIGHT')
        const data = await JSON.parse(localStorage.getItem('data'))
        // console.log('NOTNULLFILLTERHEIGHT2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        // console.log('NOTNULLFILLTERHEIGHT3', filters)
        this.brand = await data.filter((post, index) => {
          return post.height === parseInt(filters.height)
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
      }
      if (filters.diameter === null || filters.diameter === '' || filters.diameter === 'null') {
      } else {
        // console.log('NOTNULLFILLTERDIAMETER')
        const data = await JSON.parse(localStorage.getItem('data'))
        // console.log('NOTNULLFILLTERDIAMETER2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        // console.log('NOTNULLFILLTERDIAMETER3', filters)
        this.brand = await data.filter((post, index) => {
          return post.diameter === parseInt(filters.diameter)
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
      }
      if (filters.type === null || filters.type === '' || filters.type === 'null') {
      } else {
        // console.log('NOTNULLFILLTERtype')
        const data = await JSON.parse(localStorage.getItem('data'))
        // console.log('NOTNULLFILLTERtype2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        // console.log('NOTNULLFILLTERtype3', filters)
        this.brand = await data.filter((post, index) => {
          return post.type === filters.type
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
      }
      if (filters.price.min === null || filters.price.min === '' || filters.price.min === 'null') {
      } else {
        // console.log('NOTNULLFILLTERminmax')
        const data = await JSON.parse(localStorage.getItem('data'))
        // console.log('NOTNULLFILLTERminmax2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        // console.log('NOTNULLFILLTERminmax3', filters)
        this.brand = await data.filter((post, index) => {
          return post.regularPrice <= filters.price.max && post.regularPrice >= filters.price.min
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
      }
      if (filters.brandId === null || filters.brandId === '' || filters.brandId === 'null') {
      } else {
        // console.log('NOTNULLFILLTERbrandid')
        const data = await JSON.parse(localStorage.getItem('data'))
        // console.log('NOTNULLFILLTERbrandid2', data)
        const filters = await JSON.parse(localStorage.getItem('filter'))
        // console.log('NOTNULLFILLTERbrandid3', filters)
        this.brand = await data.filter((post, index) => {
          return post.brandId === filters.brandId.toString()
        })
        localStorage.setItem('data', JSON.stringify(this.brand))
      }
    },
    async filterwidth (value) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        // console.log('filterNullWidth')
        const filter = {
          width: value,
          height: '',
          diameter: '',
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(value, null, null, null, null, null, null)
      } else {
        // console.log('filterNotNullWidth')
        const filter = {
          width: value,
          height: filters.height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(value, null, null, null, null, null, null)
      }
    },
    async filtersheight (height) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        // console.log('filterNullWidth')
        const filter = {
          width: '',
          height: height,
          diameter: '',
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, height, null, null, null, null, null)
      } else {
        // console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, height, null, null, null, null, null)
      }
    },
    async filtersdiameter (diameter) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        // console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: diameter,
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, diameter, null, null, null, null)
      } else {
        // console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, diameter, null, null, null, null)
      }
    },
    async filterstype (type) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        // console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: '',
          type: type,
          price: {
            min: '',
            max: ''
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, type, null, null, null)
      } else {
        // console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: filters.diameter,
          type: type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, type, null, null, null)
      }
    },
    async filterminmax (min, max) {
      // console.log('minmax', min + max)
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        // console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: '',
          type: '',
          price: {
            min: min,
            max: max
          },
          brandId: ''
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, min, max, null)
      } else {
        // console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: min,
            max: max
          },
          brandId: filters.brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, min, max, null)
      }
    },
    async filterbrand (brandId) {
      const filters = JSON.parse(localStorage.getItem('filter'))
      if (filters === null || filters === '' || filters === 'null') {
        // console.log('filterNullWidth')
        const filter = {
          width: '',
          height: '',
          diameter: '',
          type: '',
          price: {
            min: '',
            max: ''
          },
          brandId: brandId
        }
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, null, null, brandId)
      } else {
        // console.log('filterNotNullWidth')
        const filter = {
          width: filters.width,
          height: filters.height,
          diameter: filters.diameter,
          type: filters.type,
          price: {
            min: filters.price.min,
            max: filters.price.max
          },
          brandId: brandId
        }
        // console.log('filterNotNullBrandID', filter)
        localStorage.setItem('filter', JSON.stringify(filter))
        await this.filter(null, null, null, null, null, null, brandId)
      }
    }
  }
}
</script>
<style scoped>
</style>
