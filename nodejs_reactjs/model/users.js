var mongoose = require('mongoose');
var users = new mongoose.Schema({ name_products: 'string', 
products_price:'number', image:'string' },{collection:'users'});
module.exports=mongoose.model('users',users)