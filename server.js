const express = require('express');

const app=express();
const body={
    first:4,
    second:5
}
app.get("/caluclator/greeting",(req,res)=>{
    res.status(200).send("Hello world")
})



app.post(" /calculator/add",(req,res)=>{
    

    const result = body.first+body.second;
    

    res.status(200).json({result})
})
app.post(" /calculator/subtract",(req,res)=>{
    

    const result = body.first-body.second;
    

    res.status(200).json({result})
})
app.listen(3000,()=>{
    console.log(`listening at portnumber 3000....`);
})
