<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="(color,id) in productColors" :key="id">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio" name="color-1" :value="color.value" checked="">
        <span class="colors__value" :style="{background:color.value}"></span>
      </label>
    </li>
  </ul>
</template>
<script>

export default {
  props: {
    productColors: {
      type: Array,
      default: () => []
    }
  }
}
</script>
