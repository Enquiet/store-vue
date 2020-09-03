<template>
    <div>
        <a class="catalog__pic" href="#"  >
            <img :src="product.imageGoods" alt="Название товара">
        </a>
        <h3 class="catalog__title">
            <a href="#">
            {{product.titleGoods}}
            </a>
        </h3>
        <span class="catalog__price">
            {{product.priceGoods}}
        </span>
      <ProductColors :productColor="product"/>
    </div>
</template>

<script>
import ProductColors from './ProductColors.vue'

export default {
  props: {
    product: {
      type: Array,
      default: () => []
    }
  },
  components: { ProductColors }
}
</script>
