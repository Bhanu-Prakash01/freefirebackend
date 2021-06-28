const mongoose=require('mongoose');

const MatchSchema=new mongoose.Schema({
    matchtime:{
        type: String
    },
    matchid:{
        type: Number
    },
    matchtype:{ 
        type:String
    },
    map:{
        type:String, 
        default:'bermuda'
    },
    winprize:{
        type:String,
        default:50
    },
    entryfee:{
        type:String,
        default:10
    },
    perkill:{
        type:String,
        default:5
    }
});
module.exports=mongoose.model("Matchs",MatchSchema);