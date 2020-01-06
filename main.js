const db = require("./mysql");
// 查询实例
const websites = function (sql,params){
    return new Promise((resolve,reject)=>{
        db.query(sql,params,(results, fields)=>{
            resolve(results)
        })
    })
};

exports.websites  = websites;