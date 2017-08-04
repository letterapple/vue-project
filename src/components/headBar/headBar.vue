<template>
  <div class="headBar">
    <ul class="head-bar-menu">
      <li>
        <a href="/login" class="login" :class='{ hasUser : localStorage.username}'>{{login}}</a>
        <a href="/register" class="register">免费注册</a>
      </li>
      <span class="split">|</span>
      <li><a target="_blank" href="">我的订单</a></li>
      <span class="split">|</span>
      <li>
        <span>我的京东</span>
        <i class="iconfont icon-triangle-up"></i>
      </li>
      <span class="split">|</span>
      <li><a target="_blank" href="">京东会员</a></li>
      <span class="split">|</span>
      <li><a target="_blank" href="">企业采购</a></li>
      <span class="split">|</span>
      <li>
        <span>客户服务</span>
        <i class="iconfont icon-triangle-up"></i>
      </li>
      <span class="split">|</span>
      <li>
        <span>网站导航</span>
        <i class="iconfont icon-triangle-up"></i>
      </li>
      <span class="split">|</span>
      <li>
        <span>手机京东</span>
        <div class="qrcode"><img src="../../assets/images/qrcode.png"></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {},
    data () {
      return {}
    },
    computed: {
      localStorage () {
        return localStorage
      },
      login () {
        return  localStorage.username ? localStorage.username + '，请登录' : '登录'
      }
    },
    components: {},
    mounted () {},
    watch: {},
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './less/headBar.less';
</style>
