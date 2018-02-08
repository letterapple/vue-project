/**
 * 测试数据管理
 * Created by apple on 2017/6/30.
 */

var express = require('express')
// 添加测试数据
var appData = require('./testData/good.json')
var goods = appData.goods
var userData = require('./modules/login/userInfo.json')
var userInfo = userData.userList
var apiRoutes = express.Router()
var userDto = require('./modules/login/userInfo.dto')

// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
  port: 3000
})

exports.testData = function (app) {
  apiRoutes.get('/goods', function (req, res) {   /* 定义接口并返回数据 */
    res.json({
      data: goods
    })
  })
  apiRoutes.get('/register', function (req, res) {   /* 定义接口并返回数据 */
    let params = req.query
    userInfo.push(userDto.translate(params))
    res.json({
      success: true,
      data: userDto.translate(params)
    })
  })
  app.use('/api', apiRoutes) // 定义接口在/api目录下，方便管理
}

