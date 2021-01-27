<template>
  <div 
    class="contComponent scrollY" 
    id='contComponent' 
    ref="contComponent" 
    @touchstart='touchStart($event)' 
    @touchmove='touchMove($event)' 
    @touchend='touchEnd($event)'>
    <div class="com-l" v-for="(item,index) in LISTS" :key='index'>
      <!-- 预加载上一个 与 下一个 -->
      <component
        :is="item.name" 
        :key="index + item.name" 
        v-if="active === item.name || getIndex === index - 1 || getIndex === index + 1"
        ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop , Watch} from 'vue-property-decorator';
import { scrollmenu } from '@/componetTypes.ts'
import follow from './cap-components/follow'
import recommend from './cap-components/recommend'
import nvideo from './cap-components/nvideo'
import talking from './cap-components/talking'
import appearance from './cap-components/appearance'
import delicious from './cap-components/delicious'
import livebroadcast from './cap-components/livebroadcast'
import cart from './cap-components/cart'
import projection from './cap-components/projection'
import npicture from './cap-components/npicture'
import words from './cap-components/words'
import game from './cap-components/game'
import novel from './cap-components/novel'
import welltodo from './cap-components/welltodo'
let ele = null
function scrollTo(el,number){
  if(!ele){
    ele = document.querySelector('#' + el)
  }
  ele.scrollTo({
    left: number,
    behavior: "smooth"
  })
}
@Component({
  components: {
    follow,
    recommend,
    nvideo,
    talking,
    appearance,
    delicious,
    livebroadcast,
    cart,
    projection,
    npicture,
    words,
    game,
    novel,
    welltodo
  },
})
export default class Home extends Vue {
  @Prop({ type: Array, default: [] }) readonly LISTS!: scrollmenu[]
  @Prop({ type: String }) readonly active!: String
  get getIndex(){
    return this.LISTS.findIndex(item=>item.name === this.active)
  }
  @Watch('active',{ immediate:true })
  changeActive(newvalue){
    console.log(this.getIndex,'this.getIndex',scrollTo)
    setTimeout(() => {
      scrollTo('contComponent',this.getIndex * this.Screenwidth)
    }, 0);
  }
  startX: Number
  endX: Number
  Screenwidth: Number = window.screen.width
  touchStart(e){
    this.startX = e.touches[0].clientX
  }
  touchMove(e){
    // console.log('移动')
    let end: Number = e.touches[0].clientX
    let _ch: Number = end - this.startX
    console.log(_ch)
    if(end > this.startX){
      // 往右划
      // 计算差值
      scrollTo('contComponent',this.Screenwidth * this.getIndex - _ch)
    }else{
      // 往左划
      scrollTo('contComponent',this.Screenwidth * this.getIndex - _ch)
    }
    this.endX = e.touches[0].clientX
  }
  touchEnd(e){
    let end: Number = this.endX
    // 在结束位置判断是否需要进行切换
    let flag = Math.abs(this.startX - end) > 80
    if(end > this.startX && flag){
      // 往右划
      if(this.getIndex === 0) return
      this.$emit('setActive', this.LISTS[this.getIndex - 1].name)
      this.$emit('updateScrollHeader')
    }else if(end < this.startX && flag){
      // 往左划
      if(this.getIndex === this.LISTS.length-1) return
      this.$emit('setActive', this.LISTS[this.getIndex + 1].name)
      this.$emit('updateScrollHeader')
    }else{
      // 复原
      scrollTo('contComponent',this.Screenwidth * this.getIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
  .contComponent{
    position: fixed;
    width: 100vw;
    height: 100%;
    // padding-bottom: r(85);
    overflow-x: scroll;
    display: flex;
    &::-webkit-scrollbar{
      width: 0;
    }
    .com-l{
      width: 100%;
      height: 100%;
      flex: 0 0 100%;
      background-color: #fff;
    }
  }
  .scrollX{
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .scrollY{
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>