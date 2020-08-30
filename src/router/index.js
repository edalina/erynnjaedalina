import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Erynn Jae Dalina',
      description: 'Portfolio of Erynn Jae Dalina'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let descriptionMeta = document.querySelector('head meta[name="description"]')
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta')
    descriptionMeta.setAttribute('name', 'description')
    document.head.querySelector('title').after(descriptionMeta)
  }
  descriptionMeta.setAttribute('content', to.meta.description)
  next()
})

export default router
