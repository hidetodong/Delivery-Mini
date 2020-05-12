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
      {
        name:'全部',status:''},
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
      '待领取','进行中','已完成','已过期'
    ],
    misType:0,
    statusType:'全部'
  },
  toDeliver(){
    wx.navigateTo({
      url: '/pages/mission/toDeliver/toDeliver',
    })
  },
  toCancel(e){
    let list = app.globalData.misList
    let arr = []
    list.forEach((ele,idx)=>{
      if(e.currentTarget.dataset.oid != ele.oid){
        arr.push(ele)
      }
    })
    app.globalData.misList = arr
    this.selectTab({
      currentTarget:{
        dataset:{
          index:this.data.activeIndex
        }
      }
    })
  },
  toCancelMis(e){
    let list = app.globalData.misList
    list.forEach((ele,idx)=>{
      if(e.currentTarget.dataset.oid == ele.oid){
        ele.is_accept = 0
        ele.status = 0
      }
    })
    app.globalData.misList = list
    this.selectTab({
      currentTarget:{
        dataset:{
          index:this.data.activeIndex
        }
      }
    })
  },
  confirmArrive(e){
    let list = app.globalData.misList
    list.forEach((ele,idx)=>{
      if(e.currentTarget.dataset.oid == ele.oid){
        ele.status = 2
        app.globalData.pullCash += Number(ele.price)

      }
    })
    app.globalData.misList = list
    this.selectTab({
      currentTarget:{
        dataset:{
          index:this.data.activeIndex
        }
      }
    })
  },
  onSelect(e){
    console.log(e)
    let list = app.globalData.misList
    let arr = []
    let arr1 = []
    this.setData({
      statusType:e.detail.name
    })
    if(e.detail.status == ''){
      list.forEach((ele,idx)=>{
        if(ele.is_mine != this.data.activeIndex){
          if(this.data.activeIndex == 1){
            if(ele.is_accept == 1){
              arr1.push(ele)
            }
          }else{
            arr1.push(ele)
          }
        }
      })
      this.setData({
        misList:arr1
      })
    }else{
      list.forEach((ele,idx)=>{
        if(ele.status == e.detail.status){
          arr.push(ele)
        }
      })
      arr.forEach((ele,idx)=>{
        if(ele.is_mine != this.data.activeIndex){
          if(this.data.activeIndex == 1){
            if(ele.is_accept == 1){
              arr1.push(ele)
            }
          }else{
            arr1.push(ele)
          }
        }
      })
      this.setData({
        misList:arr1
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
    let list = app.globalData.misList
    let arr =[]
    this.setData({
      activeIndex:index
    })
    list.forEach((ele,idx)=>{
      if(ele.is_mine != index){
        if(this.data.activeIndex == 0){
          arr.push(ele)
        }
        if(this.data.activeIndex == 1){
          if(ele.is_accept == 1){
            console.log(arr)
            arr.push(ele)
          }
        }
      }
    })
    this.setData({
      misType:index,
      misList:arr
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
    this.selectTab({
      currentTarget:{
        dataset:{
          index:0
        }
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