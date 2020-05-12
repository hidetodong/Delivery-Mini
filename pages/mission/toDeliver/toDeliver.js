// pages/mission/toDeliver/toDeliver.js
const app = getApp()
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
    lastDate:'',
    actions: [
      {
        name: '小件'
      },
      {
        name: '大件'
      },
      {
        name: '超大件'
      }
    ],
    getAction: [{
      name:'全部',
      value:''
    },{
      name: '菜鸟驿站',
      value: 1
    }, {
      name: '传媒学院',
      value: 2
    },
    {
      name:'12号楼收发室',
      value:3
    },{
      name:'16号楼收发室',
      value:4
    },{
      name:'生活区门口',
      value:5
    }],
    sendAction: [{
      name:'全部',
      value:''
    },{
        name: '1号楼',
        value: 3
      },
      {
        name:'2号楼',
        value: 4
      },
      {
        name: '3号楼',
        value: 3
      },
      {
        name:'4号楼',
        value: 4
      },
      {
        name: '5号楼',
        value: 3
      },
      {
        name:'14号楼',
        value: 4
      },
      {
        name:'17号楼',
        value: 4
      }
    ],
    getPoint:'',
    sendPoint:'',
    deliverType:'',
    Price:'',
    Phone:'',
    lastTime:'',
    content:'',
    pusher:app.globalData.pusher,
    showArea:true
  },
  report(){
    // console.log('123')
    // wx.request({
    //   url: 'http://127.0.0.1:3000/users/new',
    //   method:"get",
    //   header: {
    //     'Content-Type': 'application/json',
    //   },
    //   success(res){
    //     console.log(res)
    //   }
    // })
    //全局订单列表增加
    let list = app.globalData.misList
    list.unshift({
      size:this.data.deliverType,
      start_station:this.data.getPoint,
      end_station:this.data.sendPoint,
      price:this.data.Price,
      phone:this.data.Phone,
      pusher:this.data.pusher,
      content:this.data.content,
      status:0,
      end_time:this.data.lastDate +' '+this.data.lastTime,
      oid:Number(list.length + 1),
      is_accept:0,
      is_mine:1
    })
    app.globalData.misList = list
    // 增加总支出
    let cash = app.globalData.pushCash 
    cash += Number(this.data.Price)
    app.globalData.pushCash = cash
    wx.navigateBack({delta:1})
  },
  openGetSelect(){
    this.setData({
      getShow:true,
      showArea:false,
    })
  },
  openSendSelect(){
    this.setData({
      sendShow:true,
      showArea:false
    })
  },
  getContent(e){
    this.setData({
      content:e.detail.value
    })
  },
  getPhone(e){
    console.log(e.detail.value)
    this.setData({
      Phone:e.detail.value
    })
  },
  getPrice(e){
    console.log(e.detail.value)

    this.setData({
      Price:e.detail.value
    })
  },
  onGetSelect(e){
    console.log(e)
    this.setData({
      getPoint:e.detail.name,
      getShow: false,
      sendShow: false,
      deliverShow:false,
      showArea:true
    })
  },
  onSendSelect(e){
    console.log(e)
    this.setData({
      sendPoint:e.detail.name,
      getShow: false,
      sendShow: false,
      deliverShow:false,
      showArea:true
    })
  },
  onDeliverSelect(e){
    console.log(e)
    this.setData({
      deliverType:e.detail.name,
      getShow: false,
      sendShow: false,
      deliverShow:false,
      showArea:true

    })
  },
  getDate(e){
    let val = e.detail.value
      val = new Date(val)
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      let hour = val.getHours()
      let minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      let timeValue = `${year}-${month}-${day}`
      console.log(timeValue)
      this.setData({
        lastDate:timeValue
      })
  },
  getTime(e){
    let val = e.detail.value
      this.setData({
        lastTime:val
      })
  },
  openDeliverSelect(){
    this.setData({
      deliverShow:true,
      showArea:false
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
      timeSelectShow:false,
      showArea:true
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
    this.setData({
      pusher:app.globalData.pusher
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