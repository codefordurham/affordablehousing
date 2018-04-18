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
const map = load('components/graphs/durhambgs1317-map/mapcartogram')

// Menu and tooltip stuff
import {
  QSelect,
  QLayout
} from 'quasar'

const tooltip = load('mixins/tooltip')

// Data stuff
const DATA_PATH = 'http://127.0.0.1:8000/api/bgs1317/?format=json'

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

    d3.json(DATA_PATH, function (data) {
      data.map(function (d) {
        that.propdata = d[that.select.value]
        // .split(',').join('')
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
      select: {label: 'Price Income Ratio, between 2015 and 2017', value: 'pir1517', type: 'bgs'},
      options: [
        {label: 'Mean Sale Price, for Single Family Homes, between 2013 and 2014', value: 'meansp1314', type: 'bgs'},
        {label: 'Mean Sale Price, for Single Family Homes, between 2013 and 2014, Adjusted to 2017 Dollars', value: 'meansp1314a17', type: 'bgs'},
        {label: 'Minimum Sale Price, for Single Family Homes, between 2013 and 2014', value: 'minsp1314', type: 'bgs'},
        {label: 'Minimum Sale Price, for Single Family Homes, between 2013 and 2014, Adjusted to 2017 Dollars', value: 'minsp1314a17', type: 'bgs'},
        {label: 'Maximum Sale Price, for Single Family Homes, between 2013 and 2014', value: 'maxsp1314', type: 'bgs'},
        {label: 'Maximum Sale Price, for Single Family Homes, between 2013 and 2014, Adjusted to 2017 Dollars', value: 'maxsp1314a17', type: 'bgs'},
        {label: 'Median Sale Price, for Single Family Homes, between 2013 and 2014', value: 'mediansp1314', type: 'bgs'},
        {label: 'Median Sale Price, for Single Family Homes, between 2013 and 2014, Adjusted to 2017 Dollars', value: 'mediansp1314a17', type: 'bgs'},
        {label: 'Total Sale Price, for Single Family Homes, between 2013 and 2014', value: 'totsp1314', type: 'bgs'},
        {label: 'Total Sale Price, for Single Family Homes, between 2013 and 2014, Adjusted to 2017 Dollars', value: 'totsp1314a17', type: 'bgs'},
        {label: 'Number of Homes Sold, for Single Family Homes, between 2013 and 2014', value: 'nums1314', type: 'bgs'},
        {label: 'Median Houshold Income, between 2013 and 2014', value: 'mhi1314', type: 'bgs'},
        {label: 'Median Houshold Income, between 2013 and 2014, Adjusted to 2017 Dollars', value: 'mhi1314a17', type: 'bgs'},
        {label: 'Price Income Ratio, between 2013 and 2014', value: 'pir1314', type: 'bgs'},
        {label: 'Mean Value of Single Family Non-Owner Occupied Homes, on Oct. 5th 2017', value: 'mean_sfno100517', type: 'bgs'},
        {label: 'Total Value of Single Family Non-Owner Occupied Homes, on Oct. 5th 2017', value: 'tot_sfno100517', type: 'bgs'},
        {label: 'Number of Single Family Non-Owner Occupied Homes, on Oct. 5th 2017', value: 'num_sfno100517', type: 'bgs'},
        {label: 'Mean Value of Single Family Owner Occupied Homes, on Oct. 5th 2017', value: 'mean_sfoo100517', type: 'bgs'},
        {label: 'Total Value of Single Family Owner Occupied Homes, on Oct. 5th 2017', value: 'tot_sfoo100517', type: 'bgs'},
        {label: 'Number of Single Family Owner Occupied Homes, on Oct. 5th 2017', value: 'num_sfoo100517', type: 'bgs'},
        {label: 'Percent of Single Family Non-Owner Occupied Homes, on Oct. 5th 2017', value: 'prc_sfno100517', type: 'bgs'},
        {label: 'Total Population, in 2014', value: 'pop13', type: 'bgs'},
        {label: 'Total Population, in 2014', value: 'pop14', type: 'bgs'},
        {label: 'Percent White Non-Hispanic, in 2014', value: 'ptwhnl13', type: 'bgs'},
        {label: 'Percent White Non-Hispanic, in 2014', value: 'ptwhnl14', type: 'bgs'},
        {label: 'Percent Black Non-Hispanic, in 2014', value: 'ptblknl13', type: 'bgs'},
        {label: 'Percent Black Non-Hispanic, in 2014', value: 'ptblknl14', type: 'bgs'},
        {label: 'Percent Asian Non-Hispanic, in 2014', value: 'ptasnl13', type: 'bgs'},
        {label: 'Percent Asian Non-Hispanic, in 2014', value: 'ptasnl14', type: 'bgs'},
        {label: 'Percent Other Non-Hispanic, in 2014', value: 'ptothnl13', type: 'bgs'},
        {label: 'Percent Other Non-Hispanic, in 2014', value: 'ptothnl14', type: 'bgs'},
        {label: 'Percent Hispanic, in 2014', value: 'ptlat13', type: 'bgs'},
        {label: 'Percent Hispanic, in 2014', value: 'ptlat14', type: 'bgs'},
        {label: 'Mean Sale Price, for Single Family Homes, between 2015 and 2017', value: 'meansp1517', type: 'bgs'},
        {label: 'Mean Sale Price, for Single Family Homes, between 2015 and 2017, Adjusted to 2017 Dollars', value: 'meansp1517a17', type: 'bgs'},
        {label: 'Minimum Sale Price, for Single Family Homes, between 2015 and 2017', value: 'minsp1517', type: 'bgs'},
        {label: 'Minimum Sale Price, for Single Family Homes, between 2015 and 2017, Adjusted to 2017 Dollars', value: 'minsp1517a17', type: 'bgs'},
        {label: 'Maximum Sale Price, for Single Family Homes, between 2015 and 2017', value: 'maxsp1517', type: 'bgs'},
        {label: 'Maximum Sale Price, for Single Family Homes, between 2015 and 2017, Adjusted to 2017 Dollars', value: 'maxsp1517a17', type: 'bgs'},
        {label: 'Median Sale Price, for Single Family Homes, between 2015 and 2017', value: 'mediansp1517', type: 'bgs'},
        {label: 'Median Sale Price, for Single Family Homes, between 2015 and 2017, Adjusted to 2017 Dollars', value: 'mediansp1517a17', type: 'bgs'},
        {label: 'Total Sale Price, for Single Family Homes, between 2015 and 2017', value: 'totsp1517', type: 'bgs'},
        {label: 'Total Sale Price, for Single Family Homes, between 2015 and 2017, Adjusted to 2017 Dollars', value: 'totsp1517a17', type: 'bgs'},
        {label: 'Number of Homes Sold, for Single Family Homes, between 2015 and 2017', value: 'nums1517', type: 'bgs'},
        {label: 'Median Houshold Income, in 2017', value: 'mhi16', type: 'bgs'},
        {label: 'Median Houshold Income, in 2016, Adjusted to 2017 Dollars', value: 'mhi16a17', type: 'bgs'},
        {label: 'Price Income Ratio, between 2015 and 2017', value: 'pir1517', type: 'bgs'},
        {label: 'Median Gross Rent as a Percentage Of Household Income In The Past 12 Months, in 2016', value: 'mgr_phi16', type: 'bgs'},
        {label: 'Median Selected Monthly Owner Costs as a Percentage Of Household Income In The Past 12 Months, in 2016', value: 'mmoc_phi16', type: 'bgs'},
        {label: 'Mean Value of Single Family Non-Owner Occupied Homes, on Jan. 18th 2018', value: 'mean_sfno011818', type: 'bgs'},
        {label: 'Total Value of Single Family Non-Owner Occupied Homes, on Jan. 18th 2018', value: 'tot_sfno011818', type: 'bgs'},
        {label: 'Number of Single Family Non-Owner Occupied Homes, on Jan. 18th 2018', value: 'num_sfno011818', type: 'bgs'},
        {label: 'Mean Value of Single Family Owner Occupied Homes, on Jan. 18th 2018', value: 'mean_sfoo011818', type: 'bgs'},
        {label: 'Total Value of Single Family Owner Occupied Homes, on Jan. 18th 2018', value: 'tot_sfoo011818', type: 'bgs'},
        {label: 'Number of Single Family Owner Occupied Homes, on Jan. 18th 2018', value: 'num_sfoo011818', type: 'bgs'},
        {label: 'Percent of Single Family Non-Owner Occupied Homes, on Jan. 18th 2018', value: 'prc_sfno011818', type: 'bgs'},
        {label: 'Total Population, in 2016', value: 'pop16', type: 'bgs'},
        {label: 'Percent White Non-Hispanic, in 2016', value: 'ptwhnl16', type: 'bgs'},
        {label: 'Percent Black Non-Hispanic, in 2016', value: 'ptblknl16', type: 'bgs'},
        {label: 'Percent Native Non-Hispanic, in 2016', value: 'ptnanl16', type: 'bgs'},
        {label: 'Percent Asian Non-Hispanic, in 2016', value: 'ptasnl16', type: 'bgs'},
        {label: 'Percent Pacific Islanders and Hawaiian Non-Hispanic, in 2016', value: 'ptpanl16', type: 'bgs'},
        {label: 'Percent Other Non-Hispanic, in 2016', value: 'ptothnl16', type: 'bgs'},
        {label: 'Percent 2 or More Races Non-Hispanic, in 2016', value: 'pt2mnl16', type: 'bgs'},
        {label: 'Percent Hispanic, in 2016', value: 'ptlat16', type: 'bgs'}
      ],
      pushSelect: _.take(this.select)
    }
  },
  computed: {
    currentDurhambgDescription: function () {
      var desc
      if (this.select.value === 'meansp1314' && this.select.type === 'bgs') {
        desc = 'Mean Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.meansp1314)
      }
      else if (this.select.value === 'meansp1314a17' && this.select.type === 'bgs') {
        desc = 'Mean Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.meansp1314a17)
      }
      else if (this.select.value === 'minsp1314' && this.select.type === 'bgs') {
        desc = 'Minimum Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.minsp1314)
      }
      else if (this.select.value === 'minsp1314a17' && this.select.type === 'bgs') {
        desc = 'Minimum Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.minsp1314a17)
      }
      else if (this.select.value === 'maxsp1314' && this.select.type === 'bgs') {
        desc = 'Maximum Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.maxsp1314)
      }
      else if (this.select.value === 'maxsp1314a17' && this.select.type === 'bgs') {
        desc = 'Maximum Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.maxsp1314a17)
      }
      else if (this.select.value === 'mediansp1314' && this.select.type === 'bgs') {
        desc = 'Median Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.mediansp1314)
      }
      else if (this.select.value === 'mediansp1314a17' && this.select.type === 'bgs') {
        desc = 'Median Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.mediansp1314a17)
      }
      else if (this.select.value === 'totsp1314' && this.select.type === 'bgs') {
        desc = 'Total Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.totsp1314)
      }
      else if (this.select.value === 'totsp1314a17' && this.select.type === 'bgs') {
        desc = 'Total Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.totsp1314a17)
      }
      else if (this.select.value === 'nums1314' && this.select.type === 'bgs') {
        desc = 'Number of Homes Sold, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.nums1314)
      }
      else if (this.select.value === 'mhi1314' && this.select.type === 'bgs') {
        desc = 'Median Houshold Income: ' + numberWithCommas(this.currentDurhambg.mhi1314)
      }
      else if (this.select.value === 'mhi1314a17' && this.select.type === 'bgs') {
        desc = 'Median Houshold Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.mhi1314a17)
      }
      else if (this.select.value === 'pir1314' && this.select.type === 'bgs') {
        desc = 'Price Income Ratio: ' + numberWithCommas(this.currentDurhambg.pir1314)
      }
      else if (this.select.value === 'mean_sfno100517' && this.select.type === 'bgs') {
        desc = 'Mean Value of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.mean_sfno100517)
      }
      else if (this.select.value === 'tot_sfno100517' && this.select.type === 'bgs') {
        desc = 'Total Value of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.tot_sfno100517)
      }
      else if (this.select.value === 'num_sfno100517' && this.select.type === 'bgs') {
        desc = 'Number of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.num_sfno100517)
      }
      else if (this.select.value === 'mean_sfoo100517' && this.select.type === 'bgs') {
        desc = 'Mean Value of Single Family Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.mean_sfoo100517)
      }
      else if (this.select.value === 'tot_sfoo100517' && this.select.type === 'bgs') {
        desc = 'Total Value of Single Family Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.tot_sfoo100517)
      }
      else if (this.select.value === 'num_sfoo100517' && this.select.type === 'bgs') {
        desc = 'Number of Single Family Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.num_sfoo100517)
      }
      else if (this.select.value === 'prc_sfno100517' && this.select.type === 'bgs') {
        desc = 'Percent of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.prc_sfno100517)
      }
      else if (this.select.value === 'pop13' && this.select.type === 'bgs') {
        desc = 'Total Population: ' + numberWithCommas(this.currentDurhambg.pop13)
      }
      else if (this.select.value === 'pop14' && this.select.type === 'bgs') {
        desc = 'Total Population: ' + numberWithCommas(this.currentDurhambg.pop14)
      }
      else if (this.select.value === 'ptwhnl13' && this.select.type === 'bgs') {
        desc = 'Percent White Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptwhnl13)
      }
      else if (this.select.value === 'ptwhnl14' && this.select.type === 'bgs') {
        desc = 'Percent White Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptwhnl14)
      }
      else if (this.select.value === 'ptblknl13' && this.select.type === 'bgs') {
        desc = 'Percent Black Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptblknl13)
      }
      else if (this.select.value === 'ptblknl14' && this.select.type === 'bgs') {
        desc = 'Percent Black Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptblknl14)
      }
      else if (this.select.value === 'ptasnl13' && this.select.type === 'bgs') {
        desc = 'Percent Asian Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptasnl13)
      }
      else if (this.select.value === 'ptasnl14' && this.select.type === 'bgs') {
        desc = 'Percent Asian Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptasnl14)
      }
      else if (this.select.value === 'ptothnl13' && this.select.type === 'bgs') {
        desc = 'Percent Other Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptothnl13)
      }
      else if (this.select.value === 'ptothnl14' && this.select.type === 'bgs') {
        desc = 'Percent Other Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptothnl14)
      }
      else if (this.select.value === 'ptlat13' && this.select.type === 'bgs') {
        desc = 'Percent Hispanic: ' + numberWithCommas(this.currentDurhambg.ptlat13)
      }
      else if (this.select.value === 'ptlat14' && this.select.type === 'bgs') {
        desc = 'Percent Hispanic: ' + numberWithCommas(this.currentDurhambg.ptlat14)
      }
      else if (this.select.value === 'meansp1517' && this.select.type === 'bgs') {
        desc = 'Mean Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.meansp1517)
      }
      else if (this.select.value === 'meansp1517a17' && this.select.type === 'bgs') {
        desc = 'Mean Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.meansp1517a17)
      }
      else if (this.select.value === 'minsp1517' && this.select.type === 'bgs') {
        desc = 'Minimum Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.minsp1517)
      }
      else if (this.select.value === 'minsp1517a17' && this.select.type === 'bgs') {
        desc = 'Minimum Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.minsp1517a17)
      }
      else if (this.select.value === 'maxsp1517' && this.select.type === 'bgs') {
        desc = 'Maximum Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.maxsp1517)
      }
      else if (this.select.value === 'maxsp1517a17' && this.select.type === 'bgs') {
        desc = 'Maximum Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.maxsp1517a17)
      }
      else if (this.select.value === 'mediansp1517' && this.select.type === 'bgs') {
        desc = 'Median Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.mediansp1517)
      }
      else if (this.select.value === 'mediansp1517a17' && this.select.type === 'bgs') {
        desc = 'Median Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.mediansp1517a17)
      }
      else if (this.select.value === 'totsp1517' && this.select.type === 'bgs') {
        desc = 'Total Sale Price, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.totsp1517)
      }
      else if (this.select.value === 'totsp1517a17' && this.select.type === 'bgs') {
        desc = 'Total Sale Price, for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.totsp1517a17)
      }
      else if (this.select.value === 'nums1517' && this.select.type === 'bgs') {
        desc = 'Number of Homes Sold, for Single Family Homes: ' + numberWithCommas(this.currentDurhambg.nums1517)
      }
      else if (this.select.value === 'mhi16' && this.select.type === 'bgs') {
        desc = 'Median Houshold Income: ' + numberWithCommas(this.currentDurhambg.mhi16)
      }
      else if (this.select.value === 'mhi16a17' && this.select.type === 'bgs') {
        desc = 'Median Houshold Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhambg.mhi16a17)
      }
      else if (this.select.value === 'pir1517' && this.select.type === 'bgs') {
        desc = 'Price Income Ratio: ' + numberWithCommas(this.currentDurhambg.pir1517)
      }
      else if (this.select.value === 'mgr_phi16' && this.select.type === 'bgs') {
        desc = 'Median Gross Rent as a Percentage Of Household Income In The Past 12 Months: ' + numberWithCommas(this.currentDurhambg.mgr_phi16)
      }
      else if (this.select.value === 'mmoc_phi16' && this.select.type === 'bgs') {
        desc = 'Median Selected Monthly Owner Costs as a Percentage Of Household Income In The Past 12 Months: ' + numberWithCommas(this.currentDurhambg.mmoc_phi16)
      }
      else if (this.select.value === 'mean_sfno011818' && this.select.type === 'bgs') {
        desc = 'Mean Value of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.mean_sfno011818)
      }
      else if (this.select.value === 'tot_sfno011818' && this.select.type === 'bgs') {
        desc = 'Total Value of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.tot_sfno011818)
      }
      else if (this.select.value === 'num_sfno011818' && this.select.type === 'bgs') {
        desc = 'Number of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.num_sfno011818)
      }
      else if (this.select.value === 'mean_sfoo011818' && this.select.type === 'bgs') {
        desc = 'Mean Value of Single Family Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.mean_sfoo011818)
      }
      else if (this.select.value === 'tot_sfoo011818' && this.select.type === 'bgs') {
        desc = 'Total Value of Single Family Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.tot_sfoo011818)
      }
      else if (this.select.value === 'num_sfoo011818' && this.select.type === 'bgs') {
        desc = 'Number of Single Family Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.num_sfoo011818)
      }
      else if (this.select.value === 'prc_sfno011818' && this.select.type === 'bgs') {
        desc = 'Percent of Single Family Non-Owner Occupied Homes: ' + numberWithCommas(this.currentDurhambg.prc_sfno011818)
      }
      else if (this.select.value === 'pop16' && this.select.type === 'bgs') {
        desc = 'Total Population: ' + numberWithCommas(this.currentDurhambg.pop16)
      }
      else if (this.select.value === 'ptwhnl16' && this.select.type === 'bgs') {
        desc = 'Percent White Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptwhnl16)
      }
      else if (this.select.value === 'ptblknl16' && this.select.type === 'bgs') {
        desc = 'Percent Black Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptblknl16)
      }
      else if (this.select.value === 'ptnanl16' && this.select.type === 'bgs') {
        desc = 'Percent Native Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptnanl16)
      }
      else if (this.select.value === 'ptasnl16' && this.select.type === 'bgs') {
        desc = 'Percent Asian Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptasnl16)
      }
      else if (this.select.value === 'ptpanl16' && this.select.type === 'bgs') {
        desc = 'Percent Pacific Islanders and Hawaiian Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptpanl16)
      }
      else if (this.select.value === 'ptothnl16' && this.select.type === 'bgs') {
        desc = 'Percent Other Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.ptothnl16)
      }
      else if (this.select.value === 'pt2mnl16' && this.select.type === 'bgs') {
        desc = 'Percent 2 or More Races Non-Hispanic: ' + numberWithCommas(this.currentDurhambg.pt2mnl16)
      }
      else if (this.select.value === 'ptlat16' && this.select.type === 'bgs') {
        desc = 'Percent Hispanic: ' + numberWithCommas(this.currentDurhambg.ptlat16)
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