<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class="apple">hello apple!</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
@import "./home.less";
</style>

