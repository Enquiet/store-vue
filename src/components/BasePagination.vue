<template>
     <ul class="catalog__pagination pagination">
      <li class="pagination__item" @click.prevent="switchesPages(page - 1)">
        <a class="pagination__link pagination__link--arrow"
        :class="{'pagination__link--disabled':page === 1 }" aria-label="Предыдущая страница">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li class="pagination__item" v-for="pageNumber in Pages" :key="pageNumber" @click.prevent="paginate(pageNumber)">
        <a href="#" class="pagination__link" :class="{'pagination__link--current' : pageNumber === page }">
          {{pageNumber}}
        </a>
      </li>
      <li class="pagination__item" @click.prevent="switchesPages(page + 1)" >
        <a class="pagination__link
        pagination__link--arrow" :class="{'pagination__link--disabled':page === Pages}"  href="#" aria-label="Следующая страница" >
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 0
    },
    allProducts: {
      type: Number,
      default: 0
    },
    PerProducts: {
      type: Number,
      default: 0
    }
  },
  methods: {
    paginate (page) {
      this.$emit('update:pages', page)
    },
    switchesPages (pages) {
      if (pages >= 1 && pages <= this.Pages) {
        this.paginate(pages)
      }
    }
  },
  computed: {
    Pages () {
      return Math.ceil(this.allProducts / this.PerProducts)
    }
  }
}
</script>
