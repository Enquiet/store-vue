<template>
  <section class="catalog">
    <ProductList :productList="goods"/>

    <BasePagination :page.sync="page" :all-products="getAllProduct" :per-products="NumberProductsPerPage"/>
  </section>
</template>

<script>
import goods from './data/goods'
import ProductList from './components/ProductList.vue'
import BasePagination from './components/BasePagination.vue'

export default {
  name: 'App',
  components: { ProductList, BasePagination },

  data () {
    return {
      page: 1,
      NumberProductsPerPage: 4
    }
  },
  computed: {
    goods () {
      const offset = (this.page - 1) * this.NumberProductsPerPage
      return goods.slice(offset, offset + this.NumberProductsPerPage)
    },
    getAllProduct () {
      return goods.length
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
