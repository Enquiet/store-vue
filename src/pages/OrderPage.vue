<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html">
            Корзина
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        3 товара
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST" @submit.prevent="order" >
        <div class="cart__field">
          <div class="cart__data">
            <FormText title="ФИО" v-model="formData.name" type="text" placeholder="Введите имя" :error="formError.name"/>
            <FormText title="Адрес доставки" v-model="formData.address" type="text" placeholder="Введите ваш адрес" :error="formError.address"/>
            <FormText title="Телефон" v-model="formData.phone" type="tel" placeholder="Введите ваш телефон" :error="formError.phone"/>
            <FormText title="Email" v-model="formData.email" type="email" placeholder="Введите вашу почту" :error="formError.email"/>
            <FormTextarea title="Комментарий к заказу" v-model="formData.comment" placeholder="Ваши пожелания" :error="formError.comment"/>
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked="">
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                  <span class="options__value">
                    Курьером <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card">
                  <span class="options__value">
                    Картой при получении
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                  <span class="options__value">
                    Наличными при получении
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

       <div class="cart__block">
         <div v-if="this.numberProduct < 1 "> Товаров в корзине нет</div>
        <InfoProductCart  v-else v-for="infoProduct in this.cardDetalProducts" :key="infoProduct.productId"
        :info-product="infoProduct"
        :total-price="totalPrice"
        :number-products="numberProduct"
        />
          <button  class="cart__button button button--primery" type="submit" v-if="numberProduct > 0">
            Оформить заказ
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="this.errorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
           {{this.errorMessage}}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import FormText from '@/components/form/FormText.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'
import axios from 'axios'
import { API_URL } from '@/helpers/config.js'
import { mapMutations, mapGetters } from 'vuex'
import InfoProductCart from '@/components/InfoProductCart.vue'

export default {
  components: { FormText, FormTextarea, InfoProductCart },
  data () {
    return {
      formData: {
        comment: 'Без комментариев '
      },
      formError: {},
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters(['cardDetalProducts', 'numberProduct', 'totalPrice'])
  },
  methods: {
    ...mapMutations(['clearCartProduct', 'updateOrderInfo']),
    order () {
      this.errorMessage = ''
      this.formError = {}
      axios.post(API_URL + '/api/orders', {
        ...this.formData
      }, {
        params: {
          userAccessKey: this.$store.state.userAccessKey
        }

      }).then((response) => {
        this.clearCartProduct()
        this.updateOrderInfo(response.data)
        this.$router.push({ name: 'infoPage', params: { id: response.data.id } })
      })
        .catch((error) => {
          this.formError = error.response.data.error.request || {}
          this.errorMessage = error.response.data.error.message
        })
    }
  }
}
</script>
