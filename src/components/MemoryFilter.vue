<template>
    <fieldset class="form__block">
      <legend class="form__legend">Объемб в ГБ</legend>
      <ul class="check-list">
        <li class="check-list__item" v-for="memory in memoryList" :key="memory.value" >
          <label class="check-list__label">
            <input class="check-list__check sr-only" type="checkbox" name="volume" v-model="memoryPick" :value="memory.value" checked="">
            <span class="check-list__desc">
                    {{memory.value}}
                    <span>{{quantityProducts[memory.value]}} </span>
                  </span>
          </label>
        </li>
      </ul>
    </fieldset>
</template>

<script>
export default {
  props: {
    memoryList: {
      type: Array,
      default: () => []
    },
    memoryProduct: {
      type: Array,
      default: () => []
    },
    quantityProducts: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    memoryPick: {
      get () {
        return this.memoryProduct
      },
      set (value) {
        return this.$emit('update:memoryProduct', value)
      }
    }
  }
}
</script>
