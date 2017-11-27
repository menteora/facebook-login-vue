import facebookLogin from './facebook-login.vue'
import facebookComments from './facebook-comments.vue'

export const facebookLoginPlugin = {
  install: function (Vue, options) {
    Vue.component(facebookLogin.name, facebookLogin)
  }
}
export default facebookLogin

export const facebookCommentsPlugin = {
  install: function (Vue, options) {
    Vue.component(facebookComments.name, facebookComments)
  }
}
export default facebookComments
