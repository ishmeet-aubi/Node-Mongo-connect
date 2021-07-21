const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
    },
    age:{
         type: Number,
     },
     gender:{
         type: String,
     }


})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;