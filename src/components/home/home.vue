<template>
  <div class="home">
    <side-bar></side-bar>
    <head-bar></head-bar>
    <div class="content">
      <carousel-panel></carousel-panel>
    </div>
    <div>新分支测试</div>
  </div>
</template>

<script>
  import sideBar from '../sideBar/sideBar.vue'
  import headBar from '../headBar/headBar.vue'
  import carouselPanel from './carousel.vue'
  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {
      sideBar,
      headBar,
      carouselPanel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  @import "less/home.less";
</style>

