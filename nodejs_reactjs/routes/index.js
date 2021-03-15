var express = require('express');
var router = express.Router();
var userModel = require('../model/users.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xemjson', function(req, res, next) {
  //  // Website you wish to allow to connect
  //  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  //  // Request methods you wish to allow
  //  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  //  // Request headers you wish to allow
  //  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  //  // Set to true if you need the website to include cookies in the requests sent
  //  // to the API (e.g. in case you use sessions)
  //  res.setHeader('Access-Control-Allow-Credentials', true);
  userModel.find({},function(err,dulieu){
    res.send(dulieu);
  })
  
});

router.get('/add',function (req,res,next) {
  res.render('add',{})
})

router.post('/add',function (req,res,next) {
  var product_name = req.body.product_name;
  product_price = req.body.product_price;
  image = req.body.image;

  var phantu  = {
    'name_products' : req.body.product_name,
    'products_price':   req.body.product_price,
    'image':req.body.image
  }
  if(phantu === null)
  {
    res.send(null)
  }
  else {
  var dulieu = new userModel(phantu);
  dulieu.save();
  res.send('nhận được dữ liệu rồi ' + product_name + product_price + image);
  }
});

module.exports = router;
