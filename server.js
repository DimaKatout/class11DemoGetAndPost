'use strict'
require('dotenv').config();
const express =require('express');
const app =express();
const PORT=process.env.PORT||3000;
//to use satic resources inside the public folder
app.use(express.static('./public'));
//convert a post form data into a request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/incoming',(req,res)=>{
    console.log('Get request->' ,req.query);
    //res.status(200).send('ok');
    res.redirect('/welcome.html');
})
//heek bas alreciever beshoof had
app.post('/incoming',(req,res)=>{
    console.log('Get request->' ,req.body);
    //res.status(200).send('ok');
    res.redirect('/welcome.html');
})
app.listen(PORT,()=>{
   console.log(`Listing on PORT ${PORT}`);

})