<!--

It would be great if you color the map by population using data from index.vue

Based on:
  http://bl.ocks.org/rveciana/a2a1c21ca1c71cd3ec116cc911e5fce9
  http://bl.ocks.org/mapsam/6083585


Links:

-->

<template>
  <svg width='580' height='600'></svg>
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

const width = 580
const height = 580
var centered

export default {
  data: function () {
    return {
      municartogram: null,
      muniboundaries: null,
      cntycartogram: null,
      cntyboundaries: null,
      // watercartogram: null,
      // osm_waterways: null,
      cartogram: null,
      topology: null,
      geometries: null,
      durhamhds: null,
      durhambgs: null,
      roadscartogram: null,
      osm_roads_gen0: null,
      layer: null
    }
  },
  mounted: function () {
    var mounthis = this
    var dataById

    mounthis.municartogram = d3Cartogram.d3.cartogram()
      .projection(projection)
    /* mounthis.watercartogram = d3Cartogram.d3.cartogram()
      .projection(projection) */
    mounthis.cntycartogram = d3Cartogram.d3.cartogram()
      .projection(projection)
    mounthis.cartogram = d3Cartogram.d3.cartogram()
      .projection(projection)
      .properties(function (d) {
        return dataById.get(d.id)
      })
    mounthis.roadscartogram = d3Cartogram.d3.cartogram()
      .projection(projection)

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
      .attr('class', 'key')
      .attr('transform', 'translate(0,40)')
    mounthis.muniboundaries = mounthis.layer.append('g')
      .attr('id', 'muniboundaries')
      .selectAll('path')
    /* mounthis.osm_waterareas = mounthis.layer.append('g')
      .attr('id', 'osm_waterarea')
      .selectAll('path') */
    mounthis.cntyboundaries = mounthis.layer.append('g')
      .attr('id', 'cntyboundaries')
      .selectAll('path')
    mounthis.durhambgs = mounthis.layer.append('g')
      .attr('id', 'durhambgs')
      .selectAll('path')
    mounthis.osm_roads_gen0 = mounthis.layer.append('g')
      .attr('id', 'osm_roads_gen0')
      .selectAll('path')

    d3.json('statics/data/muniboundaries.topojson', function (topology) {
      let geometries = topology.objects.muniboundaries.geometries
      let features = mounthis.municartogram.features(topology, geometries)

      mounthis.muniboundaries = mounthis.muniboundaries.data(features)
        .enter()
        .append('path')
        .attr('class', 'muniboundary')
        .attr('d', path)
    })

    /* d3.json('statics/data/osm_waterarea.topojson', function (topology) {
      let geometries = topology.objects.osm_waterareas.geometries
      let features = mounthis.watercartogram.features(topology, geometries)

      mounthis.osm_waterareas = mounthis.osm_waterareas.data(features)
        .enter()
        .append('path')
        .attr('class', 'osm_waterarea')
        .attr('d', path)
    }) */

    d3.json('statics/data/cntyboundaries.topojson', function (topology) {
      let geometries = topology.objects.cntyboundaries.geometries
      let features = mounthis.cntycartogram.features(topology, geometries)

      mounthis.cntyboundaries = mounthis.cntyboundaries.data(features)
        .enter()
        .append('path')
        .attr('class', 'cntyboundary')
        .attr('d', path)
    })

    d3.json('statics/data/durhambgs.topojson', function (topology) {
      mounthis.topology = topology
      mounthis.geometries = mounthis.topology.objects.durhambgs.geometries

      d3.json('http://127.0.0.1:8000/api/singfamhouse/?format=json', function (data) {
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

        let color = d3.scaleLinear()
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

    d3.json('statics/data/osm_roads_gen0.topojson', function (topology) {
      let geometries = topology.objects.osm_roads_gen0.geometries

      mounthis.layer.selectAll('.osm_roads_gen0')
        .data(topojson.feature(topology, topology.objects.osm_roads_gen0).features)
        .enter().append('path')
        .attr('class', function (d) { return 'osm_roads_gen0' + d.properties.type })
        .attr('d', path)

      let features = mounthis.roadscartogram.features(topology, geometries)

      mounthis.osm_roads_gen0 = mounthis.osm_roads_gen0.data(features)
        .enter()
        .append('path')
        .attr('class', 'osm_roads_gen0')
        .attr('d', path)
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
      }
      else {
        x = width / 2
        y = height / 2
        k = 1
        centered = null
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
/* .osm_waterarea {
  stroke: blue;
  fill: blue;
} */
.cntyboundary {
  stroke: gray;
  fill: none;
}
.durhambg {
  opacity: 0.9;
  stroke: #98999b;
}
.osm_roads_gen0 {
  fill: none;
  stroke: #000;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.osm_roads_gen0.primary {
  stroke: #776;
}
.osm_roads_gen0.secondary {
  stroke: #ccb;
}
.osm_roads_gen0.motorway {
  stroke: #f39;
  stroke-width: 1.5px;
}
.osm_roads_gen0.rail {
  stroke: gray;
}
.tooltip {
  fill: rgba(255, 255, 255, 0.0);
}
.tooltip:hover {
  fill: steelblue;
  fill-opacity: 0.5;
}
</style>