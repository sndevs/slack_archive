import Vue from 'vue'
import Router from 'vue-router'
import Channels from '../Channels.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/channels',
        name: 'Channels',
        component: Channels
    }]
})
