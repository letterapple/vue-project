<template>
  <div class="home">
    <fullpage></fullpage>
  </div>
</template>

<script>
  import fullpage from  '../common/fullpage/fullpage-manage.vue'
  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {
      fullpage
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  @import "less/home.less";
</style>

