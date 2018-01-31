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
const d3Colorbar = require('mixins/d3-colorbar')

// Colors stuff
// import * as d3Chromatic from 'd3-scale-chromatic'
// const colors = d3Chromatic.schemeRdYlGn[3]

const width = 600
const height = 500
var centered

const projection = d3.geoMercator().center([-78.7, 36.05]).scale(60000).precision(0.1)
const path = d3.geoPath().projection(projection)
const roadsurls = ['roads.572-802.geojson', 'roads.573-802.geojson', 'roads.574-802.geojson', 'roads.575-802.geojson', 'roads.576-802.geojson', 'roads.577-802.geojson', 'roads.572-803.geojson', 'roads.573-803.geojson', 'roads.574-803.geojson', 'roads.575-803.geojson', 'roads.576-803.geojson', 'roads.577-803.geojson', 'roads.572-804.geojson', 'roads.573-804.geojson', 'roads.574-804.geojson', 'roads.575-804.geojson', 'roads.576-804.geojson', 'roads.577-804.geojson', 'roads.572-805.geojson', 'roads.573-805.geojson', 'roads.574-805.geojson', 'roads.575-805.geojson', 'roads.576-805.geojson', 'roads.577-805.geojson']

export default {
  data: function () {
    return {
      muniboundaries: null,
      cntyboundaries: null,
      cartogram: null,
      topology: null,
      geometries: null,
      durhambgs: null,
      durhamhds: null,
      roads: null,
      layer: null,
      colorbar: null
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

    const svg = d3.select(this.$el)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
    svg.append('rect')
      .attr('class', 'background')
      .attr('width', width)
      .attr('height', height)
      .on('click', mounthis.clicked)

    mounthis.layer = svg.append('g')
      .attr('id', 'layer')
    mounthis.muniboundaries = mounthis.layer.append('g')
      .attr('id', 'muniboundaries')
      .selectAll('path')
    mounthis.cntyboundaries = mounthis.layer.append('g')
      .attr('id', 'cntyboundaries')
      .selectAll('path')
    mounthis.durhambgs = mounthis.layer.append('g')
      .attr('id', 'durhambgs')
      .selectAll('path')
    mounthis.roads = mounthis.layer.append('g')
      .attr('id', 'roads')
      .selectAll('path')
    mounthis.durhamhds = mounthis.layer.append('g')
      .attr('id', 'durhamhds')
      .selectAll('path')
    mounthis.colorbar = mounthis.layer.append('g')
      .attr('class', 'vertical')
      .attr('transform', 'translate(100, 20)')

    d3.json('statics/data/muniboundaries.topojson', function (topology) {
      let geojson = topojson.feature(topology, topology.objects.muniboundaries)

      mounthis.muniboundaries
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('class', 'muniboundary')
        .attr('d', path)
    })

    d3.json('statics/data/cntyboundaries.topojson', function (topology) {
      let geojson = topojson.feature(topology, topology.objects.cntyboundaries)

      mounthis.cntyboundaries
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('class', 'cntyboundary')
        .attr('d', path)
    })

    d3.json('statics/data/durhambgs.topojson', function (topology) {
      mounthis.topology = topology
      mounthis.geometries = mounthis.topology.objects.durhambgs.geometries

      d3.json('http://127.0.0.1:8000/api/propsales/?format=json', function (data) {
        dataById = d3.nest()
          .key(function (d) { return d.id })
          .rollup(function (d) { return d[0] })
          .map(data)

        mounthis.layer.selectAll('.tooltip')
          .data(topojson.feature(mounthis.topology, mounthis.topology.objects.durhambgs).features)
          .enter()
          .append('path')
          .attr('class', 'tooltip')
          .attr('d', path)
          .on('click', mounthis.clicked)
          .on('mouseover', function (d) {
            mounthis.$emit('durhambgSelected', d.id)
          })
          .on('mouseout', function (d) {
            mounthis.$emit('durhambgDeselected', d.id)
          })

        let features = mounthis.cartogram.features(mounthis.topology, mounthis.geometries)

        mounthis.durhambgs = mounthis.durhambgs.data(features)
          .enter()
          .append('path')
          .attr('class', 'durhambgs')
          .attr('id', function (d) {
            return d.id
          })
          .attr('d', path)

        let value = function (d) { return +d.properties['pir'] }

        let values = mounthis.durhambgs.data()
            .map(value)
            .sort(d3.ascending),
          lo = values[0],
          hi = 7.5 // values[values.length - 1]

        /* let colorScale = d3.scaleLinear()
          .domain([lo, d3.mean(values), hi])
          .range(colors) */
        let colorScale = d3.scaleSequential(d3.interpolateCool).domain([lo, hi])

        mounthis.durhambgs.transition()
          .duration(750)
          .ease(d3.easeLinear)
          .attr('fill', function (d) {
            if (isNaN(d.properties['pir'])) {
              return '#fff'
            }
            else {
              return colorScale(value(d))
            }
          })

        let cbV = d3Colorbar.d3.colorbarV(colorScale, 20, 200).tickValues([lo, d3.mean(values), hi])
        mounthis.colorbar.call(cbV)
      })
    })

    for (var i = 0; i < roadsurls.length; i++) {
      d3.json('statics/data/' + roadsurls[i], function (geojson) {
        mounthis.roads
          .data(geojson.features)
          .enter().append('path')
          .attr('class', 'roads')
          .attr('class', function (d) { return d.properties.kind })
          .attr('d', path)
      })
    }
    // Add neighborhood boundaries
    d3.json('statics/data/durhamhds.topojson', function (topology) {
      var geojson = topojson.feature(topology, topology.objects.durhamhds)

      mounthis.durhamhds
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'durhamhds')
        .attr('visibility', 'hidden')

      mounthis.durhamhds
        .data(geojson.features)
        .enter()
        .append('text')
        .attr('class', 'durhamhds')
        .attr('visibility', 'hidden')
        .each(function (d) {
          if (parseFloat(d.properties.shape_area) < 0.00006) {
            return
          }
          d3.select(this)
            .attr('transform', function (d) { return 'translate(' + path.centroid(d) + ')' })
            .attr('text-anchor', 'middle')
            .style('font-size', '3px')
            .style('fill', '#F3EFEE')
            .text(function (d) { return d.properties.name })
        })
        .filter(function (d) {
          return parseFloat(d.properties.shape_area) < 0.00006
        }).remove()
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

      let propvalmax = null

      if (propval[0] === 'pir') {
        propvalmax = 7.5
      }
      else if (propval[0] === 'meansp') {
        propvalmax = 521502.0
      }
      else if (propval[0] === 'minsp') {
        propvalmax = 250000.0
      }
      else if (propval[0] === 'maxsp') {
        propvalmax = 1500000.0
      }
      else if (propval[0] === 'mediansp') {
        propvalmax = 450000.0
      }
      else if (propval[0] === 'totsp') {
        propvalmax = 40000000.0
      }
      else if (propval[0] === 'nums') {
        propvalmax = 200.0
      }
      else if (propval[0] === 'mhi') {
        propvalmax = 150000.0
      }

      let values = this.durhambgs.data()
          .map(value)
          .sort(d3.ascending),
        lo = values[0],
        hi = propvalmax // values[values.length - 1]

      /* let colorScale = d3.scaleLinear()
        .domain([lo, d3.mean(values), hi])
        .range(colors) */
      let colorScale = d3.scaleSequential(d3.interpolateCool).domain([lo, hi])

      this.durhambgs.transition()
        .duration(750)
        .ease(d3.easeLinear)
        .attr('fill', function (d) {
          if (isNaN(d.properties[propval[0]])) {
            return '#fff'
          }
          else {
            return colorScale(value(d))
          }
        })

      this.colorbar.remove()
      this.colorbar = this.layer.append('g')
        .attr('class', 'vertical')
        .attr('transform', 'translate(100, 20)')
      let cbV = d3Colorbar.d3.colorbarV(colorScale, 20, 200).tickValues([lo, d3.mean(values), hi])
      this.colorbar.call(cbV)
    },
    clicked: function (d) {
      let x
      let y
      let k

      if (d && centered !== d) {
        let centroid = path.centroid(d)
        x = centroid[0]
        y = centroid[1]
        k = 4
        centered = d

        d3.selectAll('.durhamhds').attr('visibility', 'visible')
      }
      else {
        x = width / 2
        y = height / 2
        k = 1
        centered = null

        d3.selectAll('.durhamhds').attr('visibility', 'hidden')
      }

      this.layer.selectAll('path')
        .classed('active', centered && function (d) { return d === centered })

      this.layer.transition()
        .duration(750)
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
        .style('stroke-width', 1.5 / k + 'px')
    }
  }
}
</script>

<style>
.background {
  fill: none;
  pointer-events: all;
}
.muniboundary {
  stroke: gray;
  fill: lightgray;
}
.cntyboundary {
  stroke: gray;
  fill: none;
}
.durhambgs {
  opacity: 0.9;
  stroke: #98999b;
}
.roads {
  fill: none;
  stroke: white;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.major_road {
  fill: none;
  stroke: #fb7b7a;
  stroke-width: 1px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.minor_road {
  fill: none;
  stroke: #999;
  stroke-width: 0.5px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.highway {
  fill: none;
  stroke: blue;
  stroke-width: 1.5px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.rail {
  fill: none;
  stroke: #503D3F;
  stroke-width: 0.5px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.path {
  fill: none;
  stroke: brown;
  stroke-width: 0.5px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.durhamhds {
  fill: none;
  stroke: #164584;
}
.tooltip {
  fill: rgba(255, 255, 255, 0.0);
}
.tooltip:hover {
  fill: steelblue;
  fill-opacity: 0.5;
}
</style>