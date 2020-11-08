<template>
   <div class="cart__block">
      <ul class="cart__orders" v-for="infoProduct in this.cardDetalProducts" :key="infoProduct.productId">
        <li class="cart__order">
          <h3>{{infoProduct.product.title}}</h3>
          <b>{{infoProduct.product.price | numberFormat}}</b>
          <span>Артикул: {{infoProduct.product.id}}</span>
        </li>
      </ul>

      <div class="cart__total">
        <p>Доставка: <b>500 ₽</b></p>
        <p>Итого: <b>{{this.numberProduct}}</b> товара на сумму <b>{{this.totalPrice}}</b></p>
      </div>

      <button class="cart__button button button--primery" type="submit">
        Оформить заказ
      </button>
    </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat'
import { mapGetters } from 'vuex'
export default {
  filters: {
    numberFormat
  },
  computed: {
    ...mapGetters(['cardDetalProducts', 'numberProduct', 'totalPrice'])
  }
}
</script>
