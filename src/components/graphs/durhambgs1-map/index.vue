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
const map = load('components/graphs/durhambgs1-map/mapcartogram')

// Menu and tooltip stuff
import {
  QSelect,
  QLayout
} from 'quasar'

const tooltip = load('mixins/tooltip')

// Data stuff
const SINGFAMHOUSE_DATA_PATH = 'http://127.0.0.1:8000/api/singfamhouse/?format=json'

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

    d3.json(SINGFAMHOUSE_DATA_PATH, function (data) {
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
      select: {label: 'Percent of Non-Owner Occupied Single Family Homes by BlockGroup', value: 'prc_sfno', type: 'bgs'},
      options: [
        {label: 'Percent of Non-Owner Occupied Single Family Homes by BlockGroup', value: 'prc_sfno', type: 'bgs'},
        {label: 'Mean Value of Non-Owner Occupied Single Family Homes by BlockGroup', value: 'mean_sfno', type: 'bgs'},
        {label: 'Total Value of Non-Owner Occupied Single Family Homes by BlockGroup', value: 'tot_sfno', type: 'bgs'},
        {label: 'Number of Non-Owner Occupied Single Family Homes by BlockGroup', value: 'num_sfno', type: 'bgs'},
        {label: 'Mean Value of Owner Occupied Single Family Homes by BlockGroup', value: 'mean_sfoo', type: 'bgs'},
        {label: 'Total Value of Owner Occupied Single Family Homes by BlockGroup', value: 'tot_sfoo', type: 'bgs'},
        {label: 'Number of Owner Occupied Single Family Homes by BlockGroup', value: 'num_sfoo', type: 'bgs'}
      ],
      pushSelect: _.take(this.select)
    }
  },
  computed: {
    currentDurhambgDescription: function () {
      var desc
      if (this.select.value === 'prc_sfno' && this.select.type === 'bgs') {
        desc = '% of Single Family Homes Not Occupied by Owner: ' + this.currentDurhambg.prc_sfno
      }
      else if (this.select.value === 'num_sfoo' && this.select.type === 'bgs') {
        desc = '# of Single Family Homes Occupied by Owner: ' + this.currentDurhambg.num_sfoo
      }
      else if (this.select.value === 'mean_sfno' && this.select.type === 'bgs') {
        desc = 'Mean Value of Single Family Homes not Occupied by Owner: $' + numberWithCommas(this.currentDurhambg.mean_sfno)
      }
      else if (this.select.value === 'tot_sfno' && this.select.type === 'bgs') {
        desc = 'Total Value of Single Family Homes not Occupied by Owner: $' + numberWithCommas(this.currentDurhambg.tot_sfno)
      }
      else if (this.select.value === 'num_sfno' && this.select.type === 'bgs') {
        desc = '# of Single Family Homes not Occupied by Owner: ' + this.currentDurhambg.num_sfno
      }
      else if (this.select.value === 'mean_sfoo' && this.select.type === 'bgs') {
        desc = 'Mean Value of Single Family Homes Occupied by Owner: $' + numberWithCommas(this.currentDurhambg.mean_sfoo)
      }
      else if (this.select.value === 'tot_sfoo' && this.select.type === 'bgs') {
        desc = 'Total Value of Single Family Homes Occupied by Owner: $' + numberWithCommas(this.currentDurhambg.tot_sfoo)
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