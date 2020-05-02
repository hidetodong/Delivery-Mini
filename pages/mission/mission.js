// pages/mission/mission.js
Page({

  /**
   * 页面的初始数据
   */
  data:  {
    tabList:[{
      name:"我发布的任务",
      tabIndex:0
    },{
      name:"我接取的任务",
      tabIndex:1
    }],
    activeIndex:0
  },
  toDeliver(){
    wx.navigateTo({
      url: '/pages/mission/toDeliver/toDeliver',
    })
  },
  selectTab(e){
    let {index} = e.currentTarget.dataset
    this.setData({
      activeIndex:index
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