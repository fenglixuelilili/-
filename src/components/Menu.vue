<template>
  <div class="Menu">
    <div v-for="(item,index) in MENUS" :key="index">
      <img :src="item.img" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import menus from '@/config/menuconfig.ts'
import {deepcopy} from '@/utils/index.ts'
console.log(menus)
@Component
export default class Menu extends Vue{
  readonly MENUS = deepcopy(menus)
}
</script>
<style lang="scss" scoped>
  
</style>