<template>
    <div>
        <label class="colors__label">
            <input class="colors__radio sr-only"
            type="radio" name="color-1" :value="color.value" checked="">
            <span class="colors__value" :style="color.colors">
            </span>
        </label>
    </div>
</template>
<script>

export default {
  props: {
    color: {
      type: Array,
      default: () => []
    }
  }
}
</script>
