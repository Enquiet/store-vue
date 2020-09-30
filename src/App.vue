<template>
  <component :is="currentPage"/>
</template>

<script>
import MainPage from './page/MainPage.vue'
import ProductPage from './page/ProductPage.vue'
import NotFoundPage from './page/NotFoundPage.vue'

const routerPage = {
  mainPage: 'MainPage',
  productPage: 'ProductPage'
}

export default {
  name: 'App',
  components: { MainPage, ProductPage, NotFoundPage },
  data () {
    return {
      page: 'mainPage'
    }
  },
  computed: {
    currentPage () {
      return routerPage[this.page] || 'NotFoundPage'
    }
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
