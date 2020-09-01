<template>
    <ul class="catalog__list">
        <li class="catalog__item" v-for="(productItem,index) in productList" :key="index">
           <ProductItem :product="productItem"/>
        </li>
    </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  props: ['productList'],
  components: { ProductItem },
};

</script>
