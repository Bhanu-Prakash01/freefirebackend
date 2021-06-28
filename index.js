const mongoose=require('mongoose')
const express=require('express');
const helmet = require('helmet');
const app=express();
require('dotenv').config();
// const review=require('./routes/review');
const userroute=require('./routes/users');  
const matchsroute=require('./routes/matchs');

mongoose.connect('mongodb+srv://free:free@cluster0.m1ywv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useUnifiedTopology: true , useNewUrlParser: true  }).then(()=>console.log('db is connected ')).catch((err)=>console.log(`db is failed ${err}`))

//middleware
app.use(express.json());
app.use(helmet());
var cors = require('cors');
app.use(cors());
app.use('/api/user',userroute)
app.use('/api/matchs',matchsroute)
// app.use('/api/review',review)

app.listen(8000,()=>{
    console.log('server running on port number 8000' )
})