// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    password:'',
    code:''
  },
  login(){
    let users = app.globalData.stuCodeArr
    users.forEach((ele,idx)=>{
      if(ele.code == this.data.code){
        if(ele.name == this.data.name){
          app.globalData.is_auth = 1
          app.globalData.stu_code = ele.code
          wx.showToast({
            title: '认证成功!',
            icon:'none'
          })
          wx.navigateBack({delta:1})
        }else{
          wx.showToast({
            title: '学号与姓名不匹配！',
            icon:'none'
          })
        }
      }else{
        app.globalData.is_auth = 0
        wx.showToast({
          title: '认证失败！',
          icon:'none'
        })
      }
    })
  },
 
  getName(e){
    this.setData({
      name:e.detail.value
    })
  },
  getCode(e){
    this.setData({
      code:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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