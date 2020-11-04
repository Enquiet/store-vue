<template>
    <ul class="catalog__list">
        <li class="catalog__item" v-for="productItem in productList" :key="productItem.id">
           <ProductItem :product="productItem"/>
        </li>
    </ul>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  props: {
    productList: {
      type: Array,
      default: () => []
    }
  },
  components: { ProductItem }
}

</script>
