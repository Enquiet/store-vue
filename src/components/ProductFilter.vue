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

  <MemoryFilter  :memory-list="allMemory" :memory-product.sync="currentMemory" :quantity-products="getQuantityProductsMemory"/>

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
      currentMemory: []
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
      type: Array,
      default: () => []
    }
  },
  computed: {
    getQuantityProductsMemory () {
      const repeatedMemory = {
        64: 0,
        128: 0
      }
      const quantityProducts = categoriesProduсts
        .reduce((accmulator, item) => {
          return item.memory ? [...accmulator, ...item.memory] : accmulator
        }, [])
      for (let i = 0; i < quantityProducts.length; i++) {
        if (quantityProducts[i].value === 128) {
          repeatedMemory['128'] = repeatedMemory['128'] + 1
        }
        if (quantityProducts[i].value === 64) {
          repeatedMemory['64'] = repeatedMemory['64'] + 1
        }
      }
      return repeatedMemory
    },
    categories () {
      return categories
    },
    allColors () {
      const colorsItem = categoriesProduсts.reduce((accmulator, item) => {
        return item.colors ? [...accmulator, ...item.colors] : accmulator
      }, [])
      return this.getFilteredCategory(colorsItem)
    },
    allMemory () {
      const memoryItem = categoriesProduсts.reduce((accmulator, item) => {
        return item.memory ? [...accmulator, ...item.memory] : accmulator
      }, [])
      return this.getFilteredCategory(memoryItem)
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
    getFilteredCategory (item) {
      const uniqItem = [...new Set(item.map(arr => arr.value))]
      const resultSort = uniqItem.sort((a, b) => a - b)
      const result = resultSort.map(arr => item.find(arr2 => arr2.value === arr))
      return result
    },
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
      this.$emit('update:categoryColor', '')
      this.$emit('update:categoryMemory', [])
    }
  }
}

</script>
