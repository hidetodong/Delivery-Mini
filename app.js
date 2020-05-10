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
    is_login:0,
    misList: [
      {
        oid: '1',
        size: '超大件',
        start_station: '菜鸟驿站',
        end_station: '17号楼',
        pusher: 'niuniu',
        is_mine: 0,
        is_accept: 0,
        price: 5,
        status: 0,
        end_time: '2020-05-16 17:00',
        phone: '15899999999',
        content: '【菜鸟驿站】天天快递单号*1522，请21点前凭货号10672到菜鸟驿站进行取件'
      },
      {
        oid: "2",
        size: '超大件',
        start_station: '菜鸟驿站',
        end_station: '14号楼',
        pusher: '阿武',
        is_mine: 0,
        price: 20,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-20 08:00',
        phone: '15811111111',
        content: '【菜鸟驿站】天天快递单号*1159，请21点前凭货号10692到菜鸟驿站进行取件'
      },
      {
        oid: '3',
        size: '小件',
        start_station: '传媒学院',
        end_station: '17号楼',
        pusher: '阿强',
        is_mine: 0,
        price: 10,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-15 11:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*2105，请21点前凭货号20515到菜鸟驿站进行取件'
      },
      {
        oid: '4',
        size: '大件',
        start_station: '传媒学院',
        end_station: '17号楼',
        pusher: '阿强',
        is_mine: 0,
        price: 10,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-12 11:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*2105，请21点前凭货号20515到菜鸟驿站进行取件'
      },
      {
        oid: '5',
        size: '小件',
        start_station: '12号楼收发室',
        end_station: '17号楼',
        pusher: '阿强',
        is_mine: 0,
        price: 10,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-14 19:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*2155，请21点前凭货号11047到菜鸟驿站进行取件'
      },
      {
        oid: '6',
        size: '超大件',
        start_station: '16号楼收发室',
        end_station: '1号楼',
        pusher: '阿牛',
        is_mine: 0,
        price: 10,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-13 16:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*1088，请21点前凭货号21082到菜鸟驿站进行取件'
      },
      {
        oid: '7',
        size: '大件',
        start_station: '12号楼收发室',
        end_station: '14号楼',
        pusher: '阿牛',
        is_mine: 0,
        price: 10,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-15 15:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*1188，请21点前凭货号22541到菜鸟驿站进行取件'
      },
      {
        oid: '8',
        size: '大件',
        start_station: '生活区门口',
        end_station: '17号楼',
        pusher: '阿牛',
        is_mine: 0,
        price: 10,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-15 17:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*1108，请21点前凭货号21541到菜鸟驿站进行取件'
      },
      {
        oid: '9',
        size: '小件',
        start_station: '16号楼收发室',
        end_station: '17号楼',
        pusher: '阿强',
        is_mine: 0,
        price: 1,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-15 18:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*1118，请21点前凭货号22510到菜鸟驿站进行取件'
      },
      {
        oid: '10',
        size: '大件',
        start_station: '12号楼收发室',
        end_station: '5号楼',
        pusher: '阿强',
        is_mine: 0,
        price: 1,
        status: 0,
        is_accept: 0,
        end_time: '2020-05-11 20:00',
        phone: '15822222222',
        content: '【菜鸟驿站】天天快递单号*1229，请21点前凭货号22850到菜鸟驿站进行取件'
      },
    ],
    stuCodeArr:[
      {
        code:'160710222',
        name:'niuniu'
      },
      {
        code:'160710112',
        name:'阿武'
      },
      {
        code:'160720222',
        name:'阿和'
      },
      {
        code: '150705241',
        name:'杨妮'
      }
    ],
    user:[{
      name:'安安',
      pass:'1'
    },{
      name:'海丝',
      pass:'123456'
    }]
  }
})