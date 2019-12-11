var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users/users');
var options = {
    dotfiles: 'ignore',
    redirect:true,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Headers", "X-Requested-With");
        res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.set("X-Powered-By", "3.2.1");
    }
}
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Cache-Control,withcredentials");
    (req.method=="OPTIONS" && res.send(200)) || next() /*让options请求快速返回*/
});



app.use('/', indexRouter);
app.use('/users', usersRouter);


// 捕获404并转发给错误处理程序
app.use(function(req, res, next) {
    next(createError(404));
});

// 错误处理
app.use(function(err, req, res, next) {
    // 设置局部变量，只提供开发中的错误
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // 渲染错误页面
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
