//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    pusher: '安安',
    pushCash: 0,
    pullCash: 0,
    stu_code: '',
    is_auth: 0,
    misList: [{
        oid: '1',
        size: '大件',
        start_station: '菜鸟驿站',
        end_station: '17号楼',
        pusher: '安安',
        is_mine: 1,
        is_accept: 0,
        price: 5,
        status: 1,
        end_time: '2020-05-16 17:00',
        phone: '15899999999',
        content: '感谢'
      },
      {
        oid: '4',
        size: '超大件',
        start_station: '菜鸟驿站',
        end_station: '17号楼',
        pusher: 'niuniu',
        is_mine: 0,
        is_accept: 0,
        price: 5,
        status: 1,
        end_time: '2020-05-16 17:00',
        phone: '15899999999',
        content: '感谢'
      },
      {
        oid: "2",
        size: '超大件',
        start_station: '菜鸟驿站',
        end_station: '14号楼',
        pusher: '阿武',
        is_mine: 0,
        price: 20,
        status: 2,
        is_accept: 1,
        end_time: '2020-05-20 08:00',
        phone: '15811111111',
        content: '准时到'
      },
      {
        oid: '3',
        size: '小件',
        start_station: '传媒学院',
        end_station: '17号楼',
        pusher: '阿强',
        is_mine: 0,
        price: 10,
        status: 3,
        is_accept: 0,
        end_time: '2020-05-15 11:00',
        phone: '15822222222',
        content: '放在楼下'
      },
    ],
    stuCodeArr:[
      '160710222',
      '160710112',
      '160720222'
    ],
    user:[{
      name:'安安',
      pass:'123456'
    },{
      name:'海丝',
      pass:'123456'
    }]
  }
})