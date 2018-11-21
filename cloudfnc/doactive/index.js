// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  if ( "getgoods" == event.act){
    const db = cloud.database();
    const goods = db.collection('goods');
    // goods.get({
    //   success: function (res) {
    //     return res;
    //   }
    // })
  }

}