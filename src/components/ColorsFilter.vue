<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цвет</legend>
    <ul class="colors">
      <li class="colors__item" v-for="color in colors" :key="color.id" >
        <label class="colors__label" >
          <input class="colors__radio sr-only" type="radio" name="color" :value="color.id" v-model="colorPick" checked="">
          <span class="colors__value" :style="{background: color.code}" >
                  </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: () => []
    },
    colorId: {
      type: Number,
      default: 0
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
