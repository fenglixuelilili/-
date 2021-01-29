import router from './index.ts'
import { Route } from 'vue-router'
router.beforeEach((to: Route,from: Route,next: ()=>void): void => {
  if(to.meta && to.meta.name){
    document.title = to.meta.name
  }else{
    document.title = '内涵段子'
  }
  next()
})