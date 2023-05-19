const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const RoomSchema = new Schema({
    Trainer:{
        type:String,
        require:true
    },
    Intern:{
        type:String,
        require:true                                                                                    
    },
    Course:{
        type:String,
        require:true,

    }
})
module.exports = mongoose.model('rooms',RoomSchema);