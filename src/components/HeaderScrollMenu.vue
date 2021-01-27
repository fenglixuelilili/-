<template>
  <div class="HeaderScrollMenu lists" ref="HeaderScrollMenu" :style="{backgroundColor: bgm}">
      <div class="list" :ref="'HeaderScrollMenu' + item.name" :class="{active:active === item.name}" v-for="(item,index) in LISTS" :key="index" @click="change(item)">
        {{item.text}}
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { scrollmenu } from './componetTypes.ts'
@Component({
  components: {
  },
})
export default class Home extends Vue {
  @Prop({ type: String, default: '#fff' }) readonly bgm!: String
  @Prop({ type: Array, default: [] }) readonly LISTS!: scrollmenu[]
  @Prop({ type: String }) readonly active!: String
  elementMenu: any
  elementMenuParent: any
  screenWidth: Number = window.screen.width
  scrollTo: Number = 0
  mounted() {
    this.elementMenuParent = this.$refs['HeaderScrollMenu']
  }
  change(item: scrollmenu){
    if(this.active === item.name) return
    this.$emit('setActive', item.name)
    this.elementMenu = this.$refs['HeaderScrollMenu' + item.name][0]
    let { left,width } = this.elementMenu.getBoundingClientRect()
    this.scrollTo = (left + width/2 - this.screenWidth / 2) + this.elementMenuParent.scrollLeft
    this.elementMenuParent.scrollTo({
      left:this.scrollTo,
      behavior: "smooth"
    })
  }
}
</script>
<style lang="scss" scoped>
  // $_height:r(35);
  .HeaderScrollMenu{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    height: $_height;
    background-color: #fff;
    position: relative;
    z-index: 1000;
    &::-webkit-scrollbar{
      width: 0;
    }
    .list{
      font-size: $bigsize15;
      flex: 0 0 15%;
      text-align: center;
      line-height: $_height;
      height: $_height;
      transition: transform 0.2s;
    }
    .active{
      color: $maincolor;
      font-weight: 800;
      transform: scale(1.2);
    }
  }
</style>