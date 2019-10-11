const db = require("./mysql");
// 查询实例
const websites = function (sql,params,callback,res){
    db.query(sql, params,function(result,fields){
        callback(result, res);
    });
};

exports.websites  = websites;