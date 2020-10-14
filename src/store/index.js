import Vue from 'vue'
import Vuex from 'vuex'
import goods from '@/data/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardProducts: []
  },
  mutations: {
    addProductsCard (state, { productId, amount }) {
      const productItem = state.cardProducts.find(item => item.productId === productId)
      if (productItem) {
        productItem.amount += amount
      } else {
        state.cardProducts.push({
          productId,
          amount
        })
      }
    },
    updateProductCard (state, { productId, amount }) {
      const productItem = state.cardProducts.find(item => item.productId === productId)
      if (productItem) {
        productItem.amount = amount
      }
    },
    deleteProdictCard (state, productId) {
      state.cardProducts = state.cardProducts.filter(item => item.productId !== productId)
    }
  },
  getters: {
    cardDetalProducts (state) {
      return state.cardProducts.map(item => {
        return {
          ...item,
          product: goods.find(p => p.id === item.productId)
        }
      })
    },
    totalPrice (state, getters) {
      return getters.cardDetalProducts.reduce((acc, item) => (item.product.priceGoods * item.amount) + acc, 0)
    }
  }
})
