
const  sql = 'SELECT * FROM websites';//查询数据
const  addSql  = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';//插入数据
const updateSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';//更新数据
const delSql = 'DELETE FROM websites where id=6';//删除数据

module.exports ={ sql,addSql,updateSql,delSql };





