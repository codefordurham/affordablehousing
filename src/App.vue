<template>
  <q-layout
    ref="layout"
    view="lHh Lpr lFf"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        <a href='#/'>Affordable Housing App</a>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->
      <q-list no-border link inset-delimiter>
        <q-list-header>Affordable Housing Maps</q-list-header>
        <q-item>
          <a href='#/'>
            <q-item-main label='Home:' sublabel='Affordable Housing'/>
          </a>          
        </q-item>
        <q-item v-for="item in items" :key="item.id">
          <router-link :to="item.path">
            <q-item-main :label="item.type" :sublabel="item.name" />
          </router-link>
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
  QItemSide,
  QItemMain,
  QInput
} from 'quasar'
/*
 * Root component
 */
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
    QItemSide,
    QItemMain,
    QInput
  },
  data () {
    return {
      items: routes,
      changecolor: null
    }
  }
}
</script>
<style>
.text-changecolor {
  color: white;
}
</style>