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
const map = load('components/graphs/durhambgs2-map/mapcartogram')

// Menu and tooltip stuff
import {
  QSelect,
  QLayout
} from 'quasar'

const tooltip = load('mixins/tooltip')

// Data stuff
const PROPSALESCOMPASS_DATA_PATH = 'http://127.0.0.1:8000/api/propsales/?format=json'

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

    d3.json(PROPSALESCOMPASS_DATA_PATH, function (data) {
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
      select: {label: 'Price Income Ratio for Single Family Homes', value: 'pir'},
      options: [
        {label: 'Price Income Ratio for Single Family Homes', value: 'pir'},
        {label: 'Mean Sale Price for Single Family Homes', value: 'meansp'},
        {label: 'Min Sale Price for Single Family Homes', value: 'minsp'},
        {label: 'Max Sale Price for Single Family Homes', value: 'maxsp'},
        {label: 'Median Sale Price for Single Family Homes', value: 'mediansp'},
        {label: 'Total Sales for Single Family Homes', value: 'totsp'},
        {label: 'Number of Single Family Homes Sold', value: 'nums'},
        {label: 'Median Home Income for Single Family Homes', value: 'mhi'}
      ],
      pushSelect: _.take(this.select)
    }
  },
  computed: {
    currentDurhambgDescription: function () {
      var desc
      if (this.select.value === 'pir') {
        desc = 'Price Income Ratio of Single Family Homes between 2013 and 2014: ' + this.currentDurhambg.pir
      }
      else if (this.select.value === 'ns') {
        desc = '# of Single Family Homes sold between 2013 and 2014: ' + this.currentDurhambg.ns
      }
      else if (this.select.value === 'meansp') {
        desc = 'Mean Sale Price of Single Family Homes between 2013 and 2014: $' + numberWithCommas(this.currentDurhambg.meansp)
      }
      else if (this.select.value === 'minsp') {
        desc = 'Min Sale Price of Single Family Homes between 2013 and 2014: $' + numberWithCommas(this.currentDurhambg.minsp)
      }
      else if (this.select.value === 'maxsp') {
        desc = 'Max Sale Price of Single Family Homes between 2013 and 2014: $' + numberWithCommas(this.currentDurhambg.maxsp)
      }
      else if (this.select.value === 'mediansp') {
        desc = 'Median Sale Price of Single Family Homes between 2013 and 2014: $' + numberWithCommas(this.currentDurhambg.mediansp)
      }
      else if (this.select.value === 'totsp') {
        desc = 'Total sales of Single Family Homes between 2013 and 2014: $' + numberWithCommas(this.currentDurhambg.totsp)
      }
      else if (this.select.value === 'nums') {
        desc = 'Number of Single Family Homes Sold between 2013 and 2014: ' + numberWithCommas(this.currentDurhambg.nums)
      }
      else if (this.select.value === 'mhi') {
        desc = 'Median Home Income of Single Family Homes between 2013 and 2014: $' + numberWithCommas(this.currentDurhambg.mhi)
      }
      return desc
    },
    currentDurhambgTitle: function () {
      return 'GEOID: ' + this.currentDurhambg.id
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
        this.pushSelect.push(this.select.value)
      }
      else if (this.pushSelect.length === 1) {
        this.pushSelect.splice(0, 1)
        this.pushSelect.push(this.select.value)
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