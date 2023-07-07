const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
     name_book:{
        type:String,
    },
     author:{
        type:String,
    },
     genre:{
        type:String,
     },
     year:{
        type:Number
     }
}, {timestamps:true})
module.exports = mongoose.model('book',bookSchema);