Page({
  data:{
    curTab: "0",
    proTitle: "全部产品"
  },
  onLoad:function(options){
    this.getHomeData();
    wx.cloud.callFunction({
      // 云函数名称
      name: 'doactive',
      // 传给云函数的参数
      data: {
        act: "getgoods"
      },
      success: function (res) {
        console.log(res) // 3
      },
      fail: console.error
    })
  },
  swichNav:function(e){
    var cur = e.currentTarget.dataset.cur;
    var that = this;
    var allGoods = '';
    var proTitle = '';
    switch (cur){
      case "0":
        allGoods = that.data.goodsData.allGoods;
        proTitle = "全部产品";
      break;
      case "1":
        allGoods = that.data.goodsData.hotGoods;
        proTitle = "热销";        
      break;
      case "2":
        allGoods = that.data.goodsData.huiGoods;
        proTitle = "优惠";
      break;
    }
    this.setData({ curTab: cur, allGoods: allGoods, proTitle: proTitle });
  },
  tokjxy: function(){
    wx.openLocation({
      latitude: 33.94985,
      longitude: 115.4883,
      scale: 22,
      name: '孔家香油',
      address: '鹿邑县贾滩镇贾滩街十字路口南150米'
    })
  },
  callkjxy: function(){
    wx.makePhoneCall({
      phoneNumber: '15838690657'
    })
  },
  showCase: function(){
    wx.navigateTo({
      url: '/pages/case/case'
    })
  },
  toDetails: function(e){
    var goodsId = e.currentTarget.dataset.goodsid;
    wx.navigateTo({
      url: '/pages/goods/goods?goodsId=' + goodsId
    })
  },
  toQuali:function(){
    wx.navigateTo({
      url: '/pages/quali/quali'
    })
  },
  toShoppingCar:function(){
    wx.navigateTo({
      url: '/pages/shoppingcar/shoppingcar'
    })
  },
  toMe:function(){
    wx.navigateTo({
      url: '/pages/me/me'
    })
  },
  toKeFu:function(){
    wx.navigateTo({
      url: '/pages/kefu/kefu'
    })
  },
  getHomeData:function(){
    var that = this;
    wx.cloud.init({
      traceUser: true
    })
    const db = wx.cloud.database();
    const goods = db.collection('goods');
    goods.get({
      success: function (res) {
        that.setData({ goodsData: res.data[0],allGoods: res.data[0].allGoods});
      }
    })
  }
})