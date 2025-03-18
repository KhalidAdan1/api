
const mongoose = require('mongoose');

module.export = mongoose.model('login' , logindetails)

const logindetails = new mongoose.Schema({
    name:{
    type: String,
   required : true
    },
    time:{
type:Date,
required : false
    }
})