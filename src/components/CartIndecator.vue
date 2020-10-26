<template>
  <router-link class="header__cart" :to="{name:'cartPage'}" aria-label="Корзина с товарами">
        <svg width="30" height="21" fill="currentColor">
          <use xlink:href="#icon-cart"></use>
        </svg>
        <span class="header__count" v-if="numberProduct > 0" aria-label="Количество товаров">{{numberProduct }}</span>
  </router-link>
</template>
<script>
export default {
  computed: {
    numberProduct () {
      return this.$store.state.cardProducts.length
    }
  }
}
</script>
