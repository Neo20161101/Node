const express = require('express');
const router = express.Router();
const {sql,addSql,updateSql,delSql,mobileSql} = require("./sql");
const example = require("../../main");

/* GET users listing. */
router.get('/', function(req, res, next) {
// 查询实例
  example.websites(sql,[]).then(result => {
    res.send(result);
  });
});

router.get('/add', function(req, res, next) {
// 插入实例
  example.websites(addSql,['菜鸟工具', 'https://c.runoob.com','23453', 'CN']);
});

router.get('/update', function(req, res, next) {
// 更新实例
  example.websites(updateSql,['菜鸟移动站', 'https://m.runoob.com',6]);
});

router.get('/delete', function(req, res, next) {
// 删除实例
  example.websites(delSql,[]);
});

router.post('/login', function(req, res, next) {
  // 登录实例
    res.send(req.body);
});


router.post('/mobile', function(req, res, next) {
// 查询手机验证码实例
  const { code } = req.body;
  console.log("req,",req.query,req.body);
  example.websites(mobileSql,[code]).then(result => {
    res.send(result);
  });
});


module.exports = router;
