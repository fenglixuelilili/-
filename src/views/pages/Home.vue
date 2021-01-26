<template>
  <div class="home">
    <header-scroll-menu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderScrollMenu from '@/components/HeaderScrollMenu'
@Component({
  components: {
    HeaderScrollMenu
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home{
  
}
</style>
