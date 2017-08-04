<template>
  <div class="register-wrap">
    <div class="header">
      <div class="left">
        <a href="/"><img src="../../assets/images/register-logo.jpg"></a>
        <span class="logo-title">欢迎注册</span>
      </div>
      <div class="right">已有账号？<a href="/login">请登录</a></div>
    </div>
    <div class="body">
      <div class="register-form">
        <form method="get">
          <div class="input-item">
            <label>用户名</label>
            <input type="text" placeholder="您的账户名和登录名" name="username" v-model="username">
          </div>
          <div class="input-item">
            <label>设置密码</label>
            <input type="password" placeholder="建议至少使用两种字符" name="password" v-model="password" minlength="6" maxlength="18">
          </div>
          <div class="input-item">
            <label>确认密码</label>
            <input type="password" placeholder="请再次输入密码" name="confirmPassword" v-model="confirmPassword">
          </div>
          <div class="input-item" v-show="isShow">
            <label>邮箱验证</label>
            <input type="text" placeholder="建议使用常用邮箱" name="email" v-model="email">
          </div>
          <div class="verification-mode" @click="verificationModeClick">{{verificationMode}}</div>
          <div class="input-item phone">
            <label @click="phoneClick"><span>{{currCounty}}</span><i class="iconfont icon-triangle-up"></i></label>
            <input type="text" placeholder="建议使用常用手机" name="phone" v-model="phone">
            <register-phone-extend v-show="isPhoneExtend" @changeCounty="changeCounty"></register-phone-extend>
          </div>
          <div class="form-agreen">
            <input type="checkbox" v-model="agreenChecked"> <span>阅读并同意 <a>《京东用户注册协议》</a> <a>《隐私政策》</a> </span>
          </div>
          <input type="submit" class="submit" value="立即注册" @click="validate"/>
        </form>
      </div>
      <div class="register-link">
        <div class="company">
          <i class="iconfont icon-office"></i>
          <span>企业用户注册</span>
        </div>
        <div class="split"></div>
        <div class="customer">
          <i class="iconfont icon-sphere"></i>
          <span>INTERNATIONAL<br/>CUSTOMERS</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <a>关于我们</a>| <a>联系我们</a>| <a>人才招聘</a>| <a>商家入驻</a>| <a>广告服务</a>|<a>手机京东</a>|
        <a>友情链接</a>| <a>销售联盟</a>| <a>京东社区</a>| <a>京东公益</a>| <a>English Site</a>
      </div>
      <span>Copyright©2004-2016  京东JD.com 版权所有</span>
    </div>
  </div>
</template>

<script type="text/babel">
  import registerPhoneExtend from './register-phone-extend.vue'
  import dataProcess from './data-process'
  export default {
    props: {},
    data () {
      return {
        isShow: false,
        isPhoneExtend: false,
        currCounty: '中国 0086',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        errorMsg: '',
        agreenChecked: false,
        phoneNo: new RegExp(/^1[3-8]\d{9}$/),                                                  //
        emailNo: new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
      }
    },
    computed: {
      verificationMode () {
        return this.isShow ? '手机验证' : '邮箱验证'
      }
    },
    components: {
      registerPhoneExtend
    },
    mounted () {

    },
    watch: {},
    methods: {
      verificationModeClick () {
        this.isShow = !this.isShow;
      },
      phoneClick () {
        this.isPhoneExtend = !this.isPhoneExtend;
      },
      changeCounty (data) {
        this.currCounty = data
        this.isPhoneExtend = false
      },
      validate () {
        // 1 非空判断
        if (this.username === '' || this.password === '' || this.confirmPassword === '') {

          if (this.username === '') {
            this.errorMsg = '用户名不能为空'
            console.log(this.errorMsg)
            return false
          }

          if (this.password === '') {
            this.errorMsg = '密码不能为空'
            return false
          }

          if (this.confirmPassword === '') {
            this.errorMsg = '确认密码不能为空'
            return false
          }
          // 2 新密码与确认密码是否一致
          if (this.password !== this.confirmPassword) {
            this.errorMsg = '两次输入密码不一致'
            return false
          }
        }
        // 3 邮箱验证
        if (this.isShow && this.email === '' || (this.email !== '' && !this.emailNo.test(this.email))) {
          this.errorMsg = this.email === '' ? '邮箱不能为空' : '邮箱格式不正确'
          return false
        }
        // 4 手机验证
        if (!this.isShow && this.phone === '' || (this.phone !== '' && !this.phoneNo.test(this.phone))) {
          this.errorMsg = this.phone === '' ? '手机号码不能为空' : '手机格式不正确'
          return false
        }
        // 5  协议验证
        if (!this.agreenChecked) {
          this.errorMsg = '请同意协议并勾选'
        }

        dataProcess.register({
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.phone
        }).then(ret => {
          if (ret.body.success) {
            console.log(ret.body.data);
            localStorage.username = ret.body.data.username
            // localStorage.password = ret.body.data.password
            localStorage.email = ret.body.data.email
            localStorage.phone = ret.body.data.phone
            window.location.href = '/#/'
          }
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './less/register.less';
</style>
