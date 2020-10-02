<template>
    <div>
        <a class="catalog__pic" href="#"  >
            <img :src="product.imageGoods" alt="Название товара" @click.prevent="switchPages('productPage', {id:product.id})">
        </a>
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
