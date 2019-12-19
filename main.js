const db = require("./mysql");
// 查询实例
const websites = function (sql,params,res){
    return new Promise((resolve,reject)=>{
        db.query(sql,params,(results, fields)=>{
            resolve(results)
            // if(err){
            //
            //     reject(err)
            // }else{
            //     console.log('results',results)
            //
            // }
        })
    })
};

exports.websites  = websites;