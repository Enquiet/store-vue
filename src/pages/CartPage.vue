<template>
    <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name:'mainPage'}">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name:'cartPage'}">
            Корзина
          </router-link>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        {{numberProduct}} товара
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem v-for="itemProduct in this.cardDetalProducts" :key="itemProduct.productId" :item-product="itemProduct"/>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc" v-if="numberProduct === 0">
            Ваша корзина пуста.<br> Пожалуйста добавте товар в корзину
          </p>
          <div class="cart__wrapper" v-else>
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{this.totalPrice}}</span>
          </p>

          <router-link tag="button" :to="{name: 'orderPage'}" class="cart__button button button--primery" type="submit" >
            Оформить заказ
          </router-link>
          </div>

        </div>
      </form>
    </section>
  </main>
</template>

<script>
import numberFormat from '@/helpers/numberFormat'
import { mapGetters } from 'vuex'
import CartItem from '@/components/cart/CartItem'
export default {
  components: { CartItem },
  filters: {
    numberFormat
  },
  computed: {
    ...mapGetters(['cardDetalProducts', 'totalPrice', 'numberProduct'])
  }
}
</script>
