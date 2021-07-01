const mongoose=require('mongoose')
const express=require('express');
const helmet = require('helmet');
const app=express();


require('dotenv').config();
const razorpay=require('./routes/razorpay');
const userroute=require('./routes/users');  
const matchsroute=require('./routes/matchs');

mongoose.connect(process.env.MONGODB,{ useUnifiedTopology: true , useNewUrlParser: true  }).then(()=>console.log('db is connected ')).catch((err)=>console.log(`db is failed ${err}`))

//middleware
app.use(express.json());
app.use(helmet()); 
const cors = require('cors');
app.use(cors()); 
app.use('/api/user',userroute)
app.use('/api/matchs',matchsroute)
app.use('/api/razorpay',razorpay)
app.get('/',(req,res)=>{
    res.send('app is running')
})

const port =process.env.PORT 
app.listen(port,()=>{ 
    console.log(`server running on port number ${process.env.PORT}` )
})