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
        <div class="detail">
          <div class="list">
            <ul class="detail-column">
              <span>待处理订单</span>
              <span> 返修退换货</span>
              <span>降价商品</span>
            </ul>

            <ul class="detail-column">
              <span>消息</span>
              <span> 我的问答</span>
              <span>我的关注</span>
            </ul>

          </div>

          <div class="spliter"></div>

          <div class="list">
            <ul class="detail-column">
              <span>我的京豆</span>
              <span>我的白条</span>
            </ul>

            <ul class="detail-column">
              <span>我的优惠券</span>
              <span>我的理财</span>
            </ul>
          </div>

        </div>
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
