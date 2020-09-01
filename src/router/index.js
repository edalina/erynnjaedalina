import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'

Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   let descriptionMeta = document.querySelector('head meta[name="description"]')
//   if (!descriptionMeta) {
//     descriptionMeta = document.createElement('meta')
//     descriptionMeta.setAttribute('name', 'description')
//     document.head.querySelector('title').after(descriptionMeta)
//   }
//   descriptionMeta.setAttribute('content', to.meta.description)
//   next()
// })

export default router
