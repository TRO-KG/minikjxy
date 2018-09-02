Page({
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
  }
})