const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const LoginSchema = new Schema({
    Name:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('login',LoginSchema);