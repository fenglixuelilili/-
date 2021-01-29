<template>
  <div class="home">
    <header-scroll-menu :LISTS='LISTS' :active='active' @setActive='setActive' ref='scrollcom'/>
    <cont-component 
      :LISTS='LISTS' 
      :active='active' 
      @setActive='setActive' 
      @updateScrollHeader='updateScrollHeader'></cont-component>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderScrollMenu from '@/components/HeaderScrollMenu'
import contComponent from '@/components/contComponent'
import { scrollmenu } from '@/componetTypes.ts'
interface mobject  {
  [x: string]: any
}
@Component({
  components: {
    HeaderScrollMenu,
    contComponent
  },
})
export default class Home extends Vue {
  readonly LISTS: scrollmenu[] = [
    { name: 'follow', text: '关注' },
    { name: 'recommend', text: '推荐' },
    { name: 'nvideo', text: '视频' },
    { name: 'talking', text: '瞎聊' },
    { name: 'appearance', text: '颜值' },
    { name: 'delicious', text: '真香' },
    { name: 'livebroadcast', text: '直播' },
    { name: 'cart', text: '汽车' },
    { name: 'projection', text: '放映厅' },
    { name: 'npicture', text: '图片' },
    { name: 'words', text: '文字' },
    { name: 'game', text: '游戏' },
    { name: 'novel', text: '小说' },
    { name: 'welltodo', text: '小康' }
  ]
  // 非空断言
  scrollcom!: mobject
  currentindex = 1
  active: string = this.LISTS[this.currentindex].name
  setActive(name: string){
    this.active = name
  }
  updateScrollHeader(){
    let index = this.LISTS.findIndex(item=>this.active === item.name)
    this.scrollcom['change'](this.LISTS[index])
  }
  mounted() {
   this.scrollcom = {...this.$refs['scrollcom']}
  }
}
</script>
<style lang="scss" scoped>
.home{
  
}
</style>
