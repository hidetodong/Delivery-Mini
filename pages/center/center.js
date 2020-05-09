// pages/center/center.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pushCash:app.globalData.pushCash,
    pullCash:app.globalData.pullCash
  },
  toMission(){
    wx.navigateTo({
      url: '/pages/mission/mission',
    })
  },
  toAuth(){
    wx.navigateTo({
      url: '/pages/center/studentAuth/studentAuth',
    })
  },
  toReg(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pusher:app.globalData.pusher,
      stu_code:app.globalData.stu_code,
      isAuth:app.globalData.is_auth,
      pushCash:app.globalData.pushCash,
      pullCash:app.globalData.pullCash
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      pusher:app.globalData.pusher,
      stu_code:app.globalData.stu_code,
      isAuth:app.globalData.is_auth,
      pushCash:app.globalData.pushCash,
      pullCash:app.globalData.pullCash
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})