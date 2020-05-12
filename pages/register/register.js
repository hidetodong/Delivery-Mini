// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  login(){
    if(this.validateUser()){
      this.handleLogin()
    }else{
      this.handleRegister()
    }
  },
  validateUser(){
    let users = app.globalData.user
    let flag = false
    users.forEach((ele,idx)=>{
      if(ele.name == this.data.username){
        flag = true
      }
    })
    return flag
  },
  handleLogin(){
    let users = app.globalData.user
    let nameFlag = false
    let passFlag = false
    users.forEach((ele,idx)=>{
      if(ele.name == this.data.username){
        nameFlag = true
        if(ele.pass == this.data.password){
          passFlag = true
          app.globalData.pusher = this.data.username,
          app.globalData.is_login = 1
          wx.navigateBack({delta:1})
        }else{
          wx.showToast({
            title: '密码错误！',
            icon:'none'
          })
          return false
        }
      }
    })

  },
  handleRegister(){
    let users = app.globalData.user
    let flag = false
    users.forEach((ele,idx)=>{
      if(ele.name == this.data.user){
        flag = true
      }
    })
    if(flag){
      wx.showToast({
        title: '用户名已存在！',
        icon:'none'
      })
      return false
    }else{
      let user = {
        name:this.data.username,
        pass:this.data.password
      }
      app.globalData.is_login = 1
      app.globalData.pusher = this.data.username
      users.push(user)
      wx.navigateBack({delta:1})
    }
    
  },
  getName(e){
    this.setData({
      username:e.detail.value
    })
  },
  getPass(e){
    this.setData({
      password:e.detail.value
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