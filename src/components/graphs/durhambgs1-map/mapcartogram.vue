<!--

It would be great if you color the map by population using data from index.vue

Based on:
  http://bl.ocks.org/rveciana/a2a1c21ca1c71cd3ec116cc911e5fce9
  http://bl.ocks.org/mapsam/6083585


Links:

-->

<template>
  <svg width='600' height='500'></svg>
</template>

<script>
// Map stuff
const d3 = require('d3')
const topojson = require('topojson')
const d3Cartogram = require('mixins/d3-cartogram')

// Colors stuff
import * as d3Chromatic from 'd3-scale-chromatic'
const colors = d3Chromatic.schemeRdYlGn[3].reverse()
// const colors = d3Chromatic.schemeBlues[9]

const projection = d3.geoMercator().center([-78.7, 36.05]).scale(60000).precision(0.1)
const path = d3.geoPath().projection(projection)

export default {
  data: function () {
    return {
      cartogram: null,
      topology: null,
      geometries: null,
      durhambgs: null
    }
  },
  mounted: function () {
    var mounthis = this
    var dataById

    mounthis.cartogram = d3Cartogram.d3.cartogram()
      .projection(projection)
      .properties(function (d) {
        return dataById.get(d.id)
      })
    var svg = d3.select(this.$el)
    var layer = svg.append('g')
      .attr('id', 'layer')
    mounthis.durhambgs = layer.append('g')
      .attr('id', 'durhambgs')
      .selectAll('path')

    d3.json('statics/data/durhambgs.json', function (topo) {
      mounthis.topology = topo
      mounthis.geometries = mounthis.topology.objects.durhambgs.geometries

      d3.json('http://127.0.0.1:8000/api/singfamhouse/?format=json', function (data) {
        dataById = d3.nest()
          .key(function (d) { return d.id })
          .rollup(function (d) { return d[0] })
          .map(data)

        layer.selectAll('.tooltip')
          .data(topojson.feature(mounthis.topology, mounthis.topology.objects.durhambgs).features)
          .enter()
          .append('path')
          .attr('class', 'tooltip')
          .attr('d', path)
          .on('mouseover', function (d) {
            mounthis.$emit('durhambgSelected', d.id)
          })
          .on('mouseout', function (d) {
            mounthis.$emit('durhambgDeselected', d.id)
          })

        var features = mounthis.cartogram.features(mounthis.topology, mounthis.geometries)

        mounthis.durhambgs = mounthis.durhambgs.data(features)
          .enter()
          .append('path')
          .attr('class', 'durhambg')
          .attr('id', function (d) {
            return d.id
          })
          .attr('d', path)

        let value = function (d) { return +d.properties['prc_sfno'] }

        let values = mounthis.durhambgs.data()
            .map(value)
            .filter(function (n) {
              return !isNaN(n)
            })
            .sort(d3.ascending),
          lo = values[0],
          hi = values[values.length - 1]

        var color = d3.scaleLinear()
          .domain([lo, d3.mean(values), hi])
          .range(colors)

        mounthis.durhambgs.transition()
          .duration(750)
          .ease(d3.easeLinear)
          .attr('fill', function (d) {
            return color(value(d))
          })
      })
    })
  },
  props: ['propval'],
  watch: {
    propval: function (newPropVal) {
      this.changePropVal(newPropVal)
    }
  },
  methods: {
    changePropVal: function (propval) {
      let value = function (d) {
        return +d.properties[propval[0]]
      }

      let values = this.durhambgs.data()
          .map(value)
          .filter(function (n) {
            return !isNaN(n)
          })
          .sort(d3.ascending),
        lo = values[0],
        hi = values[values.length - 1]

      let color = d3.scaleLinear()
        .domain([lo, d3.mean(values), hi])
        .range(colors)

      this.durhambgs.transition()
        .duration(750)
        .ease(d3.easeLinear)
        .attr('fill', function (d) {
          return color(value(d))
        })
    }
  }
}
</script>

<style>
.durhambg {
  stroke: #98999b;
}
.tooltip {
  fill: rgba(255, 255, 255, 0.0);
}
.tooltip:hover {
  fill: steelblue;
  fill-opacity: 0.5;
}
</style>