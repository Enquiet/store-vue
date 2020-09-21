<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цвет</legend>
    <ul class="colors">
      <li class="colors__item" v-for="colors in color" :key="colors.id" >
        <label class="colors__label" >
          <input class="colors__radio sr-only" type="checkbox" name="color" :value="colors.value" v-model="colorPick" checked="">
          <span class="colors__value" :style="{background: colors.value}" >
                  </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {

  props: {
    color: {
      type: Array,
      default: () => []
    },
    colorId: {
      type: String,
      default: ' '
    }
  },
  computed: {
    colorPick: {
      get () {
        return this.colorId
      },
      set (value) {
        return this.$emit('update:colorId', value)
      }
    }
  }

}

</script>
