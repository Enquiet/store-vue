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
        <PageOk v-if="this.loadingProducts.ok"/>
        <PageError v-else-if="this.loadingProducts.error"/>
        <ProductList else :productList="goods" />
        <BasePagination  :current-page.sync="page" :all-products="getAllProduct" :per-products="NumberProductsPerPage"/>
      </section>
    </div>
  </main>

</template>

<script>
import ProductList from '@/components/ProductList.vue'
import BasePagination from '@/components/BasePagination.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import PageOk from '@/components/loadingPage/PageOk.vue'
import PageError from '@/components/loadingPage/PageError.vue'
import { API_URL } from '@/helpers/config'
import axios from 'axios'

export default {
  components: { ProductList, BasePagination, ProductFilter, PageOk, PageError },

  data () {
    return {
      allFiltres: {
        productPriceFrom: 0,
        productPriceTo: 0,
        productFilterId: 0,
        productFilterColor: 0,
        productFilterMamory: []
      },
      page: 1,
      NumberProductsPerPage: 6,
      productData: null,

      loadingProducts: {
        ok: false,
        error: false
      }

    }
  },
  computed: {

    goods () {
      return this.productData ? this.productData.items.map(item => {
        return {
          ...item,
          image: item.image.file.url
        }
      }) : []
    },
    getAllProduct () {
      return this.productData ? this.productData.pagination.total : 0
    }
  },
  methods: {
    getLoadingProducts () {
      this.loadingProducts.ok = true
      this.loadingProducts.error = false
      this.loadingProductsTimer = setTimeout(() => {
        axios.get(API_URL + '/api/products', {
          params: {
            categoryId: this.allFiltres.productFilterId,
            colorId: this.allFiltres.productFilterColor,
            page: this.page,
            limit: this.NumberProductsPerPage,
            minPrice: this.allFiltres.productPriceFrom,
            maxPrice: this.allFiltres.productPriceTo

          }
        })
          .then((response) => {
            this.productData = response.data
          })
          .catch(() => {
            this.loadingProducts.error = true
          })
          .then(() => {
            this.loadingProducts.ok = false
          })
      }, 2000)
    }
  },
  created () {
    this.getLoadingProducts()
  },
  watch: {
    page () {
      this.getLoadingProducts()
    },
    allFiltres: {
      handler () { this.getLoadingProducts() },
      deep: true
    }
  }
}
</script>
