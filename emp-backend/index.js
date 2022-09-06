var cors=require('cors');
const express = require('express');
const connection=require('./connection');
const userRoute=require('./routes/user');
const categoryRoute=require('./routes/category');
const productRoute=require('./routes/product');
const billRoute=require('./routes/bill');
const dashboardRoute=require('./routes/dashboard');

const app = express();



const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

//app.listen(3000,()=> console.log("Server started"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/bill',billRoute);
app.use('/dashboard',dashboardRoute);

module.exports= app;