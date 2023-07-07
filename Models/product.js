const mongoose  = require('mongoose')
 const productSchema = mongoose.Schema({
    name:String,
    detail:{
        type:String,
        required:true
    },
     price:{
        type:Number
     }
 },{ timestamps:true });
  module.exports = mongoose.model('product',productSchema);
