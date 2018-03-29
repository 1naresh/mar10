var express=require('express')
var fs=require('fs')
var bodyParser=require('body-parser')
// var mongoose=require('mongoose')
// var data=require('./routes/data')
var scripts=require('./routes/scripts')
var templates=require('./routes/templates')
var app=express();

// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost/test')

app.get('/index',function(req,res){
    fs.readFile('src/index.html','utf8',function(err,data){
        res.send(data)
    })
})
app.get('/style.css',function(req,res){
    fs.readFile('src/css/style.css','utf8',function(err,data){
        res.send(data)
    })
})
app.get('/app.js',function(req,res){
    fs.readFile('src/js/app.js','utf8',function(err,data){
        res.send(data)
    })
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/data',data)
app.use('/js',scripts)
app.use('/templates',templates)
app.listen(100,function(){
    console.log('server is listening')
})