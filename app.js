var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;
