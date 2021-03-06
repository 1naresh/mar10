var express=require('express')
var router=express.Router()
var fs=require('fs')
router.get('/home.html',function(req,res){
    fs.readFile('src/html/home.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/products.html',function(req,res){
    fs.readFile('src/html/products.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/shapes.html',function(req,res){
    fs.readFile('src/html/shapes.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/lshape.html',function(req,res){
    fs.readFile('src/html/lshape.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/UShape.html',function(req,res){
    fs.readFile('src/html/UShape.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/parallelShape.html',function(req,res){
    fs.readFile('src/html/parallelShape.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/straightShape.html',function(req,res){
    fs.readFile('src/html/straightShape.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/sheets.html',function(req,res){
    fs.readFile('src/html/sheets.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/wordrobes.html',function(req,res){
    fs.readFile('src/html/wordrobes.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/fulllInteriors.html',function(req,res){
    fs.readFile('src/html/fulllInteriors.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/register.html',function(req,res){
    fs.readFile('src/html/register.html','utf8',function(err,data){
        res.send(data)
    })
})
router.get('/final.html',function(req,res){
    fs.readFile('src/html/final.html','utf8',function(err,data){
        res.send(data)
    })
})
module.exports=router;