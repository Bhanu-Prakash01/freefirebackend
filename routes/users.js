const router= require('express').Router();
const User = require('../models/userdb');
const Matchs= require('../models/matchsdb')


router.post('/post', async (req,res)=>{
    // const nameofcourse= await Matchs.findOne({matchid:req.body.matchid})
    // console.log(nameofcourse)
    const user = await new User({
        userid:req.body.userid,
        username:req.body.username,
        phonenumber: req.body.phonenumber,
        matchid: req.body.matchid,
    }); 
    try{
        const userdata= await user.save();
        res.status(201).send(userdata)
    }catch(err){
        console.log(err)
    }
})
router.get('/get', async (req,res)=>{
    const user_data= await User.find();
    res.send(user_data)
})
router.get('/players/:id', async (req,res)=>{
   let noplayers= await User.countDocuments('name')
   console.log(noplayers)
//    res.send(noplayers) 
 
})

module.exports=router;   

