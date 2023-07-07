const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:Number,
    },
    email:{
        type:String,

    },
    address:{
        type:String,
    }
} ,{timestamps:true})

module.exports = mongoose.model('employee',employeeSchema);