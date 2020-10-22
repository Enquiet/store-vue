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

    <div class="product__counter form__counter">
      <button type="button" aria-label="Убрать один товар" :disabled="this.itemProduct.amount === 1" @click.prevent="(amount--)">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input type="text" v-model.number="amount" name="count">

      <button type="button" aria-label="Добавить один товар" @click.prevent="(amount++)">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

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

export default {
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
