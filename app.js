const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');//日志
const createError = require('http-errors');
const fs = require('fs');
const FileStreamRotator = require('file-stream-rotator');
const common = require('./util/common');
// const ReactDOMServer = require("react-dom/server");
// const {renderToStaticMarkup,renderToNodeStream} = require('react-dom/server');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users/users');

const app = express();
const logDirectory = path.join(__dirname, 'log');//日志输出流配置
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYY-MM-DD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

app.all('*', function (req, res, next) {
  // console.log("req2,", req)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Cache-Control,withcredentials,ApiKey");
  (req.method == "OPTIONS" && res.send(200)) || next() /*让options请求快速返回*/
});


//4xx and 5xx打印日志short
app.use(logger('dev',{skip: function (req, res) { return res.statusCode < 400 }}));
app.use(logger('combined', {stream: accessLogStream}));//保存日志到log
app.use(express.json());//解析data数据
app.use(express.urlencoded({ extended: false }));//解析兼容请求数据格式
app.use(cookieParser());


// app.use(express.static(path.join(__dirname, 'public')));
//映射public文件路径，项目上要使用
app.use('/',express.static(path.resolve('public')))
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.use(function (req, res, next) {
  //条件：访问特定项目文件夹
  console.log(req.url)
  if (req.url.startsWith('/image')) {
    return next(createError(404))// 捕获404并转发给错误处理程序
  }
  if(req.method=='GET'){
    //如果访问url根路径不是image或者static就返回打包后的主页面
    // return res.render('index', {//需要服务端渲染
    //     component: ReactDOMServer.renderToNodeStream(path.resolve(__dirname, 'public', 'index.html'))
    // });
    return res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  }

  next(createError(404));// 捕获404并转发给错误处理程序
});

// 错误处理
app.use(function (err, req, res, next) {
  // 设置局部变量，只提供开发中的错误
  const code = err.status || 500;
  const error = JSON.stringify({"状态码":code,ReferenceError:err.message,error:err,"格林时间":req._startTime})
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  common.writeLog(error);//错误日志写入
  // 渲染错误页面
  res.status(code);
  res.send({code:code,msg:err.message});
});




module.exports = app;
