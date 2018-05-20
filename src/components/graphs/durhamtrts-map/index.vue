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
      <center>
      <select v-model="selectgroup.value">
        <option 
          v-for="option in groupOptions" 
          v-bind:value="option.value">
          {{option.label}}
        </option>        
      </select>
      <br/>
      <select v-model="selectvariable.value" v-on:input="newVar">
        <option
          v-for="option in varOptions"
          v-bind:value="option.value">
          {{option.label}}
        </option>
      </select>
      </center>
      <div class='mapHolder'>
        <durham-map v-bind:propval='pushSelect'
          v-on:durhamtrSelected='onDurhamtrSelected'
          v-on:durhamtrDeselected='onDurhamtrDeselected'
        />
      </div>
      <tooltip
        v-if='currentDurhamtr'
        v-bind:title='currentDurhamtrTitle'
        v-bind:description='currentDurhamtrDescription'
      />
    </div>
  </q-layout>
</template>

<script>
function load (component) {
  return () => import(`src/${component}.vue`)
}

import { routes } from 'router/graphs'
import setOptions from './ltdbacs_trts_vuevarmenuoptions'
import { groupOptions } from './ltdbacs_trts_vuegroupoptions'
import popupValues from './ltdbacs_trts_vuemappopup'

// d3 and map stuff
const d3 = require('d3')
const map = load('components/graphs/durhamtrts-map/mapcartogram')
const tooltip = load('mixins/tooltip')

// Data stuff
const LTDBACS_DATA_PATH = 'http://127.0.0.1:8000/api/ltdbacs_trts_7016/?format=json'
var _ = require('lodash')

import {
  QLayout
} from 'quasar'

export default {
  components: {
    durhamMap: map,
    tooltip: tooltip,
    QLayout
  },
  created: function () {
    var that = this

    this.durhamtrtsData = {}

    d3.json(LTDBACS_DATA_PATH, function (data) {
      data.map(function (d) {
        that.vardata = d[that.selectvariable.value]
        d.value = +that.vardata
        that.durhamtrtsData[d.id] = d
        return d
      })
    })
  },
  data: function () {
    return {
      items: routes,
      durhamtrtsData: undefined,
      vardata: undefined,
      currentDurhamtr: undefined,
      groupOptions: groupOptions,
      selectgroup: {label: 'Durhams Demographic Numbers', value: 'democount'},
      selectvariable: {label: 'Total Population in 1970', value: 'pop70'},
      pushSelect: _.take(this.selectvariable)
    }
  },
  computed: {
    varOptions: setOptions,
    currentDurhamtrDescription: popupValues,
    currentDurhamtrTitle: function () {
      return 'GEOID: ' + this.currentDurhamtr.id
    }
  },
  methods: {
    onDurhamtrSelected: function (durhamtrGeoID) {
      this.currentDurhamtr = this.durhamtrtsData[durhamtrGeoID]
    },
    onDurhamtrDeselected: function (durhamtrGeoID) {
      this.currentDurhamtr = undefined
    },
    newVar: function () {
      if (this.pushSelect.length === 0) {
        this.pushSelect.push(this.selectvariable)
      }
      else if (this.pushSelect.length === 1) {
        this.pushSelect.splice(0, 1)
        this.pushSelect.push(this.selectvariable)
      }
    }
  }
}
</script>

<style scoped>
.holder {
  position: relative;
  padding-top: 0px;
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
