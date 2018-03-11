var express=require('express')
var mongoose=require('mongoose')
var router =express.Router()
var schema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    city:String,
    amount:Number,
    products:[],
})
var customer=mongoose.model('customer',schema)
router.post('/save',function(req,res){
    customer.create(req.body,function(err,post){
        if(err){
            console.log(err)
        }
        res.send(post)
    })
})
router.get('/getByPhone/:phone', function (req, res, next) {
    customer.findOne({ phone: req.params.phone }, function (err, data) {
        console.log(data)
        res.send(data);
    });
});
module.exports=router;