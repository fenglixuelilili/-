<template>
  <div id="app">
    <router-view/>
    <div class="menu-app">
      <m-menu />
    </div>
  </div>
</template>
<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'
  import mMenu from '@/components/Menu'
  @Component({
    components: {
      mMenu
    }
  })
  export default class App extends Vue {
  }
</script>
<style lang="scss">
#app{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  .menu-app{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
