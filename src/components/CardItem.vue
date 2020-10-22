<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="itemProduct.product.imageGoods" width="120" height="120"  :alt="itemProduct.product.titleGoods">
    </div>
    <h3 class="product__title">
      {{itemProduct.product.titleGoods}}
    </h3>
    <p class="product__info">
      Объем: <span>128GB</span>
    </p>
    <span class="product__code">
      Артикул: {{itemProduct.product.id}}
    </span>

    <FormCounter :product-amaunt.sync="amount"/>

    <b class="product__price">
      {{ (itemProduct.amount * itemProduct.product.priceGoods) |  numberFormat}}
    </b>

    <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteProduct(itemProduct.productId)">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>
<script>
import numberFormat from '@/helpers/numberFormat'
import { mapMutations } from 'vuex'
import FormCounter from '@/components/FormCounter.vue'

export default {
  components: {
    FormCounter
  },
  filters: {
    numberFormat
  },
  props: {
    itemProduct: {
      type: Object,
      default: () => []
    }
  },
  computed: {
    amount: {
      get () {
        return this.itemProduct.amount
      },
      set (value) {
        this.$store.commit('updateProductCard', { productId: this.itemProduct.productId, amount: value })
      }
    }
  },
  methods: {
    ...mapMutations({ deleteProduct: 'deleteProdictCard' })
  }
}
</script>
