const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    userid:{
        type:Number,
    },
    username:{
        type:String,
    },
    phoneumber:{
        type:Number,
    },
    matchid:{
        type:Number, 
    }
});

module.exports=mongoose.model("USERS",UserSchema);