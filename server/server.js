const express = require('express');

let app = express();

let db;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fizkhardb', (err, database) =>{
    if(err){
        console.log('Error ccured while connecting to db');
        return;
    }
    db = database;
});

app.get('/notes', (req,res) => {
    res.json({
        notes: 'This is the get command'
    })
});

app.listen(3000);