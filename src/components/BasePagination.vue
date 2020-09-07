<template>
     <ul class="catalog__pagination pagination">
      <li class="pagination__item" @click.prevent="PreviousPage()">
        <a class="pagination__link pagination__link--arrow"
        :class="{'pagination__link--disabled':page === 1 }" aria-label="Предыдущая страница">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li class="pagination__item" v-for="pageNumber in getPages" :key="pageNumber" @click.prevent="paginate(pageNumber)">
        <a href="#" class="pagination__link" :class="{'pagination__link--current' : pageNumber === page }">
          {{pageNumber}}
        </a>
      </li>
      <li class="pagination__item" @click.prevent="NextPage()" >
        <a class="pagination__link
        pagination__link--arrow" :class="{'pagination__link--disabled':page === getPages}"  href="#" aria-label="Следующая страница" >
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
      this.$emit('update:page', page)
    },
    NextPage () {
      if (this.page < this.getPages) {
        this.$emit('update:page', this.page + 1)
      }
    },
    PreviousPage () {
      if (this.page > 1) {
        this.$emit('update:page', this.page - 1)
      }
    }
  },
  computed: {
    getPages () {
      return Math.ceil(this.allProducts / this.PerProducts)
    }
  }
}
</script>
