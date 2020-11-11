import { mapGetters } from 'vuex'
import InfoProductCart from '@/components/InfoProductCart.vue'
export default {
  components: {
    InfoProductCart
  },
  computed: {
    ...mapGetters(['cardDetalProducts'])
  }
}
