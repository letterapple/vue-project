/**
 * 测试数据管理
 * Created by apple on 2017/6/30.
 */

var express = require('express')
// 添加测试数据
var appData = require('./testData/good.json')
var goods = appData.goods
var apiRoutes = express.Router()

exports.testData = function (app) {
  apiRoutes.get('/goods', function (req, res) {   /* 定义接口并返回数据 */
    res.json({
      data: goods
    })
  })
  app.use('/api', apiRoutes) // 定义接口在/api目录下，方便管理
}

