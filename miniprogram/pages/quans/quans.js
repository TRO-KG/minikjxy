// pages/quans/quans.js
Page({
  data:{
    curTab: "0"
  },
  swichNav: function(e){
    var cur = e.target.dataset.cur;
    if (this.data.curTab == cur){
      return true;
    }else{
      this.setData({
        curTab : cur
      })
    }
  }
})