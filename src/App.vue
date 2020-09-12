<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter  :price-to.sync="productPriceTo" :price-from.sync="productPriceFrom"  :category-id.sync="productFilterId" :category-color.sync="productFilterColor" />
      <section class="catalog">
        <ProductList :productList="goods"/>
        <BasePagination :page.sync="page" :all-products="getAllProduct" :per-products="NumberProductsPerPage"/>
      </section>
    </div>
  </main>

</template>

<script>
import goods from './data/goods'
import ProductList from './components/ProductList.vue'
import BasePagination from './components/BasePagination.vue'
import ProductFilter from './components/ProductFilter.vue'

export default {
  name: 'App',
  components: { ProductList, BasePagination, ProductFilter },

  data () {
    return {
      productPriceFrom: 0,
      productPriceTo: 0,
      productFilterId: 0,
      productFilterColor: 0,

      page: 1,
      NumberProductsPerPage: 4

    }
  },
  computed: {

    getFilterProducts () {
      let filterProducts = goods

      if (this.productPriceFrom > 0) {
        filterProducts = filterProducts.filter(product => product.priceGoods > this.productPriceFrom)
      }

      if (this.productPriceTo > 0) {
        filterProducts = filterProducts.filter(product => product.priceGoods < this.productPriceTo)
      }
      if (this.productFilterId) {
        filterProducts = filterProducts.filter(product => product.goodsId === this.productFilterId)
      }
      if (this.productFilterColor) {
        filterProducts = filterProducts.filter(product => product.colors && product.colors.some(color => color.colorId === this.productFilterColor))
      }
      return filterProducts
    },

    goods () {
      const offset = (this.page - 1) * this.NumberProductsPerPage
      return this.getFilterProducts.slice(offset, offset + this.NumberProductsPerPage)
    },
    getAllProduct () {
      return this.getFilterProducts.length
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
