<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="color in productColors" :key="color.id">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio"   :value="color.value" checked=""  v-model="colorPick">
        <span class="colors__value"   :style="{background:color.value}"></span>
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
  },
  data () {
    return {
      colorPick: this.productColors[0].value
    }
  }
}
</script>
