const fs = require('fs');
// 打开指定文件并写入错误信息
const logPath = 'log/error.log';
exports.writeLog = function (string) {
    fs.open(logPath, 'a', (err, fd) => {
        if(err) {
            throw err
        } else {
            fs.write(fd, string+'\n', (err, written, string) => {
                if(err) {
                    throw err
                } else {
                    // console.log('已成功写入log')
                    // fs.close(fd)
                }
            })
        }
    })
}
// 清空log文件

exports.clearLog = function () {
    fs.writeFile(logPath, '', 'utf8', (err) => {
        if (err){
            console.log(err)
        } else {
            console.log('清空成功')
        }
    })
}

// module.exports = writeLog;
