// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send("<h1>Hello there, Tariz Here!</h1>")
})

app.get('/home',(req, res)=>{
    res.send("<h1>fuck home</h1>")
})

app.get('/about',(req, res)=>{
    res.send("<h1>fuck you</h1>")
})

app.get('/contact',(req, res)=>{
    res.send("<h1>fucking mia</h1>")
})

app.post('/form', (req, res)=>{
    const data = req.body;
    res.send(data.name); 
})

app.listen(5050, console.log("Server Started"));
