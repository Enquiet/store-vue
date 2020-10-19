import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import CardPage from '@/pages/CardPage.vue'

Vue.use(VueRouter)
const routes = [
  { name: 'mainPage', component: MainPage, path: '/' },
  { name: 'cardPage', component: CardPage, path: '/card' },
  { name: 'productPage', component: ProductPage, path: '/product/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' }
]
const router = new VueRouter({
  routes
})

export default router