
const mongoose = require('mongoose');

module.exports = mongoose.model('login' , logindetails)

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