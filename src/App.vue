<template>
  <component :is="currentPage" :page-params="productPageParams"/>
</template>

<script>
import MainPage from './pages/MainPage.vue'
import ProductPage from './pages/ProductPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import Event from '@/helpers/eventBus'

const routerPage = {
  mainPage: 'MainPage',
  productPage: 'ProductPage'
}

export default {
  name: 'App',
  components: { MainPage, ProductPage, NotFoundPage },
  data () {
    return {
      page: 'mainPage',
      productPageParams: {}
    }
  },
  methods: {
    switchPages (pageName, pageParams) {
      this.page = pageName
      this.productPageParams = pageParams || {}
    }
  },
  computed: {
    currentPage () {
      return routerPage[this.page] || 'NotFoundPage'
    }
  },
  created () {
    Event.$on('switchPages', (pageName, pageParams) => this.switchPages(pageName, pageParams))
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
