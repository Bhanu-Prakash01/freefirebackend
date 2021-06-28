const router= require('express').Router();
const Match =require('../models/matchsdb')

//create course
router.post('/post', async (req,res)=>{
    const  course = await new  Match({
        matchtime:req.body.matchtime,
        matchtype:req.body.matchtype,
        map:req.body.map,
        entryfee: req.body.entryfee,
        perkill: req.body.perkill,
        matchid: req.body.matchid
    });
    try{
        const coursedata= await course.save();
        res.status(201).send(coursedata)
    }catch(err){
        console.log(err)
    }
})

//get matchs
router.get('/get', async (req,res)=>{
    const matchsdata= await Match.find();
    res.send(matchsdata)
})

module.exports=router