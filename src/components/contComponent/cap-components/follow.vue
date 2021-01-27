<template>
  <div class="follow">
    <p v-for="(item) in arr" :key="item">follow</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Home extends Vue {
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
