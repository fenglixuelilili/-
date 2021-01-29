
import { Component, Vue } from 'vue-property-decorator';
import _  from 'lodash'
export class myonscroll extends Vue {
  ele!: Element
  timer!: any
  scrollffn(): Function{
    let that = this
    return _.throttle(function() {
      clearTimeout(this.timer)
      that.$emit('disablex')
      this.timer = setTimeout(() => {
        that.$emit('surex')
      }, 500);
    }, 500, {
      leading: true,
      trailing: false
    })()
  }
  mounted() {
    document.querySelector('.follow').addEventListener('scroll',this.scrollffn)
  }
}