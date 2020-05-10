// pages/intro/intro.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:app.globalData.is_login
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toDeliver(){
    wx.navigateTo({
      url: '/pages/mission/toDeliver/toDeliver',
    })
  },
  toList(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onLoad: function (options) {
    this.setData({
      isLogin:app.globalData.is_login == 0 ? false:true
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
      isLogin:app.globalData.is_login == 0 ? false:true
    })
  },
  toLogin(){
    wx.showModal({
      title:'提示',
      content:'请先登录/注册',
      success:(res)=>{
        if(res.confirm){
          wx.navigateTo({
            url: '/pages/register/register',
          })
        }
        if(res.cancel){
          
        }
      },
      fail:()=>{

      }
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