const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

//config
dotenv.config();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'))

//routes
app.get("/test",(req,res)=>{
    res.status(200).send('<h1>Nodejs Mysql App 1</h1>')
})

//port
const PORT = process.env.PORT || 8000

//listen
app.listen(PORT, ()=>{
    console.log(`Server Running on http://localhost:${process.env.PORT}`.bgMagenta.white);
})