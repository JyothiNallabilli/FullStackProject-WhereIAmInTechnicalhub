const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const SearchSchema = new Schema({
    StudentId:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true                                                                                    
    },
    Course:{
        type:String,
        require:true,

    },
    RoomNo:{
        type:String,
        require:true,

    }
})
module.exports = mongoose.model('searchs',SearchSchema);