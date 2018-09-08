Page({
  data:{
    currentTab:"0"
  },
  onLoad: function (options) {
    this.getGoodsDetails(options.goodsId)
  },
  getGoodsDetails:function(goodsId){
    console.log(goodsId);
  },
  scrollTab:function(e){
    console.log(e);
    var cur = e.currentTarget.dataset.cur;
    this.setData({ currentTab:cur});
  },
  toShoppingCar:function(){
    wx.switchTab({
      url: '/pages/shoppingcar/shoppingcar'
    }) 
  },
  toKF:function(){
    wx.switchTab({
      url: '/pages/kefu/kefu'
    }) 
  },
  toHome:function(){
    wx.switchTab({
      url: '/pages/index/index'
    }) 
  }
})