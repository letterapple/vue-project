
var User = function () {
  this.username = ''              // 用户名
  this.nickname = ''               // 昵称
  this.email = ''                  // 邮箱地址
  this.phone = ''                  // 手机或电话号码
};

User.translate = function (authData) {
  var user = new User()
  // auth base info
  user.username = authData.username || ''
  user.nickname = authData.nickname || ''
  user.email = authData.email || ''
  user.phone = authData.phone || ''
  return user
}

module.exports = User