Page({
  toQuan: function(){
    wx.navigateTo({
      url: '/pages/quans/quans'
    })
  },
  toCollects: function () {
    wx.navigateTo({
      url: '/pages/collects/collects'
    })
  },
  toTuans: function () {
    wx.navigateTo({
      url: '/pages/tuans/tuans'
    })
  },
  toOrders:function(e){
    console.log(e);
  }
})