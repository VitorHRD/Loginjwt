require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRouter')

mongoose.connect(process.env.MONGO_CONNECTION_URL, (error)=>{
if(error){
    console.log(error);
}
   else{
       console.log('Mongo Connected');
   }
})
app.use('/user',express.json(),userRouter);

app.use('/admin',express.json(),adminRouter);

app.listen(process.env.PORT,()=>{
    console.log('Server Running on Port '+ process.env.PORT);
})