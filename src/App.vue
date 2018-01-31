<template>
  <q-layout
    ref="layout"
    :view="layoutStore.view"
    :left-breakpoint="layoutStore.leftBreakpoint"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"
    :left-class="{'bg-grey-2': true}"
  >
    <div class="header" slot="header">
      <div class="headimage">
        <img src="~assets/affordablehousing.png" class="reponsive" >
      </div>
      <div class="apptitle" >State of Affordable<br />Housing in Durham</div>

      <div class="mission" >
        We want to ensure Durham remains a community with enough housing<br />
        near employment for everyone. Our vision is to support Durham by<br />
        aggregating and organizing housing related information to move<br />
        community consensus and investment decisions forward.
      </div>

      <div class="toolbar">
        <q-toolbar>
          <q-btn flat @click="$refs.layout.toggleLeft()">
            <q-icon name="menu" />
          </q-btn>
          <q-btn flat>
            <a href='#/'>Home</a>
          </q-btn>
          <q-btn flat>
            <a href='#/durhambgs1-map'>Map One</a>
          </q-btn>
          <q-btn flat>
            <a href='#/durhambgs2-map'>Map Two</a>
          </q-btn>
          <q-btn flat @click="changeView" >
            <q-icon name="import export" />
          </q-btn>
        </q-toolbar>
      </div>
    </div>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->
      <q-list no-border link inset-delimiter>
        <q-list-header>Affordable Housing Menu</q-list-header>
        <q-item>
          <a href='#/'>
            <q-item-main label='Home:' sublabel='Affordable Housing'/>
          </a>   
        </q-item>
        <q-item v-for="item in items" :key="item.id">
          <q-side-link :to="item.path">
            <q-item-main :label="item.type" :sublabel="item.name" />
          </q-side-link>
        </q-item>
      </q-list>
    </div>
    <!-- Don't drop "q-app" class -->
    <div id="q-app">
      <router-view></router-view>
    </div>

    <q-toolbar slot="footer">
      <q-toolbar-title>
        <div slot="subtitle">
          <a href='http://quasar-framework.org'>Running on Quasar, </a>
          <a href='https://vuejs.org'>Vue,</a>
          <a href='http://www.django-rest-framework.org/'>and Django Rest Framework</a>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import layoutStore from './store/layout'
import { routes } from 'router/graphs'

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemMain,
  QSideLink
} from 'quasar'

export default {
  name: 'q-app',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemMain,
    QSideLink
  },
  data () {
    const v = layoutStore.view
    return {
      layoutStore,
      items: routes,
      layoutvals: v,
      isActive: false
    }
  },
  methods: {
    changeView () {
      this.isActive = !this.isActive
      if (this.isActive === true) {
        this.layoutvals = 'lhh Lpr lff'
      }
      else if (this.isActive === false) {
        this.layoutvals = 'lHh Lpr lFf'
      }
    }
  },
  computed: {
    changeWatch () {
      const
        layout = `${this.layoutvals}`
      return `${layout}`
    }
  },
  watch: {
    changeWatch (v) {
      layoutStore.view = v
    }
  }
}
</script>
<style>
.headimage { 
   position: relative;
   height: 190;
   width: auto;
   overflow: hidden; 
}
.apptitle { 
   position: absolute;
   font: bold 45px Helvetica, Arial, Sans-Serif; 
   color: whitesmoke;
   text-shadow:
     -1px -1px 0 #000,
     1px -1px 0 #000,
     -1px 1px 0 #000,
     1px 1px 0 #000;   
   letter-spacing: -1px;
   top: 25px; 
   left: 40px; 
   width: 100%;
   line-height: 100%;
}
@media (min-width: 900px) {
  .mission { 
    position: absolute;
    font: bold 15px Helvetica, Arial, Sans-Serif;
    color: whitesmoke;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;   
    letter-spacing: 1px;
    top: 40px; 
    left: 470px; 
    width: 100%;
    line-height: 100%;
  }
}
@media (max-width: 899px) {
  .mission {
    display: none;
  }
}
.toolbar { 
   position: absolute; 
   top: 150px; 
   left: 0; 
   width: 100%; 
}
</style>
