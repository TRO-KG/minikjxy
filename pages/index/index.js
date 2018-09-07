Page({
  data:{
    curTab: "0"
  },
  onLoad:function(options){
    this.getHomeData();
  },
  swichNav:function(e){
    var cur = e.currentTarget.dataset.cur;
    var that = this;
    var allGoods = '';
    switch (cur){
      case "0":
        allGoods = that.data.goodsData.allGoods;
      break;
      case "1":
        allGoods = that.data.goodsData.hotGoods;
      break;
      case "2":
        allGoods = that.data.goodsData.huiGoods;
      break;
    }
     this.setData({ curTab: cur, allGoods: allGoods });
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
  toDetails: function(){
    wx.navigateTo({
      url: '/pages/goods/goods'
    })
  },
  getHomeData:function(){
    var that = this;
    wx.request({
      url: 'http://kjxy.applinzi.com/?act=all',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ goodsData: res.data,allGoods: res.data.allGoods});
      }
    })
  }
})