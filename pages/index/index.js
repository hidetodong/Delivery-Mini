//index.js
//获取应用实例
const app = getApp()
const api = require('../../utils/api')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    getShow: false,
    sendShow: false,
    getAction: [{
      name:'全部',
      value:''
    },{
      name: '菜鸟驿站',
      value: 1
    }, {
      name: '传媒学院',
      value: 2
    }],
    sendAction: [{
      name:'全部',
      value:''
    },{
        name: '17号楼',
        value: 3
      },
      {
        name:'14号楼',
        value: 4
      }
    ],
    isAuth:true,
    getPoint:'全部',
    sendPoint:'全部',
    misList:app.globalData.misList
  },
  onLoad() {},
  onShow() {
    // this.getStation()
    // this.getMission()
    this.setData({
      // isAuth:app.globalData.is_auth,
      misList:app.globalData.misList
    })
  },
  onGetSelect(e){
    console.log(e)
    this.setData({
      getPoint:e.detail.name,
      getShow: false,
      sendShow: false
    })
  },
  onSendSelect(e){
    console.log(e)
    this.setData({
      sendPoint:e.detail.name,
      getShow: false,
      sendShow: false
    })
  },
  toDeliver() {
    wx.navigateTo({
      url: '/pages/mission/toDeliver/toDeliver',
    })
  },
  openGet() {
    this.setData({
      getShow: true
    })
  },
  toAccept(e){
    if(!this.data.isAuth){
      return false
    }
    let {oid} = e.currentTarget.dataset
    let list = app.globalData.misList
    list.forEach((ele,idx)=>{
      if(ele.oid == oid){
        ele.is_accept = 1
        ele.status = 2
        console.log(ele)
      }
    })
    app.globalData.misList = list
    this.setData({
      misList:list
    })

  },
  openSend() {
    this.setData({
      sendShow: true
    })
  },
  onClose() {
    this.setData({
      getShow: false,
      sendShow: false
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleStation(data) {
    let arr1 = []
    let arr2 = []
    data.forEach((ele, idx) => {
      if (ele.station_type == 1) {
        arr1.push(ele)
      } else {
        arr2.push(ele)
      }
    })
    return [arr1, arr2]
  },
  getMission() {
    let self = this
    wx.request({
      url: `${api.baseApi}/mission/index`,
      method: "post",
      header: {
        'Content-Type': 'application/json',
      },
      success(res) {
        self.setData({
          misList: res.data.data
        })
      }
    })

  },
  getStation() {
    let self = this
    wx.request({
      url: `${api.baseApi}/station/index`,
      method: "post",
      header: {
        'Content-Type': 'application/json',
      },
      success(res) {
        let arr = self.handleStation(res.data.data)
        console.log(arr)
        self.setData({
          getAction: arr[0],
          sendAction: arr[1]
        })
        console.log(self.data.getAction, self.data.sendAction)
      }
    })
  }
})