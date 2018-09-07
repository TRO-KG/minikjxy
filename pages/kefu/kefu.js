Page({
  data:{
    QRcodeFlag: true
  },
  showQRcode: function(){
    var QRcodeFlag = !this.data.QRcodeFlag;
    console.log(QRcodeFlag);
    this.setData({ QRcodeFlag: QRcodeFlag})
  },
  makeCall: function(){
    wx.makePhoneCall({
      phoneNumber: '15838690657'
    })
  },
  addWhat:function(e){
    console.log(e);
    wx.getImageInfo({
      src: '/images/qrcode.png',
      success: function (res) {
        console.log(res)
      }
    })
  }
})