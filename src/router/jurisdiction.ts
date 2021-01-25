import router from './index.ts'
router.beforeEach((to,from,next)=>{
  if(to.meta && to.meta.name){
    document.title = to.meta.name
  }else{
    document.title = '内涵段子'
  }
  next()
})