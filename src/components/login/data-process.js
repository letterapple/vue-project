/**
 * 注册登录数据处理
 * Created by apple on 2017/6/30.
 */

import Vue from 'vue'

export default {
  register (params) {
    console.log(params)
    return Vue.http.get('/api/register', {params: params})
  }
}