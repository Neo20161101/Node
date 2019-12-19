const express = require('express');
const router = express.Router();
const sql = require("./sql");
const example = require("../../main");

const callback = function (data, res) {
  console.log("data",data);
  res.send(data);
  // 第一个参数：查询出来的数据，第二个是express返回客户端的response类
};
/* GET users listing. */
router.get('/', function(req, res, next) {
// 查询实例
  example.websites(sql.sql,[],res);
});

router.get('/add', function(req, res, next) {
// 插入实例
  example.websites(sql.addSql,['菜鸟工具', 'https://c.runoob.com','23453', 'CN'],res);
});

router.get('/update', function(req, res, next) {
// 更新实例
  example.websites(sql.updateSql,['菜鸟移动站', 'https://m.runoob.com',6],res);
});

router.get('/delete', function(req, res, next) {
// 删除实例
  example.websites(sql.delSql,[],res);
});


router.post('/mobile', function(req, res, next) {
// 查询手机验证码实例
  const { code } = req.body;
  console.log("req,",req.query,req.body);
  example.websites(sql.mobileSql,[code]).then(result => {
    res.send(result);
  });
});


module.exports = router;
