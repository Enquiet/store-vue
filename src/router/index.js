import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import OrderPage from '@/pages/OrderPage.vue'
import OrderInfoPage from '@/pages/OrderInfoPage.vue'
import CartPage from '@/pages/CartPage.vue'

Vue.use(VueRouter)
const routes = [
  { name: 'mainPage', component: MainPage, path: '/' },
  { name: 'cartPage', component: CartPage, path: '/cart' },
  { name: 'orderPage', component: OrderPage, path: '/order' },
  { name: 'infoPage', component: OrderInfoPage, path: '/order/:id' },
  { name: 'productPage', component: ProductPage, path: '/product/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' }
]
const router = new VueRouter({
  routes
})

export default router
