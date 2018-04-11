<!--

Links:
  Events: https://vuejs.org/v2/guide/events.html
  Computed properties: https://vuejs.org/v2/guide/computed.html

Data:
  http://www.nconemap.com//

-->
<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    v-bind:left-class="{'bg-grey-2': true}"
  >
    <h6><center>{{ $route.name }}</center></h6>

    <div class='holder'>
      <div class='mapHolder'>
        <durham-map v-bind:propval='pushSelect'
          v-on:durhambgSelected='onDurhambgSelected'
          v-on:durhambgDeselected='onDurhambgDeselected'
        />
      </div>
      <tooltip
        v-if='currentDurhambg'
        v-bind:title='currentDurhambgTitle'
        v-bind:description='currentDurhambgDescription'
      />
      <center>
        <q-select 
          color='black'
          background='grey'
          frame-color='green'
          separator
          v-model='select.value'
          v-bind:options=options
          v-on:input='newProp'
        />
      </center>
    </div>
  </q-layout>
</template>

<script>
function load (component) {
  return () => import(`src/${component}.vue`)
}

import { routes } from 'router/graphs'

// d3 and map stuff
const d3 = require('d3')
const map = load('components/graphs/durhambgs9-map/mapcartogram')

// Menu and tooltip stuff
import {
  QSelect,
  QLayout
} from 'quasar'

const tooltip = load('mixins/tooltip')

// Data stuff
const ACSRACE_BGS_16_DATA_PATH = 'http://127.0.0.1:8000/api/acsrace_bgs_16/?format=json'

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

var _ = require('lodash')

export default {
  components: {
    durhamMap: map,
    tooltip: tooltip,
    QSelect,
    QLayout
  },
  created: function () {
    var that = this

    this.durhambgsData = {}

    d3.json(ACSRACE_BGS_16_DATA_PATH, function (data) {
      data.map(function (d) {
        that.propdata = d[that.select.value].split(',').join('')
        d.value = +that.propdata
        that.durhambgsData[d.id] = d
        return d
      })
    })
  },
  data: function () {
    return {
      items: routes,
      durhambgsData: undefined,
      propdata: undefined,
      currentDurhambg: undefined,
      select: {label: 'Population in 2016', value: 'pop_16', type: 'bgs'},
      options: [
        {label: 'Population in 2016', value: 'pop_16', type: 'bgs'},
        {label: 'Percent White Non-Hispanic in 2016', value: 'ptwhnl_16', type: 'bgs'},
        {label: 'Percent Black Non-Hispanic in 2016', value: 'ptblknl_16', type: 'bgs'},
        {label: 'Percent Native Non-Hispanic in 2016', value: 'ptnanl_16', type: 'bgs'},
        {label: 'Percent Asian Non-Hispanic in 2016', value: 'ptasnl_16', type: 'bgs'},
        {label: 'Percent Pacific Non-Hispanic in 2016', value: 'ptpanl_16', type: 'bgs'},
        {label: 'Percent Other Non-Hispanic in 2016', value: 'ptothnl_16', type: 'bgs'},
        {label: 'Percent 2 or More Races Non-Hispanic in 2016', value: 'pt2mnl_16', type: 'bgs'},
        {label: 'Percent Hispanic in 2016', value: 'ptlat_16', type: 'bgs'}
      ],
      pushSelect: _.take(this.select)
    }
  },
  computed: {
    currentDurhambgDescription: function () {
      var desc
      if (this.select.value === 'pop_16' && this.select.type === 'bgs') {
        desc = 'Population: ' + numberWithCommas(this.currentDurhambg.pop_16)
      }
      else if (this.select.value === 'ptwhnl_16' && this.select.type === 'bgs') {
        desc = 'Percent White: ' + this.currentDurhambg.ptwhnl_16 + '%'
      }
      else if (this.select.value === 'ptblknl_16' && this.select.type === 'bgs') {
        desc = 'Percent Black: ' + this.currentDurhambg.ptblknl_16 + '%'
      }
      else if (this.select.value === 'ptnanl_16' && this.select.type === 'bgs') {
        desc = 'Percent Native: ' + this.currentDurhambg.ptnanl_16 + '%'
      }
      else if (this.select.value === 'ptasnl_16' && this.select.type === 'bgs') {
        desc = 'Percent Asian: ' + this.currentDurhambg.ptasnl_16 + '%'
      }
      else if (this.select.value === 'ptpanl_16' && this.select.type === 'bgs') {
        desc = 'Percent Pacific: ' + this.currentDurhambg.ptpanl_16 + '%'
      }
      else if (this.select.value === 'ptothnl_16' && this.select.type === 'bgs') {
        desc = 'Percent Other: ' + this.currentDurhambg.ptothnl_16 + '%'
      }
      else if (this.select.value === 'pt2mnl_16' && this.select.type === 'bgs') {
        desc = 'Percent 2 or More: ' + this.currentDurhambg.pt2mnl_16 + '%'
      }
      else if (this.select.value === 'ptlat_16' && this.select.type === 'bgs') {
        desc = 'Percent Hispanic: ' + this.currentDurhambg.ptlat_16 + '%'
      }
      return desc
    },
    currentDurhambgTitle: function () {
      if (this.select.type === 'bgs') {
        return 'GEOID: ' + this.currentDurhambg.id
      }
    }
  },
  methods: {
    onDurhambgSelected: function (durhambgGeoID) {
      this.currentDurhambg = this.durhambgsData[durhambgGeoID]
    },
    onDurhambgDeselected: function (durhambgGeoID) {
      this.currentDurhambg = undefined
    },
    newProp: function () {
      if (this.pushSelect.length === 0) {
        this.pushSelect.push(this.select)
      }
      else if (this.pushSelect.length === 1) {
        this.pushSelect.splice(0, 1)
        this.pushSelect.push(this.select)
      }
    }
  }
}
</script>

<style scoped>
.holder {
  position: relative;
  padding-top: 50px;
  height: 700px;
  width: 580px;
  margin: auto;
}
.mapHolder {
  position: absolute;
  margin: auto;
}
@media (min-width: 600px) {
  .q-select {
    width: 500px;
    bottom: 60px;
  }
}
@media (max-width: 599px) {
  .q-select {
    width: 300px;
    bottom: 60px;
  }
}
</style>
