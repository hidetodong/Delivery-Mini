// pages/mission/toDeliver/toDeliver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    getShow:false,
    sendShow:false,
    deliverShow:false,
    timeSelectShow:false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
        subname: '副文本',
        openType: 'share'
      }
    ]
  },
  report(){
    console.log('123')
    wx.request({
      url: 'http://127.0.0.1:3000/post',
      method:"post",
      data:{
        name:'林君怡',
        type:'sdu'
      },
      query:{
        name:'林君怡',
        type:'sdu'
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'data':{
          name:'林君怡',
          type:'sdu'
        }
      },
      success(res){
        console.log(res)
      }
    })
  },
  openGetSelect(){
    this.setData({
      getShow:true,
    })
  },
  openSendSelect(){
    this.setData({
      sendShow:true,
    })
  },
  openDeliverSelect(){
    this.setData({
      deliverShow:true
    })
  },
  openTimeSelect(){
    this.setData({
      timeSelectShow:true
    })
    
  },
  onClose(){
    this.setData({
      getShow:false,
      sendShow:false,
      deliverShow:false,
      timeSelectShow:false
    })
  },
  toDeliver(){
    wx.navigateTo({
      url: '/pages/mission/toDeliver/toDeliver',
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