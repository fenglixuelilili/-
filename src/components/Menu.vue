<template>
  <div class="Menu">
    <div 
      v-for="(item,index) in MENUS" 
      :key="index"
      class="menu-item"
      :class="{active:item.name === active}"
      @click="changeRouter(item)">
      <img :src="getImgUrl(item)" alt="" class="top-img">
      <span class="name">{{item.name}}</span>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component , Watch} from 'vue-property-decorator'
import menus from '@/config/menuconfig.ts'
import { deepcopy } from '@/utils/index.ts'
import { menu } from '@/config/types'
@Component
export default class Menu extends Vue{
  readonly MENUS = deepcopy(menus)
  active: String = this.MENUS[0].name
  $router: any
  getImgUrl(item: menu):String{
    if(item.name === this.active){
      return item.activeImg
    }else{
      return item.img
    }
  }
  changeRouter(item: menu){
    this.$router.$push(item.path)
  }
  @Watch('$route')
  changerouter(newrouter){
    this.active = newrouter.meta.name
  }
}
</script>
<style lang="scss" scoped>
  .Menu{
    height: $bottomheight;
    background-color: $bgcolor;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #eee;
    .menu-item{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img{
        width: r(20);
        height: auto;
        margin-bottom: r(5);
      }
      .name{

      }
    }
    .active{

    }
  }
</style>