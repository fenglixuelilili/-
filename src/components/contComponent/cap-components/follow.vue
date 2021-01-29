<template>
  <div class="follow">
    <p v-for="(item) in arr" :key="item">follow</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { myonscroll } from './onscroll.ts'
@Component({
  components: {
  },
})
export default class Home extends Mixins(myonscroll) {
  readonly arr: Number = 100
}
</script>
<style lang="scss" scoped>
  .follow{
    height: 100%;
    padding-bottom: r(85);
    overflow-y: scroll;

  }
</style>
