import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Resource from 'vue-resource'
import router from './router'
Vue.use(Resource);
Vue.use(Vuetify)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
