<template>

  <aside class="filter">
  <h2 class="filter__title">Фильтры</h2>

  <form class="filter__form form" action="#" method="get" @submit.prevent="getNewStatsProducts">
    <fieldset class="form__block">
      <legend class="form__legend">Цена</legend>
      <label class="form__label form__label--price">
        <input class="form__input" type="text" name="min-price"   v-model.number="currentPriceFrom">
        <span class="form__value">От</span>
      </label>
      <label class="form__label form__label--price">
        <input class="form__input" type="text" name="max-price" v-model.number="currentPriceTo">
        <span class="form__value">До</span>
      </label>
    </fieldset>

    <fieldset class="form__block">
      <legend class="form__legend">Категория</legend>
      <label class="form__label form__label--select">
        <select class="form__select" type="text" name="category" v-model.number="currentCategoryId" >
          <option value="0">Все категории</option>
          <option :value="category.id"  v-for="category in categories" :key="category.id">{{category.title}}</option>

        </select>
      </label>
    </fieldset>

  <ColorsFilter :color="allColors"  :color-id.sync="currentColor"/>

  <MemoryFilter  :memory="allMemory" :memory-product.sync="currentMemory" />

    <button class="filter__submit button button--primery" type="submit" >
      Применить
    </button>
    <button class="filter__reset button button--second" type="button"   @click="getDefaultStatsProducts">
      Сбросить
    </button>
  </form>
  </aside>
</template>
<script>
import categories from '../data/catigories'
import categoriesProduсts from '../data/goods'
import ColorsFilter from './ColorsFilter.vue'
import MemoryFilter from './MemoryFilter.vue'
export default {
  components: { ColorsFilter, MemoryFilter },
  data () {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColor: '',
      currentMemory: ''
    }
  },
  props: {
    priceTo: {
      type: Number,
      default: 0
    },
    priceFrom: {
      type: Number,
      default: 0
    },
    categoryId: {
      type: Number,
      default: 0
    },
    categoryColor: {
      type: String,
      default: ''
    },
    categoryMemory: {
      type: String,
      default: ''
    }
  },
  computed: {
    categories () {
      return categories
    },
    allColors () {
      const allColors = categoriesProduсts.reduce((accmulator, item) => {
        return item.colors ? [...accmulator, ...item.colors] : accmulator
      }, [])
      const uniqColor = [...new Set(allColors.map(arr => arr.value))]
      const result = uniqColor.map(arr => allColors.find(arr2 => arr2.value === arr))
      return result
    },
    allMemory () {
      const allMemory = categoriesProduсts.reduce((accmulator, item) => {
        return item.memory ? [...accmulator, ...item.memory] : accmulator
      }, [])
      const uniqMemoru = [...new Set(allMemory.map(arr => arr.value))]
      const result = uniqMemoru.map(arr => allMemory.find(arr2 => arr2.value === arr))
      return result
    }
  },
  watch: {
    priceTo (value) {
      this.currentPriceTo = value
    },
    priceFrom (value) {
      this.currentPriceFrom = value
    },
    categoryId (value) {
      this.currentCategoryId = value
    },
    categoryColor (value) {
      this.currentColor = value
    },
    categoryMemory (value) {
      this.currentMemory = value
    }

  },
  methods: {
    getNewStatsProducts () {
      this.$emit('update:priceFrom', this.currentPriceFrom)
      this.$emit('update:priceTo', this.currentPriceTo)
      this.$emit('update:categoryId', this.currentCategoryId)
      this.$emit('update:categoryColor', this.currentColor)
      this.$emit('update:categoryMemory', this.currentMemory)
    },
    getDefaultStatsProducts () {
      this.$emit('update:priceFrom', 0)
      this.$emit('update:priceTo', 0)
      this.$emit('update:categoryId', 0)
      this.$emit('update:categoryColor', 0)
      this.$emit('update:categoryMemory', 0)
    }
  }
}

</script>
