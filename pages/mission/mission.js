// pages/mission/mission.js
const app = getApp()
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
    activeIndex:0,
    getShow:false,
    actions: [
      {name:'全部',status:0},
      {
        name: '进行中',
        status:1
      },
      {
        name: '已完成',
        status:2
      },
      {
        name: '已过期',
        status:3
      }
    ],
    statusName:[
      '全部','进行中','已完成','已过期'
    ]
  },
  toDeliver(){
    wx.navigateTo({
      url: '/pages/mission/toDeliver/toDeliver',
    })
  },
  onSelect(e){
    console.log(e)
    let list = app.globalData.misList
    let arr = []
    if(e.detail.status == 0){
      this.setData({
        misList:app.globalData.misList
      })
    }else{
      list.forEach((ele,idx)=>{
        if(ele.status == e.detail.status){
          arr.push(ele)
        }
      })
      this.setData({
        misList:arr
      })
    }
    this.setData({
      getShow:false
    })
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
      header: {
        'Content-Type': 'application/json'
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
  onClose(){
    this.setData({
      getShow:false
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
    this.setData({
      misList:app.globalData.misList
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
      misList:app.globalData.misList
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