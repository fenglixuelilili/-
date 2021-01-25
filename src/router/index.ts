import Vue from 'vue';

import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/pages/Home.vue';

let _routerarr:String[] = [], prerouter:String
interface mRouterOptions {
  $push(route: any): void
}
class mVueRouter extends VueRouter implements mRouterOptions {
  $push(route: any): void{
    let _routepath = ''
    if(typeof route === 'string'){
      _routepath = route.slice(1)
    }else if(typeof route === 'object'){
      _routepath = route.name
    }
    if(_routepath === prerouter) return
    prerouter = _routepath
    if(_routerarr.includes(_routepath)){
      this.replace(route)
    }else{
      _routerarr.push(_routepath)
      this.push(route)
    }
    
  }
}

Vue.use(mVueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      name: '首页'
    }
  },
  {
    path: '/findsome',
    name: 'findsome',
    component: () => import('../views/pages/findsome.vue'),
    meta:{
      name: '发现'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/pages/message.vue'),
    meta:{
      name: '消息'
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/pages/my.vue'),
    meta:{
      name: '我的'
    }
  },
];

const router = new mVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});



export default router;
