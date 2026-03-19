const express = require('express');

//rest object
const app = express();

//middleware

//routes
app.get("/test",(req,res)=>{
    res.status(200).send('<h1>Nodejs Mysql App 1</h1>')
})

//port
const PORT = 8080

//listen
app.listen(PORT, ()=>{
    console.log("Server Running");
})