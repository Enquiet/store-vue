<template>
    <div>
        <router-link class="catalog__pic" :to="{name:'productPage', params: {id: product.id}}" >
            <img :src="product.imageGoods" alt="Название товара">
        </router-link>
        <h3 class="catalog__title">
            <a href="#">
            {{product.titleGoods}}
            </a>
        </h3>
        <span class="catalog__price">
            {{product.priceGoods | numberFormat}} ₽
        </span>
      <ProductColors v-if="product.colors" :productColors="product.colors"/>
    </div>
</template>

<script>
import ProductColors from './ProductColors.vue'
import switchPages from '@/helpers/switchPages'
import numberFormat from '@/helpers/numberFormat'
export default {
  props: {
    product: {
      type: Object,
      default: () => []
    }
  },
  filters: {
    numberFormat
  },
  methods: {
    switchPages
  },
  components: { ProductColors }
}
</script>
