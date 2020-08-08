const express = require('express');
const router = express.Router();
const { sql, addSql, updateSql, delSql, mobileSql } = require("./sql");
const example = require("../../main");

/* GET users listing. */
router.post('/', function (req, res, next) {
  // 查询实例
  const { page, pageSize } = req.body;
  example.websites(sql, [page, pageSize]).then(result => {
    res.send(result);
  });
});

router.get('/add', function (req, res, next) {
  // 插入实例
  example.websites(addSql, ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN']);
});

router.get('/update', function (req, res, next) {
  // 更新实例
  example.websites(updateSql, ['菜鸟移动站', 'https://m.runoob.com', 6]);
});

router.get('/delete', function (req, res, next) {
  // 删除实例
  example.websites(delSql, []);
});

router.post('/test', function (req, res, next) {
  // 测试实例
  const obj = { code: 200, msg: "操作成功" };
  res.send(obj);
});

router.post('/menu', function (req, res, next) {
  const obj = {
    code: 200, msg: "操作成功" ,
    data:[
    {
      path: "/tacos",
      name: 'tacos',
      icon: "home"
    },
    {
      path: "/tac",
      name: 'tac',
      icon: "user",
      child:[
        {
          path: "/tac/bus",
          name: "/tac/bus",
          child: [
              {
                  path: "/tac/bus/bus2",
                  name: "/tac/bus/bus2",
              },
              {
                  path: "/tac/bus/bus3",
                  name: "/tac/bus/bus3"
              }
          ]
      },
      {
          path: "/tac/cart",
          name: "/tac/Cart"
      }
      ]
    },
    {
        path: "/about",
        name: 'About',
        icon: "user"
    }]
};

  res.send(obj);
});

router.post('/mobile', function (req, res, next) {
  // 查询手机验证码实例
  const { code } = req.body;
  // console.log("req,", req.query, req.body);
  example.websites(mobileSql, [code]).then(result => {
    res.send(result);
  });
});

module.exports = router;
