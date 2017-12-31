<template>
    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
  <div class="layout-padding">

    <div class="housing">
      <center>
        <q-list>
          <q-item v-for="item in items" :key="item.id">
            <q-item-side icon="store" />
            <router-link :to="item.path">{{ item.name }}</router-link>
          </q-item>
        </q-list>
      </center>
    </div>

  </div>
</template>

<script>
import { routes } from 'router/graphs'

import {
  QIcon,
  QList,
  QItem,
  QItemSide
} from 'quasar'

export default {
  name: 'index',
  components: {
    QIcon,
    QList,
    QItem,
    QItemSide
  },
  data () {
    return {
      items: routes,
      select: null
    }
  }
}
</script>
<style>
</style>