<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        {{getAllProduct}} товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter  v-bind.sync="allFiltres" :current-page.sync="page"/>
      <section class="catalog">
        <ProductList :productList="goods" />
        <BasePagination  :current-page.sync="page" :all-products="getAllProduct" :per-products="NumberProductsPerPage"/>
      </section>
    </div>
  </main>

</template>

<script>
import goods from '@/data/goods'
import ProductList from '@/components/ProductList.vue'
import BasePagination from '@/components/BasePagination.vue'
import ProductFilter from '@/components/ProductFilter.vue'

export default {
  components: { ProductList, BasePagination, ProductFilter },

  data () {
    return {
      allFiltres: {
        productPriceFrom: 0,
        productPriceTo: 0,
        productFilterId: 0,
        productFilterColor: '',
        productFilterMamory: []
      },
      page: 1,
      NumberProductsPerPage: 4

    }
  },
  computed: {
    getFilterProducts () {
      let filterProducts = goods
      if (this.allFiltres.productPriceFrom > 0) {
        filterProducts = filterProducts.filter(product => product.priceGoods > this.allFiltres.productPriceFrom)
      }

      if (this.allFiltres.productPriceTo > 0) {
        filterProducts = filterProducts.filter(product => product.priceGoods < this.allFiltres.productPriceTo)
      }
      if (this.allFiltres.productFilterId) {
        filterProducts = filterProducts.filter(product => product.goodsId === this.allFiltres.productFilterId)
      }
      if (this.allFiltres.productFilterMamory > 0) {
        let allProductMemory
        for (let i = 0; i < this.allFiltres.productFilterMamory.length; i++) {
          allProductMemory = this.allFiltres.productFilterMamory[i]
        }
        filterProducts = filterProducts.filter(product => product.memory && product.memory.every(color => color.value === allProductMemory))
      }
      if (this.allFiltres.productFilterColor) {
        filterProducts = filterProducts.filter(product => product.colors && product.colors.some(color => color.value === this.allFiltres.productFilterColor))
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
